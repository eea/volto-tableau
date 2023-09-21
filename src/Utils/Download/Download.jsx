import React from 'react';
import { Button, Popup } from 'semantic-ui-react';
import cx from 'classnames';
import { Icon } from '@plone/volto/components';
import downloadSVG from '@eeacms/volto-tableau/icons/download.svg';

const Download = ({ viz }) => {
  const [expanded, setExpanded] = React.useState(false);
  const popupRef = React.useRef();

  return (
    <Popup
      popper={{ id: 'tableau-download-popup' }}
      trigger={
        <div className="tableau-download-container">
          <button className={cx('tableau-download-button', { expanded })}>
            <span>Download</span>
            <Icon name={downloadSVG} size="24px" />
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
      <Button
        className="primary"
        onClick={() => {
          viz.showExportImageDialog();
          popupRef.current.triggerRef.current.click();
        }}
      >
        Image
      </Button>
      <Button
        className="primary"
        onClick={() => {
          viz.showExportPDFDialog();
          popupRef.current.triggerRef.current.click();
        }}
      >
        PDF
      </Button>
      <Button
        className="primary"
        onClick={() => {
          viz.showExportCrossTabDialog();
          popupRef.current.triggerRef.current.click();
        }}
      >
        CSV
      </Button>
      <Button
        className="primary"
        onClick={() => {
          viz.exportCrossTabToExcel();
          popupRef.current.triggerRef.current.click();
        }}
      >
        Excel
      </Button>
    </Popup>
  );
};

export default Download;
