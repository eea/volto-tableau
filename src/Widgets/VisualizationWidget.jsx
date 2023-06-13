import React from 'react';
import { Modal, Button, Grid } from 'semantic-ui-react';
import config from '@plone/volto/registry';
import { FormFieldWrapper, InlineForm } from '@plone/volto/components';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';
import getSchema from './schema';

import '@eeacms/volto-tableau/less/tableau.less';

const VisualizationWidget = (props) => {
  const [open, setOpen] = React.useState(false);
  const [schema] = React.useState(getSchema(config));
  const [value, setValue] = React.useState(props.value);

  const handleApplyChanges = () => {
    props.onChange(props.id, value);
    setOpen(false);
  };

  const handleClose = () => {
    setValue(props.value);
    setOpen(false);
  };

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
            </Grid.Column>
            <Grid.Column
              mobile={8}
              tablet={8}
              computer={8}
              className="tableau-visualization-column"
            >
              <Tableau
                data={value}
                onChangeBlock={(_, newValue) => {
                  setValue(newValue);
                }}
                mode="edit"
                noSizeUpdate
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
      <Tableau data={props.value} noSizeUpdate />
    </FormFieldWrapper>
  );
};

export default React.memo(VisualizationWidget);
