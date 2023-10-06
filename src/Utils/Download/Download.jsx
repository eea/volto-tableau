import React from 'react';
import { Popup } from 'semantic-ui-react';
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
      <ul className="no-bullets">
        <li>
          Data formats
          <div className="visualization-wrapper">
            <div className="visualization-info">
              <div>
                <button
                  className="tableau-download-button tableau-format-download"
                  onClick={() => {
                    viz.showExportCrossTabDialog();
                    popupRef.current.triggerRef.current.click();
                  }}
                >
                  <span>CSV</span>
                </button>
              </div>
              <div>
                <button
                  className="tableau-download-button tableau-format-download"
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
        </li>
        <li>
          Image formats
          <div className="visualization-wrapper">
            <div className="visualization-info">
              <div>
                <button
                  className="tableau-download-button tableau-format-download"
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
        </li>
        <li>
          Other formats
          <div className="visualization-wrapper">
            <div className="visualization-info">
              <div>
                <button
                  className="tableau-download-button tableau-format-download"
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
        </li>
      </ul>
    </Popup>
  );
};

export default Download;
