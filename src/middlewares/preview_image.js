import {
  CREATE_CONTENT,
  UPDATE_CONTENT,
} from '@plone/volto/constants/ActionTypes';

export const preview_image = (middlewares) => [
  (store) => (next) => async (action) => {
    if (![CREATE_CONTENT, UPDATE_CONTENT].includes(action.type)) {
      return next(action);
    }
    const state = store.getState();
    const contentData = state.content.data;
    if (
      !contentData ||
      contentData['@type'] !== 'tableau_visualization' ||
      contentData.preview_image_saved ||
      !action?.request?.data?.tableau_visualization?.preview
    ) {
      return next(action);
    }

    if (
      contentData?.preview_image &&
      contentData?.preview_image?.filename !==
        'preview_image_generated_tableau.png'
    ) {
      return next(action);
    }

    try {
      const previewImage = {
        preview_image: {
          data: action.request.data.tableau_visualization.preview.split(',')[1],
          encoding: 'base64',
          'content-type': 'image/png',
          filename: 'preview_image_generated_tableau.png',
        },
        preview_image_saved: true,
      };

      const tableauVisualizationData = {
        ...action.request.data.tableau_visualization,
      };
      delete tableauVisualizationData.preview;

      return next({
        ...action,
        request: {
          ...action.request,
          data: {
            ...action.request.data,
            ...previewImage,
            tableau_visualization: tableauVisualizationData,
          },
        },
      });
    } catch (error) {
      return next(action);
    }
  },
  ...middlewares,
];
