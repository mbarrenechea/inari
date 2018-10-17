import React from 'react';
import PropTypes from 'prop-types';
import HeadNext from 'next/head';

const stylesURL = '';

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

        <link rel="icon" href={`${stylesURL}/static/favicon.ico`} />

        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
      </HeadNext>
    );
  }
}

export default Head;
