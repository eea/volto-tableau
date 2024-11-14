import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';

import VisualizationView from './VisualizationView';

jest.doMock('@plone/volto/registry', {
  blocks: {
    blocksConfig: {
      embed_tableau_visualization: {
        breakpoints: {
          desktop: [Infinity, 992],
          tablet: [991, 768],
          phone: [767, 0],
        },
      },
    },
  },
});

describe('VisualizationViewWidget', () => {
  it('should render the component', () => {
    const { container } = render(
      <Provider store={{ ...global.store }}>
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
