import React from 'react';
import { Popup, Input, Button } from 'semantic-ui-react';
import { useCopyToClipboard } from '../../helpers.js';
import cx from 'classnames';

const Share = ({ contentTypeLink = '' }) => {
  const [expanded, setExpanded] = React.useState(false);
  const popupRef = React.useRef();

  const CopyUrlButton = ({ className, url, buttonText }) => {
    const [copyUrlStatus, copyUrl] = useCopyToClipboard(url);

    if (copyUrlStatus === 'copied') {
      buttonText = 'Copied!';
    } else if (copyUrlStatus === 'failed') {
      buttonText = 'Copy failed. Please try again.';
    }

    return (
      <Button
        primary
        onClick={copyUrl}
        className={cx('copy-button', className)}
      >
        {buttonText}
      </Button>
    );
  };

  return (
    <Popup
      popper={{ id: 'tableau-share-popup' }}
      trigger={
        <div className="tableau-share-container">
          <button className={cx('tableau-share-button', { expanded })}>
            <span>Share</span>
            <i class="ri-share-fill"></i>
          </button>
        </div>
      }
      position="bottom left"
      on="click"
      onClose={() => {
        setExpanded(false);
      }}
      onOpen={() => {
        setExpanded(true);
      }}
      ref={popupRef}
    >
      <div>
        <span className="tableau-share-popup-text">Copy link</span>
        <div className="tableau-share-popup-container">
          <Input
            className="tableau-share-link"
            defaultValue={contentTypeLink}
          />
          <CopyUrlButton
            className="tableau-copy-button"
            url={contentTypeLink}
            buttonText="Copy"
          />
        </div>
      </div>
    </Popup>
  );
};

export default Share;
