import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';
import { isEqual } from 'lodash';
import { Modal, Button, Grid } from 'semantic-ui-react';
import config from '@plone/volto/registry';
import { FormFieldWrapper, InlineForm } from '@plone/volto/components';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';
import getSchema from './schema';
import {
  getQuery,
  getTableauVisualization,
  getParameters,
  getFilters,
} from '@eeacms/volto-tableau/Tableau/helpers';

import '@eeacms/volto-tableau/less/tableau.less';
import { getBaseUrl } from '@plone/volto/helpers';

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

const VisualizationWidget = (props) => {
  const { location, content, onChange, id } = props;
  const ogValue = props.value || {};
  const inAddForm = props.location.pathname.split('/').pop() === 'add';
  const viz = React.useRef();
  const [tableauData, setTableauData] = React.useState({});
  const [schema, setSchema] = React.useState(null);
  const [vizState, setVizState] = React.useState({
    loaded: false,
    loading: false,
    error: null,
  });
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(ogValue);

  const [tableauVisualization, setTableauVisualization] = useState(() =>
    getTableauVisualization({
      isBlock: false,
      content: {
        ...(inAddForm ? {} : content),
        tableau_visualization: value,
      },
    }),
  );

  const [query, setQuery] = useState(() => {
    return getQuery({ location });
  });

  const [extraParameters, setExtraParameters] = useState(() =>
    getParameters({ tableauVisualization, query }),
  );

  const [extraFilters, setExtraFilters] = useState(() =>
    getFilters({ tableauVisualization, query }),
  );

  const handleApplyChanges = () => {
    props.onChange(props.id, value);
    setOpen(false);
  };

  const handleClose = () => {
    setValue(ogValue);
    setOpen(false);
  };

  React.useEffect(() => {
    if (!vizState.loaded || !viz.current || !!tableauData[value.url]) return;

    async function _setTableauData() {
      const workbook = await viz.current.getWorkbook();
      const sheetNames = workbook.getPublishedSheetsInfo().map((sheet) => {
        return sheet.getName();
      });
      const parameters = await workbook.getParametersAsync();
      const filters = await workbook.getActiveSheet().getFiltersAsync();
      setTableauData((tableauData) => ({
        ...tableauData,
        [value.url]: {
          sheetNames,
          parameters,
          filters,
        },
      }));
    }

    _setTableauData();
  }, [vizState, tableauData, value.url]);

  /**
   * Synchronizes the local `value` state with the `props.value` prop when the component is not open and the values differ.
   * This ensures that the component's internal state reflects the latest value from the parent component.
   */
  React.useEffect(() => {
    if (!open && !isEqual(props.value || {}, value)) {
      setValue(props.value || {});
    }
  }, [props.value, value, open]);

  /**
   * Update tableau visualization
   */
  React.useEffect(() => {
    setTableauVisualization(
      getTableauVisualization({
        isBlock: false,
        content: {
          ...(inAddForm ? {} : content),
          tableau_visualization: value,
        },
      }),
    );
  }, [content, value, inAddForm]);

  /**
   * Update query
   */
  React.useEffect(() => {
    setQuery(
      getQuery({
        location,
      }),
    );
  }, [location]);

  /**
   * Update extra parameters
   */
  React.useEffect(() => {
    setExtraParameters(getParameters({ tableauVisualization, query }));
  }, [tableauVisualization, query]);

  /**
   * Update extra filters
   */
  React.useEffect(() => {
    setExtraFilters(getFilters({ tableauVisualization, query }));
  }, [tableauVisualization, query]);

  /**
   * Get schema
   */
  React.useEffect(() => {
    setSchema(
      getSchema({
        config,
        viz: viz.current,
        vizState,
        data: value,
        tableauData: tableauData[value.url],
        intl: props.intl,
      }),
    );
  }, [vizState, value, tableauData, props.intl]);

  React.useEffect(() => {
    if (value && value.url && value.preview_url_loaded !== value.url) {
      fetch(
        `${getBaseUrl(
          '',
        )}/cors-proxy/https://screenshot.eea.europa.eu/api/v1/retrieve_image_for_url?url=${encodeURIComponent(
          value.url,
        )}&w=1920&h=1000&waitfor=8000`,
      )
        .then((e) => e.blob())
        .then((myBlob) => {
          blobToBase64(myBlob).then((base64String) => {
            onChange(id, {
              ...value,
              preview: base64String,
              preview_url_loaded: value.url,
            });
          });
        })
        .catch(() => {});
    }
  }, [value, onChange, id]);

  return (
    <FormFieldWrapper {...props}>
      <Modal id="tableau-editor-modal" open={open}>
        <Modal.Content scrolling>
          <Grid>
            <Grid.Column
              mobile={4}
              tablet={4}
              computer={4}
              className="tableau-editor-column"
            >
              {schema && (
                <InlineForm
                  block={props.block}
                  schema={schema}
                  onChangeField={(id, fieldValue) => {
                    setValue((value) => ({
                      ...value,
                      [id]: fieldValue,
                    }));
                  }}
                  formData={value}
                />
              )}
            </Grid.Column>
            <Grid.Column
              mobile={8}
              tablet={8}
              computer={8}
              className="tableau-visualization-column"
            >
              <Tableau
                ref={viz}
                data={{
                  ...tableauVisualization,
                  with_notes: false,
                  with_sources: false,
                  with_more_info: false,
                  with_share: false,
                  with_enlarge: false,
                  with_download: false,
                }}
                mode="edit"
                breakpoints={
                  config.blocks.blocksConfig?.embed_tableau_visualization
                    ?.breakpoints
                }
                extraParameters={extraParameters}
                extraFilters={extraFilters}
                setVizState={setVizState}
                onChangeBlock={(_, newValue) => {
                  setValue(newValue);
                }}
              />
            </Grid.Column>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Grid>
            <Grid.Row>
              <div className="map-edit-actions-container">
                <Button disabled={vizState.loading} onClick={handleClose}>
                  Close
                </Button>
                <Button
                  disabled={vizState.loading}
                  color="green"
                  onClick={handleApplyChanges}
                >
                  Apply changes
                </Button>
              </div>
            </Grid.Row>
          </Grid>
        </Modal.Actions>
      </Modal>
      <div>
        <Button
          size="tiny"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpen(true);
          }}
        >
          Open Tableau Editor
        </Button>
      </div>
      <Tableau
        data={{
          ...tableauVisualization,
          autoScale: true,
          with_notes: false,
          with_sources: false,
          with_more_info: false,
          with_share: false,
          with_enlarge: false,
          with_download: false,
        }}
        breakpoints={
          config.blocks.blocksConfig?.embed_tableau_visualization?.breakpoints
        }
        extraParameters={extraParameters}
        extraFilters={extraFilters}
      />
    </FormFieldWrapper>
  );
};

export default compose(
  withRouter,
  injectIntl,
  connect((state) => ({ content: state?.content?.data })),
)(VisualizationWidget);
