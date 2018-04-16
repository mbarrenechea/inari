import React from 'react';

// Components
import Page from 'layout/page';
import Intro from 'layout/about/intro';

// Redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';


class IntroPage extends Page {
  render() {
    return <Intro />;
  }
}

export default withRedux(
  initStore,
  null,
  null
)(IntroPage);
