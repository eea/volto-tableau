const sourceSchema = {
  title: 'Source',

  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['source', 'source_link'],
    },
  ],

  properties: {
    source: {
      title: 'Source',
      widget: 'textarea',
    },
    source_link: {
      title: 'Link',
      type: 'string',
    },
  },

  required: ['source'],
};

const Schema = (props) => {
  return {
    title: 'Embed EEA Tableau',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['vis_url', 'height', 'show_sources'],
      },
      {
        id: 'sources',
        title: 'Sources',
        fields: ['tableauSources', 'with_sources'],
      },
    ],
    properties: {
      vis_url: {
        widget: 'object_by_path',
        title: 'Visualization',
      },
      height: {
        title: 'Height',
        type: 'number',
        default: 450,
      },
      tableauSources: {
        widget: 'object_list',
        title: 'Sources',
        schema: sourceSchema,
      },
      show_sources: {
        title: 'Toggle sources',
        type: 'boolean',
      },
      with_sources: {
        title: 'Sources visible',
        type: 'boolean',
        defaultValue: true,
      },
    },

    required: ['vis_url'],
  };
};

export default Schema;
