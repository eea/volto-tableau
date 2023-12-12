import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-intl-redux';
import config from '@plone/volto/registry';

import Edit from './Edit';
import installEmbedTableau from '.';

installEmbedTableau(config);

describe('Edit', () => {
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
        <Edit
          id="my-tableau"
          data={data}
          pathname="/news"
          selected={false}
          block="1234"
          index={1}
          onChangeBlock={() => {}}
          onSelectBlock={() => {}}
          onDeleteBlock={() => {}}
          onFocusPreviousBlock={() => {}}
          onFocusNextBlock={() => {}}
          handleKeyDown={() => {}}
          content={{}}
          useVisibilitySensor={false}
        />
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
