import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-intl-redux';
import config from '@plone/volto/registry';
import '@testing-library/jest-dom/extend-expect';

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

  it('should render the component', () => {
    const { container } = render(
      <Provider store={global.store}>
        <Edit
          id="my-tableau"
          data={data}
          pathname="/news"
          selected={false}
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
    expect(container.querySelector('#sidebar')).toBeInTheDocument();
    expect(container.querySelector('#sidebar .ui.form')).toBeInTheDocument();
    expect(
      container.querySelector('#sidebar .ui.form .header.pulled'),
    ).toBeInTheDocument();
    expect(screen.getByText('Embed Dashboard (Tableau)')).toBeInTheDocument();
    expect(
      container.querySelector('#blockform-fieldset-default'),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        '#blockform-fieldset-default .ui.segment.form.attached',
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        '#mocked-field-tableau_vis_url.mocked-default-widget',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/Tableau visualization/)).toBeInTheDocument();
    expect(
      screen.getByText(
        'When using context query parameters please use the corresponding field name from the Tableau service.',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'When using context query parameters please use the corresponding field name from the Tableau service.',
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        '#mocked-field-tableau_height.mocked-default-widget',
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        'a[href="https://developer.mozilla.org/en-US/docs/Web/CSS/height"]',
      ),
    ).toBeInTheDocument();
    expect(
      container.querySelector('.accordion.ui.fluid.styled.form'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('#blockform-fieldset-toolbar'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('#blockform-fieldset-toolbar .active.title'),
    ).toBeInTheDocument();
    expect(screen.getByText('Toolbar')).toBeInTheDocument();
    expect(screen.getByText(/Show note/)).toBeInTheDocument();
    expect(screen.getByText(/Show more info/)).toBeInTheDocument();
    expect(screen.getByText(/Show download button/)).toBeInTheDocument();
    expect(screen.getByText(/Show share button/)).toBeInTheDocument();
    expect(screen.getByText(/Show enlarge button/)).toBeInTheDocument();
  });
});
