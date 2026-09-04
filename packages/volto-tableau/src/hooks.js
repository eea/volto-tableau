import { useEffect, useState, useRef } from 'react';
import { loadTableauScript } from './helpers';

const TIMEOUT = 10000;

export const useTableau = (version) => {
  const clock = useRef();
  const [tableau, setTableau] = useState();

  useEffect(() => {
    loadTableauScript(version);

    const startTime = new Date().getTime();

    clock.current = setInterval(() => {
      const tableauApi = window[`tableau_${version}`];
      if (tableauApi) {
        setTableau(tableauApi);
        clearInterval(clock.current);
        return;
      }
      if (new Date().getTime() - startTime > TIMEOUT) {
        clearInterval(clock.current);
      }
    }, 100);

    return () => {
      clearInterval(clock.current);
    };
  }, [version]);

  return tableau;
};
