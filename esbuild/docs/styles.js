import { readdirSync } from 'fs';
import { postCSSPlugin } from '../plugins/postcss.js';
import autoprefixer from 'autoprefixer';

const cssPaths = ['./docs/assets/css/main.less'];

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
