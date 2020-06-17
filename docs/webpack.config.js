const path = require( 'path' );

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    'interstitial': './assets/js/interstitial.js',
    'main': './assets/js/main.js',
    'netlify-cms': './admin/src/netlify-cms.js',
    'search': './assets/js/search.js'
  },
  output: {
    path: path.resolve( __dirname, 'dist', 'js' ),
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  }
};
