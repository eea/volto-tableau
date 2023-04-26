import installBlocks from './Blocks';

import { VisualizationView } from './Views';
import { VisualizationWidget } from './Widgets';
import UrlParamsWidget from './CustomWidgets/UrlParamsWidget';

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

  config.views.contentTypesViews.tableau_visualization = VisualizationView;
  config.widgets.id.tableau_visualization_data = VisualizationWidget;
  config.widgets.widget.url_params_widget = UrlParamsWidget;

  return [installBlocks].reduce((acc, apply) => apply(acc), config);
};

export default applyConfig;
