import { toPosix } from './path-utils.js';

export const createPlatforms = ({
  baseDir,
  tokenBase,
  defaultCssFiles,
  intentCssFiles,
  intentScssFiles,
}) => {
  const allTokenSources = [`${toPosix(tokenBase)}/**/*.json`];
  const platforms = {};

  // Default CSS platform handles files without intent roots, and non-intent
  // branches from mixed files.
  if (defaultCssFiles.length > 0) {
    platforms.css = {
      source: allTokenSources,
      transformGroup: 'css/without-group',
      buildPath: `${baseDir}/elements/`,
      files: defaultCssFiles,
    };
  }

  // Intent platforms are separated so they can use intent-specific transforms
  // (leaf naming + path-based unit mapping) without affecting default tokens.
  if (intentScssFiles.length > 0) {
    platforms.scssIntent = {
      source: allTokenSources,
      transformGroup: 'intent/without-group',
      buildPath: `${baseDir}/elements/`,
      files: intentScssFiles,
    };
  }

  if (intentCssFiles.length > 0) {
    platforms.cssIntent = {
      source: allTokenSources,
      transformGroup: 'intent/without-group',
      buildPath: `${baseDir}/elements/`,
      files: intentCssFiles,
    };
  }

  return platforms;
};
