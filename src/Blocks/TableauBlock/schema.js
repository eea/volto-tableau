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
        title: 'Url',
        widget: 'textarea',
      },
    },
    required: [],
  };
};

const sourceSchema = {
  title: 'Source',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['title', 'organisation', 'link'],
    },
  ],
  properties: {
    title: {
      title: 'Title',
    },
    organisation: {
      title: 'Organization',
    },
    link: {
      title: 'Link',
      widget: 'url',
    },
  },
  required: [],
};

export default (config) => ({
  title: 'Tableau',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['url', 'title', 'description', 'with_download', 'with_share'],
    },
    {
      id: 'sources',
      title: 'Sources',
      fields: ['with_sources', 'sources'],
    },
    {
      id: 'options',
      title: 'Options',
      fields: [
        'sheetname',
        'hideTabs',
        'hideToolbar',
        'autoScale',
        'toolbarPosition',
      ],
    },
    {
      id: 'extra_options',
      title: 'Extra options',
      fields: ['urlParameters', 'breakpointUrls'],
    },
  ],
  properties: {
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
    with_download: {
      title: 'Show download button',
      type: 'boolean',
      defaultValue: true,
    },
    with_share: {
      title: 'Show share button',
      type: 'boolean',
      defaultValue: true,
    },
    with_sources: {
      title: 'Show sources',
      type: 'boolean',
      defaultValue: true,
    },
    sources: {
      title: 'Sources',
      widget: 'object_list',
      schema: sourceSchema,
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
    autoScale: {
      title: 'Auto scale',
      type: 'boolean',
      default: false,
      description: 'Scale down tableau according to width',
    },
    toolbarPosition: {
      title: 'Toolbar position',
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
      description: 'Set a list of url parameters to filter the tableau',
    },
    breakpointUrls: {
      title: 'Breakpoint urls',
      widget: 'object_list',
      schema: breakpointUrlSchema(config),
      description: 'Set different vizualization for specific breakpoint',
    },
  },
  required: ['url'],
});
