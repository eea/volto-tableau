import React from 'react';
import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import { SidebarPortal } from '@plone/volto/components';
import { getContent } from '@plone/volto/actions';
import View from './View';
import Schema from './schema';

import { connect } from 'react-redux';
import { compose } from 'redux';

const Edit = (props) => {
  const { block, onChangeBlock } = props;
  const data = React.useMemo(() => props.data || {}, [props.data]);
  const schema = React.useMemo(() => Schema(props), [props]);

  React.useEffect(() => {
    if (!Object.hasOwn(data, 'show_sources')) {
      onChangeBlock(block, {
        ...data,
        show_sources: true,
      });
    }
  }, [block, data, onChangeBlock]);

  return (
    <React.Fragment>
      <View {...props} data={data} mode="edit" />
      <SidebarPortal selected={props.selected}>
        <BlockDataForm
          block={block}
          title={schema.title}
          schema={schema}
          onChangeField={(_id, value) => {
            props.onChangeBlock(block, {
              ...data,
              [_id]: value,
            });
          }}
          formData={data}
        />
      </SidebarPortal>
    </React.Fragment>
  );
};

export default compose(
  connect(
    (state, props) => ({
      block_data: state.content.data,
      data_provenance: state.content.subrequests?.[props.id]?.data_provenance,
    }),
    {
      getContent,
    },
  ),
)(React.memo(Edit));
