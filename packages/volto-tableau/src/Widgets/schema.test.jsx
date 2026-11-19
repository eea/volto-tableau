import schema from './schema';

const intl = { formatMessage: (message) => message.defaultMessage };

const config = {
  blocks: {
    blocksConfig: {
      tableau_block: {
        breakpoints: { desktop: [1200, 0], mobile: [767, 0] },
      },
    },
  },
};

const parameters = [
  {
    getName: () => 'Param A',
    getAllowableValuesType: () => 'list',
    getDataType: () => 'string',
    getAllowableValues: () => [{ value: 'a', formattedValue: 'A' }],
    getStepSize: () => 1,
  },
  {
    getName: () => 'Param B',
    getAllowableValuesType: () => 'range',
    getDataType: () => 'number',
    getAllowableValues: () => [],
    getStepSize: () => 5,
  },
  {
    getName: () => 'Param C',
    getAllowableValuesType: () => 'range',
    getDataType: () => 'date',
    getAllowableValues: () => [],
    getStepSize: () => 1,
  },
];

const filters = [
  {
    getFieldName: () => 'Filter A',
    getFilterType: () => 'categorical',
    getAppliedValues: () => [{ value: 'x', formattedValue: 'X' }],
  },
  {
    getFieldName: () => 'Filter B',
    getFilterType: () => 'range',
  },
];

const tableauData = { parameters, filters, sheetNames: ['Sheet 1'] };

const data = {
  urlParameters: [{ field: 'Param B' }],
  staticParameters: [{ field: 'Param A' }],
  staticFilters: [{ field: 'Filter A' }],
};

const buildSchema = (extra = {}) =>
  schema({
    config,
    viz: { id: 'viz' },
    vizState: {},
    data,
    tableauData,
    intl,
    ...extra,
  });

describe('Tableau widget schema', () => {
  it('builds the url parameters schema, without the already used parameters', () => {
    const { properties } = buildSchema().properties.urlParameters.schema;

    expect(properties.field.choices).toEqual([
      ['Param A', 'Param A'],
      ['Param C', 'Param C'],
    ]);
    expect(properties.urlParam.type).toBe('text');
  });

  it('builds the dynamic filters schema, without the already used filters', () => {
    const { properties } = buildSchema().properties.dynamicFilters.schema;

    expect(properties.field.choices).toEqual([['Filter B', 'Filter B']]);
  });

  it('disables the configurable fields while the visualization is loading', () => {
    const result = buildSchema({ viz: null, vizState: { loading: true } });

    expect(result.properties.sheetname.isDisabled).toBe(true);
    expect(result.properties.toolbarPosition.isDisabled).toBe(true);
  });

  it('extends the static parameters schema based on the selected parameter', () => {
    const build = () => buildSchema().properties.staticParameters;

    const list = build();
    list.schemaExtender(list.schema, { field: 'Param A' });
    expect(list.schema.fieldsets[0].fields).toEqual(['field', 'value']);
    expect(list.schema.properties.value.choices).toEqual([['a', 'A']]);
    expect(list.schema.properties.value.description).toBe('Select a value');

    const dateRange = build();
    dateRange.schemaExtender(dateRange.schema, { field: 'Param C' });
    expect(dateRange.schema.properties.value.widget).toBe('date');

    const numberRange = build();
    numberRange.schemaExtender(numberRange.schema, { field: 'Param B' });
    expect(numberRange.schema.properties.value.type).toBe('number');
    expect(numberRange.schema.properties.value.step).toBe(5);

    const unknown = build();
    unknown.schemaExtender(unknown.schema, { field: 'Unknown' });
    expect(unknown.schema.properties.value.choices).toBeUndefined();
  });

  it('extends the static filters schema for categorical filters', () => {
    const categorical = buildSchema().properties.staticFilters;
    categorical.schemaExtender(categorical.schema, { field: 'Filter A' });
    expect(categorical.schema.fieldsets[0].fields).toEqual(['field', 'value']);
    expect(categorical.schema.properties.value.choices).toEqual([['x', 'X']]);
    expect(categorical.schema.properties.value.isMulti).toBe(true);

    const unsupported = buildSchema().properties.staticFilters;
    unsupported.schemaExtender(unsupported.schema, { field: 'Filter B' });
    expect(unsupported.schema.properties.field.description).toBeTruthy();
  });

  it('exposes the breakpoint choices from the block config', () => {
    const { properties } = buildSchema().properties.breakpointUrls.schema;

    expect(properties.device.choices).toEqual([
      ['desktop', 'desktop'],
      ['mobile', 'mobile'],
    ]);
  });
});
