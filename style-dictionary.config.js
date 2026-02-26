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
  createIsSizingToken,
  createSizingLeafNameTransform,
  createSizingUnitByPathTransform,
  getSizingTokenInfo,
  numberRoundTransform,
  registerSizingFilters,
} from './style-dictionary-utilities/sizing.js';
import { createCssVariablesNoSpaceCommasFormat } from './style-dictionary-utilities/css-variables-no-space-commas.js';
import { createPlatforms } from './style-dictionary-utilities/platforms.js';

const baseDir = 'packages/cfpb-design-system/src';
const tokenBase = path.resolve(baseDir, 'tokens');
const cssFormatName = 'css/variables-no-space-commas';

const { files, filtersToRegister } = buildFilesAndFilters({
  basePath: tokenBase,
  excludedFiles: ['sizing.json'],
  format: cssFormatName,
  fileOptions: {
    outputReferences: true,
    usesDtcg: true,
    selector: ':root',
    sort: 'name',
  },
});

// Sizing tokens are generated from a dedicated source file so they can use
// path-aware unit mapping (dimension-px/rem/em) while the rest of tokens use
// the default CSS transform group.
const { sizingTokenPath, sizingTokenAbsPosix, hasSizingTokenFile } =
  getSizingTokenInfo(tokenBase);
const isSizingToken = createIsSizingToken(sizingTokenAbsPosix);

const sizingUnitByPathTransform = createSizingUnitByPathTransform(isSizingToken);
const sizingLeafNameTransform = createSizingLeafNameTransform(isSizingToken);
const cssVariablesNoSpaceCommasFormat = createCssVariablesNoSpaceCommasFormat({
  getAliasInfo,
  toKebab,
  warn,
});

// Register custom transforms used by both generic CSS output and sizing output.
StyleDictionary.registerTransform({
  name: 'value/color-warn-normalize',
  ...colorWarnNormalizeTransform,
});
StyleDictionary.registerTransform({
  name: 'value/color-rgba-v4',
  ...colorRgbaV4Transform,
});
StyleDictionary.registerTransform({
  name: 'name/sizing-leaf-kebab',
  ...sizingLeafNameTransform,
});
StyleDictionary.registerTransform({
  name: 'value/number-round-4',
  ...numberRoundTransform,
});
StyleDictionary.registerTransform({
  name: 'value/sizing-unit-by-path',
  ...sizingUnitByPathTransform,
});

// Register transform groups:
// - css/without-group: default CSS output with color normalization
// - sizing/without-group: rounding + path-based unit conversion for sizing.json
StyleDictionary.registerTransformGroup({
  name: 'css/without-group',
  transforms: [
    'name/kebab',
    'value/color-warn-normalize',
    'color/css',
    'value/color-rgba-v4',
    'time/seconds',
    'size/px',
  ],
});
StyleDictionary.registerTransformGroup({
  name: 'sizing/without-group',
  transforms: [
    'name/sizing-leaf-kebab',
    'value/number-round-4',
    'value/sizing-unit-by-path',
  ],
});

StyleDictionary.registerFormat({
  name: cssFormatName,
  format: cssVariablesNoSpaceCommasFormat,
});

// Each token file gets a file-scoped filter so generated CSS files map 1:1
// with token JSON inputs.
for (const { filterName, fullPathAbsPosix } of filtersToRegister) {
  StyleDictionary.registerFilter({
    name: filterName,
    filter: (token) => toAbsPosix(token.filePath) === fullPathAbsPosix,
  });
}

// Register sizing-only filters for sass vs css branches in sizing.json.
registerSizingFilters(StyleDictionary, hasSizingTokenFile, isSizingToken);

const platforms = createPlatforms({
  baseDir,
  tokenBase,
  files,
  hasSizingTokenFile,
  sizingTokenPath,
  cssFormatName,
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
