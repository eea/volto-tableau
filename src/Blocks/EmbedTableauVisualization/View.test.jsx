import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-intl-redux';
import View from './View';

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
      <Provider store={global.store}>
        <View data={data} useVisibilitySensor={false} />
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
