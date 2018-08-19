import React from 'react';

// Layout
import Layout from 'layout/layout';

// Components
import Hero from 'layout/home/hero';
import Services from 'layout/home/services';
import Diferentiation from 'layout/home/diferentiation';
import Team from 'layout/home/team';
import Testimonials from 'layout/home/testimonials';
import Contact from 'layout/home/contact';

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
        <Team />
        <Contact />
        <Testimonials />
      </Layout>
    );
  }
}

export default HomeComponent;
