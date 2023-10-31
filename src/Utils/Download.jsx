import React from 'react';
import { Popup } from 'semantic-ui-react';
import cx from 'classnames';

const Download = ({ viz }) => {
  const [open, setOpen] = React.useState(false);
  const popupRef = React.useRef();

  return (
    <Popup
      popper={{ id: 'vis-toolbar-popup', className: 'download-popup' }}
      position="bottom left"
      on="click"
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      onOpen={() => {
        setOpen(true);
      }}
      ref={popupRef}
      trigger={
        <div className="tableau-download-container">
          <button className={cx('trigger-button', { open })}>
            <i className="ri-download-fill" />
            Download
          </button>
        </div>
      }
      content={
        <>
          <div className="item">
            <span className="label">Data formats</span>
            <div className="types">
              <div className="type">
                <button
                  onClick={() => {
                    viz.showExportCrossTabDialog();
                    popupRef.current.triggerRef.current.click();
                  }}
                >
                  <span>CSV</span>
                </button>
              </div>
              <div className="type">
                <button
                  onClick={() => {
                    viz.exportCrossTabToExcel();
                    popupRef.current.triggerRef.current.click();
                  }}
                >
                  <span>Excel</span>
                </button>
              </div>
            </div>
          </div>
          <div className="item">
            <span className="label">Image formats</span>
            <div className="types">
              <div className="type">
                <button
                  onClick={() => {
                    viz.showExportImageDialog();
                    popupRef.current.triggerRef.current.click();
                  }}
                >
                  <span>PNG</span>
                </button>
              </div>
            </div>
          </div>
          <div className="item">
            <span className="label">Other formats</span>
            <div className="types">
              <div className="type">
                <button
                  onClick={() => {
                    viz.showExportPDFDialog();
                    popupRef.current.triggerRef.current.click();
                  }}
                >
                  <span>PDF</span>
                </button>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default Download;
