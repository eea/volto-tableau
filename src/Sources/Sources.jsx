/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { UniversalLink, Icon } from '@plone/volto/components';

import rightKeySVG from '@plone/volto/icons/right-key.svg';
import downKeySVG from '@plone/volto/icons/down-key.svg';

import './style.css';

const SourcesWidget = ({ sources }) => {
  const [expand, setExpand] = React.useState(true);
  return (
    <div>
      <a className="embed-sources-header" onClick={() => setExpand(!expand)}>
        <h3>
          <Icon
            name={expand ? downKeySVG : rightKeySVG}
            title={expand ? 'Collapse' : 'Expand'}
            size="17px"
          />
          Source:
        </h3>
      </a>
      {expand && (
        <li className="embed-source-param">
          <UniversalLink
            className="embed-sources-param-title"
            href={sources?.data?.tableau_visualization_data?.general?.url}
          >
            {sources?.data?.tableau_visualization_data?.general?.url}
          </UniversalLink>
        </li>
      )}
    </div>
  );
};

export default SourcesWidget;
