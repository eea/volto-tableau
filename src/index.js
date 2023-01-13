import sliderSVG from '@plone/volto/icons/slider.svg';
import TableauEdit from './TableauBlock/Edit';
import TableauView from './TableauBlock/View';
import EmbedTableauView from './Blocks/EmbedEEATableauBlock/View';
import EmbedTableauEdit from './Blocks/EmbedEEATableauBlock/Edit';
import { VisualizationView } from './Views';
import { VisualizationWidget } from './Widgets';

import tableauStore from './store';

import tableauMiddleware from './middleware';

const applyConfig = (config) => {
  config.addonReducers = {
    ...config.addonReducers,
    tableau: tableauStore,
  };

  config.settings.allowed_cors_destinations = [
    ...(config.settings.allowed_cors_destinations || []),
    'public.tableau.com',
  ];

  config.settings.storeExtenders = [
    ...(config.settings.storeExtenders || []),
    tableauMiddleware,
  ];

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

  config.views.contentTypesViews.tableau_visualization = VisualizationView;
  config.widgets.id.tableau_visualization_data = VisualizationWidget;

  return config;
};

export default applyConfig;
