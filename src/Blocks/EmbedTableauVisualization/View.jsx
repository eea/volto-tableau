import React, { useEffect } from 'react';
import { Message } from 'semantic-ui-react';
import { flattenToAppURL } from '@plone/volto/helpers';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getContent } from '@plone/volto/actions';
import PrivacyProtection from '@eeacms/volto-embed/PrivacyProtection/PrivacyProtection';
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
  const {
    isBlock,
    id,
    mode,
    data,
    getContent,
    useVisibilitySensor,
    data_query,
  } = props;
  const {
    with_notes = true,
    with_sources = true,
    with_more_info = true,
    with_download = true,
    with_share = true,
    with_enlarge = true,
    tableau_height,
    enable_queries,
    static_params,
  } = data;

  const tableau_vis_url = flattenToAppURL(data.tableau_vis_url || '');

  const tableau_visualization = getTableauVisualization(props);

  const { staticParameters = [] } = tableau_visualization;

  const extraOptions = React.useMemo(() => {
    const options = {};
    staticParameters.forEach((parameter) => {
      if (parameter.field && parameter.value) {
        options[parameter.field] = parameter.value;
      }
    });
    if (enable_queries && data_query && data_query.length > 0) {
      data_query.forEach((parameter) => {
        if (parameter.i && parameter.v[0]) {
          options[parameter.i] = parameter.v[0];
        }
      });
    }
    if (static_params && static_params.length > 0) {
      static_params.forEach((parameter) => {
        if (parameter.field && parameter.value) {
          options[parameter.field] = parameter.value;
        }
      });
    }
    return options;
  }, [data_query, enable_queries, staticParameters, static_params]);

  useEffect(() => {
    const tableauVisId = flattenToAppURL(tableau_visualization['@id'] || '');
    if (isBlock && tableau_vis_url && tableau_vis_url !== tableauVisId) {
      getContent(tableau_vis_url, null, id);
    }
  }, [id, isBlock, getContent, mode, tableau_vis_url, tableau_visualization]);

  if (props.mode === 'edit' && !tableau_vis_url) {
    return <Message>Please select a tableau from block editor.</Message>;
  }

  return (
    <div className="embed-tableau">
      <PrivacyProtection
        {...props}
        data={{ ...data, url: tableau_visualization?.url }}
        useVisibilitySensor={useVisibilitySensor}
      >
        <Tableau
          data={{
            ...tableau_visualization,
            tableau_height:
              tableau_height || tableau_visualization.tableau_height,
            with_notes,
            with_sources,
            with_more_info,
            with_download,
            with_share,
            with_enlarge,
            tableau_vis_url,
          }}
          extraOptions={extraOptions}
        />
      </PrivacyProtection>
    </div>
  );
};

export default compose(
  connect(
    (state, props) => ({
      tableauContent: state.content.subrequests?.[props.id]?.data,
      data_query: state.content.data.data_query,
      isBlock: !!props.data?.['@type'],
    }),
    {
      getContent,
    },
  ),
)(React.memo(View));
