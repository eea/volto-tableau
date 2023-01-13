import React from 'react';
import ConnectedTableau from '../../ConnectedTableau/ConnectedTableau';
import { Sources } from '../../Sources';

import { getContent } from '@plone/volto/actions';

import { connect } from 'react-redux';
import { compose } from 'redux';

const View = (props) => {
  const { data } = props || {};
  const { vis_url = '' } = data;
  const show_sources = data?.show_sources ?? false;

  React.useEffect(() => {
    if (vis_url) {
      props.getContent(vis_url, null, props.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vis_url]);

  return (
    <>
      {data?.vis_url ? (
        <>
          <ConnectedTableau {...props.tableau_visualization} id={props.id} />
          {show_sources &&
          props.data_provenance &&
          props.data_provenance.data?.tableau_visualization_data.general?.url &&
          props.tableau_visualization ? (
            <Sources sources={props.data_provenance} />
          ) : show_sources ? (
            <div>Data provenance is not set in the visualization</div>
          ) : (
            ''
          )}
        </>
      ) : (
        <div>Please select a visualization from block editor.</div>
      )}
    </>
  );
};

export default compose(
  connect(
    (state, props) => ({
      data_provenance: state.content.subrequests?.[props.id],
      tableau_visualization:
        state.content.subrequests?.[props.id]?.data?.tableau_visualization_data,
    }),
    {
      getContent,
    },
  ),
)(View);
