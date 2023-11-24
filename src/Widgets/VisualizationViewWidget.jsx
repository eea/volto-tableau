import { connect } from 'react-redux';
import config from '@plone/volto/registry';
import { pickMetadata } from '@eeacms/volto-embed/helpers';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';

function VisualizationViewWidget(props) {
  return (
    <Tableau
      data={{
        ...(props.value || {}),
        ...pickMetadata(props.content),
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
    />
  );
}

export default connect((state) => ({ content: state.content.data }))(
  VisualizationViewWidget,
);
