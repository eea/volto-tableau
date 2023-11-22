import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';
import View from './View';

const mockStore = configureStore([]);

window.URL.createObjectURL = jest.fn(() => 'test');

jest.mock('@plone/volto/components', () => ({
  Icon: ({ children }) => <img alt="incon">{children}</img>,
  Toast: ({ children }) => <p>{children}</p>,
}));

jest.mock('@eeacms/volto-matomo/utils', () => ({
  trackLink: jest.fn(),
}));

jest.mock(
  '@eeacms/volto-embed/PrivacyProtection/PrivacyProtection',
  () => ({ children }) => {
    return children;
  },
);

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
  content: {
    create: {},
    subrequests: [],
  },
  connected_data_parameters: {},
});

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
    const component = renderer.create(
      <Provider store={store}>
        <View data={data} />
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
