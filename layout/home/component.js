import React from 'react';

// Layout
import Layout from 'layout/layout';

// Components
import Hero from 'layout/home/hero';

class HomeComponent extends React.Component {
  render() {
    return (
      <Layout
        title="Home"
        description="Home description"
      >
        <Hero />
      </Layout>
    );
  }
}

export default HomeComponent;
