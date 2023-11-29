import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-intl-redux';
import VisualizationWidget from './VisualizationWidget';

describe('VisualizationWidget', () => {
  it('should render the component', () => {
    const data = {
      value: {
        url: 'http://localhost:3000/tableau-ct',
        with_download: true,
        with_more_info: true,
        with_note: true,
        with_share: true,
        hideTabs: false,
        staticParameters: [
          {
            '@id': '1f050748-c020-4a48-8109-e99a25bf558d',
            field: 'Tableau field',
            value: 'Tableau value',
          },
        ],
      },
    };

    const { container } = render(
      <Provider store={global.store}>
        <VisualizationWidget {...data} />
      </Provider>,
    );
    expect(container.querySelector('.tableau-wrapper')).toBeInTheDocument();
  });
});
