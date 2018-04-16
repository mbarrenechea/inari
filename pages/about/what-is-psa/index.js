import React from 'react';

// Components
import Page from 'layout/page';
import WhatIsPsaComponent from 'layout/about/what-is-psa';

// Redux
import withRedux from 'next-redux-wrapper';
import { initStore } from 'store';


class WhatIsPsaPage extends Page {
  render() {
    return <WhatIsPsaComponent />;
  }
}

export default withRedux(
  initStore,
  null,
  null
)(WhatIsPsaPage);
