import { GET_TABLEAU_VISUALIZATION } from './actionTypes';

export function getVisualization(path) {
  return {
    type: GET_TABLEAU_VISUALIZATION,
    path,
    request: {
      op: 'get',
      path: `${path}/@tableau-visualization`,
    },
  };
}
