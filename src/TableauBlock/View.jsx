import React from 'react';
import Tableau from '@eeacms/volto-tableau/Tableau/View';
import config from '@plone/volto/registry';
import { getLatestTableauVersion } from '@eeacms/volto-tableau/Tableau/tableau-api';
import './styles.less';

const View = (props) => {
  const version =
    props.data.version ||
    config.settings.tableauVersion ||
    getLatestTableauVersion();

  return (
    <div>
      <h1>Tableau</h1>
      <Tableau data={props.data} version={version} />
    </div>
  );
};

export default View;
