import { defineMessages } from 'react-intl';

const messages = defineMessages({
  CSSHeight: {
    id: 'CSS height',
    defaultMessage: 'CSS height',
  },
  CSSTableauHeightDescription: {
    id: 'Tableau height',
    defaultMessage: 'Tableau height',
  },
});

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

export default (props) => {
  return {
    title: 'Embed Dashboard (Tableau)',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['tableau_vis_url', 'tableau_height'],
      },
      {
        id: 'toolbar',
        title: 'Toolbar',
        fields: [
          'with_notes',
          'with_more_info',
          'with_download',
          'with_share',
          'with_enlarge',
        ],
      },
      {
        id: 'options',
        title: 'Parameters',
        fields: ['staticParameters'],
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
        widget: 'internal_url',
        description: (
          <div>
            <p>
              When using context query parameters please use the corresponding
              field name from the Tableau service.
            </p>
            <p>
              NOTE: The embeded tableau dashboard must have the parameters
              defined in the{' '}
              <span style={{ color: 'rgb(15, 130, 204)' }}>
                'Dynamic parameters'
              </span>{' '}
              list so that the context query parameters can take effect.
            </p>
          </div>
        ),
      },
      with_notes: {
        title: 'Show note',
        type: 'boolean',
        defaultValue: true,
      },
      with_sources: {
        title: 'Show sources',
        description: 'Will show sources set in this page Data provenance',
        type: 'boolean',
        defaultValue: true,
      },
      with_more_info: {
        title: 'Show more info',
        type: 'boolean',
        defaultValue: true,
      },
      with_enlarge: {
        title: 'Show enlarge button',
        type: 'boolean',
        defaultValue: true,
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
      tableau_height: {
        title: (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/height"
          >
            {props.intl.formatMessage(messages.CSSHeight)}
          </a>
        ),
        description: props.intl.formatMessage(
          messages.CSSTableauHeightDescription,
        ),
      },
      dataprotection: {
        widget: 'object',
        schema: getProtectionSchema(),
      },
      staticParameters: {
        title: 'Static parameters',
        widget: 'object_list',
        schema: staticParameters,
        description: 'Set a list of static parameters.',
      },
    },

    required: ['tableau_vis_url'],
  };
};
