import {
  tableauVersions,
  getLatestTableauVersion,
} from '@eeacms/volto-tableau/Tableau/tableau-api';

const urlParametersSchema = {
  title: 'Parameter',
  fieldsets: [
    { id: 'default', title: 'Default', fields: ['field', 'urlParam'] },
  ],
  properties: {
    field: {
      title: 'Tableau fieldname',
      type: 'text',
    },
    urlParam: {
      title: 'URL param',
      type: 'text',
    },
  },
  required: [],
};

const breakpointUrlSchema = (config) => {
  const breakpoints = config.blocks.blocksConfig.tableau_block.breakpoints;

  return {
    title: 'URL',
    fieldsets: [{ id: 'default', title: 'Default', fields: ['device', 'url'] }],
    properties: {
      device: {
        title: 'Device',
        type: 'array',
        choices: Object.keys(breakpoints).map((breakpoint) => [
          breakpoint,
          breakpoint,
        ]),
      },
      url: {
        title: 'URL param',
        widget: 'textarea',
      },
    },
    required: [],
  };
};

export default (config) => ({
  title: 'Tableau',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['version', 'url', 'title', 'description'],
    },
    {
      id: 'options',
      title: 'Options',
      fields: ['sheetname', 'hideTabs', 'hideToolbar', 'toolbarPosition'],
    },
    {
      id: 'extra_options',
      title: 'Extra options',
      fields: ['urlParameters', 'breakpointUrls'],
    },
  ],
  properties: {
    version: {
      title: 'Version',
      type: 'array',
      choices: [
        ...tableauVersions.map((version) => [version, `tableau-${version}`]),
      ],
      default: config.settings.tableauVersion || getLatestTableauVersion(),
    },
    url: {
      title: 'Url',
      widget: 'textarea',
    },
    title: {
      title: 'Title',
      widget: 'textarea',
    },
    description: {
      title: 'Description',
      widget: 'textarea',
    },
    sheetname: {
      title: 'Sheetname',
      type: 'text',
    },
    hideTabs: {
      title: 'Hide tabs',
      type: 'boolean',
      default: false,
    },
    hideToolbar: {
      title: 'Hide toolbar',
      type: 'boolean',
      default: false,
    },
    toolbarPosition: {
      title: 'Toolbar position',
      type: 'array',
      choices: [
        ['Top', 'Top'],
        ['Bottom', 'Bottom'],
      ],
      default: 'Top',
    },
    urlParameters: {
      title: 'URL parameters',
      widget: 'object_list',
      schema: urlParametersSchema,
    },
    breakpointUrls: {
      title: 'Breakpoint urls',
      widget: 'object_list',
      schema: breakpointUrlSchema(config),
    },
  },
  required: ['version', 'url'],
});
