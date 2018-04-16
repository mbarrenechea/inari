import React from 'react';
import PropTypes from 'prop-types';
import HeadNext from 'next/head';

class Head extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired, // Some pages don't have any title (think embed)
    description: PropTypes.string.isRequired
  };

  render() {
    const { title, description } = this.props;

    return (
      <HeadNext>
        <title>{`${title} | Inari`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Vizzuality" />

        <link rel="icon" href="/static/favicon.ico" />
        <link rel="stylesheet" media="screen" href="https://fonts.googleapis.com/css?family=Lato:400,300,700" />

        {/* Mobile Adress background */}
        {/* Chrome, Firefox OS and Opera */}
        <meta name="theme-color" content="#c32d7b" />
        {/* Windows Phone */}
        <meta name="msapplication-navbutton-color" content="#c32d7b" />
        {/* iOS Safari */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
      </HeadNext>
    );
  }
}

export default Head;
