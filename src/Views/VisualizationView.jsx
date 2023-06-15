import React from 'react';
import { Container } from 'semantic-ui-react';
import config from '@plone/volto/registry';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';

const VisualizationView = (props) => {
  const { content = {} } = props;
  const { tableau_visualization = {}, data_provenance = {} } = content;

  return (
    <Container id="page-document">
      <Tableau
        data={{
          ...tableau_visualization,
          with_sources: true,
          with_download: true,
          with_share: true,
        }}
        sources={data_provenance.data || []}
        breakpoints={
          config.blocks.blocksConfig.embed_tableau_visualization.breakpoints
        }
      />
    </Container>
  );
};

export default VisualizationView;
