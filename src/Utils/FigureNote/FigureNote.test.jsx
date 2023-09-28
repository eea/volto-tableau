import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FigureNote from './FigureNote';

window.URL.createObjectURL = jest.fn(() => 'test');

const slateEditor = require('@plone/volto-slate/editor/render');
slateEditor.serializeNodes = jest.fn();

jest.mock('@plone/volto-slate/editor/render', () => ({
  serializeNodesToText: ({ note = [] }) => note,
}));

describe('FigureNote', () => {
  const note = [];

  it('should render the component', () => {
    const { container } = render(<FigureNote note={note} />);
    expect(
      container.querySelector('.tableau-note-container'),
    ).toBeInTheDocument();
  });
});
