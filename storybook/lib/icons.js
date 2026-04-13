const iconModules = import.meta.glob('../../docs/_includes/icons/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const includePattern = /{%\s+include\s+\/?icons\/([\w-]+)\.svg\s+%}/g;

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

/**
 * @param {string} name
 * @returns {string}
 */
export function getInlineIconSvg(name) {
  const path = `../../docs/_includes/icons/${name}.svg`;
  return iconModules[path] || '';
}

/**
 * @param {string} value
 * @returns {string}
 */
export function replaceLegacyIconIncludes(value) {
  return value.replace(includePattern, (_, iconName) =>
    getInlineIconSvg(iconName),
  );
}

/**
 * Escape a code snippet while leaving legacy icon includes rendered inline so
 * the snippet matches the Jekyll docs presentation
 * @param {string} value
 * @returns {string}
 */
export function renderLegacyIconSnippet(value) {
  const placeholders = [];
  const withPlaceholders = value.replace(includePattern, (_, iconName) => {
    const placeholder = `__DS_ICON_PLACEHOLDER_${placeholders.length}__`;
    placeholders.push({
      placeholder,
      svg: getInlineIconSvg(iconName),
    });
    return placeholder;
  });

  let escaped = escapeHtml(withPlaceholders);

  for (const { placeholder, svg } of placeholders) {
    escaped = escaped.replace(placeholder, svg);
  }

  return escaped;
}
