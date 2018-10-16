import { PureComponent } from 'react';

// Global styles
import 'css/index.scss';

// Global modules
import { setResponsive } from 'modules/responsive/actions';

export default class Page extends PureComponent {
  static async getInitialProps({
    asPath,
    pathname,
    query,
    req,
    store,
    isServer
  }) {
    // Routes
    const url = { asPath, pathname, query };

    // Mobile detection
    if (isServer) {
      store.dispatch(setResponsive(req));
    }

    return { isServer, url };
  }
}
