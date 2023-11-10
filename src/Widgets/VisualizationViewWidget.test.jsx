import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import VisualizationViewWidget from './VisualizationViewWidget';

const mockStore = configureStore([]);
const store = mockStore({});

describe('VisualizationViewWidget', () => {
  it('should render the component', () => {
    const data = {
      url: 'http://localhost:3000/tableau-ct',
      with_download: true,
      with_more_info: true,
      with_note: true,
      with_share: true,
    };

    const { container } = render(
      <Provider store={store}>
        <VisualizationViewWidget data={data} />
      </Provider>,
    );
    expect(container.querySelector('.tableau-wrapper')).toBeInTheDocument();
  });
});
