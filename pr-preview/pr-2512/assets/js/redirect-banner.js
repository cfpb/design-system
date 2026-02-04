/**
 * Retrieve redirect source name and URL.
 * @param {Array} match - Matched URL UTM source.
 * @returns {object} Hash of redirect source's name and URL.
 */
function getSource(match) {
  const redirectSources = {
    capitalframework: {
      name: 'Capital Framework',
      url: 'https://cfpb.github.io/capital-framework-archive/',
    },
    designmanual: {
      name: 'the CFPB Design Manual',
      url: 'https://cfpb.github.io/design-manual-archive/',
    },
  };

  return redirectSources[match[1]];
}

/**
 * Populate the redirection banner contents and display the banner.
 * @param {string} sourceName - The source's name.
 * @param {string} sourceUrl - The source's URL
 */
function displayBanner(sourceName, sourceUrl) {
  const banner = document.querySelector('#redirect-banner');
  const sourceNames = banner.querySelectorAll(
    'span[data-redirect=source-name]',
  );
  const links = banner.querySelectorAll('a[data-redirect=archive-website]');

  for (let i = 0, len = sourceNames.length; i < len; i++) {
    sourceNames[i].textContent = sourceName;
  }

  for (let i = 0, len = links.length; i < len; i++) {
    links[i].textContent = sourceUrl;
    links[i].href = sourceUrl;
  }

  banner.classList.remove('u-hidden');
}

/**
 * Show redirect banner if we're coming from the now-deprecated
 * Capital Framework or Design Manual websites.
 */
function init() {
  const locationSearch = window.location.search;
  if (locationSearch.match(/[?&]utm_medium=redirect([&#]|$)/)) {
    const match = locationSearch.match(/[?&]utm_source=([^&#]*)/);

    if (match) {
      const source = getSource(match);
      if (source) {
        displayBanner(source.name, source.url);
      }
    }
  }
}

export default {
  init: init,
};
