import { toPosix } from './path-utils.js';

export const createPlatforms = ({
  baseDir,
  tokenBase,
  files,
  hasSizingTokenFile,
  sizingTokenPath,
  cssFormatName,
}) => {
  // Dedicated sizing platforms are optional and only enabled when sizing.json
  // is present. This allows incremental adoption in branches/environments.
  const sizingPlatforms = hasSizingTokenFile
    ? {
        scssSizing: {
          source: [toPosix(sizingTokenPath)],
          transformGroup: 'sizing/without-group',
          buildPath: `${baseDir}/elements/`,
          files: [
            {
              // Emits Sass variables consumed via sizing-vars.scss.
              destination: 'abstracts/sizing-tokens.scss',
              format: 'scss/variables',
              filter: 'filter__sizing__sass',
              options: {
                outputReferences: true,
                usesDtcg: true,
                sort: 'name',
              },
            },
          ],
        },
        cssSizing: {
          source: [toPosix(sizingTokenPath)],
          transformGroup: 'sizing/without-group',
          buildPath: `${baseDir}/elements/`,
          files: [
            {
              // Emits runtime CSS custom properties for the sizing css branch.
              destination: 'abstracts/sizing-tokens-custom-props.css',
              format: cssFormatName,
              filter: 'filter__sizing__css',
              options: {
                outputReferences: true,
                usesDtcg: true,
                selector: ':root',
                sort: 'name',
              },
            },
          ],
        },
      }
    : {};

  return {
    // Generic CSS output for all token JSON files except sizing.json, which is
    // handled by the dedicated sizing platforms above.
    css: {
      source: [
        `${toPosix(tokenBase)}/**/*.json`,
        `!${toPosix(tokenBase)}/**/sizing.json`,
      ],
      transformGroup: 'css/without-group',
      buildPath: `${baseDir}/elements/`,
      files,
    },
    ...sizingPlatforms,
  };
};
