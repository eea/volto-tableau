import React, { useEffect } from 'react';
import { Message } from 'semantic-ui-react';
import { flattenToAppURL } from '@plone/volto/helpers';
import { PrivacyProtection } from '@eeacms/volto-embed';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getContent } from '@plone/volto/actions';
import { pickMetadata } from '@eeacms/volto-embed/helpers';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';

function getTableauVisualization(props) {
  const { isBlock } = props;
  const content = (isBlock ? props.tableauContent : props.content) || {};
  const tableau_visualization =
    (isBlock
      ? props.tableauContent?.tableau_visualization
      : props.content?.tableau_visualization) ||
    props.data.tableau_visualization ||
    {};
  return {
    ...pickMetadata(content),
    ...tableau_visualization,
  };
}

const View = (props) => {
  const { isBlock, id, mode, data, getContent } = props;
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

  const tableau_visualization = getTableauVisualization(props);

  useEffect(() => {
    const tableauVisId = flattenToAppURL(tableau_visualization['@id'] || '');
    if (
      isBlock &&
      mode === 'edit' &&
      tableau_vis_url &&
      tableau_vis_url !== tableauVisId
    ) {
      getContent(tableau_vis_url, null, id);
    }
  }, [id, isBlock, getContent, mode, tableau_vis_url, tableau_visualization]);

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
      isBlock: !!props.data?.['@type'],
    }),
    {
      getContent,
    },
  ),
)(React.memo(View));
