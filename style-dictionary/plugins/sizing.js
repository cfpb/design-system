import { roundNumber, toKebab } from './path-utils.js';

const INTENT_ROOTS = new Set(['sass', 'css']);

const getTopLevelRoot = (token) =>
  Array.isArray(token?.path) && token.path.length ? token.path[0] : '';

const getUnitBucket = (token) =>
  Array.isArray(token?.path) && token.path.length > 1 ? token.path[1] : '';

const isNumberToken = (token) => (token?.$type ?? token?.type) === 'number';

const isIntentToken = (token) => INTENT_ROOTS.has(getTopLevelRoot(token));

// Apply rounding globally to number tokens so Figma float artifacts are
// normalized regardless of whether a file uses intent groups.
export const numberRoundTransform = {
  type: 'value',
  filter: isNumberToken,
  transform: (token) => {
    const value = token.$value ?? token.value;
    if (typeof value === 'string') return value;
    if (typeof value !== 'number') return value;
    return roundNumber(value);
  },
};

// Intent outputs use leaf names so `sass.dimension-px.base-font-size-px`
// and `css.dimension-px.base-font-size-px` both emit `base-font-size-px`.
export const intentLeafNameTransform = {
  type: 'name',
  filter: isIntentToken,
  transform: (token) =>
    toKebab(
      Array.isArray(token.path) && token.path.length
        ? token.path[token.path.length - 1]
        : token.name,
    ),
};

// Figma exports numbers without units. Intent files opt into unit semantics via
// the second path segment:
// - *.dimension-px.*  -> px
// - *.dimension-rem.* -> rem
// - *.dimension-em.*  -> em
// - *.unitless.*      -> unchanged
export const intentUnitByPathTransform = {
  type: 'value',
  filter: (token) => isIntentToken(token) && isNumberToken(token),
  transform: (token) => {
    const value = token.$value ?? token.value;
    if (typeof value === 'string') return value;
    if (typeof value !== 'number') return value;

    const unitBucket = getUnitBucket(token);
    if (unitBucket === 'dimension-px') return `${value}px`;
    if (unitBucket === 'dimension-rem') return `${value}rem`;
    if (unitBucket === 'dimension-em') return `${value}em`;
    return value;
  },
};
