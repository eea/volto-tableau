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
      // loadTableauScript(() => {}, version);
      // fetchTableau(version)
      //   .then((response) => {
      //     if (mode === 'edit') {
      //       toast.success(<Toast success title={response.message} />);
      //     }
      //     store.dispatch({
      //       type: `${SET_TABLEAU_API}_SUCCESS`,
      //       version,
      //       api: response,
      //     });
      //   })
      //   .catch((error) => {
      //     if (mode === 'edit') {
      //       toast.error(<Toast error title={error.message} />);
      //     }
      //     store.dispatch({
      //       type: `${SET_TABLEAU_API}_FAILED`,
      //       version,
      //     });
      //   });
    }

    return next(action);
  },
  ...middlewares,
];
