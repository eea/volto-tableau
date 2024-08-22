import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import View from './View';
import '@testing-library/jest-dom/extend-expect'; // Pentru metode precum toBeInTheDocument
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';

jest.mock('@eeacms/volto-tableau/Tableau/Tableau', () =>
  jest.fn(() => <div>Mocked Tableau</div>),
);

jest.mock('@plone/volto/registry', () => ({
  blocks: {
    blocksConfig: {
      tableau_block: {
        breakpoints: {},
      },
    },
  },
}));

const mockStore = configureStore([]);

describe('View component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      router: {
        location: {
          search: '?param1=value1',
        },
      },
      discodata_query: {
        search: {},
      },
      screen: {},
    });
  });

  it('renders correctly with title and description when loaded', () => {
    const mockProps = {
      block: '1234',
      data: {
        title: 'Test Title',
        description: 'Test Description',
        staticParameters: [],
        urlParameters: [],
      },
      mode: 'view',
      query: {},
    };

    render(
      <Provider store={store}>
        <View {...mockProps} />
      </Provider>,
    );

    // Simulăm vizualizarea încărcată
    const tableauBlock = screen.getByText('Mocked Tableau');
    expect(tableauBlock).toBeInTheDocument();

    // Verificăm titlul și descrierea
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Description')).not.toBeInTheDocument();

    // Aici simulăm setVizState pentru a actualiza starea vizualizării ca fiind "loaded"
    mockProps.setVizState = jest.fn((state) => {
      state.loaded = true;
    });

    // Re-render după schimbarea stării
    render(
      <Provider store={store}>
        <View {...mockProps} />
      </Provider>,
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('sets extraFilters correctly based on query parameters', () => {
    const mockProps = {
      block: '1234',
      data: {
        staticParameters: [],
        urlParameters: [{ field: 'filter1', urlParam: 'param1' }],
      },
      mode: 'view',
      query: { param1: 'value1' },
    };

    render(
      <Provider store={store}>
        <View {...mockProps} />
      </Provider>,
    );

    expect(Tableau).toHaveBeenCalledWith(
      expect.objectContaining({
        extraFilters: { filter1: 'value1' },
      }),
      {},
    );
  });

  it('renders Tableau with correct props', () => {
    const mockProps = {
      block: '1234',
      data: {
        title: 'Test Title',
        description: 'Test Description',
        staticParameters: [{ field: 'static1', value: 'staticValue' }],
        urlParameters: [],
      },
      mode: 'view',
      query: {},
    };

    render(
      <Provider store={store}>
        <View {...mockProps} />
      </Provider>,
    );

    expect(Tableau).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          title: 'Test Title',
          description: 'Test Description',
          with_sources: true,
          with_download: true,
          with_share: true,
          with_enlarge: true,
        }),
        extraOptions: { static1: 'staticValue' },
      }),
      {},
    );
  });
});
