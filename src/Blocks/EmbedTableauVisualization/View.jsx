import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { isFunction } from 'lodash';
import { Message } from 'semantic-ui-react';
import { flattenToAppURL } from '@plone/volto/helpers';
import { getContent } from '@plone/volto/actions';
import PrivacyProtection from '@eeacms/volto-embed/PrivacyProtection/PrivacyProtection';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';
import {
  getQuery,
  getTableauVisualization,
  getParameters,
  getFilters,
} from '@eeacms/volto-tableau/Tableau/helpers';

const timer = {};

function debounce(func, wait = 500, id) {
  if (!isFunction(func)) return;
  const name = id || func.name || 'generic';
  if (timer[name]) clearTimeout(timer[name]);
  timer[name] = setTimeout(func, wait);
}

const View = (props) => {
  const {
    isBlock,
    id,
    location,
    mode,
    data,
    getContent,
    useVisibilitySensor,
    data_query,
    discodata_query,
    tableau_vis_url,
    content,
    tableauContent,
  } = props;
  const {
    with_notes = true,
    with_more_info = true,
    with_download = true,
    with_share = true,
    with_enlarge = true,
    tableau_height,
  } = data;

  const [tableauVisualization, setTableauVisualization] = useState(() =>
    getTableauVisualization({
      isBlock,
      data,
      content,
      tableauContent,
    }),
  );
  const [query, setQuery] = useState(() => {
    return getQuery({ data_query, location, tableau_vis_url, discodata_query });
  });

  const [extraParameters, setExtraParameters] = useState(() =>
    getParameters({ tableauVisualization, query, data }),
  );
  const [extraFilters, setExtraFilters] = useState(() =>
    getFilters({ tableauVisualization, query, data }),
  );

  /**
   * Update tableau visualization
   */
  useEffect(() => {
    setTableauVisualization(
      getTableauVisualization({
        isBlock,
        data,
        content,
        tableauContent,
      }),
    );
  }, [isBlock, data, content, tableauContent]);

  /**
   * Update query
   */
  useEffect(() => {
    setQuery(
      getQuery({ data_query, location, tableau_vis_url, discodata_query }),
    );
  }, [tableau_vis_url, data_query, discodata_query, location]);

  /**
   * Update extra parameters
   */
  useEffect(() => {
    debounce(
      () => {
        setExtraParameters(
          getParameters({
            tableauVisualization,
            query,
            data,
          }),
        );
      },
      500,
      'setExtraParameters',
    );
  }, [tableauVisualization, query, data]);

  /**
   * Update extra filters
   */
  useEffect(() => {
    debounce(
      () => {
        setExtraFilters(
          getFilters({
            tableauVisualization,
            query,
            data,
          }),
        );
      },
      500,
      'setExtraFilters',
    );
  }, [tableauVisualization, query, data]);

  useEffect(() => {
    /**
     * If we are in edit mode, we need to fetch the content of the
     * tableau visualization
     */
    const tableauVisId = flattenToAppURL(tableauVisualization['@id'] || '');
    if (
      !tableauVisualization.error &&
      isBlock &&
      tableau_vis_url &&
      tableau_vis_url !== tableauVisId
    ) {
      getContent(tableau_vis_url, null, id);
    }
  }, [id, isBlock, getContent, mode, tableau_vis_url, tableauVisualization]);

  if (props.mode === 'edit' && !tableau_vis_url) {
    return <Message>Please select a tableau from block editor.</Message>;
  }

  if (tableauVisualization?.error) {
    return (
      <p dangerouslySetInnerHTML={{ __html: tableauVisualization.error }} />
    );
  }

  return (
    <div className="embed-tableau">
      <PrivacyProtection
        {...props}
        data={{ ...data, url: tableauVisualization?.url }}
        useVisibilitySensor={useVisibilitySensor}
      >
        <Tableau
          data={{
            ...tableauVisualization,
            tableau_height:
              tableau_height || tableauVisualization.tableau_height,
            with_notes,
            with_sources: true,
            with_more_info,
            with_download,
            with_share,
            with_enlarge,
            tableau_vis_url,
          }}
          extraParameters={extraParameters}
          extraFilters={extraFilters}
        />
      </PrivacyProtection>
    </div>
  );
};

export default compose(
  withRouter,
  connect(
    (state, props) => {
      const tableau_vis_url = flattenToAppURL(props.data.tableau_vis_url || '');
      const pathname = flattenToAppURL(state.content.data['@id']);
      return {
        tableauContent: state.content?.subrequests?.[props.id]?.data,
        discodata_query: state.discodata_query,
        data_query: state.connected_data_parameters.byContextPath[pathname],
        isBlock: !!props.data?.['@type'],
        tableau_vis_url,
      };
    },
    {
      getContent,
    },
  ),
)(React.memo(View));
