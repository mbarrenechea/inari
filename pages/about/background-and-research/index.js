import React from 'react';

// Components
import Page from 'layout/page';
import BackgroundResearchComponent from 'layout/about/background-and-research';

// Redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';


class BackgroundResearchPage extends Page {
  render() {
    return <BackgroundResearchComponent />;
  }
}

export default withRedux(
  initStore,
  null,
  null
)(BackgroundResearchPage);
