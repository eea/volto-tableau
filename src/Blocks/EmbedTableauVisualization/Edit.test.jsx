import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-intl-redux';
import config from '@plone/volto/registry';
import '@testing-library/jest-dom';

import Edit from './Edit';
import installEmbedTableau from '.';

installEmbedTableau(config);

describe('Edit', () => {
  const data = {
    '@type': 'embed_tableau_visualization',
    dataprotection: {
      enabled: false,
    },
    tableau_vis_url: 'http://localhost:3000/tableau-ct',
    with_download: true,
    with_more_info: true,
    with_notes: true,
    with_share: true,
  };

  it('should render the component', async () => {
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    document.body.appendChild(sidebar);

    const { container } = render(
      <Provider store={global.store}>
        <Edit
          id="my-tableau"
          data={data}
          pathname="/news"
          selected={true}
          block="1234"
          index={1}
          onChangeBlock={() => {}}
          onSelectBlock={() => {}}
          onDeleteBlock={() => {}}
          onFocusPreviousBlock={() => {}}
          onFocusNextBlock={() => {}}
          handleKeyDown={() => {}}
          content={{}}
          useVisibilitySensor={false}
        />
      </Provider>,
    );

    expect(container.querySelector('.embed-tableau')).toBeInTheDocument();
    expect(
      container.querySelector('.privacy-protection-wrapper'),
    ).toBeInTheDocument();
    expect(container.querySelector('.privacy-protection-wrapper')).toHaveStyle({
      height: 'auto',
      minHeight: '200px',
      overflow: 'hidden',
      position: 'relative',
    });
    expect(container.querySelector('.tableau-wrapper')).toBeInTheDocument();
    expect(document.querySelector('#sidebar')).toBeInTheDocument();
    sidebar.remove();
  });
});
