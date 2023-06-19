import { GET_TABLEAU_VISUALIZATION } from '../actionTypes';

export const data_visualizations = (middlewares) => [
  (store) => (next) => (action) => {
    if (action.type === GET_TABLEAU_VISUALIZATION) {
      store.dispatch({
        type: `${GET_TABLEAU_VISUALIZATION}_PENDING`,
        path: action.path,
      });
    }
    return next(action);
  },
  ...middlewares,
];
