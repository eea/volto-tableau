import { GET_TABLEAU_VISUALIZATION } from '../actionTypes';

const initialState = {
  data: {},
  error: null,
  loaded: false,
  loading: false,
};

export default function tableau_visualizations(
  state = initialState,
  action = {},
) {
  const path = action.path
    ? action.path.replace(`/@tableau-visualization`, '')
    : undefined;

  switch (action.type) {
    case `${GET_TABLEAU_VISUALIZATION}_PENDING`:
      return {
        ...state,
        error: null,
        loaded: false,
        loading: true,
      };

    case `${GET_TABLEAU_VISUALIZATION}_SUCCESS`:
      console.log('success, result is', action.result);
      return {
        ...state,
        error: null,
        data: {
          ...state.data,
          [path]: action.result.tableau_visualization,
        },
        loaded: true,
        loading: false,
      };

    case `${GET_TABLEAU_VISUALIZATION}_FAIL`:
      return {
        ...state,
        error: action.error,
        data: { ...state.data },
        loaded: false,
        loading: false,
      };

    default:
      return state;
  }
}
