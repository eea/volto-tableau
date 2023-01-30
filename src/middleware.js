import { SET_TABLEAU_API } from '@eeacms/volto-tableau/constants';

//need to see if we need redux anymore for this
export default (middlewares) => [
  (store) => (next) => (action) => {
    const state = store.getState();
    const { version = '' } = action || {};

    if (
      action.type === `${SET_TABLEAU_API}_PENDING` &&
      !state.tableau.loading[version]
    ) {
      return;
    }

    return next(action);
  },
  ...middlewares,
];
