/**
 * Normalize "childData" style inputs into an array.
 * Accepts:
 *   - JS arrays
 *   - JSON strings
 *   - JSON-like strings with single quotes
 *
 * @param {Array|String} input
 * @param {Object} options - optional settings.
 * @param {Boolean} options.allowSingleQuotes - default true.
 * @returns {Array|null} Parsed array/string, or null if invalid.
 */
export function parseChildData(input, options = {}) {
  const { allowSingleQuotes = true } = options;

  if (!input) return null;

  // Already an array - most desirable case.
  if (Array.isArray(input)) {
    return input;
  }

  if (typeof input !== 'string') {
    console.error('childData must be a string or array.');
    return null;
  }

  let text = input.trim();

  // String is empty after trim.
  if (!text) return null;

  // Optional conversation: single -> double quotes for HTML convenience.
  if (allowSingleQuotes) {
    text = text.replace(/'/g, '"');
  }

  try {
    const parsed = JSON.parse(text);

    if (!Array.isArray(parsed)) {
      console.error('childData JSON must parse to an array.');
      return null;
    }

    return parsed;
  } catch (err) {
    console.error('Failed to parse childData JSON:', err);
    return null;
  }
}
