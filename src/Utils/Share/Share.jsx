import React from 'react';
import { Icon } from '@plone/volto/components';
import shareSVG from '@plone/volto/icons/share.svg';

const Share = ({ viz }) => {
  return (
    <div className="tableau-share-container">
      <button
        className="tableau-share-button"
        onClick={() => {
          viz.showShareDialog();
        }}
      >
        <span>Share</span>
        <Icon name={shareSVG} size="24px" />
      </button>
    </div>
  );
};

export default Share;
