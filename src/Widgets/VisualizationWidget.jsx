import React from 'react';
import { Modal, Button, Grid } from 'semantic-ui-react';
import '@eeacms/volto-tableau/less/tableau.less';
import config from '@plone/volto/registry';

import { FormFieldWrapper, InlineForm } from '@plone/volto/components';

import TableauView from '../TableauBlock/View';
import Schema from './schema';

const VisualizationWidget = (props) => {
  const [open, setOpen] = React.useState(false);
  const { onChange = {}, id } = props;

  const block = React.useMemo(() => props.block, [props.block]);
  const value = React.useMemo(() => props.value, [props.value]);

  const [intValue, setIntValue] = React.useState(value);
  const [tableauError, setTableauError] = React.useState('');

  const dataForm = { tableau_data: intValue };

  const handleApplyChanges = () => {
    onChange(id, intValue);
    setOpen(false);
  };

  const handleClose = () => {
    setIntValue(value);
    setOpen(false);
  };

  const handleChangeField = (val) => {
    setIntValue(val);
  };

  const TableauNotDisplayed = () => {
    return (
      <div className="tableau-block not_displayed_tableau">
        <div className="tableau-info">
          {intValue && intValue.general && !intValue.general.url ? (
            <p className="tableau-error">URL required</p>
          ) : (
            tableauError && <p className="tableau-error">{tableauError}</p>
          )}
        </div>
      </div>
    );
  };

  let schema = Schema(config);

  React.useEffect(() => {
    if (!intValue?.options) {
      setIntValue({
        ...intValue,
        options: {
          autoScale: false,
          hideTabs: false,
          hideToolbar: false,
          toolbarPosition: 'Top',
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormFieldWrapper {...props}>
      <div className="wrapper">
        <Button
          floated="right"
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

      {open && (
        <Modal
          id="tableau-editor-modal"
          style={{ width: '95% !important' }}
          open={true}
        >
          <Modal.Content scrolling>
            <Grid stackable reversed="mobile vertically tablet vertically">
              <Grid.Column
                mobile={12}
                tablet={12}
                computer={5}
                className="tableau-editor-column"
              >
                <InlineForm
                  block={block}
                  schema={schema}
                  onChangeField={(_id, _value) => {
                    handleChangeField(_value);
                  }}
                  formData={dataForm}
                />
              </Grid.Column>
              <Grid.Column mobile={12} tablet={12} computer={7}>
                {(intValue && intValue.general && !intValue.general.url) ||
                tableauError ? (
                  <TableauNotDisplayed />
                ) : (
                  <div className="tableau-container">
                    <TableauView
                      setTableauError={setTableauError}
                      data={{
                        ...intValue?.general,
                        ...intValue?.options,
                        ...intValue?.extraOptions,
                      }}
                    />
                  </div>
                )}
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
      )}
      {(intValue && intValue.general && !intValue.general.url) ||
      tableauError ? (
        <TableauNotDisplayed />
      ) : (
        <TableauView
          setTableauError={setTableauError}
          data={{
            ...value?.general,
            ...value?.options,
            ...value?.extraOptions,
          }}
        />
      )}
    </FormFieldWrapper>
  );
};

export default React.memo(VisualizationWidget);
