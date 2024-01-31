import { reduce, isUndefined, isString } from 'lodash';
import qs from 'querystring';
import { pickMetadata } from '@eeacms/volto-embed/helpers';

export function getQuery({
  data_query = [],
  location = {},
  tableau_vis_url = '',
  discodata_query = {},
}) {
  return {
    ...reduce(
      data_query,
      (acc, { i, v }) => {
        if (i && v.length) {
          return { ...acc, [i]: v };
        }
        return acc;
      },
      {},
    ),
    ...(qs.parse(location.search?.replace('?', '')) || {}),
    ...(qs.parse(tableau_vis_url.split('?')[1]) || {}),
    ...(discodata_query?.search || {}),
  };
}

export function getTableauVisualization({
  isBlock,
  data,
  tableauContent = {},
  content = {},
}) {
  const mergedContent =
    (isBlock
      ? tableauContent
      : {
          ...content,
          tableau_visualization: {
            ...(content.tableau_visualization || {}),
            ...pickMetadata(content),
          },
        }) || {};
  const tableau_visualization =
    mergedContent.tableau_visualization || data?.tableau_visualization || {};
  return {
    ...tableau_visualization,
    ...(isBlock ? pickMetadata(mergedContent) : {}),
  };
}

export function getParameters({ tableauVisualization, query, data }) {
  const { urlParameters = [] } = tableauVisualization || {};

  const staticParameters = [
    ...(tableauVisualization?.staticParameters || []),
    ...(data?.staticParameters || []),
  ];

  return {
    ...reduce(
      staticParameters,
      (acc, { field, value }) => {
        if (field && value) {
          return {
            ...acc,
            [field]: value,
          };
        }
        return acc;
      },
      {},
    ),
    ...reduce(
      urlParameters,
      (acc, { field, urlParam }) => {
        if (field && query[urlParam]) {
          return {
            ...acc,
            [field]: isString(query[urlParam])
              ? query[urlParam].split(',')
              : query[urlParam],
          };
        }
        return acc;
      },
      {},
    ),
  };
}

export function getFilters({ tableauVisualization, query, data }) {
  // const { dynamicFilters = [] } = tableauVisualization || {};
  const staticFilters = [
    ...(tableauVisualization?.staticFilters || []),
    ...(data?.staticFilters || []),
  ];

  return {
    ...reduce(
      staticFilters,
      (acc, { field, value }) => {
        if (field && value) {
          return {
            ...acc,
            [field]: value,
          };
        }
        return acc;
      },
      {},
    ),
    // ...reduce(
    //   dynamicFilters,
    //   (acc, { field, urlParam }) => {
    //     if (field && urlParam) {
    //       return {
    //         ...acc,
    //         [field]: isString(query[urlParam])
    //           ? query[urlParam].split(',')
    //           : query[urlParam],
    //       };
    //     }
    //     return acc;
    //   },
    //   {},
    // ),
  };
}

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
