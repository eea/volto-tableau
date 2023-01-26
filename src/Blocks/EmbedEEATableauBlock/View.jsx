import React from 'react';
import ConnectedTableau from '../../ConnectedTableau/ConnectedTableau';
import { Sources } from '../../Sources';
import { PrivacyProtection } from '@eeacms/volto-embed';

import { StyleWrapperView } from '@eeacms/volto-block-style/StyleWrapper';
import cx from 'classnames';

import { getContent } from '@plone/volto/actions';

import { connect } from 'react-redux';
import { compose } from 'redux';

const View = (props) => {
  const { data_provenance, tableau_visualization } = props || {};
  const data = React.useMemo(() => props.data || {}, [props.data]);
  const { vis_url = '' } = data;
  const show_sources = data?.show_sources ?? false;

  React.useEffect(() => {
    if (vis_url) {
      props.getContent(vis_url, null, props.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vis_url]);

  return (
    <StyleWrapperView
      {...props}
      data={data}
      styleData={{
        ...data.styles,
        customClass: cx(data.styles?.customClass || '', 'embed-container'),
      }}
    >
      <PrivacyProtection data={data} {...props}>
        {data?.vis_url ? (
          <>
            {tableau_visualization?.general?.url ? (
              <>
                <ConnectedTableau
                  {...props.tableau_visualization}
                  id={props.id}
                  {...props}
                />

                {show_sources &&
                data_provenance &&
                data_provenance?.data?.data_provenance &&
                tableau_visualization ? (
                  <Sources sources={data_provenance.data.data_provenance} />
                ) : show_sources ? (
                  <div>Data provenance is not set in the visualization</div>
                ) : (
                  ''
                )}
              </>
            ) : !tableau_visualization?.general?.url ? (
              <div>Url is not set in the visualization</div>
            ) : null}
          </>
        ) : (
          <div>Please select a visualization from block editor.</div>
        )}
      </PrivacyProtection>
    </StyleWrapperView>
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
)(React.memo(View));
