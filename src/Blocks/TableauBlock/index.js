import TableauEdit from './Edit';
import TableauView from './View';

import sliderSVG from '@plone/volto/icons/slider.svg';

export default (config) => {
  config.blocks.blocksConfig.tableau_block = {
    id: 'tableau_block',
    title: 'Tableau',
    icon: sliderSVG,
    group: 'data_visualizations',
    edit: TableauEdit,
    view: TableauView,
    restricted: true,
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
