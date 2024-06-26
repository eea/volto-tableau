import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
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

const VisualizationWidget = (props) => {
  const { location, content } = props;
  const ogValue = props.value || {};
  const inAddForm = props.location.pathname.split('/').pop() === 'add';
  const viz = React.useRef();
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
    getSchema({ config, viz: viz.current, vizState, data: value }).then(
      (schema) => {
        setSchema(schema);
      },
    );
  }, [vizState, value]);

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
                <Button onClick={handleClose}>Close</Button>
                <Button color="green" onClick={handleApplyChanges}>
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
  connect((state) => ({ content: state?.content?.data })),
)(VisualizationWidget);
