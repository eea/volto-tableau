import isUndefined from 'lodash/isUndefined';

export const getSheetnames = (viz) => {
  if (!viz) return [];
  let sheetnames = [];
  const workbook = viz.getWorkbook();
  workbook.getPublishedSheetsInfo().forEach((sheet) => {
    const sheetName = sheet.getName();
    sheetnames.push(sheetName);
  });
  return sheetnames;
};

export const getSheetnamesChoices = (viz) => {
  return getSheetnames(viz).map((sheet) => [sheet, sheet]);
};

export const getActiveSheetname = (viz) => {
  const workbook = viz.getWorkbook();
  return workbook.getActiveSheet().getName();
};

export const canChangeVizData = (viz, vizState) => {
  // If viz is null it means that the viz is loading
  // If viz is undefined it means that there is no viz nor it is loading
  if (vizState?.loading) return false;
  return !!viz || isUndefined(viz);
};

export const getDevice = (breakpoints, width) => {
  let device = 'desktop';
  Object.keys(breakpoints).forEach((breakpoint) => {
    if (
      width <= breakpoints[breakpoint][0] &&
      width >= breakpoints[breakpoint][1]
    ) {
      device = breakpoint;
    }
  });
  return device;
};
