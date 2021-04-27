import {
  tableauVersions,
  getLatestTableauVersion,
} from '@eeacms/volto-tableau/Tableau/tableau-api';

export default (config) => ({
  title: 'Tableau',
  fieldsets: [{ id: 'default', title: 'Default', fields: ['version', 'url'] }],
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
  },
  required: ['version', 'url'],
});
