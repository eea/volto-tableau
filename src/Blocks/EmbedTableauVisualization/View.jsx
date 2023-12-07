import React, { useEffect, useState } from 'react';
import { Message } from 'semantic-ui-react';
import { flattenToAppURL } from '@plone/volto/helpers';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getContent } from '@plone/volto/actions';
import PrivacyProtection from '@eeacms/volto-embed/PrivacyProtection/PrivacyProtection';
import { pickMetadata } from '@eeacms/volto-embed/helpers';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';
import qs from 'querystring';

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
  const [extraFilters, setExtraFilters] = useState({});
  const {
    isBlock,
    id,
    mode,
    data,
    getContent,
    useVisibilitySensor,
    query = {},
  } = props;
  const {
    with_notes = true,
    with_sources = true,
    with_more_info = true,
    with_download = true,
    with_share = true,
    with_enlarge = true,
    tableau_height,
  } = data;

  const tableau_vis_url = flattenToAppURL(data.tableau_vis_url || '');

  const tableau_visualization = getTableauVisualization(props);

  const { staticParameters = [], urlParameters = [] } = tableau_visualization;

  const extraOptions = React.useMemo(() => {
    const options = {};
    staticParameters.forEach((parameter) => {
      if (parameter.field && parameter.value) {
        options[parameter.field] = parameter.value;
      }
    });
    return options;
  }, [staticParameters]);

  React.useEffect(() => {
    const newFilters = { ...extraFilters };
    urlParameters.forEach((element) => {
      if (element.field && typeof query[element.urlParam] !== 'undefined') {
        newFilters[element.field] = query[element.urlParam];
      } else if (newFilters[element.field]) {
        delete newFilters[element.field];
      }
    });
    setExtraFilters(newFilters);
    /* eslint-disable-next-line */
  }, [JSON.stringify(query), JSON.stringify(urlParameters)]);

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
  }, [id, isBlock, getContent, mode, tableau_vis_url]);

  if (props.mode === 'edit' && !tableau_vis_url) {
    return <Message>Please select a tableau from block editor.</Message>;
  }

  // console.log('here urlParameters', urlParameters);
  // console.log('here data', data);
  // console.log('here', tableau_visualization);
  // console.log('here extraFilters', extraFilters);
  console.log('here query', query);
  // console.log('here extraOptions', extraOptions);

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
          extraFilters={extraFilters}
        />
      </PrivacyProtection>
    </div>
  );
};

export default compose(
  connect(
    (state, props) => ({
      query: {
        ...(qs.parse(state.router.location?.search?.replace('?', '')) || {}),
        ...(state.discodata_query?.search || {}),
        ...(qs.parse(props.data.tableau_vis_url.split('?')[1]) || {}),
      },
      tableauContent: state.content.subrequests?.[props.id]?.data,
      isBlock: !!props.data?.['@type'],
    }),
    {
      getContent,
    },
  ),
)(React.memo(View));
