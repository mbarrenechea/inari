import React from 'react';

// Layout
import Layout from 'layout/layout';

class AboutComponent extends React.Component {
  render() {
    return (
      <Layout
        title="About"
        description="About description"
      >
        <h2>About</h2>
      </Layout>
    );
  }
}

export default AboutComponent;
