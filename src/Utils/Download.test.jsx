import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';

import Download from './Download';

const mockStore = configureStore([]);

window.URL.createObjectURL = jest.fn(() => 'test');

jest.mock('semantic-ui-react', () => ({
  Popup: ({ content, trigger }) => {
    return (
      <div className="popup">
        <div className="trigger">{trigger}</div>
        <div className="content">{content}</div>
      </div>
    );
  },
}));

const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
  content: {
    create: {},
    subrequests: [],
  },
});

describe('Edit', () => {
  it('should render the component', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Download />
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
