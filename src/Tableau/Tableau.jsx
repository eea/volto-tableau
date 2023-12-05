import React, {
  useEffect,
  useImperativeHandle,
  useState,
  useRef,
  useMemo,
  useCallback,
  forwardRef,
} from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { isEqual, isUndefined, isNaN, isNumber } from 'lodash';
import cx from 'classnames';
import { Button } from 'semantic-ui-react';
import { Toast, Icon } from '@plone/volto/components';
import {
  FigureNote,
  Sources,
  MoreInfo,
  Share,
  Enlarge,
} from '@eeacms/volto-embed/Toolbar';
import { useTableau } from '@eeacms/volto-tableau/hooks';
import { JsonCodeSnippet, Download } from '@eeacms/volto-tableau/Utils';

import { getSheetnames, getActiveSheetname, getDevice } from './helpers';

import resetSVG from '@plone/volto/icons/reset.svg';

import '@eeacms/volto-embed/Toolbar/styles.less';

function getHeight(height) {
  const asNumber = isNumber(Number(height)) && !isNaN(Number(height));
  if (asNumber) {
    return `${height}px`;
  }
  return height || '700px';
}

const TableauDebug = ({ mode, data, vizState, url, version, clearData }) => {
  const { loaded, error } = vizState;
  const { filters = {}, parameters = {} } = data;

  const showTableauInfo = mode === 'edit' && (!url || (loaded && url) || error);

  if (!showTableauInfo) return null;

  return (
    <div className="tableau-debug">
      {!url && !vizState.error && <p className="tableau-error">URL required</p>}
      {vizState.error && <p className="tableau-error">{vizState.error}</p>}
      {vizState.loaded && url && (
        <h3 className="tableau-version">
          Tableau <span className="version">{version}</span>
        </h3>
      )}

      {vizState.loaded && url && (
        <>
          <p>
            Apply filters / parameters inside of tableau to set default static
            filters / parameters.
          </p>
          <p className="important-note">
            Click{' '}
            <button className="clear-filter-button" onClick={clearData}>
              here
            </button>{' '}
            to reset applied filters / parameters.
          </p>
          <code className="json-snippet">
            <JsonCodeSnippet obj={{ filters, parameters }} />
          </code>
        </>
      )}
    </div>
  );
};

const Tableau = forwardRef((props, ref) => {
  const tableauEl = useRef(null);
  const vizEl = useRef(null);
  const viz = useRef();
  const vizState = useRef({});
  const dataRef = useRef(props.data || {});
  const [initiateViz, setInitiateViz] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mobile, setMobile] = useState(false);
  const {
    block,
    data = {},
    breakpoints = {},
    extraFilters = {},
    extraOptions = {},
    mode = 'view',
    screen = {},
    version = '2.8.0',
    setVizState,
    onChangeBlock,
  } = props;
  const {
    data_provenance = {},
    figure_note = [],
    autoScale = false,
    hideTabs = false,
    hideToolbar = false,
    sheetname = '',
    toolbarPosition = 'Top',
    breakpointUrls = [],
    with_notes = true,
    with_sources = true,
    with_more_info = true,
    with_download = true,
    with_share = true,
    with_enlarge = true,
    tableau_height,
  } = data;
  const device = useMemo(
    () => getDevice(breakpoints, screen.page?.width || Infinity),
    [breakpoints, screen],
  );

  const breakpointUrl = useMemo(
    () =>
      breakpointUrls.filter((breakpoint) => breakpoint.device === device)[0]
        ?.url,
    [breakpointUrls, device],
  );

  const url = breakpointUrl || data.url;

  // Load tableau from script tag
  const tableau = useTableau(version);

  const onFilterChange = (filter) => {
    let value;
    const filters = dataRef.current.filters;
    const newFilters = { ...filters };
    const fieldName = filter.getFieldName();
    const filterType = filter.getFilterType();
    switch (filterType) {
      // https://community.tableau.com/s/idea/0874T000000HA8hQAG/detail
      // Only categorical filters are allowed
      case tableau.FilterType.CATEGORICAL:
        const isAllSelected = filter.getIsAllSelected();
        if (!isAllSelected) {
          value = filter
            .getAppliedValues()
            .map((appliedValue) => appliedValue.value);
        }
        break;
      case tableau.FilterType.QUANTITATIVE:
        break;
      case tableau.FilterType.HIERARCHICAL:
        break;
      case tableau.FilterType.RELATIVE_DATE:
        break;
      default:
        break;
    }
    if (isUndefined(value) && !isUndefined(newFilters[fieldName])) {
      delete newFilters[fieldName];
    } else if (!isUndefined(value)) {
      newFilters[fieldName] = value;
    }
    if (!isEqual(newFilters, filters)) {
      onChangeBlock(block, {
        ...dataRef.current,
        filters: {
          ...newFilters,
        },
      });
    }
  };

  const onParameterChange = (parameter) => {
    const parameters = dataRef.current.parameters;
    const newParameters = { ...parameters };
    const fieldName = parameter.getName();
    const value = parameter.getCurrentValue()?.value;
    if (isUndefined(value) && !isUndefined(newParameters[fieldName])) {
      delete newParameters[fieldName];
    } else {
      newParameters[fieldName] = [value];
    }
    if (!isEqual(newParameters, parameters)) {
      onChangeBlock(block, {
        ...dataRef.current,
        parameters: {
          ...newParameters,
        },
      });
    }
  };

  const onVizStateUpdate = useCallback((loaded, loading, error) => {
    vizState.current = { ...vizState.current, loaded, loading, error };
    setLoaded(loaded);
    setLoading(loading);
    setError(error);
    if (setVizState) {
      setVizState({ loaded, loading, error });
    }
    /* eslint-disable-next-line */
  }, []);

  const activateDefaultSheet = useCallback(() => {
    if (!vizState.current.loaded || !viz.current) return;
    const workbook = viz.current.getWorkbook();
    const sheetnames = getSheetnames(viz.current);
    const activeSheetName = getActiveSheetname(viz.current);
    if (sheetnames.includes(sheetname) && sheetname !== activeSheetName) {
      workbook.activateSheetAsync(sheetname).then(() => {
        onVizStateUpdate(true, false, null);
      });
    } else {
      onVizStateUpdate(true, false, null);
    }
  }, [onVizStateUpdate, sheetname]);

  const clearData = () => {
    onChangeBlock(block, {
      ...data,
      filters: {},
      parameters: {},
    });
  };

  const disposeViz = () => {
    if (viz.current) {
      viz.current.dispose();
      viz.current = null;
    }
    onVizStateUpdate(false, false, null);
  };

  const initViz = () => {
    try {
      onVizStateUpdate(false, true, vizState.current.error);
      viz.current = new tableau.Viz(vizEl.current, url, {
        hideTabs,
        hideToolbar,
        toolbarPosition,
        device: !!breakpointUrl ? device : 'desktop',
        ...data.filters,
        ...data.parameters,
        ...extraFilters,
        ...extraOptions,
        onFirstInteractive: () => {
          onVizStateUpdate(true, true, null);
          setInitiateViz(false);
          activateDefaultSheet();
          if (viz.current && mode === 'edit' && !breakpointUrl) {
            const sheetnames = getSheetnames(viz.current);
            const activeSheetname = getActiveSheetname(viz.current);
            const vizUrl = viz.current.getUrl();
            const newData = {
              ...data,
            };
            newData.url = vizUrl;
            if (!sheetname || !sheetnames.includes(sheetname)) {
              newData.sheetname = activeSheetname;
            }
            if (newData.url !== url || newData.sheetname !== sheetname) {
              onChangeBlock(block, {
                ...data,
                ...newData,
              });
              toast.success(
                <Toast success title={'Tableau data updated'} content={null} />,
              );
            }
          }
          if (viz.current && mode === 'edit') {
            // Filter change event
            viz.current.addEventListener(
              tableau.TableauEventName.FILTER_CHANGE,
              (event) => {
                event.getFilterAsync().then((filter) => {
                  onFilterChange(filter);
                });
              },
            );
            // Parameter change event
            viz.current.addEventListener(
              tableau.TableauEventName.PARAMETER_VALUE_CHANGE,
              (event) => {
                event.getParameterAsync().then((parameter) => {
                  onParameterChange(parameter);
                });
              },
            );
          }
        },
      });
    } catch (e) {
      onVizStateUpdate(false, false, e.get_message());
      setInitiateViz(false);
    }
  };

  const addExtraFilters = (extraFilters) => {
    const worksheets =
      viz.current.getWorkbook().getActiveSheet().getWorksheets() || [];

    worksheets.forEach((worksheet) => {
      if (worksheet.getSheetType() === tableau.DashboardObjectType.WORKSHEET) {
        Object.keys(extraFilters).forEach((filter) => {
          if (!extraFilters[filter]) {
            worksheet.clearFilterAsync(filter);
          } else {
            worksheet.applyFilterAsync(
              filter,
              extraFilters[filter],
              tableau.FilterUpdateType.REPLACE,
            );
          }
        });
      }
    });
  };

  const updateScale = () => {
    const iframe = vizEl.current.querySelector('iframe');
    const { sheetSize = {} } = viz.current.getVizSize() || {};
    const vizWidth = sheetSize?.minSize?.width || 1;
    const scale = Math.min(vizEl.current.clientWidth / vizWidth, 1);
    iframe.style.transform = `scale(${scale})`;
    window.requestAnimationFrame(() => {
      if (vizEl.current) {
        vizEl.current.style.height = `${scale * iframe.clientHeight}px`;
      }
    });
  };

  // Update refs
  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  useEffect(() => {
    if (!tableau) return;
    if (url) {
      disposeViz();
      setInitiateViz(true);
    } else {
      disposeViz();
    }
    /* eslint-disable-next-line */
  }, [tableau, url, hideTabs, hideToolbar, toolbarPosition]);

  useEffect(() => {
    if (initiateViz && !loaded && !loading) {
      initViz();
    }
    /* eslint-disable-next-line */
  }, [loaded, loading, initiateViz]);

  useEffect(() => {
    if (vizState.current.loaded && viz.current) {
      addExtraFilters(extraFilters);
    }
    /* eslint-disable-next-line */
  }, [JSON.stringify(extraFilters)]);

  useEffect(() => {
    if (vizState.current.loaded && viz.current && autoScale) {
      updateScale();
    }
    /* eslint-disable-next-line */
  }, [loaded, screen?.page?.width]);

  useEffect(() => {
    if (vizState.current.loaded && viz.current) {
      onVizStateUpdate(true, true, null);
      activateDefaultSheet();
    }
    /* eslint-disable-next-line */
  }, [sheetname]);

  useEffect(() => {
    if (!loading && tableauEl.current) {
      const visWidth = tableauEl.current.offsetWidth;

      if (visWidth < 600 && !mobile) {
        setMobile(true);
      } else if (visWidth >= 600 && mobile) {
        setMobile(false);
      }
    }
  }, [screen, mobile, loading]);

  useImperativeHandle(
    ref,
    () => {
      if (loaded) {
        return viz.current;
      }
      if (loading) {
        return null;
      }
      return;
    },
    [loaded, loading],
  );

  return (
    <div className="tableau-wrapper" ref={tableauEl}>
      {loading && (
        <div className="tableau-loader">
          <span>Loading...</span>
        </div>
      )}
      {!loading && mode === 'edit' && (
        <Button
          className="reload-tableau"
          icon
          secondary
          compact
          onClick={() => {
            if (tableau && url) {
              disposeViz();
              setInitiateViz(true);
            }
          }}
        >
          <Icon name={resetSVG} size="24px" />
        </Button>
      )}
      <TableauDebug
        mode={props.mode}
        data={data}
        vizState={{ loaded, loading, error }}
        url={url}
        version={version}
        clearData={clearData}
      />
      <div
        style={{ height: getHeight(tableau_height) }}
        className={cx('tableau', `tableau-${version}`, {
          'tableau-autoscale': autoScale,
        })}
        ref={vizEl}
      />
      {loaded && (
        <div className={cx('visualization-toolbar', { mobile })}>
          <div className="left-col">
            {with_notes && <FigureNote notes={figure_note || []} />}
            {with_sources && <Sources sources={data_provenance?.data || []} />}
            {with_more_info && <MoreInfo href={data['@id']} />}
          </div>
          <div className="right-col">
            {with_download && loaded && <Download viz={viz.current} />}
            {with_share && loaded && <Share href={data['@id']} />}
            {with_enlarge && loaded && (
              <Enlarge>
                <Tableau
                  {...props}
                  data={{
                    ...props.data,
                    with_notes: false,
                    with_sources: false,
                    with_more_info: false,
                    with_enlarge: false,
                    with_share: false,
                    with_download: false,
                  }}
                />
              </Enlarge>
            )}
          </div>
        </div>
      )}
    </div>
  );
});

export default connect(
  (state) => ({
    screen: state.screen,
  }),
  null,
  null,
  { forwardRef: true },
)(Tableau);
