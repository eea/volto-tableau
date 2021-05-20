import { SET_TABLEAU_API } from '@eeacms/volto-tableau/constants';

const initialState = {
  loading: {},
  loaded: {},
  errors: {},
};

export default function tableau(state = initialState, action = {}) {
  const loading = { ...state.loading };
  const loaded = { ...state.loaded };
  const errors = { ...state.errors };

  switch (action.type) {
    case `${SET_TABLEAU_API}_PENDING`:
      loading[action.version] = true;
      loaded[action.version] = false;
      errors[action.version] = false;

      return {
        ...state,
        loading: {
          ...loading,
        },
        loaded: {
          ...loaded,
        },
        errors: {
          ...errors,
        },
      };

    case `${SET_TABLEAU_API}_SUCCESS`:
      loading[action.version] = false;
      loaded[action.version] = true;
      errors[action.version] = false;

      return {
        ...state,
        [action.version]: action.api,
        loading: {
          ...loading,
        },
        loaded: {
          ...loaded,
        },
        errors: {
          ...errors,
        },
      };

    case `${SET_TABLEAU_API}_FAILED`:
      loading[action.version] = false;
      loaded[action.version] = false;
      errors[action.version] = true;

      return {
        ...state,
        loading: {
          ...loading,
        },
        loaded: {
          ...loaded,
        },
        errors: {
          ...errors,
        },
      };

    default:
      return state;
  }
}
