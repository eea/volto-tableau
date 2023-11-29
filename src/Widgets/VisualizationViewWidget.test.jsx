import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import VisualizationViewWidget from './VisualizationViewWidget';

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
      <Provider store={global.store}>
        <VisualizationViewWidget data={data} value={value} />
      </Provider>,
    );
    expect(container.querySelector('.tableau-wrapper')).toBeInTheDocument();
  });
});
