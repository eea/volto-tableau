import installBlocks from './Blocks';
import { VisualizationView } from './Views';
import { VisualizationWidget } from './Widgets';

const applyConfig = (config) => {
  config.settings.allowed_cors_destinations = [
    ...(config.settings.allowed_cors_destinations || []),
    'public.tableau.com',
  ];

  config.settings.storeExtenders = [...(config.settings.storeExtenders || [])];

  config.views.contentTypesViews.tableau_visualization = VisualizationView;
  config.widgets.id.tableau_visualization = VisualizationWidget;

  return [installBlocks].reduce((acc, apply) => apply(acc), config);
};

export default applyConfig;
