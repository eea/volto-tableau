import React from 'react';
import { hasBlocksData } from '@plone/volto/helpers';
import { Container } from 'semantic-ui-react';
import config from '@plone/volto/registry';
import RenderBlocks from '@plone/volto/components/theme/View/RenderBlocks';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';

const VisualizationView = (props) => {
  const { content = {} } = props;
  const { tableau_visualization = {} } = content;

  return (
    <Container id="page-document">
      {hasBlocksData(content) ? (
        <RenderBlocks {...props} />
      ) : (
        <Tableau
          data={{
            ...tableau_visualization,
            with_note: false,
            with_sources: false,
            with_more_info: false,
            with_share: false,
            with_download: true,
          }}
          breakpoints={
            config.blocks.blocksConfig.embed_tableau_visualization.breakpoints
          }
        />
      )}
    </Container>
  );
};

export default VisualizationView;
