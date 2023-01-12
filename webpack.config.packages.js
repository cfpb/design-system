/* ==========================================================================
   Settings for webpack JavaScript bundling system.
   ========================================================================== */

import { resolve } from 'path';
import TerserWebpackPlugin from 'terser-webpack-plugin';

/* Set warnings to true to show linter-style warnings.
   Set mangle to false and beautify to true to debug the output code. */
const COMMON_MINIFICATION_CONFIG = new TerserWebpackPlugin({
  parallel: true,
  extractComments: false,
  terserOptions: {
    ie8: false,
    ecma: 5,
    warnings: true,
    mangle: true,
    output: {
      comments: false,
      beautify: false,
    },
  },
});

const commonConf = {
  cache: true,
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [COMMON_MINIFICATION_CONFIG],
  },
  entry: {
    main: './packages/cfpb-design-system/src/cfpb-design-system.js',
  },
  output: {
    path: resolve('packages/cfpb-design-system/'),
    filename: 'cfpb-design-system.js',
  },
};

export default (env, argv) => {
  return commonConf;
};
