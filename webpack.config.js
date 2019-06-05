const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    'netlify-cms': './admin/src/netlify-cms.js',
    'design-system': './assets/js/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
