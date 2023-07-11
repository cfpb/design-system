import lunr from 'lunr';

/**
 * Update page markup with search results.
 * @param {HTMLElement} elm - The element to inject the search results into.
 * @param {Array} results - A list of search result hits as objects.
 * @param {object} store - search index/meta data store in the window object.
 */
function displaySearchResults(elm, results, store) {
  // Search results content will be placed in here.
  let resultsString = `
    <p>
      ${results.length} result${results.length > 1 ? 's' : ''}
      for search of '${results.searchTerm}'.
    </p>
  `;

  // Iterate over the results.
  for (let i = 0; i < results.length; i++) {
    const item = store[results[i].ref];
    resultsString += `
      <li>
        <a href="../${item.url}">
          <h3>
            ${item.title}
          </h3>
        </a>
    `;

    // Show some preview text under each search results item.
    let previewText = '';
    const searchMatchWordFragment = Object.keys(
      results[i].matchData.metadata,
    )[0];
    const searchMatchFields =
      results[i].matchData.metadata[searchMatchWordFragment];

    // Remove fields that should never appear as the preview.
    delete searchMatchFields.id;
    delete searchMatchFields.title;

    const matchFieldKeys = Object.keys(searchMatchFields);
    if (matchFieldKeys.length > 0) {
      previewText = item[matchFieldKeys[0]];
    }

    const regex = new RegExp(results.searchTerm, 'gi');
    previewText = previewText.replace(regex, function replace(match) {
      return '<mark>' + match + '</mark>';
    });

    // Add the preview text.
    if (previewText !== '') {
      resultsString += `
          <p>${previewText.substring(0, 150)}…</p>
        </li>
      `;
    }
  }

  elm.innerHTML = resultsString;
}

/**
 * Display no search results in markup.
 * @param {HTMLElement} elm - the HTML element to write to.
 * @param {string} term - the search term
 */
function displayNoSearchResults(elm, term) {
  elm.innerHTML = `<li>No search results found for '${term}'.</li>`;
}

/**
 * @param {string} param - The URL parameter to get the value of.
 * @returns {string} The value of the URL parameter.
 */
function getURLParam(param) {
  const searchQuery = window.location.search.substring(1);
  const vars = searchQuery.split('&');

  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');

    if (pair[0] === param) {
      return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
    }
  }
  return '';
}

/**
 * @param {object} store - search index/meta data store in the window object.
 * @returns {object} A lunr index.
 */
function initializeSearchIndex(store) {
  // Initalize lunr with the fields it will be searching on.
  // Title has a boost to indicate matches on this field are more important.
  return lunr(function () {
    this.field('id');

    const searchFields = store.fields;
    for (const fieldId in searchFields) {
      this.field(searchFields[fieldId]);
    }

    // Add the data to lunr.
    const data = {};
    let field;
    for (const key in store) {
      data.id = key;
      for (const fieldId in searchFields) {
        field = searchFields[fieldId];
        data[field] = store[key][field];
      }
      this.add(data);
    }
  });
}

// Create search-related references.
const searchTerm = getURLParam('searchQuery');
const searchResultsElm = document.getElementById('search-results');
let results = [];

// Get the global search store.
const searchStore = window.searchStore;

// Check if the URL has a search term set.
if (searchTerm) {
  document.getElementById('search-box').setAttribute('value', searchTerm);

  // Get the lunr index.
  const idx = initializeSearchIndex(searchStore);

  // Perform a search on lunr index.
  results = idx.search(searchTerm);
  results.searchTerm = searchTerm;
}

// Are there any results?
if (results.length === 0) {
  displayNoSearchResults(searchResultsElm, searchTerm);
} else {
  // Display the results of the search.
  displaySearchResults(searchResultsElm, results, searchStore);
}
