import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import VisualizationWidget from './VisualizationWidget';

const mockStore = configureStore([]);
const store = mockStore({});

jest.mock('@plone/volto/components', () => ({
  FormFieldWrapper: jest.fn(({ children }) => <>{children}</>),
  InlineForm: jest.fn(() => <div>Mocked InlineForm</div>),
  Icon: ({ children }) => <img alt="incon">{children}</img>,
  Toast: ({ children }) => <p>{children}</p>,
}));

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
      <Provider store={store}>
        <VisualizationWidget {...data} />
      </Provider>,
    );
    expect(container.querySelector('.tableau-wrapper')).toBeInTheDocument();
  });
});
