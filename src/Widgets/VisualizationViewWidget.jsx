import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';
import config from '@plone/volto/registry';

export default function VisualizationViewWidget(props) {
  const { value = {} } = props;

  return (
    <Tableau
      data={{
        ...value,
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
