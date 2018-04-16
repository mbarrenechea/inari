import React from 'react';

// Components
import Page from 'layout/page';
import Guides from 'layout/implementation/guides';

// Redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';


class GuidesPage extends Page {
  render() {
    return <Guides />;
  }
}

export default withRedux(
  initStore,
  null,
  null
)(GuidesPage);
