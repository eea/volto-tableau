const ProtectionSchema = () => ({
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

const Schema = () => {
  return {
    title: 'Embed EEA Tableau',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['vis_url', 'show_sources', 'dataprotection'],
      },
    ],
    properties: {
      vis_url: {
        widget: 'object_by_path',
        title: 'Visualization',
      },
      show_sources: {
        title: 'Toggle sources',
        type: 'boolean',
      },
      dataprotection: {
        widget: 'object',
        schema: ProtectionSchema(),
      },
    },

    required: ['vis_url'],
  };
};

export default Schema;
