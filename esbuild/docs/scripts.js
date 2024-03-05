const jsPaths = [
  './docs/assets/js/interstitial.js',
  './docs/assets/js/main.js',
  './docs/assets/js/admin/netlify-cms.js',
  './docs/assets/js/search.js',
];

/**
 * @param {object} baseConfig - The base esbuild configuration.
 * @returns {object} The modified configuration object.
 */
function scripts(baseConfig) {
  return {
    ...baseConfig,
    entryPoints: jsPaths,
    target: 'es6',
  };
}

export { scripts, jsPaths };
