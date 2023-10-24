import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import View from './View';

const mockStore = configureStore([]);
const store = mockStore({ content: { subrequests: [] } });

window.URL.createObjectURL = jest.fn(() => 'test');

jest.mock('@eeacms/volto-embed', () => ({
  PrivacyProtection: ({ children }) => <div>{children}</div>,
}));

jest.mock('@plone/volto/components', () => ({
  Icon: ({ children }) => <img alt="incon">{children}</img>,
}));

jest.mock('@plone/volto/components', () => ({
  Toast: ({ children }) => <p>{children}</p>,
}));

describe('View', () => {
  const data = {
    '@type': 'embed_tableau_visualization',
    dataprotection: {},
    tableau_vis_url: 'http://localhost:3000/tableau-ct',
    with_download: true,
    with_more_info: true,
    with_note: true,
    with_share: true,
  };

  it('should render the component', () => {
    const { container } = render(
      <Provider store={store}>
        <View data={data} />
      </Provider>,
    );
    expect(container.querySelector('.embed-container')).toBeInTheDocument();
  });
});
