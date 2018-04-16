import React from 'react';

// Components
import Page from 'layout/page';
import Contact from 'layout/implementation/contact';

// Redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';


class ContactPage extends Page {
  render() {
    return <Contact />;
  }
}

export default withRedux(
  initStore,
  null,
  null
)(ContactPage);
