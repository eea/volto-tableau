import { useEffect, useState } from 'react';
import { loadTableauScript } from './helpers';

export const useTableau = (version) => {
  const [tableau, setTableau] = useState();

  useEffect(() => {
    loadTableauScript(() => {
      if (window[`tableau_${version}`]) {
        setTableau(window[`tableau_${version}`]);
      } else {
        setTableau(undefined);
      }
    }, version);
  }, [version]);

  return tableau;
};
