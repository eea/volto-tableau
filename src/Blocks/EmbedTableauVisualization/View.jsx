import React from 'react';
import { PrivacyProtection } from '@eeacms/volto-embed';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';

import { flattenToAppURL } from '@plone/volto/helpers';
import { getContent } from '@plone/volto/actions';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { getVisualization } from '@eeacms/volto-tableau/actions';

const View = (props) => {
  const data = props.data;
  const { with_sources = true, with_download = true, with_share = true } = data;
  const { data_provenance, tableau_visualization } =
    props.tableau_visualization_data || {};
  const tableau_vis_url = flattenToAppURL(data.tableau_vis_url || '');

  React.useEffect(() => {
    if (tableau_vis_url) {
      props.getContent(tableau_vis_url, null, props.id);
      props.getVisualization(tableau_vis_url);
    }
    // eslint-disable-next-line
  }, [tableau_vis_url]);

  console.log('state data', props.state_data?.tableau_visualizations);

  return (
    <div className="embed-container">
      <PrivacyProtection
        {...props}
        data={{ ...data, url: tableau_visualization?.url }}
      >
        {!tableau_vis_url && (
          <div>Please select a tableau visualization from block editor.</div>
        )}
        {!!tableau_vis_url && (
          <>
            {!tableau_visualization?.url && props.mode === 'edit' && (
              <div>Url is not set in the visualization</div>
            )}
            {!!tableau_visualization?.url && (
              <Tableau
                data={{
                  ...tableau_visualization,
                  with_sources,
                  with_download,
                  with_share,
                }}
                sources={data_provenance?.data || []}
              />
            )}
          </>
        )}
      </PrivacyProtection>
    </div>
  );
};

export default compose(
  connect(
    (state, props) => ({
      state_data: state,
      tableau_visualization_data: state.content.subrequests?.[props.id]?.data,
    }),
    {
      getContent,
      getVisualization,
    },
  ),
)(React.memo(View));
