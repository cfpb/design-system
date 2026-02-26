// Style Dictionary entrypoint.
// This file intentionally stays as a thin composition layer:
// - utility modules hold transform/filter/format implementation details
// - this file wires registration order and platform outputs together
import StyleDictionary from 'style-dictionary';
import {
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from 'style-dictionary/enums';
import path from 'path';
import { toAbsPosix, toKebab, toPosix } from './style-dictionary-utilities/path-utils.js';
import { buildFilesAndFilters } from './style-dictionary-utilities/file-discovery.js';
import {
  colorRgbaV4Transform,
  colorWarnNormalizeTransform,
  getAliasInfo,
  warn,
} from './style-dictionary-utilities/color.js';
import {
  intentLeafNameTransform,
  intentUnitByPathTransform,
  numberRoundTransform,
} from './style-dictionary-utilities/sizing.js';
import { createCssVariablesNoSpaceCommasFormat } from './style-dictionary-utilities/css-variables-no-space-commas.js';
import { createPlatforms } from './style-dictionary-utilities/platforms.js';

const baseDir = 'packages/cfpb-design-system/src';
const tokenBase = path.resolve(baseDir, 'tokens');
const cssFormatName = 'css/variables-no-space-commas';
// Keep file-level options centralized so default and intent outputs stay aligned
// on reference behavior and deterministic ordering.
const sharedCssFileOptions = {
  outputReferences: true,
  usesDtcg: true,
  selector: ':root',
  sort: 'name',
};
const sharedScssFileOptions = {
  outputReferences: true,
  usesDtcg: true,
  sort: 'name',
};

const { defaultCssFiles, intentCssFiles, intentScssFiles, filtersToRegister } =
  buildFilesAndFilters({
    basePath: tokenBase,
    cssFormat: cssFormatName,
    cssFileOptions: sharedCssFileOptions,
    scssFileOptions: sharedScssFileOptions,
  });

const cssVariablesNoSpaceCommasFormat = createCssVariablesNoSpaceCommasFormat({
  getAliasInfo,
  toKebab,
  warn,
});

// Register custom transforms used by both default and intent outputs.
StyleDictionary.registerTransform({
  name: 'value/color-warn-normalize',
  ...colorWarnNormalizeTransform,
});
StyleDictionary.registerTransform({
  name: 'value/color-rgba-v4',
  ...colorRgbaV4Transform,
});
StyleDictionary.registerTransform({
  name: 'name/intent-leaf-kebab',
  ...intentLeafNameTransform,
});
StyleDictionary.registerTransform({
  name: 'value/number-round-4',
  ...numberRoundTransform,
});
StyleDictionary.registerTransform({
  name: 'value/intent-unit-by-path',
  ...intentUnitByPathTransform,
});

// Register transform groups:
// - css/without-group: default CSS output
// - intent/without-group: sass/css top-level intent outputs with unit-by-path
StyleDictionary.registerTransformGroup({
  name: 'css/without-group',
  transforms: [
    'name/kebab',
    'value/number-round-4',
    'value/color-warn-normalize',
    'color/css',
    'value/color-rgba-v4',
    'time/seconds',
    'size/px',
  ],
});
StyleDictionary.registerTransformGroup({
  name: 'intent/without-group',
  transforms: [
    'name/intent-leaf-kebab',
    'value/number-round-4',
    'value/intent-unit-by-path',
    'value/color-warn-normalize',
    'color/css',
    'value/color-rgba-v4',
    'time/seconds',
    'size/px',
  ],
});

StyleDictionary.registerFormat({
  name: cssFormatName,
  format: cssVariablesNoSpaceCommasFormat,
});

// Each token file gets a file-scoped filter so generated CSS files map 1:1
// with token JSON inputs. includeRoots/excludeRoots further split mixed files
// so intent groups (sass/css) and non-intent groups are emitted separately.
for (const {
  filterName,
  fullPathAbsPosix,
  includeRoots,
  excludeRoots,
} of filtersToRegister) {
  const includeSet = includeRoots ? new Set(includeRoots) : null;
  const excludeSet = excludeRoots ? new Set(excludeRoots) : null;
  StyleDictionary.registerFilter({
    name: filterName,
    filter: (token) => {
      if (toAbsPosix(token.filePath) !== fullPathAbsPosix) return false;
      const topLevel =
        Array.isArray(token.path) && token.path.length ? token.path[0] : '';
      if (includeSet && !includeSet.has(topLevel)) return false;
      if (excludeSet && excludeSet.has(topLevel)) return false;
      return true;
    },
  });
}

const platforms = createPlatforms({
  baseDir,
  tokenBase,
  defaultCssFiles,
  intentCssFiles,
  intentScssFiles,
});

export default {
  usesDtcg: true,
  source: [`${toPosix(tokenBase)}/**/*.json`],
  log: {
    warnings: logWarningLevels.warn,
    verbosity: logVerbosityLevels.verbose,
    errors: { brokenReferences: logBrokenReferenceLevels.throw },
  },
  platforms,
};
