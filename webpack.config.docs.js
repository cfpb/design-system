const autoprefixer = require( 'autoprefixer' );
const cssnano = require( 'cssnano' );
const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const TerserWebpackPlugin = require( 'terser-webpack-plugin' );

module.exports = ( env, argv ) => {

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
    devtool: 'source-map',
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
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: _postCSSPlugins()
                },
                sourceMap: true
              }
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true,
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
            loader: 'babel-loader',
            options: {
              presets: [ [ '@babel/preset-env', {

                /* Use useBuiltIns: 'usage' and set `debug: true` to see what
                   scripts require polyfilling. */
                useBuiltIns: false,
                debug: false
              } ] ]
            }
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

  /**
   * CSS plugins to add to PostCSS loader step.
   * Minimizer (cssnano) is added only in production mode.
   * @returns {Array} List of PostCSS plugins.
   */
  function _postCSSPlugins() {
    const plugins = [];
    plugins.push( autoprefixer );

    if ( argv.mode === 'production' ) {
      plugins.push( cssnano( {
        preset: 'default'
      } ) );
    }

    return plugins;
  }

  // Development-specific settings can be added here.
  if ( argv.mode === 'development' ) {
    config.mode = 'development';
  }

  // Production-specific settings can be added here.
  if ( argv.mode === 'production' ) {
    config.mode = 'production';
    config.optimization = {
      minimizer: [ new TerserWebpackPlugin() ]
    };
  }

  return config;
};
