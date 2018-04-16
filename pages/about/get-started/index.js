import React from 'react';

// Components
import Page from 'layout/page';
import GetStartedComponent from 'layout/about/get-started';

// Redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';


class GetStartedPage extends Page {
  render() {
    return <GetStartedComponent />;
  }
}

export default withRedux(
  initStore,
  null,
  null
)(GetStartedPage);
