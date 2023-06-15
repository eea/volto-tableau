import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import BlockDataForm from '@plone/volto/components/manage/Form/InlineForm';
import config from '@plone/volto/registry';
import getSchema from './schema';
import View from './View';

const Edit = (props) => {
  const viz = React.useRef();
  const [vizState, setVizState] = React.useState({
    loaded: false,
    loading: false,
    error: null,
  });

  const schema = React.useMemo(() => getSchema(config, viz.current, vizState), [
    vizState,
  ]);

  return (
    <>
      <View {...props} mode="edit" setVizState={setVizState} ref={viz} />
      <SidebarPortal selected={props.selected}>
        <BlockDataForm
          block={props.block}
          schema={schema}
          title={schema.title}
          onChangeField={(id, value) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              [id]: value,
            });
          }}
          formData={props.data}
        />
      </SidebarPortal>
    </>
  );
};

export default Edit;
