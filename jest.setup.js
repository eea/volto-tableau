import { jest } from '@jest/globals';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

global.store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
  content: {
    create: {},
    data: {
      '@id': 'http://localhost:3000/my-page',
    },
    subrequests: [],
  },
  connected_data_parameters: {
    byContextPath: {},
  },
});

const mockReactRouter = jest.requireActual('react-router');
const mockSemanticComponents = jest.requireActual('semantic-ui-react');
const mockComponents = jest.requireActual('@plone/volto/components');
const config = jest.requireActual('@plone/volto/registry').default;

config.blocks.blocksConfig = {
  embed_tableau_visualization: {
    breakpoints: {
      desktop: [Infinity, 992],
      tablet: [991, 768],
      phone: [767, 0],
    },
  },
};

jest.mock('react-router', () => {
  return {
    ...mockReactRouter,
    withRouter: (WrappedComponent) => {
      return (props) => {
        return (
          <WrappedComponent
            {...props}
            location={{
              pathname: '/path/to/content',
              search: '',
              hash: '',
              state: null,
              key: '5nvxpbdafa',
            }}
          />
        );
      };
    },
  };
});

jest.mock('semantic-ui-react', () => ({
  ...mockSemanticComponents,
  Popup: ({ content, trigger }) => {
    return (
      <div className="popup">
        <div className="trigger">{trigger}</div>
        <div className="content">{content}</div>
      </div>
    );
  },
}));

jest.doMock('@plone/volto/components', () => {
  return {
    ...mockComponents,
    Toast: ({ children }) => <div className="toast">{children}</div>,
    SidebarPortal: ({ children }) => <div id="sidebar">{children}</div>,
    UniversalLink: ({ children, href }) => {
      return <a href={href}>{children}</a>;
    },
  };
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  }),
);
