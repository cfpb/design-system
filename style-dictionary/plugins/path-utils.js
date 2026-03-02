import path from 'path';

const numberRoundingPrecision = 4;

// Normalize any file path to forward slashes for stable cross-platform matching.
export const toPosix = (fsPath) => fsPath.split(path.sep).join('/');

// Normalize relative/absolute file paths into absolute POSIX form.
export const toAbsPosix = (fsPath) =>
  toPosix(path.isAbsolute(fsPath) ? fsPath : path.resolve(fsPath));

// Convert token names/aliases into CSS-friendly kebab-case names.
export const toKebab = (value) =>
  String(value)
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();

// Round numbers while stripping insignificant trailing zeros.
// Example: 0.5170000195503235 -> 0.517 (with default precision=4)
export const roundNumber = (value, precision = numberRoundingPrecision) => {
  const factor = 10 ** precision;
  const rounded = Math.round((value + Number.EPSILON) * factor) / factor;
  return Number.isInteger(rounded)
    ? rounded
    : Number(rounded.toFixed(precision).replace(/\.?0+$/, ''));
};
