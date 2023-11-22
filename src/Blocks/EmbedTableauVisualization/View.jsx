import React, { useEffect, useMemo } from 'react';
import { Message } from 'semantic-ui-react';
import { flattenToAppURL } from '@plone/volto/helpers';
import { PrivacyProtection } from '@eeacms/volto-embed';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getContent } from '@plone/volto/actions';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';

const View = (props) => {
  const data = props.data;
  const {
    with_notes = true,
    with_sources = true,
    with_more_info = true,
    with_download = true,
    with_share = true,
    with_enlarge = true,
    tableau_height = 700,
  } = data;
  const tableau_vis_url = flattenToAppURL(data.tableau_vis_url || '');

  useEffect(() => {
    if (tableau_vis_url && props.mode === 'edit') {
      props.getContent(tableau_vis_url, null, props.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.mode, tableau_vis_url]);

  const tableauData = useMemo(() => {
    if (props?.tableau_content?.tableau_visualization)
      return props.tableau_content?.tableau_visualization;
    return props.data.tableau_visualization;
  }, [props.data.tableau_visualization, props.tableau_content]);

  const { figure_note = [], data_provenance = {} } = tableauData || {};

  if (!tableauData && !tableau_vis_url && props.mode !== 'edit') {
    return <Message>Url is not set in the visualization</Message>;
  }

  if (props.mode === 'edit' && !tableauData) {
    return (
      <Message>
        Please select a tableau visualization from block editor.
      </Message>
    );
  }
  return (
    <div className="embed-tableau">
      <PrivacyProtection {...props} data={{ ...data, url: tableauData?.url }}>
        <Tableau
          data={{
            ...tableauData,
            with_notes,
            with_sources,
            with_more_info,
            with_download,
            with_share,
            with_enlarge,
            tableau_height,
            tableau_vis_url,
          }}
          figure_note={figure_note}
          sources={data_provenance?.data || []}
        />
      </PrivacyProtection>
    </div>
  );
};

export default compose(
  connect(
    (state, props) => ({
      tableau_content: state.content.subrequests?.[props.id]?.data,
    }),
    {
      getContent,
    },
  ),
)(React.memo(View));
