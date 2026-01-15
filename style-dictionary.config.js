// style-dictionary.config.js — ESM
// Summary:
// - Builds one CSS file per token JSON under packages/cfpb-design-system/src/tokens.
// - Uses DTCG $type for transforms; names are full-path kebab-case.
// - Prefers hex colors, emits CSS v4 rgba() only when RGBA is present and hex is absent.
// - Preserves Figma alias metadata as var(--...) with collision checks.
// - Outputs tight comma spacing in CSS values without touching comments.
import StyleDictionary from 'style-dictionary';
import fs from 'fs';
import path from 'path';
import {
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
  propertyFormatNames,
} from 'style-dictionary/enums';
import { fileHeader, formattedVariables } from 'style-dictionary/utils';

// Paths and shared constants for token IO and formatting.
const baseDir = 'packages/cfpb-design-system/src';
const tokenBase = path.resolve(baseDir, 'tokens');
const cssFormatName = 'css/variables-no-space-commas';
const hexPattern = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
const rgbaPattern = /^rgba\(/i;

const toPosix = (fsPath) => fsPath.split(path.sep).join('/');
const toAbsPosix = (fsPath) =>
  toPosix(path.isAbsolute(fsPath) ? fsPath : path.resolve(fsPath));
const toKebab = (value) =>
  String(value)
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();

/**
 * Return nested subdirectories in depth-first order.
 * @param {string} dirPath
 * @returns {string[]}
 */
function getAllDirs(dirPath) {
  const out = [];
  for (const dirent of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (dirent.isDirectory() && !dirent.name.startsWith('.')) {
      const full = path.join(dirPath, dirent.name);
      out.push(full, ...getAllDirs(full));
    }
  }
  return out;
}

// Emit warnings in a way that matches Style Dictionary log settings.
const warn = (options, message) => {
  if (options.log?.warnings === logWarningLevels.error)
    throw new Error(message);
  if (
    options.log?.warnings !== logWarningLevels.disabled &&
    options.log?.verbosity !== logVerbosityLevels.silent
  ) {
    // eslint-disable-next-line no-console
    console.warn(message);
  }
};

// Normalize comma spacing inside single-line CSS values, leaving comments untouched.
const normalizeCommaSpacing = (value) =>
  value.replace(/(:[^;\n]*)(;)/g, (match, valuePart, semi) =>
    valuePart.includes(',')
      ? `${valuePart.replace(/\s*,\s*/g, ',')}${semi}`
      : match,
  );

// Build one CSS output per token JSON and register per-file filters.
const buildFilesAndFilters = (basePath) => {
  const tokenDirs = [basePath, ...getAllDirs(basePath)];
  const files = [];
  const filtersToRegister = [];

  for (const dirPath of tokenDirs) {
    const jsonFiles = fs
      .readdirSync(dirPath)
      .filter((file) => file.endsWith('.json'));
    for (const jsonFile of jsonFiles) {
      const fullPathAbsPosix = toAbsPosix(path.join(dirPath, jsonFile));
      const relDir = path.relative(basePath, dirPath);
      const cssFileName = `${path.basename(jsonFile, '.json')}.css`;
      const destination =
        relDir === '' ? cssFileName : `${toPosix(relDir)}/${cssFileName}`;
      const filterName = `filter__${(relDir || '_').replace(
        /[^a-zA-Z0-9_/-]/g,
        '_',
      )}__${jsonFile.replace(/[^a-zA-Z0-9_.-]/g, '_')}`.replace(
        /[^a-zA-Z0-9_]/g,
        '_',
      );
      filtersToRegister.push({ filterName, fullPathAbsPosix });
      files.push({
        destination,
        format: cssFormatName,
        filter: filterName,
        options: { outputReferences: true, usesDtcg: true, selector: ':root' },
      });
    }
  }

  return { files, filtersToRegister };
};

// Color helpers for DTCG $value shapes and css rgba passthrough.
const isColorToken = (token) => (token?.$type ?? token?.type) === 'color';
const getRawTokenValue = (token) =>
  token?.original?.$value ??
  token?.$value ??
  token?.original?.value ??
  token?.value;
const isReferenceValue = (value) =>
  typeof value === 'string' &&
  value.trim().startsWith('{') &&
  value.trim().endsWith('}');
const getHexValue = (value) => {
  if (typeof value === 'string') {
    const trimmed = value.trim();
    return hexPattern.test(trimmed) ? trimmed : null;
  }
  const hex =
    value && typeof value === 'object' ? value.hex || value.hexa : null;
  return typeof hex === 'string' && hexPattern.test(hex.trim())
    ? hex.trim()
    : null;
};
const parseRgbaParts = (value) => {
  if (!value) return null;
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!rgbaPattern.test(trimmed)) return null;
    const start = trimmed.indexOf('(');
    const end = trimmed.lastIndexOf(')');
    if (start === -1 || end === -1 || end <= start + 1) return null;
    const body = trimmed.slice(start + 1, end).trim();
    if (!body) return null;
    if (body.includes('/')) {
      const [rgbPart, alphaPart] = body.split('/');
      const rgbValues = rgbPart
        .replace(/,/g, ' ')
        .trim()
        .split(/\s+/)
        .filter(Boolean);
      const alpha = alphaPart.trim();
      return rgbValues.length === 3 && alpha
        ? { r: rgbValues[0], g: rgbValues[1], b: rgbValues[2], a: alpha }
        : null;
    }
    const parts = body.split(/[\s,]+/).filter(Boolean);
    return parts.length === 4
      ? { r: parts[0], g: parts[1], b: parts[2], a: parts[3] }
      : null;
  }
  if (typeof value === 'object' && Array.isArray(value.components)) {
    const [r, g, b] = value.components;
    const a = value.alpha ?? value.opacity;
    return a === undefined || a === null ? null : { r, g, b, a };
  }
  return null;
};
// Describe a token's color payload to decide hex vs rgba vs normalization.
const getColorInfo = (token) => {
  const raw = getRawTokenValue(token);
  const hex = getHexValue(raw);
  const isRef = isReferenceValue(raw);
  const rgbaParts = !hex && !isRef ? parseRgbaParts(raw) : null;
  return { raw, hex, rgbaParts, isRef };
};

// Convert DTCG color objects to a shape color/css can consume.
const normalizeColorInput = (value) => {
  if (!value || typeof value !== 'object') return value;
  if (value.colorSpace === 'srgb' && Array.isArray(value.components)) {
    const hex = getHexValue(value);
    if (hex) return hex;
    const [r, g, b] = value.components;
    const a = value.alpha ?? value.opacity;
    const toChannel = (channelValue) =>
      channelValue <= 1
        ? Math.round(channelValue * 255)
        : Math.round(channelValue);
    const out = {
      r: toChannel(r),
      g: toChannel(g),
      b: toChannel(b),
    };
    if (a !== undefined && a !== null) {
      out.a = a > 1 && a <= 255 ? a / 255 : a;
    }
    return out;
  }
  return value;
};

// Prefer Figma alias metadata so CSS keeps var(--alias) instead of resolved values.
const getAliasInfo = (token) => {
  const aliasData =
    token?.$extensions?.['com.figma.aliasData'] ??
    token?.extensions?.['com.figma.aliasData'];
  return aliasData?.targetVariableName
    ? {
        name: aliasData.targetVariableName,
        setName: aliasData.targetVariableSetName,
      }
    : null;
};

const { files, filtersToRegister } = buildFilesAndFilters(tokenBase);

// Warn when we must normalize non-hex color objects (except RGBA passthrough).
const colorWarnNormalizeTransform = {
  type: 'value',
  filter: isColorToken,
  transform: (token, _, options = {}) => {
    const info = getColorInfo(token);
    const value = normalizeColorInput(info.raw);
    if (
      info.raw &&
      typeof info.raw === 'object' &&
      !info.hex &&
      !info.rgbaParts
    ) {
      const tokenName =
        token.name ||
        (Array.isArray(token.path) ? token.path.join('.') : 'unknown');
      const tokenFile = token.filePath || 'unknown file';
      warn(
        options,
        `Color token ${tokenName} in ${tokenFile} will be normalized by color/css.`,
      );
    }
    return value;
  },
};

// Emit CSS Color v4 rgba() only when RGBA is present and hex is absent.
const colorRgbaV4Transform = {
  type: 'value',
  filter: isColorToken,
  transform: (token) => {
    const info = getColorInfo(token);
    if (!info.rgbaParts) return token.$value ?? token.value;
    const { r, g, b, a } = info.rgbaParts;
    return `rgba(${r} ${g} ${b} / ${a})`;
  },
};

// Custom CSS formatter that preserves alias refs and tightens commas.
const cssVariablesNoSpaceCommasFormat = async ({
  dictionary,
  options = {},
  file,
}) => {
  const selector = Array.isArray(options.selector)
    ? options.selector
    : options.selector
      ? [options.selector]
      : [':root'];
  const { outputReferences, outputReferenceFallbacks, usesDtcg, formatting } =
    options;
  const header = await fileHeader({
    file,
    formatting: formatting ? { ...formatting, prefix: undefined } : formatting,
    options,
  });
  const indentation = formatting?.indentation || '  ';
  const nestInSelector = (content, currentSelector, indent) =>
    `${indent}${currentSelector} {\n${content}\n${indent}}`;
  const aliasInfoByName = new Map();
  if (outputReferences && usesDtcg) {
    for (const token of dictionary.allTokens) {
      const aliasInfo = getAliasInfo(token);
      if (!aliasInfo?.name) continue;
      const aliasKey = toKebab(aliasInfo.name);
      const record = aliasInfoByName.get(aliasKey) || {
        count: 0,
        setNames: new Set(),
        missingSetName: false,
      };
      record.count += 1;
      if (aliasInfo.setName) record.setNames.add(toKebab(aliasInfo.setName));
      else record.missingSetName = true;
      aliasInfoByName.set(aliasKey, record);
    }
  }
  const warnedAliases = new Set();
  const dictionaryForAliases =
    outputReferences && usesDtcg
      ? {
          ...dictionary,
          allTokens: dictionary.allTokens.map((token) => {
            const aliasInfo = getAliasInfo(token);
            if (!aliasInfo) return token;
            const aliasKey = toKebab(aliasInfo.name);
            const record = aliasInfoByName.get(aliasKey);
            const hasCollision = record && record.count > 1;
            if (hasCollision && record.missingSetName) {
              throw new Error(
                `Alias name collision for "${aliasInfo.name}" without targetVariableSetName. ` +
                  `Cannot disambiguate in ${token.filePath || 'unknown file'}.`,
              );
            }
            if (
              hasCollision &&
              record.setNames.size > 1 &&
              !warnedAliases.has(aliasKey)
            ) {
              warn(
                options,
                `Alias name collision for "${aliasInfo.name}". ` +
                  'Multiple collections share the same alias name.',
              );
              warnedAliases.add(aliasKey);
            }
            const aliasVar = `var(--${aliasKey})`;
            return {
              ...token,
              value: aliasVar,
              $value: aliasVar,
              original: {
                ...token.original,
                value: aliasVar,
                $value: aliasVar,
              },
            };
          }),
        }
      : dictionary;

  const variablesNoCommaSpaces = normalizeCommaSpacing(
    formattedVariables({
      format: propertyFormatNames.css,
      dictionary: dictionaryForAliases,
      outputReferences,
      outputReferenceFallbacks,
      formatting: {
        ...formatting,
        indentation: indentation.repeat(selector.length),
      },
      usesDtcg,
    }),
  );
  return (
    header +
    selector
      .reverse()
      .reduce(
        (content, currentSelector, index) =>
          nestInSelector(
            content,
            currentSelector,
            indentation.repeat(selector.length - 1 - index),
          ),
        variablesNoCommaSpaces,
      ) +
    '\n'
  );
};

StyleDictionary.registerTransform({
  name: 'value/color-warn-normalize',
  ...colorWarnNormalizeTransform,
});
StyleDictionary.registerTransform({
  name: 'value/color-rgba-v4',
  ...colorRgbaV4Transform,
});
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
StyleDictionary.registerFormat({
  name: cssFormatName,
  format: cssVariablesNoSpaceCommasFormat,
});

for (const { filterName, fullPathAbsPosix } of filtersToRegister) {
  StyleDictionary.registerFilter({
    name: filterName,
    filter: (token) => toAbsPosix(token.filePath) === fullPathAbsPosix,
  });
}

export default {
  usesDtcg: true,
  source: [`${toPosix(tokenBase)}/**/*.json`],
  log: {
    warnings: logWarningLevels.warn,
    verbosity: logVerbosityLevels.verbose,
    errors: { brokenReferences: logBrokenReferenceLevels.throw },
  },
  platforms: {
    css: {
      transformGroup: 'css/without-group',
      buildPath: `${baseDir}/elements/`,
      files,
    },
  },
};
