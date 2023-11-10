import { useEffect, useState } from 'react';
import { loadTableauScript } from './helpers';

let clock;

const TIMEOUT = 10000;

export const useTableau = (version) => {
  const [tableau, setTableau] = useState();

  useEffect(() => {
    loadTableauScript(version);

    const startTime = new Date().getTime();

    clock = setInterval(() => {
      const tableauApi = window[`tableau_${version}`];
      if (tableauApi) {
        setTableau(tableauApi);
        clearInterval(clock);
        return;
      }
      if (new Date().getTime() - startTime > TIMEOUT) {
        clearInterval(clock);
      }
    }, 100);

    return () => {
      clearInterval(clock);
    };
  }, [version]);

  return tableau;
};
