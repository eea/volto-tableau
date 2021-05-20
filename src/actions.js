import { SET_TABLEAU_API } from '@eeacms/volto-tableau/constants';

export const setTableauApi = (version, mode = 'view') => {
  return {
    type: `${SET_TABLEAU_API}_PENDING`,
    version,
    mode,
  };
};
