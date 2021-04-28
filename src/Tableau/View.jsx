import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { toast } from 'react-toastify';
import { Toast } from '@plone/volto/components';
import { getLatestTableauVersion } from './tableau-api';
import loadTableauApi from './tableau-api';
import { setTableauApi } from '@eeacms/volto-tableau/actions';
import cx from 'classnames';

const Tableau = (props) => {
  const ref = React.useRef(null);
  const mounted = React.useRef(false);
  const [loaded, setLoaded] = React.useState(false);
  const [viz, setViz] = React.useState(null);
  const {
    canUpdateUrl = true,
    data = {},
    mode = 'view',
    extraOptions = {},
    extraFilters = {},
    version = getLatestTableauVersion(),
  } = props;
  const {
    hideTabs = false,
    hideToolbar = false,
    sheetname = '',
    toolbarPosition = 'Top',
    filters = {},
  } = data;
  const defaultUrl = data.url;
  const url = props.url || defaultUrl;
  const tableau = props.tableau[version];

  const onFilterChange = (filter) => {
    const newFilters = { ...filters };
    const fieldName = filter.getFieldName();
    const allSelected = filter.getIsAllSelected();
    const values = filter
      .getAppliedValues()
      .map((appliedValue) => appliedValue.value);
    if (allSelected) {
      delete newFilters[fieldName];
    } else {
      newFilters[fieldName] = values;
    }
    if (JSON.stringify(newFilters) !== JSON.stringify(filters)) {
      props.onChangeBlock(props.block, {
        ...data,
        filters: {
          ...newFilters,
        },
      });
    }
  };

  const initViz = () => {
    if (viz) {
      viz.dispose();
      setLoaded(false);
    }
    const newViz = new tableau.Viz(ref.current, url || defaultUrl, {
      hideTabs,
      hideToolbar,
      sheetname,
      toolbarPosition,
      ...filters,
      ...extraFilters,
      ...extraOptions,
      onFirstInteractive: () => {
        setLoaded(true);
        if (newViz && mode === 'edit') {
          const workbook = newViz.getWorkbook();
          const newData = {
            url: canUpdateUrl ? newViz.getUrl() : defaultUrl,
            sheetname: workbook.getActiveSheet().getName(),
          };
          if (newData.url !== url || newData.sheetname !== sheetname) {
            props.onChangeBlock(props.block, {
              ...data,
              ...newData,
            });
            toast.success(<Toast success title={'Tableau data updated'} />);
          }
          // Filter change event
          newViz.addEventListener(
            tableau.TableauEventName.FILTER_CHANGE,
            (event) => {
              event.getFilterAsync().then((filter) => {
                onFilterChange(filter);
              });
            },
          );
        }
      },
    });

    return setViz(newViz);
  };

  const addExtraFilters = (extraFilters) => {
    const worksheets = viz.getWorkbook().getActiveSheet().getWorksheets() || [];

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

  React.useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    }
    return () => {
      mounted.current = false;
    };
  }, []);

  React.useEffect(() => {
    // Load new tableau api
    if (__CLIENT__ && !props.tableau[version]) {
      loadTableauApi(version, !!Object.keys(props.tableau).length)
        .then((response) => {
          props.setTableauApi(version, response);
        })
        .catch((errors) => {});
    }
    /* eslint-disable-next-line */
  }, [version]);

  React.useEffect(() => {
    if (__CLIENT__ && tableau && url) {
      initViz();
    } else if (viz) {
      viz.dispose();
      setLoaded(false);
    }
    /* eslint-disable-next-line */
  }, [hideTabs, hideToolbar, sheetname, tableau, toolbarPosition, url]);

  React.useEffect(() => {
    if (mounted.current && loaded && viz) {
      addExtraFilters(extraFilters);
    }
    /* eslint-disable-next-line */
  }, [JSON.stringify(extraFilters)]);

  // React.useEffect(() => {
  //   if (mounted.current && loaded && viz) {
  //     addExtraFilters(extraOptions);
  //   }
  //   /* eslint-disable-next-line */
  // }, [JSON.stringify(extraOptions)]);

  return <div className={cx('tableau', version)} ref={ref} />;
};

export default compose(
  connect(
    (state, props) => ({
      tableau: state.tableau,
    }),
    { setTableauApi },
  ),
)(Tableau);
