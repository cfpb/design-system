import { readdirSync } from 'fs';
import { postCSSPlugin } from '../plugins/postcss.js';
import autoprefixer from 'autoprefixer';
import { glob } from 'glob';

const cssPaths = [];

const entryFileList = glob.sync('./packages/cfpb-*/src/cfpb-*.less');
entryFileList.forEach((file) => {
  cssPaths.push(file);
});

/**
 * @param {object} baseConfig - The base esbuild configuration.
 * @returns {object} The modified configuration object.
 */
function styles(baseConfig) {
  return {
    ...baseConfig,
    entryPoints: cssPaths,
    plugins: baseConfig.plugins.concat([
      postCSSPlugin({
        plugins: [autoprefixer],
        lessOptions: {
          math: 'always',
          paths: [
            ...readdirSync('./node_modules/@cfpb').map(
              (v) => `./node_modules/@cfpb/${v}/src`,
            ),
            './node_modules/',
          ],
        },
      }),
    ]),
  };
}

export { styles, cssPaths };
