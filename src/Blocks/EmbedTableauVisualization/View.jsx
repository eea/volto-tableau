import React from 'react';
import { Message } from 'semantic-ui-react';
import { flattenToAppURL } from '@plone/volto/helpers';
import { PrivacyProtection } from '@eeacms/volto-embed';
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
    tableau_visualization,
  } = data;
  const tableau_vis_url = flattenToAppURL(data.tableau_vis_url || '');
  const { figure_note = [], data_provenance = {} } =
    tableau_visualization || {};

  React.useEffect(() => {
    if (
      tableau_vis_url &&
      flattenToAppURL(tableau_visualization?.['@id']) !== tableau_vis_url &&
      props.mode === 'edit'
    ) {
      props.getContent(tableau_vis_url, null, props.id);
    }
  }, [props, tableau_vis_url, tableau_visualization]);

  if (!tableau_visualization && !tableau_vis_url) {
    return <Message>Url is not set in the visualization</Message>;
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

export default View;
