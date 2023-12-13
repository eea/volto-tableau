import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import config from '@plone/volto/registry';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';
import {
  getQuery,
  getTableauVisualization,
  getParameters,
  getFilters,
} from '@eeacms/volto-tableau/Tableau/helpers';

function VisualizationViewWidget(props) {
  const { location, content } = props;

  const [tableauVisualization] = useState(() =>
    getTableauVisualization({
      isBlock: false,
      content,
    }),
  );
  const [query] = useState(() => {
    return getQuery({ location });
  });

  const [extraParameters] = useState(() =>
    getParameters({ tableauVisualization, query }),
  );

  const [extraFilters] = useState(() =>
    getFilters({ tableauVisualization, query }),
  );

  return (
    <Tableau
      data={{
        ...tableauVisualization,
        with_notes: false,
        with_sources: false,
        with_more_info: false,
        with_share: true,
        with_enlarge: true,
        with_download: true,
      }}
      breakpoints={
        config.blocks.blocksConfig?.embed_tableau_visualization?.breakpoints
      }
      extraParameters={extraParameters}
      extraFilters={extraFilters}
    />
  );
}

export default compose(
  withRouter,
  connect((state) => ({ content: state?.content?.data })),
)(VisualizationViewWidget);
