import React from 'react';
import Tableau from '@eeacms/volto-tableau/Tableau/View';

const ConnectedTableau = (props) => {
  const [error, setError] = React.useState(null);
  const [loaded, setLoaded] = React.useState(null);
  return (
    <div className="tableau-block">
      <Tableau
        error={error}
        loaded={loaded}
        setError={setError}
        setLoaded={setLoaded}
        data={{ ...props?.general, ...props?.options, ...props?.extraOptions }}
        url={props?.general?.url}
      />
    </div>
  );
};

export default ConnectedTableau;
