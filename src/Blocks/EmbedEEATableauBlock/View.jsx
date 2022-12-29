import React from 'react';
import TableauView from '../../TableauBlock/View';
import { Sources } from '../../Sources';

const View = (props) => {
  const { data } = props || {};
  const { vis_url = '' } = data;
  const with_sources = data?.with_sources ?? false;

  React.useEffect(() => {
    if (vis_url) {
      props.getContent(vis_url, null);
    }
  }, [vis_url]);

  return (
    <>
      <TableauView {...props} />
      {with_sources &&
        (props.mode !== 'edit' ? <Sources data={data.tableauSources} /> : '')}
    </>
  );
};

export default View;
