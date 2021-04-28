import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import Tableau from '@eeacms/volto-tableau/Tableau/View';
import config from '@plone/volto/registry';
import { getLatestTableauVersion } from '@eeacms/volto-tableau/Tableau/tableau-api';
import qs from 'querystring';
import './styles.less';

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
  const [extraFilters, setExtraFilters] = React.useState({});
  const { data = {}, query = {}, screen = {} } = props;
  const {
    breakpointUrls = [],
    urlParameters = [],
    title = null,
    description = null,
  } = data;
  const version =
    props.data.version ||
    config.settings.tableauVersion ||
    getLatestTableauVersion();
  const device = getDevice(config, screen.screenWidth || Infinity);
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
  }, [JSON.stringify(query), JSON.stringify(urlParameters)])

  return (
    <div className="tableau-block">
      {props.mode === 'edit' ? (
        <>
          <h3>Tableau {version}</h3>
          {!props.data.url ? <p>URL required</p> : ''}
        </>
      ) : (
        ''
      )}
      {title ? <h3>{title}</h3> : ''}
      {description ? <p>{description}</p> : ''}
      <Tableau
        {...props}
        url={url}
        canUpdateUrl={!breakpointUrl}
        version={version}
        extraFilters={extraFilters}
        extraOptions={{ device }}
      />
    </div>
  );
};

export default compose(
  connect((state, props) => ({
    query: {
      ...(qs.parse(state.router.location.search.replace('?', '')) || {}),
      ...(state.discodata_query.search || {}),
    },
    screen: state.screen,
  })),
)(withRouter(View));
