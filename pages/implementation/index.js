import React from 'react';

// Components
import Page from 'layout/page';

// Global styles
import 'css/index.scss';

// Redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';
import Implementation from 'layout/implementation';

class ImplementationPage extends Page {
  render() {
    return <Implementation />;
  }
}

export default withRedux(
  initStore,
  null,
  null
)(ImplementationPage);
