import React from 'react';
import '@eeacms/volto-tableau/less/tableau.less';

const UrlParamsWidget = () => {
  const fields = [
    'embed',
    'isGuestRedirectFromVizportal',
    'showShareOptions',
    'jsdebug',
    'sheetname',
    'display_count',
    'showVizHome',
    'origin',
    'device',
  ];

  return (
    <div className="availableFieldsContainer">
      <p className="availableFieldsTitle">Available Fields:</p>
      {fields.map((field) => (
        <p key={field} className="availableFields">
          <strong>{field}</strong>
        </p>
      ))}
    </div>
  );
};

export default UrlParamsWidget;
