import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MoreInfoLink from './MoreInfoLink';

window.URL.createObjectURL = jest.fn(() => 'test');

jest.mock('@plone/volto/components', () => ({
  UniversalLink: ({ children }) => <div>{children}</div>,
}));

describe('MoreInfoLink', () => {
  const contentTypeLink = '/tableau-content-type';

  it('should render the component', () => {
    const { container } = render(
      <MoreInfoLink contentTypeLink={contentTypeLink} />,
    );
    expect(
      container.querySelector('.tableau-more-info-button'),
    ).toBeInTheDocument();
  });
});
