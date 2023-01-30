import React from 'react';
import TableauView from '../TableauBlock/View';

const VisualizationView = (props) => {
  const [tableauError, setTableauError] = React.useState('');
  const { content = {} } = props;
  const { tableau_visualization_data = {} } = content;

  const TableauNotDisplayed = () => {
    return (
      <div className="tableau-block not_displayed_tableau">
        <div className="tableau-info">
          {!tableau_visualization_data.general?.url ? (
            <p className="tableau-error">URL required</p>
          ) : (
            tableauError && <p className="tableau-error">{tableauError}</p>
          )}
        </div>
      </div>
    );
  };
  return (
    <div>
      {!tableau_visualization_data?.general?.url || tableauError ? (
        <TableauNotDisplayed />
      ) : (
        <TableauView
          setTableauError={setTableauError}
          data={{
            ...tableau_visualization_data.general,
            ...tableau_visualization_data.options,
            ...tableau_visualization_data.extraOptions,
          }}
        />
      )}
    </div>
  );
};

export default VisualizationView;
