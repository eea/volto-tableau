import EmbedTableauVisualizatonEdit from './Edit';
import EmbedTableauVisualizatonView from './View';

import sliderSVG from '@plone/volto/icons/slider.svg';

export default (config) => {
  config.blocks.blocksConfig.embed_tableau_visualization = {
    id: 'embed_tableau_visualization',
    title: 'Embed EEA Tableau visualization',
    icon: sliderSVG,
    group: 'common',
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
      desktop: [Infinity, 982],
      tablet: [981, 768],
      mobile: [767, 0],
    },
  };

  return config;
};