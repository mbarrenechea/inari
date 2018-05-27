import React from 'react';

// Layout
import Layout from 'layout/layout';

// Components
import Hero from 'layout/home/hero';
import Services from 'layout/home/services';
import Diferentiation from 'layout/home/diferentiation';

class HomeComponent extends React.Component {
  render() {
    return (
      <Layout
        title="Home"
        description="Home description"
      >
        <Hero />
        <Services />
        <Diferentiation />
      </Layout>
    );
  }
}

export default HomeComponent;
