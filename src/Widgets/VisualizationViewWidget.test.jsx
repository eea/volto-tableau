import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import VisualizationViewWidget from './VisualizationViewWidget';

const mockStore = configureStore();

const store = mockStore({
  userSession: { token: '1234' },
  intl: {
    locale: 'en',
    messages: {},
  },
});

describe('VisualizationViewWidget', () => {
  it('should render the component', () => {
    const data = {
      url: 'http://localhost:3000/tableau-ct',
      with_download: true,
      with_more_info: true,
      with_note: true,
      with_share: true,
    };

    const value = {
      staticParameters: [],
    };

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <VisualizationViewWidget data={data} value={value} />
        </MemoryRouter>
      </Provider>,
    );
    expect(container.querySelector('.tableau-wrapper')).toBeInTheDocument();
  });
});
