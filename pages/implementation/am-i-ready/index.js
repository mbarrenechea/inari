import React from 'react';

// Components
import Page from 'layout/page';
import AmIReady from 'layout/implementation/am-i-ready';

// Redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';


class AmIReadyPage extends Page {
  render() {
    return <AmIReady />;
  }
}

export default withRedux(
  initStore,
  null,
  null
)(AmIReadyPage);
