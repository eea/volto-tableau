import React from 'react';
import { Popup, Button, Modal, Dropdown } from 'semantic-ui-react';
import { Icon } from '@plone/volto/components';
import downloadSVG from '@plone/volto/icons/download.svg';

const TableauDownload = (props) => {
  const viz = props.viz || {};

  const [open, setOpen] = React.useState(false);
  const [
    isSheetSelectorCsvVisible,
    setIsSheetSelectorCsvVisible,
  ] = React.useState(false);
  const [
    isSheetSelectorExcelVisible,
    setIsSheetSelectorExcelVisible,
  ] = React.useState(false);
  const [availableSheets, setAvailableSheets] = React.useState([]);

  const initializeDropdown = () => {
    const sheets = viz
      ?.getWorkbook()
      ?.getActiveSheet()
      ?.getWorksheets()
      .map((sheet, index) => ({
        key: index,
        text: sheet.getName(),
        value: sheet.getName(),
      }));
    setAvailableSheets(sheets);
  };

  const exportImage = () => {
    setIsSheetSelectorCsvVisible(false);
    setIsSheetSelectorExcelVisible(false);
    viz.showExportImageDialog();
  };

  const exportToCSV = () => {
    setIsSheetSelectorExcelVisible(false);
    initializeDropdown();
    setIsSheetSelectorCsvVisible(true);
  };

  const exportToExcel = () => {
    setIsSheetSelectorCsvVisible(false);
    initializeDropdown();
    setIsSheetSelectorExcelVisible(true);
  };

  const handleSheetSelectionCsvChange = (_, data) => {
    viz.showExportCrossTabDialog(data.value);
  };

  const handleSheetSelectionExcelChange = (_, data) => {
    viz.exportCrossTabToExcel(data.value);
  };

  const hideDropdowns = () => {
    setIsSheetSelectorCsvVisible(false);
    setIsSheetSelectorExcelVisible(false);
  };

  return (
    <>
      <Popup
        basic
        className="tableau-download-dialog"
        position="top center"
        on="click"
        trigger={
          <div className="toolbar-button-wrapper">
            <Button
              className="toolbar-button"
              title="Download"
              onClick={hideDropdowns}
            >
              <Icon name={downloadSVG} size="26px" />
            </Button>
            <span className="btn-text">Save</span>
          </div>
        }
      >
        <Popup.Header>Download</Popup.Header>
        <Popup.Content>
          <p>Select your file format.</p>
          <Button onClick={exportImage}>Image</Button>
          <Button onClick={exportToCSV}>CSV</Button>
          {isSheetSelectorCsvVisible ? (
            <Dropdown
              placeholder="Sheet"
              selection
              options={availableSheets}
              onChange={handleSheetSelectionCsvChange}
            />
          ) : null}
          <Button onClick={exportToExcel}>Excel</Button>
          {isSheetSelectorExcelVisible ? (
            <Dropdown
              placeholder="Sheet"
              selection
              options={availableSheets}
              onChange={handleSheetSelectionExcelChange}
            />
          ) : null}
        </Popup.Content>
      </Popup>

      <Modal onClose={() => setOpen(false)} open={open}>
        <Modal.Content>
          Permissions are required to download the workbook.
        </Modal.Content>

        <Modal.Actions>
          <Button primary onClick={() => setOpen(false)}>
            OK
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default TableauDownload;
