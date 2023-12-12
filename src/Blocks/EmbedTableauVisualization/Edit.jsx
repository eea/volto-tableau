import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import { SidebarPortal } from '@plone/volto/components';
import getSchema from './schema';

import View from './View';

const Edit = (props) => {
  const { block, data, selected, onChangeBlock, data_query } = props;
  const schema = React.useMemo(() => getSchema(props), [props]);

  React.useEffect(() => {
    if (data_query) {
      data.data_query_params = data_query;
    }
  }, [data_query, data]);

  return (
    <React.Fragment>
      <View mode="edit" {...props} />
      <SidebarPortal selected={selected}>
        <BlockDataForm
          block={block}
          schema={schema}
          title={schema.title}
          onChangeBlock={onChangeBlock}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
        />
      </SidebarPortal>
    </React.Fragment>
  );
};

export default compose(
  connect((state, props) => ({
    data_query: state.content?.data?.data_query,
  })),
  injectIntl,
)(Edit);
