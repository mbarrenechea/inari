import React from 'react';
import PropTypes from 'prop-types';

// Utils
import { initGA, logPageView } from 'utils/analytics';

// Components
import Head from 'layout/head';
import Header from 'layout/header';
// import Footer from 'layout/footer';

class LayoutApp extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };

  componentDidMount() {
    // Google Analytics
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    const { title, description } = this.props;

    return (
      <div id="#main" className="l-page">
        <Head
          title={title}
          description={description}
        />

        <Header />

        {this.props.children}

        {/* <Footer /> */}
      </div>
    );
  }
}

export default LayoutApp;
