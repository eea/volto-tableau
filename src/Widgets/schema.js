const generalSchema = {
  title: 'General',

  fieldsets: [
    {
      id: 'general',
      title: 'General',
      fields: ['url'],
    },
  ],

  properties: {
    url: {
      title: 'Url',
      type: 'textarea',
    },
  },
  required: ['url'],
};

const optionsSchema = {
  title: 'Options',

  fieldsets: [
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
  ],

  properties: {
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
      type: 'array',
      choices: [
        ['Top', 'Top'],
        ['Bottom', 'Bottom'],
      ],
      default: 'Top',
    },
  },
  required: [],
};

const urlParametersSchema = {
  title: 'Parameter',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['field', 'urlParam'],
    },
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

const extraOptionsSchema = (config) => {
  return {
    title: 'Extra Options',

    fieldsets: [
      {
        id: 'default',
        title: 'Extra Options Data',
        fields: ['urlParameters', 'availableFields', 'breakpointUrls'],
      },
    ],

    properties: {
      urlParameters: {
        title: 'URL parameters',
        widget: 'object_list',
        schema: urlParametersSchema,
        description: 'Set a list of url parameters to filter the tableau',
      },
      availableFields: {
        title: 'Available Fields:',
        widget: 'url_params_widget',
      },
      breakpointUrls: {
        title: 'Breakpoint urls',
        widget: 'object_list',
        schema: breakpointUrlSchema(config),
        description: 'Set different vizualization for specific breakpoint',
      },
    },
    required: [],
  };
};

export default (config) => {
  return {
    title: 'Tableau Editor',
    fieldsets: [
      {
        id: 'default',
        title: 'Tableau Editor Sections',
        fields: ['tableau_data'],
      },
    ],
    properties: {
      tableau_data: {
        title: 'Panels',
        widget: 'object_types_widget',
        schemas: [
          {
            id: 'general',
            schema: generalSchema,
          },
          {
            id: 'options',
            schema: optionsSchema,
          },
          {
            id: 'extraOptions',
            schema: extraOptionsSchema(config),
          },
        ],
      },
    },
    required: [],
  };
};
