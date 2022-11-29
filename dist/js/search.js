/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./docs/assets/js/search.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
var lunr = require('lunr');

/**
 * Update page markup with search results.
 *
 * @param {HTMLElement} elm - The element to inject the search results into.
 * @param {Array} results - A list of search result hits as objects.
 * @param {object} store - search index/meta data store in the window object.
 */
function displaySearchResults(elm, results, store) {
  // Search results content will be placed in here.
  var resultsString = "\n    <p>\n      ".concat(results.length, " result").concat(results.length > 1 ? 's' : '', "\n      for search of '").concat(results.searchTerm, "'.\n    </p>\n  ");

  // Iterate over the results.
  for (var i = 0; i < results.length; i++) {
    var item = store[results[i].ref];
    resultsString += "\n      <li>\n        <a href=\"../".concat(item.url, "\">\n          <h3>\n            ").concat(item.title, "\n          </h3>\n        </a>\n    ");

    // Show some preview text under each search results item.
    var previewText = '';
    var searchMatchWordFragment = Object.keys(results[i].matchData.metadata)[0];
    var searchMatchFields = results[i].matchData.metadata[searchMatchWordFragment];

    // Remove fields that should never appear as the preview.
    delete searchMatchFields.id;
    delete searchMatchFields.title;
    var matchFieldKeys = Object.keys(searchMatchFields);
    if (matchFieldKeys.length > 0) {
      previewText = item[matchFieldKeys[0]];
    }
    var regex = new RegExp(results.searchTerm, 'gi');
    previewText = previewText.replace(regex, function replace(match) {
      return '<mark>' + match + '</mark>';
    });

    // Add the preview text.
    if (previewText !== '') {
      resultsString += "\n          <p>".concat(previewText.substring(0, 150), "\u2026</p>\n        </li>\n      ");
    }
  }
  elm.innerHTML = resultsString;
}

/**
 * Display no search results in markup.
 *
 * @param {HTMLElement} elm - the HTML element to write to.
 * @param {string} term - the search term
 */
function displayNoSearchResults(elm, term) {
  elm.innerHTML = "<li>No search results found for '".concat(term, "'.</li>");
}

/**
 * @param {string} param - The URL parameter to get the value of.
 * @returns {string} The value of the URL parameter.
 */
function getURLParam(param) {
  var searchQuery = window.location.search.substring(1);
  var vars = searchQuery.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
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
    var searchFields = store.fields;
    for (var fieldId in searchFields) {
      this.field(searchFields[fieldId]);
    }

    // Add the data to lunr.
    var data = {};
    var field;
    for (var key in store) {
      data.id = key;
      for (var _fieldId in searchFields) {
        field = searchFields[_fieldId];
        data[field] = store[key][field];
      }
      this.add(data);
    }
  });
}

// Create search-related references.
var searchTerm = getURLParam('searchQuery');
var searchResultsElm = document.getElementById('search-results');
var results = [];

// Get the global search store.
var searchStore = window.searchStore;

// Check if the URL has a search term set.
if (searchTerm) {
  document.getElementById('search-box').setAttribute('value', searchTerm);

  // Get the lunr index.
  var idx = initializeSearchIndex(searchStore);

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
/******/ })()
;
//# sourceMappingURL=search.js.map