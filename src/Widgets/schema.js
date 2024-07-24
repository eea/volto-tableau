import { find, includes } from 'lodash';
import {
  getSheetnamesChoices,
  canChangeVizData,
} from '@eeacms/volto-tableau/Tableau/helpers';

async function getUrlParametersSchema({ viz, vizState, data }) {
  const tableauParameters =
    vizState.loaded && viz ? await viz.getWorkbook().getParametersAsync() : [];

  const currentFields = (data.urlParameters || [])
    .map((p) => p.field)
    .filter((f) => f);

  return {
    title: 'Parameter',
    fieldsets: [
      { id: 'default', title: 'Default', fields: ['field', 'urlParam'] },
    ],
    properties: {
      field: {
        title: 'Tableau parameter',
        widget: 'creatable_select',
        isMulti: false,
        creatable: true,
        choices: tableauParameters
          .filter((p) => {
            return !includes(currentFields, p.getName());
          })
          .map((p) => [p.getName(), p.getName()]),
      },
      urlParam: {
        title: 'Field name',
        type: 'text',
      },
    },
    required: [],
    tableauParameters,
  };
}

async function getStaticParametersSchema({ viz, vizState, data }) {
  const tableauParameters =
    vizState.loaded && viz
      ? (await viz.getWorkbook?.().getParametersAsync?.()) || []
      : [];

  const currentFields = (data.staticParameters || [])
    .map((p) => p.field)
    .filter((f) => f);

  return {
    title: 'Parameter',
    fieldsets: [{ id: 'default', title: 'Default', fields: ['field'] }],
    properties: {
      field: {
        title: 'Tableau parameter',
        widget: 'creatable_select',
        isMulti: false,
        creatable: true,
        choices: tableauParameters
          .filter((p) => {
            return !includes(currentFields, p.getName());
          })
          .map((p) => [p.getName(), p.getName()]),
      },
      value: {
        title: 'Value',
        type: 'text',
      },
    },
    required: [],
    tableauParameters,
  };
}

async function getDynamicFiltersSchema({ viz, vizState, data }) {
  const tableauFilters =
    vizState.loaded && viz
      ? (await viz.getWorkbook?.().getActiveSheet?.().getFiltersAsync?.()) || []
      : [];

  const currentFields = (data.staticFilters || [])
    .map((p) => p.field)
    .filter((f) => f);

  return {
    title: 'Filter',
    fieldsets: [
      { id: 'default', title: 'Default', fields: ['field', 'urlParam'] },
    ],
    properties: {
      field: {
        title: 'Tableau filter',
        widget: 'creatable_select',
        isMulti: false,
        creatable: true,
        choices: tableauFilters
          .filter((p) => {
            return !includes(currentFields, p.getFieldName());
          })
          .map((p) => [p.getFieldName(), p.getFieldName()]),
      },
      urlParam: {
        title: 'Field name',
        type: 'text',
      },
    },
    required: [],
    tableauFilters,
  };
}

async function getStaticFiltersSchema({ viz, vizState, data }) {
  const tableauFilters =
    vizState.loaded && viz
      ? (await viz.getWorkbook?.().getActiveSheet?.().getFiltersAsync?.()) || []
      : [];

  const currentFields = (data.staticFilters || [])
    .map((p) => p.field)
    .filter((f) => f);

  return {
    title: 'Filter',
    fieldsets: [{ id: 'default', title: 'Default', fields: ['field'] }],
    properties: {
      field: {
        title: 'Tableau filter',
        widget: 'creatable_select',
        isMulti: false,
        creatable: true,
        choices: tableauFilters
          .filter((p) => {
            return !includes(currentFields, p.getFieldName());
          })
          .map((p) => [p.getFieldName(), p.getFieldName()]),
      },
      value: {
        title: 'Value',
        type: 'text',
      },
    },
    required: [],
    tableauFilters,
  };
}

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

const schema = async ({ config, viz, vizState, data }) => {
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
          'breakpointUrls',
        ],
      },
      {
        id: 'parameters',
        title: 'Parameters',
        fields: ['urlParameters', 'staticParameters'],
      },
      {
        id: 'filters',
        title: 'Filters',
        fields: ['staticFilters'],
      },
    ],
    properties: {
      url: {
        title: 'Url',
        widget: 'textarea',
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
        title: 'Dynamic parameters',
        widget: 'object_list',
        schema: await getUrlParametersSchema({ viz, vizState, data }),
        description: (
          <div style={{ color: 'rgb(15, 130, 204)', fontWeight: '400' }}>
            <p>Set a list of dynamic parameters that can be used as:</p>
            <ul>
              <li style={{ marginBottom: '0.5rem' }}>
                <p style={{ marginBottom: '0' }}>
                  URL parameters - when you embed this tableau dashboard you can
                  also add query parameters defined bellow.
                </p>
                <p style={{ marginBottom: '0.25rem' }}>
                  E.g: When you embed this tableau dashboard you can define the
                  url as:
                </p>
                <p>
                  <span>
                    /path/to/embeded/tableau/visualization?
                    <span
                      style={{ color: 'rgb(218, 1, 45)' }}
                    >{`{field_name}`}</span>
                    =Romania
                  </span>
                </p>
              </li>
              <li>
                <p style={{ marginBottom: '0' }}>
                  Context data query - when you create a content where the
                  tableau dashboard will be embeded you can add data query to
                  that content.
                </p>
                <p>
                  NOTE: the content type should have the{' '}
                  <span style={{ color: 'rgb(218, 1, 45)' }}>
                    'Parameters for data connection'
                  </span>{' '}
                  behavior enabled
                </p>
              </li>
            </ul>
          </div>
        ),
        isDisabled,
      },
      staticParameters: {
        title: 'Static parameters',
        widget: 'object_list',
        schema: await getStaticParametersSchema({ viz, vizState, data }),
        schemaExtender: (schema, data) => {
          const tableauParameter = find(
            schema.tableauParameters,
            (p) => p.getName() === data.field,
          );

          schema.fieldsets[0].fields = ['field', 'value'];

          if (!data.field || !tableauParameter) {
            return schema;
          }

          const allowableValuesType = tableauParameter.getAllowableValuesType();
          const dataType = tableauParameter.getDataType();

          if (includes(['all', 'list'], allowableValuesType)) {
            schema.properties.value.choices =
              tableauParameter
                .getAllowableValues()
                ?.map((v) => [v.value, v.formattedValue]) || [];
            schema.properties.value.description = 'Select a value';
          }
          if (allowableValuesType === 'all') {
            schema.properties.value.isMulti = true;
            schema.properties.value.description = 'Select multiple values';
          }
          if (allowableValuesType === 'range' && dataType === 'date') {
            schema.properties.value.widget = 'date';
          } else if (allowableValuesType === 'range') {
            schema.properties.value.type = 'number';
            schema.properties.value.step = tableauParameter.getStepSize();
          }
          return schema;
        },
        description: (
          <div style={{ color: 'rgb(15, 130, 204)', fontWeight: '400' }}>
            <p style={{ marginBottom: '0' }}>
              Set a list of static parameters.
            </p>
          </div>
        ),
        isDisabled,
      },
      dynamicFilters: {
        title: 'Dynamic filters',
        widget: 'object_list',
        schema: await getDynamicFiltersSchema({ viz, vizState, data }),
        description: (
          <div style={{ color: 'rgb(15, 130, 204)', fontWeight: '400' }}>
            <p>Set a list of dynamic filters that can be used as:</p>
            <ul>
              <li style={{ marginBottom: '0.5rem' }}>
                <p style={{ marginBottom: '0' }}>
                  URL parameters - when you embed this tableau dashboard you can
                  also add filters defined bellow as query parameters.
                </p>
                <p style={{ marginBottom: '0.25rem' }}>
                  E.g: When you embed this tableau dashboard you can define the
                  url as:
                </p>
                <p>
                  <span>
                    /path/to/embeded/tableau/visualization?
                    <span
                      style={{ color: 'rgb(218, 1, 45)' }}
                    >{`{field_name}`}</span>
                    =Agriculture,Forestry and Fishing
                  </span>
                </p>
              </li>
              <li>
                <p style={{ marginBottom: '0' }}>
                  Context data query - when you create a content where the
                  tableau dashboard will be embeded you can add data query to
                  that content.
                </p>
                <p>
                  NOTE: the content type should have the{' '}
                  <span style={{ color: 'rgb(218, 1, 45)' }}>
                    'Parameters for data connection'
                  </span>{' '}
                  behavior enabled
                </p>
              </li>
            </ul>
          </div>
        ),
        isDisabled,
      },
      staticFilters: {
        title: 'Static filters',
        widget: 'object_list',
        schema: await getStaticFiltersSchema({ viz, vizState, data }),
        schemaExtender: (schema, data) => {
          const tableauFilters = find(
            schema.tableauFilters,
            (p) => p.getFieldName() === data.field,
          );

          schema.fieldsets[0].fields = ['field', 'value'];

          if (!data.field || !tableauFilters) {
            return schema;
          }

          const filterType = tableauFilters.getFilterType();

          if (includes(['categorical'], filterType)) {
            schema.properties.value.choices =
              tableauFilters
                .getAppliedValues()
                ?.map((v) => [v.value, v.formattedValue]) || [];
            schema.properties.value.isMulti = true;
            schema.fieldsets[0].fields = ['field', 'value'];
          } else {
            schema.properties.field.description = (
              <span style={{ color: 'rgb(218, 1, 45)' }}>
                Filter type ({filterType}) not supported
              </span>
            );
          }
          return schema;
        },
        description: (
          <div style={{ color: 'rgb(15, 130, 204)', fontWeight: '400' }}>
            <p style={{ marginBottom: '0' }}>Set a list of static filters.</p>
          </div>
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

export default schema;
