/* ==========================================================================
   Settings for webpack JavaScript bundling system.
   ========================================================================== */

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import { fileURLToPath } from 'url';
import glob from 'glob';
import FileManagerPlugin from 'filemanager-webpack-plugin';

export default (env, argv) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  /**
   * CSS plugins to add to PostCSS loader step.
   * Minimizer (cssnano) is added only in production mode.
   *
   * @returns {Array} List of PostCSS plugins.
   */
  function _postCSSPlugins() {
    const plugins = [];
    plugins.push(autoprefixer);

    if (argv.mode === 'production') {
      plugins.push(
        cssnano({
          preset: 'default',
        })
      );
    }

    return plugins;
  }

  const entryFileList = glob.sync('./packages/cfpb-*/src/cfpb-*.less');
  const entryFileObj = {};
  entryFileList.forEach((file) => {
    entryFileObj[path.parse(file).name] = file;
  });

  entryFileObj['cfpb-design-system'] =
    './packages/cfpb-design-system/src/cfpb-design-system.js';

  const config = {
    entry: entryFileObj,
    output: {
      path: path.resolve(__dirname, 'packages'),
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name]/[name].css',
      }),
      new FileManagerPlugin({
        events: {
          onEnd: {
            copy: [
              {
                source: './packages/cfpb-design-system.js',
                destination:
                  './packages/cfpb-design-system/cfpb-design-system.js',
                options: {
                  overwrite: true,
                },
              },
            ],
            delete: ['./packages/cfpb-**.js'],
          },
        },
      }),
    ],
    module: {
      rules: [
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: _postCSSPlugins(),
                },
                sourceMap: true,
              },
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true,
                lessOptions: {
                  paths: [path.resolve(__dirname, 'node_modules')],
                },
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'packages'),
          ],
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    /* Use useBuiltIns: 'usage' and set `debug: true` to see what
                   scripts require polyfilling. */
                    useBuiltIns: false,
                    debug: false,
                  },
                ],
              ],
            },
          },
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader',
        },
      ],
    },
  };

  // Development-specific settings can be added here.
  if (argv.mode === 'development') {
    config.mode = 'development';
  }

  // Production-specific settings can be added here.
  if (argv.mode === 'production') {
    config.mode = 'production';
    config.optimization = {
      minimizer: [new TerserWebpackPlugin()],
    };
  }

  return config;
};
