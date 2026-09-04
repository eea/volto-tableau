import EmbedTableauVisualizatonEdit from './Edit';
import EmbedTableauVisualizatonView from './View';

import sliderSVG from '@plone/volto/icons/slider.svg';

const config = (config) => {
  config.blocks.blocksConfig.embed_tableau_visualization = {
    id: 'embed_tableau_visualization',
    title: 'Embed Dashboard (Tableau)',
    icon: sliderSVG,
    group: 'data_visualizations',
    edit: EmbedTableauVisualizatonEdit,
    view: EmbedTableauVisualizatonView,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    blocks: {},
    security: {
      addPermission: [],
      view: [],
    },
    breakpoints: {
      desktop: [Infinity, 992],
      tablet: [991, 768],
      phone: [767, 0],
    },
  };

  return config;
};

export default config;
