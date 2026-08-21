import { vi } from 'vitest';
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

const mockReactRouter = await vi.importActual('react-router');
const mockSemanticComponents = await vi.importActual('semantic-ui-react');
const mockComponents = await vi.importActual('@plone/volto/components');
const mockReactCookie = await vi.importActual('react-cookie');
const config = (await vi.importActual('@plone/volto/registry')).default;
const cookies = {
  get: vi.fn(),
  getAll: vi.fn(() => ({})),
  set: vi.fn(),
  remove: vi.fn(),
  addChangeListener: vi.fn(),
  removeChangeListener: vi.fn(),
};

config.blocks.blocksConfig = {
  embed_tableau_visualization: {
    breakpoints: {
      desktop: [Infinity, 992],
      tablet: [991, 768],
      phone: [767, 0],
    },
  },
};

vi.doMock('react-router', () => {
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

vi.doMock('semantic-ui-react', () => ({
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

vi.doMock('@plone/volto/components', () => {
  return {
    ...mockComponents,
    Toast: ({ children }) => <div className="toast">{children}</div>,
    SidebarPortal: ({ children }) => <div id="sidebar">{children}</div>,
    UniversalLink: ({ children, href }) => {
      return <a href={href}>{children}</a>;
    },
  };
});

vi.doMock('react-cookie', () => ({
  ...mockReactCookie,
  withCookies: (Component) => (props) => (
    <Component {...props} cookies={cookies} />
  ),
}));

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  }),
);
