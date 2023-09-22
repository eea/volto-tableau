import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Download from './Download';

window.URL.createObjectURL = jest.fn(() => 'test');

jest.mock('@plone/volto/components', () => ({
  Icon: ({ children }) => <img>{children}</img>,
}));

describe('Download', () => {
  const viz = {};

  it('should render the component', () => {
    const { container } = render(<Download viz={viz} />);
    expect(
      container.querySelector('.tableau-download-container'),
    ).toBeInTheDocument();
  });
});
