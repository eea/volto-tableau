import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import isEqual from 'lodash/isEqual';
import { Toast } from '@plone/volto/components';
import cx from 'classnames';
import { useTableau } from '@eeacms/volto-tableau/hooks';
import Sources from '@eeacms/volto-tableau/Utils/Sources/Sources';
import Download from '@eeacms/volto-tableau/Utils/Download/Download';
import Share from '@eeacms/volto-tableau/Utils/Share/Share';

const TableauDebug = ({ mode, vizState, url, version, sheetSize }) => {
  const { loaded, error } = vizState;

  const showTableauInfo = mode === 'edit' && (!url || (loaded && url) || error);

  return showTableauInfo ? (
    <div
      className="tableau-debug"
      style={{ ...(sheetSize.width ? { width: sheetSize.width } : {}) }}
    >
      {!url ? <p className="tableau-error">URL required</p> : ''}
      {vizState.loaded && url ? (
        <h3 className="tableau-version">
          Tableau <span className="version">{version}</span>
        </h3>
      ) : null}
      {vizState.error ? <p className="tableau-error">{vizState.error}</p> : ''}
    </div>
  ) : null;
};

const Tableau = (props) => {
  const filters = useRef(props.data.filters || {});
  const vizEl = useRef(null);
  const viz = useRef();
  const vizState = useRef({});
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sheetSize, setSheetSize] = useState({});
  const {
    canUpdateUrl = true,
    data = {},
    extraFilters = {},
    extraOptions = {},
    mode = 'view',
    screen = {},
    version = '2.9.1',
    with_sources,
    with_download,
    with_share,
    sources,
    // noSizeUpdate = false,
  } = props;
  const {
    autoScale = false,
    hideTabs = false,
    hideToolbar = false,
    sheetname = '',
    toolbarPosition = 'Top',
  } = data;
  const defaultUrl = data.url;
  const url = props.url || defaultUrl;

  // Load tableau from script tag
  const tableau = useTableau(version);

  const onFilterChange = (filter) => {
    const newFilters = { ...filters.current };
    const fieldName = filter.getFieldName();
    const values = filter
      .getAppliedValues()
      .map((appliedValue) => appliedValue.value);
    newFilters[fieldName] = values;
    if (!isEqual(newFilters, filters)) {
      props.onChangeBlock(props.block, {
        ...data,
        filters: {
          ...newFilters,
        },
      });
      filters.current = { ...newFilters };
    }
  };

  const onVizStateUpdate = (loaded, loading, error) => {
    vizState.current = { ...vizState.current, loaded, loading, error };
    setLoaded(loaded);
    setLoading(loading);
    setError(error);
    if (props.setVizState) {
      props.setVizState({ loaded, loading, error });
    }
  };

  const disposeViz = () => {
    if (viz.current) {
      viz.current.dispose();
      viz.current = null;
    }
    onVizStateUpdate(false, false, null);
  };

  const initViz = () => {
    disposeViz();
    try {
      onVizStateUpdate(false, true, vizState.current.error);
      setSheetSize({});
      viz.current = new tableau.Viz(vizEl.current, url || defaultUrl, {
        hideTabs,
        hideToolbar,
        sheetname,
        toolbarPosition,
        ...data.filters,
        ...extraFilters,
        ...extraOptions,
        onFirstInteractive: () => {
          onVizStateUpdate(true, false, null);
          if (viz.current && mode === 'edit') {
            const workbook = viz.current.getWorkbook();
            const newData = {
              url: canUpdateUrl ? viz.current.getUrl() : defaultUrl,
              sheetname: workbook.getActiveSheet().getName(),
            };
            if (newData.url !== url || newData.sheetname !== sheetname) {
              props.onChangeBlock(props.block, {
                ...data,
                ...newData,
              });
              toast.success(
                <Toast success title={'Tableau data updated'} content={null} />,
              );
            }
            // Filter change event
            viz.current.addEventListener(
              tableau.TableauEventName.FILTER_CHANGE,
              (event) => {
                event.getFilterAsync().then((filter) => {
                  onFilterChange(filter);
                });
              },
            );
          }
        },
        // onFirstVizSizeKnown: (e) => {
        //   if (!noSizeUpdate) {
        //     setSheetSize(e.$2.sheetSize.maxSize);
        //   }
        // },
      });
    } catch (e) {
      onVizStateUpdate(false, false, e._message);
      setSheetSize({});
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
    const tableauEl = vizEl.current;
    const tableau = tableauEl.querySelector('iframe');
    const { sheetSize = {} } = viz.current.getVizSize() || {};
    const vizWidth = sheetSize?.minSize?.width || 1;
    const vizHeight = sheetSize?.minSize?.height || 0;
    const scale = Math.min(tableauEl.clientWidth / vizWidth, 1);
    tableau.style.transform = `scale(${scale})`;
    tableau.style.width = `${100 / scale}%`;
    tableauEl.style.height = `${scale * vizHeight}px`;
  };

  React.useEffect(() => {
    if (tableau && url) {
      initViz();
    } else {
      disposeViz();
    }

    return () => {
      disposeViz();
    };
    /* eslint-disable-next-line */
  }, [
    hideTabs,
    hideToolbar,
    autoScale,
    sheetname,
    tableau,
    toolbarPosition,
    url,
  ]);

  React.useEffect(() => {
    if (vizState.current.loaded && viz.current) {
      addExtraFilters(extraFilters);
    }
    /* eslint-disable-next-line */
  }, [JSON.stringify(extraFilters)]);

  React.useEffect(() => {
    if (vizState.current.loaded && viz.current && autoScale) {
      updateScale();
    }
    /* eslint-disable-next-line */
  }, [loaded, screen?.page?.width]);

  return (
    <div className="tableau-wrapper">
      {loading && (
        <div
          className="tableau-loader"
          style={{ ...(sheetSize.width ? { width: sheetSize.width } : {}) }}
        >
          <span>Loading...</span>
        </div>
      )}
      <TableauDebug
        mode={props.mode}
        vizState={{ loaded, loading, error }}
        url={url}
        version={version}
        sheetSize={sheetSize}
      />
      <div
        className={cx('tableau', `tableau-${version}`, {
          'tableau-scale': autoScale,
        })}
        ref={vizEl}
      />
      <div
        className="tableau-info"
        style={{ ...(sheetSize.width ? { width: sheetSize.width } : {}) }}
      >
        {with_sources && loaded && <Sources sources={sources} />}
        {with_download && loaded && <Download viz={viz.current} />}
        {with_share && loaded && <Share viz={viz.current} />}
      </div>
    </div>
  );
};

export default connect((state) => ({
  screen: state.screen,
}))(Tableau);
