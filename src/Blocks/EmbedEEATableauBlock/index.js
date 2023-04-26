import EmbedTableauEdit from './Edit';
import EmbedTableauView from './View';

import sliderSVG from '@plone/volto/icons/slider.svg';

export default (config) => {
  config.blocks.blocksConfig.embed_eea_tableau_block = {
    id: 'embed_eea_tableau_block',
    title: 'Embed EEA Tableau',
    icon: sliderSVG,
    group: 'common',
    edit: EmbedTableauEdit,
    view: EmbedTableauView,
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
