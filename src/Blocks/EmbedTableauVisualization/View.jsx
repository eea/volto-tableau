import React, { useEffect, useMemo } from 'react';
import { Message } from 'semantic-ui-react';
import { flattenToAppURL } from '@plone/volto/helpers';
import { PrivacyProtection } from '@eeacms/volto-embed';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getContent } from '@plone/volto/actions';
import { pickMetadata } from '@eeacms/volto-embed/helpers';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';

function getTableauVisualization(props) {
  const content = props.tableauContent || {};
  const tableau_visualization =
    content.tableau_visualization || props.data?.tableau_visualization || {};
  return {
    ...pickMetadata(content),
    ...tableau_visualization,
  };
}

const View = (props) => {
  const { id, mode, data, getContent } = props;
  const {
    with_notes = true,
    with_sources = true,
    with_more_info = true,
    with_download = true,
    with_share = true,
    with_enlarge = true,
    tableau_height = 700,
  } = data;

  const tableau_vis_url = useMemo(
    () => flattenToAppURL(data.tableau_vis_url || ''),
    [data.tableau_vis_url],
  );

  const tableau_visualization = useMemo(() => getTableauVisualization(props), [
    props,
  ]);

  useEffect(() => {
    const tableauVisId = flattenToAppURL(tableau_visualization['@id'] || '');
    if (
      mode === 'edit' &&
      tableau_vis_url &&
      tableau_vis_url !== tableauVisId
    ) {
      getContent(tableau_vis_url, null, id);
    }
  }, [id, getContent, mode, tableau_vis_url, tableau_visualization]);

  const { figure_note = [], data_provenance = {} } = tableau_visualization;

  if (props.mode === 'edit' && !tableau_vis_url) {
    return <Message>Please select a tableau from block editor.</Message>;
  }

  return (
    <div className="embed-tableau">
      <PrivacyProtection
        {...props}
        data={{ ...data, url: tableau_visualization?.url }}
      >
        <Tableau
          data={{
            ...tableau_visualization,
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
      tableauContent: state.content.subrequests?.[props.id]?.data,
    }),
    {
      getContent,
    },
  ),
)(React.memo(View));
