import React from 'react';
import { UniversalLink, Icon } from '@plone/volto/components';

import rightKeySVG from '@plone/volto/icons/right-key.svg';
import downKeySVG from '@plone/volto/icons/down-key.svg';

import './style.css';

const Sources = ({ sources }) => {
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
          Sources:
        </h3>
      </a>
      {expand && (
        <ul>
          {sources &&
            sources.data &&
            sources.data.map((param, i) =>
              param.link ? (
                <li key={i} className="embed-source-param">
                  <UniversalLink
                    className="embed-sources-param-title"
                    href={param.link}
                  >
                    {param.title}
                  </UniversalLink>
                  , {param.organisation}
                </li>
              ) : null,
            )}
        </ul>
      )}
    </div>
  );
};

export default Sources;
