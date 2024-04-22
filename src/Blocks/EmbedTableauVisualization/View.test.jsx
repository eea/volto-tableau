import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-intl-redux';
import '@testing-library/jest-dom/extend-expect';

import View from './View';

describe('View', () => {
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
        <View data={data} useVisibilitySensor={false} />
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
  });
});
