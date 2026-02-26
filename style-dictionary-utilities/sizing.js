import fs from 'fs';
import path from 'path';
import { roundNumber, toAbsPosix, toKebab } from './path-utils.js';

// Locate the dedicated sizing token source used for SCSS variables and CSS
// custom properties outputs.
export const getSizingTokenInfo = (tokenBase) => {
  const sizingTokenPath = path.resolve(tokenBase, 'abstracts/sizing.json');
  return {
    sizingTokenPath,
    sizingTokenAbsPosix: toAbsPosix(sizingTokenPath),
    hasSizingTokenFile: fs.existsSync(sizingTokenPath),
  };
};

// Match tokens by source file path to avoid accidentally applying sizing
// transforms to non-sizing tokens.
export const createIsSizingToken = (sizingTokenAbsPosix) =>
  (token) =>
    Boolean(token?.filePath) && toAbsPosix(token.filePath) === sizingTokenAbsPosix;

export const isSizingNumberToken = (token) =>
  (token?.$type ?? token?.type) === 'number';

const getSizingPathUnit = (token) =>
  Array.isArray(token?.path) && token.path.length > 1 ? token.path[1] : '';

// Figma number exports can carry floating-point artifacts; round them first.
export const numberRoundTransform = {
  type: 'value',
  filter: isSizingNumberToken,
  transform: (token) => {
    const value = token.$value ?? token.value;
    if (typeof value === 'string') return value;
    if (typeof value !== 'number') return value;
    return roundNumber(value);
  },
};

// Unit mapping is path-driven because Figma exports numbers without units.
// Expected taxonomy in sizing.json:
// - sass.dimension-px.*
// - sass.dimension-rem.*
// - sass.dimension-em.*
// - css.unitless.*
export const createSizingUnitByPathTransform = (isSizingToken) => ({
  type: 'value',
  filter: isSizingToken,
  transform: (token) => {
    const value = token.$value ?? token.value;
    if (typeof value === 'string') return value;
    if (typeof value !== 'number') return value;

    const unitBucket = getSizingPathUnit(token);
    if (unitBucket === 'dimension-px') return `${value}px`;
    if (unitBucket === 'dimension-rem') return `${value}rem`;
    if (unitBucket === 'dimension-em') return `${value}em`;
    return value;
  },
});

// Sizing SCSS variables should use leaf token names (not full token paths).
export const createSizingLeafNameTransform = (isSizingToken) => ({
  type: 'name',
  filter: isSizingToken,
  transform: (token) =>
    toKebab(
      Array.isArray(token.path) && token.path.length
        ? token.path[token.path.length - 1]
        : token.name,
    ),
});

// Register dedicated filters for the two sizing output branches:
// - sass: emits SCSS variables
// - css: emits CSS custom properties
export const registerSizingFilters = (
  StyleDictionary,
  hasSizingTokenFile,
  isSizingToken,
) => {
  if (!hasSizingTokenFile) return;

  StyleDictionary.registerFilter({
    name: 'filter__sizing__sass',
    filter: (token) => isSizingToken(token) && token.path?.[0] === 'sass',
  });

  StyleDictionary.registerFilter({
    name: 'filter__sizing__css',
    filter: (token) => isSizingToken(token) && token.path?.[0] === 'css',
  });
};
