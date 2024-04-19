import { uniqBy } from 'lodash';
import installEmbedTableauVisualization from './EmbedTableauVisualization';
import installTableauBlock from './TableauBlock';

const config = (config) => {
  config.blocks.groupBlocksOrder = uniqBy(
    [
      ...config.blocks.groupBlocksOrder,
      { id: 'data_visualizations', title: 'Data Visualizations' },
    ],
    'id',
  );

  return [installEmbedTableauVisualization, installTableauBlock].reduce(
    (acc, apply) => apply(acc),
    config,
  );
};

export default config;
