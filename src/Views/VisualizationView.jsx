import React from 'react';
import TableauView from '../TableauBlock/View';

const VisualizationView = (props) => {
  const { content = {} } = props;
  const { tableau_visualization_data = {} } = content;

  return (
    <div>
      <TableauView
        data={{
          ...tableau_visualization_data.general,
          ...tableau_visualization_data.options,
          ...tableau_visualization_data.extraOptions,
        }}
      />
    </div>
  );
};

export default VisualizationView;
