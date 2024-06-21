import React, { useState } from 'react';
import cx from 'classnames';
import { withRouter } from 'react-router';
import { Container } from 'semantic-ui-react';
import { hasBlocksData } from '@plone/volto/helpers';
import config from '@plone/volto/registry';
import RenderBlocks from '@plone/volto/components/theme/View/RenderBlocks';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';
import {
  getQuery,
  getTableauVisualization,
  getParameters,
  getFilters,
} from '@eeacms/volto-tableau/Tableau/helpers';

const VisualizationView = (props) => {
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
    <Container id="page-document">
      {hasBlocksData(content) ? (
        <RenderBlocks {...props} />
      ) : (
        <div className={cx({ 'full-width': tableauVisualization.fullwidth })}>
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
              config.blocks.blocksConfig.embed_tableau_visualization.breakpoints
            }
            extraParameters={extraParameters}
            extraFilters={extraFilters}
          />
        </div>
      )}
    </Container>
  );
};

export default withRouter(VisualizationView);
