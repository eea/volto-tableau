import React from 'react';
import Tableau from '@eeacms/volto-tableau/Tableau/View';

const ConnectedTableau = (props) => {
  return (
    <div className="tableau-block">
      <Tableau
        data={{ ...props?.general, ...props?.options, ...props?.extraOptions }}
        url={props?.general?.url}
      />
    </div>
  );
};

export default ConnectedTableau;
