const getProtectionSchema = () => ({
  title: 'Data Protection',

  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [
        'privacy_statement',
        'privacy_cookie_key',
        'enabled',
        'background_image',
      ],
    },
  ],

  properties: {
    privacy_statement: {
      title: 'Privacy statement',
      description: 'Defined in template. Change only if necessary',
      widget: 'slate_richtext',
      className: 'slate-Widget',
    },
    privacy_cookie_key: {
      title: 'Privacy cookie key',
      description: 'Use default for Tableau, otherwise change',
      defaultValue: 'tableau',
    },
    enabled: {
      title: 'Data protection disclaimer enabled',
      description: 'Enable/disable the privacy protection',
      type: 'boolean',
    },
    background_image: {
      title: 'Tableau preview image',
      widget: 'file',
    },
  },

  required: [],
});

export default () => {
  return {
    title: 'Embed EEA Tableau visualization',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'tableau_vis_url',
          'with_sources',
          'with_download',
          'with_share',
        ],
      },
      {
        id: 'privacy',
        title: 'Privacy',
        fields: ['dataprotection'],
      },
    ],
    properties: {
      tableau_vis_url: {
        title: 'Tableau visualization',
        widget: 'url',
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
      dataprotection: {
        widget: 'object',
        schema: getProtectionSchema(),
      },
    },

    required: ['tableau_vis_url'],
  };
};
