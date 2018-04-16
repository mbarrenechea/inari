import React from 'react';

// Layout
import Layout from 'layout/layout';

class HomeComponent extends React.Component {
  render() {
    return (
      <Layout
        title="Home"
        description="Home description"
      >
        <h2>Home</h2>
      </Layout>
    );
  }
}

export default HomeComponent;
