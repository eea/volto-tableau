import sliderSVG from '@plone/volto/icons/slider.svg';
import TableauEdit from './TableauBlock/Edit';
import TableauView from './TableauBlock/View';

import tableauStore from './store';

import tableauMiddleware from './middleware';

const applyConfig = (config) => {
  config.addonReducers = {
    ...config.addonReducers,
    tableau: tableauStore,
  };

  config.settings.storeExtenders = [tableauMiddleware];

  config.blocks.blocksConfig.tableau_block = {
    id: 'tableau_block',
    title: 'Tableau',
    icon: sliderSVG,
    group: 'common',
    edit: TableauEdit,
    view: TableauView,
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

export default applyConfig;
