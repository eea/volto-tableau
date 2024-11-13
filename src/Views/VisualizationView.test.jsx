import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

import VisualizationView from './VisualizationView';

describe('VisualizationViewWidget', () => {
  it('should render the component', () => {
    const { container } = render(
      <Provider store={global.store}>
        <VisualizationView
          content={{
            tableau_visualization: {
              url: 'http://localhost:3000/tableau-ct',
            },
          }}
        />
      </Provider>,
    );
    expect(container.querySelector('.tableau-wrapper')).toBeInTheDocument();
  });
});
