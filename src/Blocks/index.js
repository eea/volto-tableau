import installEmbedTableauVisualization from './EmbedTableauVisualization';
import installTableauBlock from './TableauBlock';

export default (config) => {
  return [installEmbedTableauVisualization, installTableauBlock].reduce(
    (acc, apply) => apply(acc),
    config,
  );
};
