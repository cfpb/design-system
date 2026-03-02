import { logVerbosityLevels, logWarningLevels } from 'style-dictionary/enums';

const hexPattern = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
const rgbaPattern = /^rgba\(/i;

// Style Dictionary may represent token type as $type (DTCG) or type (legacy).
export const isColorToken = (token) => (token?.$type ?? token?.type) === 'color';

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

const getColorInfo = (token) => {
  const raw = getRawTokenValue(token);
  const hex = getHexValue(raw);
  const isRef = isReferenceValue(raw);
  const rgbaParts = !hex && !isRef ? parseRgbaParts(raw) : null;
  return { raw, hex, rgbaParts, isRef };
};

// Normalize Figma-style srgb object values into color/css-friendly channels.
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

// Extract Figma alias metadata used by the custom CSS format when outputReferences
// is enabled. This lets us preserve alias intent while detecting collisions.
export const getAliasInfo = (token) => {
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

// Emit warnings in a way that matches Style Dictionary log settings.
export const warn = (options, message) => {
  if (options.log?.warnings === logWarningLevels.error) throw new Error(message);

  if (
    options.log?.warnings !== logWarningLevels.disabled &&
    options.log?.verbosity !== logVerbosityLevels.silent
  ) {
    // eslint-disable-next-line no-console
    console.warn(message);
  }
};

// Preprocess color values before builtin color/css runs:
// - pass through reference strings
// - normalize srgb objects to channel values
// - emit maintainers warnings when coercion is required
export const colorWarnNormalizeTransform = {
  type: 'value',
  filter: isColorToken,
  transform: (token, _, options = {}) => {
    const info = getColorInfo(token);
    const value = normalizeColorInput(info.raw);

    if (info.raw && typeof info.raw === 'object' && !info.hex && !info.rgbaParts) {
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

// Normalize rgba(...) values to CSS Color 4 "space-separated" syntax so emitted
// tokens are consistent regardless of source formatting.
export const colorRgbaV4Transform = {
  type: 'value',
  filter: isColorToken,
  transform: (token) => {
    const info = getColorInfo(token);
    if (!info.rgbaParts) return token.$value ?? token.value;
    const { r, g, b, a } = info.rgbaParts;
    return `rgba(${r} ${g} ${b} / ${a})`;
  },
};
