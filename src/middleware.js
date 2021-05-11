import React from 'react';
import { toast } from 'react-toastify';
import { Toast } from '@plone/volto/components';
import { SET_TABLEAU_API } from '@eeacms/volto-tableau/constants';
import loadTableauApi from 'tableau-api-js';

export default (middlewares) => [
  (store) => (next) => (action) => {
    const state = store.getState();
    const { version = '', mode = 'view' } = action || {};

    if (
      action.type === `${SET_TABLEAU_API}_PENDING` &&
      !state.tableau.loading[version]
    ) {
      loadTableauApi(version)
        .then((response) => {
          if (mode === 'edit') {
            toast.success(<Toast success title={response.message} />);
          }
          store.dispatch({
            type: `${SET_TABLEAU_API}_SUCCESS`,
            version,
            api: response.tableau,
          });
        })
        .catch((error) => {
          if (mode === 'edit') {
            toast.error(<Toast error title={error.message} />);
          }
          store.dispatch({
            type: `${SET_TABLEAU_API}_FAILED`,
            version,
          });
        });
    }

    return next(action);
  },
  ...middlewares,
];
