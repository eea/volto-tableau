const Schema = (props) => {
  return {
    title: 'Embed EEA Tableau',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['vis_url', 'height', 'show_sources'],
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
      show_sources: {
        title: 'Toggle sources',
        type: 'boolean',
      },
    },

    required: ['vis_url'],
  };
};

export default Schema;
