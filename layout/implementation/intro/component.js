import React from 'react';

// Layout
import Layout from 'layout/layout';

class IntroComponent extends React.Component {
  render() {
    return (
      <Layout
        title="Intro"
        description="Intro description"
      >
        <h2>Intro</h2>
      </Layout>
    );
  }
}

export default IntroComponent;
