const path = require( 'path' );

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    'interstitial': './docs/assets/js/interstitial.js',
    'main': './docs/assets/js/main.js',
    'netlify-cms': './docs/admin/src/netlify-cms.js',
    'search': './docs/assets/js/search.js'
  },
  output: {
    path: path.resolve( __dirname, 'docs', 'dist', 'js' ),
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          path.resolve( __dirname, './node_modules' ),
          path.resolve( __dirname, './packages' )
        ],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(html)$/,
        exclude: [
          path.resolve( __dirname, 'node_modules' ),
          path.resolve( __dirname, 'packages' )
        ],
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
