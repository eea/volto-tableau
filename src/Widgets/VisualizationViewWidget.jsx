import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';
import config from '@plone/volto/registry';

export default function VisualizationViewWidget(props) {
  const { value = {} } = props;
  return (
    <Tableau
      data={{
        ...value,
        with_sources: true,
        with_download: true,
        with_share: true,
      }}
      sources={[]}
      breakpoints={
        config.blocks.blocksConfig.embed_tableau_visualization.breakpoints
      }
    />
  );
}
