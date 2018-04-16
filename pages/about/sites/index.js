import React from 'react';

// Components
import Page from 'layout/page';
import SitesComponent from 'layout/about/sites';

// Redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';


class SitesPage extends Page {
  render() {
    return <SitesComponent />;
  }
}

export default withRedux(
  initStore,
  null,
  null
)(SitesPage);
