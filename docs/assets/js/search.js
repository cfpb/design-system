const lunr = require( 'lunr' );

// This is set outside of displaySearchResults in case we dynamically call
// displaySearchResults in the future, although right now it's only called
// once per page load.
const searchResultsElm = document.getElementById( 'search-results' );

/**
 * Update page markup with search results.
 * @param {Array} results - A list of search result hits as objects.
 * @param {Object} store - search index/meta data store in the window object.
 */
function displaySearchResults( results, store ) {
  // Are there any results?
  if ( results.length ) {
    let appendString = '';

    // Iterate over the results.
    for ( let i = 0; i < results.length; i++ ) {
      const item = store[results[i].ref];
      appendString += '<li><a href="../' + item.url + '"><h3>' + item.title + '</h3></a>';

      // Show some preview text under each search results item.
      let previewText = '';
      const searchMatchWordFragment = Object.keys( results[i].matchData.metadata )[0];
      const searchMatchFields = results[i].matchData.metadata[searchMatchWordFragment];

      // Remove fields that should never appear as the preview.
      delete searchMatchFields.id;
      delete searchMatchFields.title;

      previewText = item[Object.keys( searchMatchFields )[0]];

      const regex = new RegExp( results.searchTerm, 'gi' );
      previewText = previewText.replace( regex, function replace( match ) {
        return '<mark>' + match + '</mark>';
      } );

      // Add the preview text.
      if ( previewText !== '' ) {
        appendString += '<p>' + previewText.substring( 0, 150 ) + '…</p></li>';
      }
    }

    searchResultsElm.innerHTML = appendString;
  } else {
    searchResultsElm.innerHTML = '<li>No results found</li>';
  }
}

/**
 * @param {string} param - The URL parameter to get the value of.
 * @returns {string} The value of the URL parameter.
 */
function getURLParam( param ) {
  const searchQuery = window.location.search.substring( 1 );
  const vars = searchQuery.split( '&' );

  for ( let i = 0; i < vars.length; i++ ) {
    const pair = vars[i].split( '=' );

    if ( pair[0] === param ) {
      return decodeURIComponent( pair[1].replace( /\+/g, '%20' ) );
    }
  }
  return '';
}

/**
 * @param {Object} store - search index/meta data store in the window object.
 * @returns {Object} A lunr index.
 */
function initializeSearchIndex( store ) {
  // Initalize lunr with the fields it will be searching on.
  // Title has a boost to indicate matches on this field are more important.
  return lunr( function() {
    this.field( 'id' );

    const searchFields = store.fields;
    for ( const fieldId in searchFields ) {
      this.field( searchFields[fieldId] );
    }

    // Add the data to lunr.
    const data = {};
    let field;
    for ( const key in store ) {
      data.id = key;
      for ( const fieldId in searchFields ) {
        field = searchFields[fieldId];
        data[field] = store[key][field];
      }
      this.add( data );
    }
  } );
}

// Check if the URL has a search term set.
const searchTerm = getURLParam( 'searchQuery' );
if ( searchTerm ) {
  document.getElementById( 'search-box' ).setAttribute( 'value', searchTerm );

  // Get the global search store.
  const searchStore = window.searchStore;

  // Get the lunr index.
  const idx = initializeSearchIndex( searchStore );

  // Perform a search on lunr index.
  const results = idx.search( searchTerm );
  results.searchTerm = searchTerm;

  // Display the results of the search.
  displaySearchResults( results, searchStore );
}
