const initialState = {};

export default function tableau(state = initialState, action = {}) {
  switch (action.type) {
    case `SET_TABLEAU_API`:
      return {
        ...state,
        [action.version]: action.api,
      };

    default:
      return state;
  }
}
