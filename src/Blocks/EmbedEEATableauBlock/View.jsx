import React from 'react';
import TableauView from '../../TableauBlock/View';
import { Sources } from '../../Sources';
import { getContent } from '@plone/volto/actions';

import { connect } from 'react-redux';
import { compose } from 'redux';

const View = (props) => {
  const { data } = props || {};
  const { vis_url = '' } = data;
  const with_sources = data?.with_sources ?? false;

  React.useEffect(() => {
    if (vis_url) {
      props.getContent(vis_url, null, props.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vis_url]);

  console.log(
    props.tableau_visualization,
    'tableau_visualization data here <====',
  );
  return (
    <>
      <TableauView {...props} />
      {with_sources &&
        (props.mode !== 'edit' ? <Sources data={data.tableauSources} /> : '')}
    </>
  );
};

export default compose(
  connect(
    (state, props) => ({
      data_provenance:
        state.content.subrequests?.[props.id]?.data?.data_provenance,
      tableau_visualization:
        state.content.subrequests?.[props.id]?.data?.tableau_visualization_data,
    }),
    {
      getContent,
    },
  ),
)(View);
