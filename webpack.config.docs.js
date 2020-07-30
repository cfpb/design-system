const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const TerserJSPlugin = require( 'terser-webpack-plugin' );

const config = {
  entry: {
    'interstitial': [ './docs/assets/js/interstitial.js' ],
    'main': [ './docs/assets/js/main.js', './docs/assets/css/main.less' ],
    'netlify-cms': [ './docs/admin/src/netlify-cms.js' ],
    'search': [ './docs/assets/js/search.js' ]
  },
  output: {
    path: path.resolve( __dirname, 'docs', 'dist' ),
    filename: 'js/[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin(
      {
        filename: 'css/[name].css'
      }
    )
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                paths: [
                  path.resolve( __dirname, 'node_modules' )
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [
          path.resolve( __dirname, 'node_modules' ),
          path.resolve( __dirname, 'packages' )
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

module.exports = ( env, argv ) => {
  // Development-specific settings can be added here.
  if ( argv.mode === 'development' ) {
    config.mode = 'development';
    config.devtool = 'source-map';
  }

  // Production-specific settings can be added here.
  if ( argv.mode === 'production' ) {
    config.mode = 'production';
    config.optimization = {
      minimizer: [ new TerserJSPlugin(), new OptimizeCSSAssetsPlugin() ]
    };
  }

  return config;
};
