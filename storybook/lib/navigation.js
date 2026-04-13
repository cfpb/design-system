import YAML from 'yaml';

function dedupeAdjacentSegments(segments) {
  return segments.filter(
    (segment, index) =>
      index === 0 ||
      segment.toLowerCase() !== segments[index - 1]?.toLowerCase(),
  );
}

/**
 * @param {string} source
 * @returns {object}
 */
export function parseNavigationTree(source) {
  return YAML.parse(source) || {};
}

/**
 * @param {object} navigationTree
 * @param {string} pageTitle
 * @returns {string | null}
 */
export function findFirstLevelHeadingForPage(navigationTree, pageTitle) {
  const firstLevel = navigationTree['first-level'] || [];

  for (const first of firstLevel) {
    const directItems = first['nav-items'] || [];
    if (directItems.some((item) => item.page === pageTitle)) {
      return first.heading;
    }

    for (const second of first['second-level'] || []) {
      const secondItems = second['nav-items'] || [];
      if (secondItems.some((item) => item.page === pageTitle)) {
        return first.heading;
      }

      for (const third of second['third-level'] || []) {
        const thirdItems = third['nav-items'] || [];
        if (thirdItems.some((item) => item.page === pageTitle)) {
          return first.heading;
        }
      }
    }
  }

  return null;
}

/**
 * @param {object} navigationTree
 * @param {string} pageTitle
 * @returns {string[] | null}
 */
export function findNavigationPathForPage(navigationTree, pageTitle) {
  const firstLevel = navigationTree['first-level'] || [];

  for (const first of firstLevel) {
    const directItems = first['nav-items'] || [];
    if (directItems.some((item) => item.page === pageTitle)) {
      return dedupeAdjacentSegments([first.heading]);
    }

    for (const second of first['second-level'] || []) {
      const secondItems = second['nav-items'] || [];
      if (secondItems.some((item) => item.page === pageTitle)) {
        return dedupeAdjacentSegments([first.heading, second.heading]);
      }

      for (const third of second['third-level'] || []) {
        const thirdItems = third['nav-items'] || [];
        if (thirdItems.some((item) => item.page === pageTitle)) {
          return dedupeAdjacentSegments([
            first.heading,
            second.heading,
            third.heading,
          ]);
        }
      }
    }
  }

  return null;
}

/**
 * @param {object} navigationTree
 * @param {string} pageTitle
 * @returns {string}
 */
export function getStorybookTitle(navigationTree, pageTitle) {
  const path = findNavigationPathForPage(navigationTree, pageTitle);
  return path?.length
    ? ['Design system website', ...path].join('/')
    : `Design system website/Uncategorized`;
}

/**
 * @param {object} navigationTree
 * @returns {{ page: string, title: string, path: string[] }[]}
 */
export function getNavigationPageEntries(navigationTree) {
  const orderedPages = [];

  const addItems = (items = [], path = []) => {
    for (const item of items) {
      if (item?.page) {
        orderedPages.push({
          page: item.page,
          path,
          title: ['Design system website', ...path].join('/'),
        });
      }
    }
  };

  for (const first of navigationTree['first-level'] || []) {
    const firstPath = dedupeAdjacentSegments([first.heading]);
    addItems(first['nav-items'], firstPath);

    for (const second of first['second-level'] || []) {
      const secondPath = dedupeAdjacentSegments([
        first.heading,
        second.heading,
      ]);
      addItems(second['nav-items'], secondPath);

      for (const third of second['third-level'] || []) {
        const thirdPath = dedupeAdjacentSegments([
          first.heading,
          second.heading,
          third.heading,
        ]);
        addItems(third['nav-items'], thirdPath);
      }
    }
  }

  return orderedPages;
}
