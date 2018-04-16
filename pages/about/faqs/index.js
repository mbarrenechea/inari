import React from 'react';

// Components
import Page from 'layout/page';
import FaqsComponent from 'layout/about/faqs';

// Redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';


class FaqsPage extends Page {
  render() {
    return <FaqsComponent />;
  }
}

export default withRedux(
  initStore,
  null,
  null
)(FaqsPage);
