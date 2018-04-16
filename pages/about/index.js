import React from 'react';

// Components
import Page from 'layout/page';

// Redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';
import About from 'layout/about';

class AboutPage extends Page {
  render() {
    return <About />;
  }
}

export default withRedux(
  initStore,
  null,
  null
)(AboutPage);
