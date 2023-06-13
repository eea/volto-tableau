import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';
import config from '@plone/volto/registry';
import qs from 'querystring';
import '@eeacms/volto-tableau/less/tableau.less';

const getDevice = (config, width) => {
  const breakpoints = config.blocks.blocksConfig.tableau_block.breakpoints;
  let device = 'default';
  Object.keys(breakpoints).forEach((breakpoint) => {
    if (
      width <= breakpoints[breakpoint][0] &&
      width >= breakpoints[breakpoint][1]
    ) {
      device = breakpoint;
    }
  });
  return device;
};

const View = (props) => {
  const [vizState, setVizState] = React.useState({
    loaded: false,
    loading: false,
    error: null,
  });
  const [extraFilters, setExtraFilters] = React.useState({});
  const { data = {}, query = {}, screen = {} } = props;
  const {
    breakpointUrls = [],
    urlParameters = [],
    title = null,
    description = null,
    autoScale = false,
    with_sources = true,
    with_download = true,
    with_share = true,
    sources,
  } = data;
  const device = getDevice(config, screen.page?.width || Infinity);
  const breakpointUrl = breakpointUrls.filter(
    (breakpoint) => breakpoint.device === device,
  )[0]?.url;
  const url = breakpointUrl || data.url;

  React.useEffect(() => {
    const newExtraFilters = { ...extraFilters };
    urlParameters.forEach((element) => {
      if (element.field && typeof query[element.urlParam] !== 'undefined') {
        newExtraFilters[element.field] = query[element.urlParam];
      } else if (newExtraFilters[element.field]) {
        delete newExtraFilters[element.field];
      }
    });
    setExtraFilters(newExtraFilters);
    /* eslint-disable-next-line */
  }, [JSON.stringify(query), JSON.stringify(urlParameters)]);

  return (
    <div className="tableau-block">
      {vizState.loaded && title ? (
        <h3 className="tableau-title">{title}</h3>
      ) : (
        ''
      )}
      {vizState.loaded && description ? (
        <p className="tableau-description">{description}</p>
      ) : (
        ''
      )}
      <Tableau
        {...props}
        canUpdateUrl={!breakpointUrl}
        extraFilters={extraFilters}
        extraOptions={{ device: autoScale ? 'desktop' : device }}
        url={url}
        with_sources={with_sources}
        with_download={with_download}
        with_share={with_share}
        sources={sources}
        setVizState={setVizState}
      />
    </div>
  );
};

export default compose(
  connect((state, props) => ({
    query: {
      ...(qs.parse(state.router.location?.search?.replace('?', '')) || {}),
      ...(state.discodata_query?.search || {}),
    },
    screen: state.screen,
  })),
)(withRouter(View));
