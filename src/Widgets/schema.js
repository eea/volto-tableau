import {
  getSheetnamesChoices,
  canChangeVizData,
} from '@eeacms/volto-tableau/Tableau/helpers';

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

const staticParameters = {
  title: 'Parameter',
  fieldsets: [{ id: 'default', title: 'Default', fields: ['field', 'value'] }],
  properties: {
    field: {
      title: 'Tableau fieldname',
      type: 'text',
    },
    value: {
      title: 'Value',
      type: 'text',
    },
  },
  required: [],
};

const breakpointUrlSchema = (config) => {
  const breakpoints =
    config.blocks.blocksConfig?.tableau_block?.breakpoints || {};

  return {
    title: 'URL',
    fieldsets: [{ id: 'default', title: 'Default', fields: ['device', 'url'] }],
    properties: {
      device: {
        title: 'Device',
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

export default (config, viz, vizState) => {
  const isDisabled = !canChangeVizData(viz, vizState);

  return {
    title: 'Tableau',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['url'],
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
        fields: ['urlParameters', 'staticParameters', 'breakpointUrls'],
      },
    ],
    properties: {
      url: {
        title: 'Url',
        widget: 'textarea',
        isDisabled,
      },
      sheetname: {
        title: 'Sheetname',
        choices: getSheetnamesChoices(viz),
        isDisabled,
      },
      hideTabs: {
        title: 'Hide tabs',
        type: 'boolean',
        isDisabled,
      },
      hideToolbar: {
        title: 'Hide toolbar',
        type: 'boolean',
        isDisabled,
      },
      autoScale: {
        title: 'Auto scale',
        type: 'boolean',
        description: 'Scale down tableau according to width',
        isDisabled,
      },
      toolbarPosition: {
        title: 'Toolbar position',
        choices: [
          ['Top', 'Top'],
          ['Bottom', 'Bottom'],
        ],
        default: 'Top',
        isDisabled,
      },
      urlParameters: {
        title: 'URL parameters',
        widget: 'object_list',
        schema: urlParametersSchema,
        description: 'Set a list of url parameters to filter the tableau',
        isDisabled,
      },
      staticParameters: {
        title: 'Static parameters',
        widget: 'object_list',
        schema: staticParameters,
        description: (
          <>
            Set a list of static parameters.
            <br />
            <b>NOTE: You need to trigger a refresh for this to take effect</b>
          </>
        ),
        isDisabled,
      },
      breakpointUrls: {
        title: 'Breakpoint urls',
        widget: 'object_list',
        schema: breakpointUrlSchema(config),
        description: 'Set different vizualization for specific breakpoint',
        isDisabled,
      },
    },
    required: ['url'],
  };
};
