const webpack = require('webpack');

const withSass = require('@zeit/next-sass');

const sassAssetUrl = process.env.NODE_ENV === 'production' ? '/inari' : '';

module.exports = withSass({
  sassLoaderOptions: { data: `$asset-url: '${sassAssetUrl}';` },
  webpack(config) {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'process.env.API_URL': JSON.stringify(process.env.API_URL),
        'process.env.GOOGLE_ANALYTICS': JSON.stringify(process.env.GOOGLE_ANALYTICS)
      })
    );

    return config;
  },
  exportPathMap() {
    return { '/': { page: '/home' } };
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/inari/' : ''
});
