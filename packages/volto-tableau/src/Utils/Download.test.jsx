import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-intl-redux';

import Download from './Download';

describe('Edit', () => {
  it('should render the component', () => {
    const component = renderer.create(
      <Provider store={global.store}>
        <Download />
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
