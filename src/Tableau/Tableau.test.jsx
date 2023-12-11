import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import Tableau from './Tableau';

const mockStore = configureStore();

const store = mockStore({
  userSession: { token: '1234' },
  intl: {
    locale: 'en',
    messages: {},
  },
});

describe('Tableau', () => {
  it('should render the component', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Tableau />
        </MemoryRouter>
      </Provider>,
    );
    expect(container.querySelector('.tableau-wrapper')).toBeInTheDocument();
  });
});
