import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Tableau from './Tableau';

describe('Tableau', () => {
  it('should render the component', () => {
    const { container } = render(
      <Provider store={global.store}>
        <Tableau />
      </Provider>,
    );
    expect(container.querySelector('.tableau-wrapper')).toBeInTheDocument();
  });
});
