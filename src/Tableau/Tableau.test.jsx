import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Tableau from './Tableau';

const mockStore = configureStore([]);
const store = mockStore({});

window.URL.createObjectURL = jest.fn(() => 'test');

jest.mock('@plone/volto/components', () => ({
  Icon: ({ children }) => <img alt="incon">{children}</img>,
}));

jest.mock('@plone/volto/components', () => ({
  Toast: ({ children }) => <p>{children}</p>,
}));

describe('Tableau', () => {
  it('should render the component', () => {
    const { container } = render(
      <Provider store={store}>
        <Tableau />
      </Provider>,
    );
    expect(container.querySelector('.tableau-wrapper')).toBeInTheDocument();
  });
});
