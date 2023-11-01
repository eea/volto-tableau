import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { flattenToAppURL } from '@plone/volto/helpers';
import { getContent } from '@plone/volto/actions';
import { PrivacyProtection } from '@eeacms/volto-embed';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';

const View = (props) => {
  const data = props.data;
  const {
    with_note = true,
    with_sources = true,
    with_more_info = true,
    with_download = true,
    with_share = true,
    tableau_height = '700',
  } = data;
  const { figure_note = [], data_provenance = {}, tableau_visualization } =
    props.tableau_visualization_data || {};

  const tableau_vis_url = flattenToAppURL(data.tableau_vis_url || '');

  React.useEffect(() => {
    if (tableau_vis_url) {
      props.getContent(tableau_vis_url, null, props.id);
    }
    // eslint-disable-next-line
  }, [tableau_vis_url]);

  return (
    <div className="embed-tableau">
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
                  with_note,
                  with_sources,
                  with_more_info,
                  with_download,
                  with_share,
                  tableau_height,
                  tableau_vis_url,
                }}
                figure_note={figure_note}
                sources={data_provenance.data || []}
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
      tableau_visualization_data: state.content.subrequests?.[props.id]?.data,
    }),
    {
      getContent,
    },
  ),
)(React.memo(View));
