import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FigureNote from './FigureNote';

window.URL.createObjectURL = jest.fn(() => 'test');

describe('FigureNote', () => {
  const note = 'Example note';

  it('should render the component', () => {
    const { container } = render(<FigureNote note={note} />);
    expect(
      container.querySelector('.tableau-note-container'),
    ).toBeInTheDocument();
  });
});
