import MiniSearch from 'minisearch';

const searchStore = window.searchStore;

/**
 * Extracts a snippet, decodes URI components, and highlights the match.
 */
function getHighlightedSnippet(result, item, searchTerm) {
  // 1. Determine the best field to use for the preview
  const matchedTerms = Object.keys(result.match || {});
  const matchedFields =
    matchedTerms.length > 0 ? result.match[matchedTerms[0]] : [];

  // Prioritize fields that aren't the title or ID.
  const previewField =
    matchedFields.find((f) => f !== 'title' && f !== 'id') ||
    searchStore.fields.find((f) => f !== 'title' && f !== 'id') ||
    'content';

  let rawText = (item[previewField] || '').toString();

  // 2. Decode the URI characters (like %0A, %7B, etc).
  let text = '';
  try {
    // Replace '+' with space first, then decode.
    text = decodeURIComponent(rawText.replace(/\+/g, ' '));
  } catch (e) {
    // Fallback if the string contains malformed URI sequences.
    text = rawText.replace(/\+/g, ' ');
  }

  // 3. Create the snippet bounds.
  const lowerText = text.toLowerCase();
  const lowerTerm = searchTerm.toLowerCase();
  const matchIndex = lowerText.indexOf(lowerTerm);

  // If no match found in the chosen field, just show the start.
  if (matchIndex === -1) {
    const fallback = text.substring(0, 150);
    return fallback + (text.length > 150 ? '…' : '');
  }

  // 4. Center the snippet on the match.
  const start = Math.max(0, matchIndex - 75);
  const end = Math.min(text.length, matchIndex + searchTerm.length + 75);

  let snippet = text.substring(start, end);

  // Add ellipses if we're slicing the middle of the text.
  if (start > 0) snippet = '…' + snippet;
  if (end < text.length) snippet += '…';

  // 5. Highlight the term safely.
  // Escape the searchTerm for Regex in case it contains special chars like ( or [
  const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedTerm})`, 'gi');

  return snippet.replace(regex, '<mark>$1</mark>');
}

function displaySearchResults(elm, results, searchTerm, store) {
  let resultsString = `<p>${results.length} result${results.length !== 1 ? 's' : ''} for '${searchTerm}'</p>`;

  for (const result of results) {
    const item = store[result.id];
    if (!item) continue;

    const highlightedSnippet = getHighlightedSnippet(result, item, searchTerm);

    resultsString += `
      <li>
        <a href="../${item.url}">
          <h3>${item.title}</h3>
        </a>
        <p>${highlightedSnippet}</p>
      </li>
    `;
  }

  elm.innerHTML = resultsString;
}

function initializeSearchIndex(store) {
  // Ensure we use the fields defined in your store.
  const searchFields = store.fields || [];

  const miniSearch = new MiniSearch({
    fields: searchFields,
    idField: 'id', // Explicitly tell MiniSearch which field is the ID.
  });

  // Convert the store object into an array of documents.
  const documents = Object.keys(store)
    .filter((key) => key !== 'fields')
    .map((key) => ({
      id: key,
      ...store[key],
    }));

  miniSearch.addAll(documents);
  return miniSearch;
}

// Execution Logic.
const params = new URLSearchParams(window.location.search);
const searchTerm = params.get('searchQuery') || '';
const searchResultsElm = document.getElementById('search-results');
let results = [];

if (searchTerm && searchResultsElm) {
  const searchInput = document.getElementById('search-box');
  if (searchInput) searchInput.value = searchTerm;

  const idx = initializeSearchIndex(searchStore);

  // We MUST set 'combineMap: true' or check 'result.match' to see where the hits are.
  results = idx.search(searchTerm, {
    fuzzy: 0.2,
    prefix: true,
    boost: { title: 2 },
  });
}

/**
 * Display no search results in markup.
 * @param {HTMLElement} elm - the HTML element to write to.
 * @param {string} term - the search term
 */
function displayNoSearchResults(elm, term) {
  elm.innerHTML = `<li>No search results found for '${term}'.</li>`;
}

// Are there any results?
if (results.length === 0) {
  displayNoSearchResults(searchResultsElm, searchTerm);
} else {
  // Display the results of the search.
  displaySearchResults(searchResultsElm, results, searchTerm, searchStore);
}
