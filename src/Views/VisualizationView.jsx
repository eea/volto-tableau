import React from 'react';
import { hasBlocksData } from '@plone/volto/helpers';
import { Container } from 'semantic-ui-react';
import config from '@plone/volto/registry';
import RenderBlocks from '@plone/volto/components/theme/View/RenderBlocks';
import { pickMetadata } from '@eeacms/volto-embed/helpers';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';

const VisualizationView = (props) => {
  const { content = {} } = props;
  const { tableau_visualization = {} } = content;
  const { staticParameters = [] } = tableau_visualization;

  const extraOptions = React.useMemo(() => {
    const options = {};
    staticParameters.forEach((parameter) => {
      if (parameter.field && parameter.value) {
        options[parameter.field] = parameter.value;
      }
    });
    return options;
  }, [staticParameters]);

  return (
    <Container id="page-document">
      {hasBlocksData(content) ? (
        <RenderBlocks {...props} />
      ) : (
        <Tableau
          data={{
            ...tableau_visualization,
            ...pickMetadata(content),
            with_notes: false,
            with_sources: false,
            with_more_info: false,
            with_share: true,
            with_enlarge: true,
            with_download: true,
          }}
          extraOptions={extraOptions}
          breakpoints={
            config.blocks.blocksConfig.embed_tableau_visualization.breakpoints
          }
        />
      )}
    </Container>
  );
};

export default VisualizationView;
