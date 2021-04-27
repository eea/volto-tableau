import React from 'react';
import { toast } from 'react-toastify';
import { Toast } from '@plone/volto/components';

const TIMEOUT = 2000;
const FREQUENCY = 10;

export const tableauVersions = [
  '2.8.0',
  '2.7.0',
  '2.6.0',
  '2.5.0',
  '2.4.0',
  '2.3.0',
  '2.2.2',
  '2.1.2',
  '2.0.3',
];

export const getLatestTableauVersion = () => {
  return tableauVersions[tableauVersions.length - 1];
};

export default (version, alert = false) => {
  return new Promise((resolve, reject) => {
    // TODO
    // Don't load tableau if current version is the
    // same as the new incomming version
    if (tableauVersions.indexOf(version) < 0) {
      toast.error(
        <Toast
          error
          title={'Setting tableau api'}
          content={'Wrong tableau version'}
        />,
      );
      return reject(null);
    }
    window.tableau = undefined;
    require(`./tableau-${version}`);
    let clock = 0;
    const interval = setInterval(() => {
      if (window.tableau) {
        if (alert) {
          toast.success(
            <Toast
              success
              title={'Setting tableau api'}
              content={`Current version: ${version}`}
            />,
          );
        }
        resolve(window.tableau);
        clearInterval(interval);
      }
      if (clock >= TIMEOUT) {
        clearInterval(interval);
      }
      clock += FREQUENCY;
    }, FREQUENCY);
  });
};
