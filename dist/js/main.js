/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/anchor-js/anchor.js":
/*!******************************************!*\
  !*** ./node_modules/anchor-js/anchor.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* eslint-env amd */
/* globals module:false */

// https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
  'use strict';

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {
  'use strict';

  function AnchorJS(options) {
    this.options = options || {};
    this.elements = [];

    /**
     * Assigns options to the internal options object, and provides defaults.
     * @param {Object} opts - Options object
     */
    function _applyRemainingDefaultOptions(opts) {
      opts.icon = Object.prototype.hasOwnProperty.call(opts, 'icon') ? opts.icon : '\ue9cb'; // Accepts characters (and also URLs?), like  '#', '¶', '❡', or '§'.
      opts.visible = Object.prototype.hasOwnProperty.call(opts, 'visible') ? opts.visible : 'hover'; // Also accepts 'always' & 'touch'
      opts.placement = Object.prototype.hasOwnProperty.call(opts, 'placement') ? opts.placement : 'right'; // Also accepts 'left'
      opts.ariaLabel = Object.prototype.hasOwnProperty.call(opts, 'ariaLabel') ? opts.ariaLabel : 'Anchor'; // Accepts any text.
      opts.class = Object.prototype.hasOwnProperty.call(opts, 'class') ? opts.class : ''; // Accepts any class name.
      opts.base = Object.prototype.hasOwnProperty.call(opts, 'base') ? opts.base : ''; // Accepts any base URI.
      // Using Math.floor here will ensure the value is Number-cast and an integer.
      opts.truncate = Object.prototype.hasOwnProperty.call(opts, 'truncate') ? Math.floor(opts.truncate) : 64; // Accepts any value that can be typecast to a number.
      opts.titleText = Object.prototype.hasOwnProperty.call(opts, 'titleText') ? opts.titleText : ''; // Accepts any text.
    }

    _applyRemainingDefaultOptions(this.options);

    /**
     * Checks to see if this device supports touch. Uses criteria pulled from Modernizr:
     * https://github.com/Modernizr/Modernizr/blob/da22eb27631fc4957f67607fe6042e85c0a84656/feature-detects/touchevents.js#L40
     * @return {Boolean} - true if the current device supports touch.
     */
    this.isTouchDevice = function() {
      return Boolean('ontouchstart' in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch);
    };

    /**
     * Add anchor links to page elements.
     * @param  {String|Array|Nodelist} selector - A CSS selector for targeting the elements you wish to add anchor links
     *                                            to. Also accepts an array or nodeList containing the relavant elements.
     * @return {this}                           - The AnchorJS object
     */
    this.add = function(selector) {
      var elements,
          elsWithIds,
          idList,
          elementID,
          i,
          index,
          count,
          tidyText,
          newTidyText,
          anchor,
          visibleOptionToUse,
          hrefBase,
          indexesToDrop = [];

      // We reapply options here because somebody may have overwritten the default options object when setting options.
      // For example, this overwrites all options but visible:
      //
      // anchors.options = { visible: 'always'; }
      _applyRemainingDefaultOptions(this.options);

      visibleOptionToUse = this.options.visible;
      if (visibleOptionToUse === 'touch') {
        visibleOptionToUse = this.isTouchDevice() ? 'always' : 'hover';
      }

      // Provide a sensible default selector, if none is given.
      if (!selector) {
        selector = 'h2, h3, h4, h5, h6';
      }

      elements = _getElements(selector);

      if (elements.length === 0) {
        return this;
      }

      _addBaselineStyles();

      // We produce a list of existing IDs so we don't generate a duplicate.
      elsWithIds = document.querySelectorAll('[id]');
      idList = [].map.call(elsWithIds, function(el) {
        return el.id;
      });

      for (i = 0; i < elements.length; i++) {
        if (this.hasAnchorJSLink(elements[i])) {
          indexesToDrop.push(i);
          continue;
        }

        if (elements[i].hasAttribute('id')) {
          elementID = elements[i].getAttribute('id');
        } else if (elements[i].hasAttribute('data-anchor-id')) {
          elementID = elements[i].getAttribute('data-anchor-id');
        } else {
          tidyText = this.urlify(elements[i].textContent);

          // Compare our generated ID to existing IDs (and increment it if needed)
          // before we add it to the page.
          newTidyText = tidyText;
          count = 0;
          do {
            if (index !== undefined) {
              newTidyText = tidyText + '-' + count;
            }

            index = idList.indexOf(newTidyText);
            count += 1;
          } while (index !== -1);

          index = undefined;
          idList.push(newTidyText);

          elements[i].setAttribute('id', newTidyText);
          elementID = newTidyText;
        }

        // The following code efficiently builds this DOM structure:
        // `<a class="anchorjs-link ${this.options.class}"
        //     aria-label="${this.options.ariaLabel}"
        //     data-anchorjs-icon="${this.options.icon}"
        //     title="${this.options.titleText}"
        //     href="this.options.base#${elementID}">
        // </a>;`
        anchor = document.createElement('a');
        anchor.className = 'anchorjs-link ' + this.options.class;
        anchor.setAttribute('aria-label', this.options.ariaLabel);
        anchor.setAttribute('data-anchorjs-icon', this.options.icon);
        if (this.options.titleText) {
          anchor.title = this.options.titleText;
        }

        // Adjust the href if there's a <base> tag. See https://github.com/bryanbraun/anchorjs/issues/98
        hrefBase = document.querySelector('base') ? window.location.pathname + window.location.search : '';
        hrefBase = this.options.base || hrefBase;
        anchor.href = hrefBase + '#' + elementID;

        if (visibleOptionToUse === 'always') {
          anchor.style.opacity = '1';
        }

        if (this.options.icon === '\ue9cb') {
          anchor.style.font = '1em/1 anchorjs-icons';

          // We set lineHeight = 1 here because the `anchorjs-icons` font family could otherwise affect the
          // height of the heading. This isn't the case for icons with `placement: left`, so we restore
          // line-height: inherit in that case, ensuring they remain positioned correctly. For more info,
          // see https://github.com/bryanbraun/anchorjs/issues/39.
          if (this.options.placement === 'left') {
            anchor.style.lineHeight = 'inherit';
          }
        }

        if (this.options.placement === 'left') {
          anchor.style.position = 'absolute';
          anchor.style.marginLeft = '-1em';
          anchor.style.paddingRight = '.5em';
          elements[i].insertBefore(anchor, elements[i].firstChild);
        } else { // if the option provided is `right` (or anything else).
          anchor.style.paddingLeft = '.375em';
          elements[i].appendChild(anchor);
        }
      }

      for (i = 0; i < indexesToDrop.length; i++) {
        elements.splice(indexesToDrop[i] - i, 1);
      }

      this.elements = this.elements.concat(elements);

      return this;
    };

    /**
     * Removes all anchorjs-links from elements targeted by the selector.
     * @param  {String|Array|Nodelist} selector - A CSS selector string targeting elements with anchor links,
     *                                            OR a nodeList / array containing the DOM elements.
     * @return {this}                           - The AnchorJS object
     */
    this.remove = function(selector) {
      var index,
          domAnchor,
          elements = _getElements(selector);

      for (var i = 0; i < elements.length; i++) {
        domAnchor = elements[i].querySelector('.anchorjs-link');
        if (domAnchor) {
          // Drop the element from our main list, if it's in there.
          index = this.elements.indexOf(elements[i]);
          if (index !== -1) {
            this.elements.splice(index, 1);
          }

          // Remove the anchor from the DOM.
          elements[i].removeChild(domAnchor);
        }
      }

      return this;
    };

    /**
     * Removes all anchorjs links. Mostly used for tests.
     */
    this.removeAll = function() {
      this.remove(this.elements);
    };

    /**
     * Urlify - Refine text so it makes a good ID.
     *
     * To do this, we remove apostrophes, replace non-safe characters with hyphens,
     * remove extra hyphens, truncate, trim hyphens, and make lowercase.
     *
     * @param  {String} text - Any text. Usually pulled from the webpage element we are linking to.
     * @return {String}      - hyphen-delimited text for use in IDs and URLs.
     */
    this.urlify = function(text) {
      // Decode HTML characters such as '&nbsp;' first.
      var textareaElement = document.createElement('textarea');
      textareaElement.innerHTML = text;
      text = textareaElement.value;

      // Regex for finding the non-safe URL characters (many need escaping):
      //   & +$,:;=?@"#{}|^~[`%!'<>]./()*\ (newlines, tabs, backspace, vertical tabs, and non-breaking space)
      var nonsafeChars = /[& +$,:;=?@"#{}|^~[`%!'<>\]./()*\\\n\t\b\v\u00A0]/g,
          urlText;

      // The reason we include this _applyRemainingDefaultOptions is so urlify can be called independently,
      // even after setting options. This can be useful for tests or other applications.
      if (!this.options.truncate) {
        _applyRemainingDefaultOptions(this.options);
      }

      // Note: we trim hyphens after truncating because truncating can cause dangling hyphens.
      // Example string:                      // " ⚡⚡ Don't forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
      urlText = text.trim()                   // "⚡⚡ Don't forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
        .replace(/'/gi, '')                   // "⚡⚡ Dont forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
        .replace(nonsafeChars, '-')           // "⚡⚡-Dont-forget--URL-fragments-should-be-i18n-friendly--hyphenated--short--and-clean-"
        .replace(/-{2,}/g, '-')               // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated-short-and-clean-"
        .substring(0, this.options.truncate)  // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated-"
        .replace(/^-+|-+$/gm, '')             // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated"
        .toLowerCase();                       // "⚡⚡-dont-forget-url-fragments-should-be-i18n-friendly-hyphenated"

      return urlText;
    };

    /**
     * Determines if this element already has an AnchorJS link on it.
     * Uses this technique: http://stackoverflow.com/a/5898748/1154642
     * @param    {HTMLElement}  el - a DOM node
     * @return   {Boolean}     true/false
     */
    this.hasAnchorJSLink = function(el) {
      var hasLeftAnchor = el.firstChild && (' ' + el.firstChild.className + ' ').indexOf(' anchorjs-link ') > -1,
          hasRightAnchor = el.lastChild && (' ' + el.lastChild.className + ' ').indexOf(' anchorjs-link ') > -1;

      return hasLeftAnchor || hasRightAnchor || false;
    };

    /**
     * Turns a selector, nodeList, or array of elements into an array of elements (so we can use array methods).
     * It also throws errors on any other inputs. Used to handle inputs to .add and .remove.
     * @param  {String|Array|Nodelist} input - A CSS selector string targeting elements with anchor links,
     *                                         OR a nodeList / array containing the DOM elements.
     * @return {Array} - An array containing the elements we want.
     */
    function _getElements(input) {
      var elements;
      if (typeof input === 'string' || input instanceof String) {
        // See https://davidwalsh.name/nodelist-array for the technique transforming nodeList -> Array.
        elements = [].slice.call(document.querySelectorAll(input));
      // I checked the 'input instanceof NodeList' test in IE9 and modern browsers and it worked for me.
      } else if (Array.isArray(input) || input instanceof NodeList) {
        elements = [].slice.call(input);
      } else {
        throw new TypeError('The selector provided to AnchorJS was invalid.');
      }

      return elements;
    }

    /**
     * _addBaselineStyles
     * Adds baseline styles to the page, used by all AnchorJS links irregardless of configuration.
     */
    function _addBaselineStyles() {
      // We don't want to add global baseline styles if they've been added before.
      if (document.head.querySelector('style.anchorjs') !== null) {
        return;
      }

      var style = document.createElement('style'),
          linkRule =
          '.anchorjs-link{'                        +
            'opacity:0;'                           +
            'text-decoration:none;'                +
            '-webkit-font-smoothing:antialiased;'  +
            '-moz-osx-font-smoothing:grayscale'    +
          '}',
          hoverRule =
          ':hover>.anchorjs-link,'                 +
          '.anchorjs-link:focus{'                  +
            'opacity:1'                            +
          '}',
          anchorjsLinkFontFace =
          '@font-face{'                            +
            'font-family:anchorjs-icons;'          + // Icon from icomoon; 10px wide & 10px tall; 2 empty below & 4 above
            'src:url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype")' +
          '}',
          pseudoElContent =
          '[data-anchorjs-icon]::after{'           +
            'content:attr(data-anchorjs-icon)'     +
          '}',
          firstStyleEl;

      style.className = 'anchorjs';
      style.appendChild(document.createTextNode('')); // Necessary for Webkit.

      // We place it in the head with the other style tags, if possible, so as to
      // not look out of place. We insert before the others so these styles can be
      // overridden if necessary.
      firstStyleEl = document.head.querySelector('[rel="stylesheet"],style');
      if (firstStyleEl === undefined) {
        document.head.appendChild(style);
      } else {
        document.head.insertBefore(style, firstStyleEl);
      }

      style.sheet.insertRule(linkRule, style.sheet.cssRules.length);
      style.sheet.insertRule(hoverRule, style.sheet.cssRules.length);
      style.sheet.insertRule(pseudoElContent, style.sheet.cssRules.length);
      style.sheet.insertRule(anchorjsLinkFontFace, style.sheet.cssRules.length);
    }
  }

  return AnchorJS;
}));


/***/ }),

/***/ "./docs/assets/js/main.js":
/*!********************************!*\
  !*** ./docs/assets/js/main.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle-details.js */ "./docs/assets/js/toggle-details.js");
/* harmony import */ var anchor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! anchor-js */ "./node_modules/anchor-js/anchor.js");
/* harmony import */ var anchor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(anchor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cfpb_cfpb_expandables_src_Expandable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cfpb/cfpb-expandables/src/Expandable */ "./packages/cfpb-expandables/src/Expandable.js");
/* harmony import */ var _cfpb_cfpb_forms_src_organisms_Multiselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cfpb/cfpb-forms/src/organisms/Multiselect */ "./packages/cfpb-forms/src/organisms/Multiselect.js");
/* harmony import */ var _cfpb_cfpb_atomic_component_src_utilities_transition_AlphaTransition_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/utilities/transition/AlphaTransition.js */ "./packages/cfpb-atomic-component/src/utilities/transition/AlphaTransition.js");
/* harmony import */ var _cfpb_cfpb_atomic_component_src_utilities_transition_MoveTransition_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/utilities/transition/MoveTransition.js */ "./packages/cfpb-atomic-component/src/utilities/transition/MoveTransition.js");
/* harmony import */ var _cfpb_cfpb_atomic_component_src_utilities_transition_MaxHeightTransition_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/utilities/transition/MaxHeightTransition.js */ "./packages/cfpb-atomic-component/src/utilities/transition/MaxHeightTransition.js");
/* harmony import */ var _cfpb_cfpb_tables_src_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @cfpb/cfpb-tables/src/Table */ "./packages/cfpb-tables/src/Table.js");
/* harmony import */ var govuk_frontend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! govuk-frontend */ "./node_modules/govuk-frontend/govuk/all.js");
/* harmony import */ var govuk_frontend__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(govuk_frontend__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redirect_banner_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redirect-banner.js */ "./docs/assets/js/redirect-banner.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar.js */ "./docs/assets/js/sidebar.js");











_redirect_banner_js__WEBPACK_IMPORTED_MODULE_9__.default.init();
_sidebar_js__WEBPACK_IMPORTED_MODULE_10__.default.init();
var anchors = new (anchor_js__WEBPACK_IMPORTED_MODULE_1___default())(); // Add anchors to all headings (except page title headings)

anchors.add('h2:not(.title), h3, h4, h5'); // Ensure there are no anchors in inconvenient places

anchors.remove("\n  .live-code-example h2,\n  .live-code-example h3,\n  .live-code-example h4,\n  .live-code-example h5,\n  .o-expandable_label,\n  #search-results h3\n");
var multiselectDom = document.querySelector('.o-multiselect');

if (multiselectDom) {
  var multiselect = new _cfpb_cfpb_forms_src_organisms_Multiselect__WEBPACK_IMPORTED_MODULE_3__.default(multiselectDom);
  multiselect.init();
}

_cfpb_cfpb_expandables_src_Expandable__WEBPACK_IMPORTED_MODULE_2__.default.init();
_cfpb_cfpb_tables_src_Table__WEBPACK_IMPORTED_MODULE_7__.default.init(); // Exporting these classes to the window so that the transition-patterns.md
// page can use them in its code snippets.

window.AlphaTransition = _cfpb_cfpb_atomic_component_src_utilities_transition_AlphaTransition_js__WEBPACK_IMPORTED_MODULE_4__.default;
window.MoveTransition = _cfpb_cfpb_atomic_component_src_utilities_transition_MoveTransition_js__WEBPACK_IMPORTED_MODULE_5__.default;
window.MaxHeightTransition = _cfpb_cfpb_atomic_component_src_utilities_transition_MaxHeightTransition_js__WEBPACK_IMPORTED_MODULE_6__.default;
var main = document.querySelector('#main');
var tabs = document.querySelectorAll('[data-module="tabs"]');

if (tabs && tabs.length > 0) {
  main.classList.add('js-enabled');

  for (var i = 0; i < tabs.length; i++) {
    var tab = tabs[i];
    new govuk_frontend__WEBPACK_IMPORTED_MODULE_8__.Tabs(tab).init();
  }
}

var toggleAllBtn = document.querySelector('#toggle-details');
var toggleBtns = document.querySelectorAll('.a-toggle_code button');

if (toggleAllBtn) {
  toggleAllBtn.addEventListener('click', handleToggleAllClick, false);

  if (window.localStorage.getItem('toggleState') === 'hide') {
    (0,_toggle_details_js__WEBPACK_IMPORTED_MODULE_0__.toggleAllDetails)(toggleAllBtn);
  }
}

for (var _i = 0, len = toggleBtns.length; _i < len; _i++) {
  toggleBtns[_i].addEventListener('click', handleToggleClick, false);
}
/**
 * @param {MouseEvent} event - The mouse event object from the click.
 */


function handleToggleAllClick(event) {
  event.preventDefault();
  (0,_toggle_details_js__WEBPACK_IMPORTED_MODULE_0__.toggleAllDetails)(toggleAllBtn);
}
/**
 * @param {MouseEvent} event - The mouse event object from the click.
 */


function handleToggleClick(event) {
  var target = event.target;
  (0,_toggle_details_js__WEBPACK_IMPORTED_MODULE_0__.toggleDetails)(target);
}

/***/ }),

/***/ "./docs/assets/js/redirect-banner.js":
/*!*******************************************!*\
  !*** ./docs/assets/js/redirect-banner.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Retrieve redirect source name and URL.
 * @param {Array} match - Matched URL UTM source.
 * @returns {Object} Hash of redirect source's name and URL.
 */
function getSource(match) {
  var redirectSources = {
    capitalframework: {
      name: 'Capital Framework',
      url: 'https://cfpb.github.io/capital-framework-archive/'
    },
    designmanual: {
      name: 'the CFPB Design Manual',
      url: 'https://cfpb.github.io/design-manual-archive/'
    }
  };
  return redirectSources[match[1]];
}
/**
 * Populate the redirection banner contents and display the banner.
 * @param {string} sourceName - The source's name.
 * @param {string} sourceUrl - The source's URL
 */


function displayBanner(sourceName, sourceUrl) {
  var banner = document.querySelector('#redirect-banner');
  var sourceNames = banner.querySelectorAll('span[data-redirect=source-name]');
  var links = banner.querySelectorAll('a[data-redirect=archive-website]');

  for (var i = 0, len = sourceNames.length; i < len; i++) {
    sourceNames[i].textContent = sourceName;
  }

  for (var _i = 0, _len = links.length; _i < _len; _i++) {
    links[_i].textContent = sourceUrl;
    links[_i].href = sourceUrl;
  }

  banner.classList.remove('u-hidden');
}
/**
 * Show redirect banner if we're coming from the now-deprecated
 * Capital Framework or Design Manual websites.
 */


function init() {
  var locationSearch = window.location.search;

  if (locationSearch.match(/[?&]utm_medium=redirect([&#]|$)/)) {
    var match = locationSearch.match(/[?&]utm_source=([^&#]*)/);

    if (match) {
      var source = getSource(match);

      if (source) {
        displayBanner(source.name, source.url);
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./docs/assets/js/sidebar.js":
/*!***********************************!*\
  !*** ./docs/assets/js/sidebar.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Initialize the side navigation script to handle opening the sidebar
 * when the page is resized between mobile and desktop sizes.
 */
function init() {
  var secondaryNavCat = document.querySelector('.ds-nav-container'); // First collapse the navigation if in mobile.

  var windowWidth = window.innerWidth;

  if (windowWidth < 601) {
    secondaryNavCat.removeAttribute('open');
  }
  /**
   * Test the viewport size and set whether the test passes on the instance.
   */


  function handleViewportChange() {
    // Collapse the navigation if we resize to mobile,
    // but only if we haven't already.
    // Otherwise, we're on desktop size, so open the navigation.
    var innerWidth = window.innerWidth;

    if (innerWidth === windowWidth) {
      return;
    }

    if (innerWidth < 601) {
      secondaryNavCat.removeAttribute('open');
    } else {
      secondaryNavCat.setAttribute('open', 'open');
    }
  } // Check viewport state on page load.


  handleViewportChange(); // Add event listener for checking viewport state on window resize.

  window.addEventListener('resize', function () {
    handleViewportChange();
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./docs/assets/js/toggle-details.js":
/*!******************************************!*\
  !*** ./docs/assets/js/toggle-details.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TOGGLE_ATTRIBUTE": function() { return /* binding */ TOGGLE_ATTRIBUTE; },
/* harmony export */   "toggleDetails": function() { return /* binding */ toggleDetails; },
/* harmony export */   "toggleAllDetails": function() { return /* binding */ toggleAllDetails; }
/* harmony export */ });
var HIDDEN_CLASS = 'u-hidden';
var TOGGLE_ATTRIBUTE = 'data-toggle-details';
var STATE_SHOW = 'show';
var STATE_HIDE = 'hide';
var isShowingAllDetails = false;
/**
 * Toggle details for a single variation.
 * @param {DOMNode} button - Button element that controls the toggling
 * @param {DOMNode} document - Defaults to window.document but overridable for ReactDOM
 * @param {string} [state] -
 *   Optional param to specify whether to force showing or hiding of the details
 *   Value should be either 'show' or 'hide'.
 */

function toggleDetails(button) {
  var document = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.document;
  var state = arguments.length > 2 ? arguments[2] : undefined;
  var container = button.parentNode;
  var codeEl = document.querySelector(button.getAttribute('href'));
  var hideCodeBtn = container.querySelector("[".concat(TOGGLE_ATTRIBUTE, "=\"hide\"]"));
  var showCodeBtn = container.querySelector("[".concat(TOGGLE_ATTRIBUTE, "=\"show\"]"));

  if (typeof state === 'undefined') {
    if (codeEl && codeEl.classList.contains(HIDDEN_CLASS)) {
      state = STATE_SHOW;
    } else {
      state = STATE_HIDE;
    }
  }

  if (state === STATE_SHOW) {
    codeEl.classList.remove(HIDDEN_CLASS);
    hideCodeBtn.classList.remove(HIDDEN_CLASS);
    showCodeBtn.classList.add(HIDDEN_CLASS);
  } else {
    codeEl.classList.add(HIDDEN_CLASS);
    hideCodeBtn.classList.add(HIDDEN_CLASS);
    showCodeBtn.classList.remove(HIDDEN_CLASS);
  }
}
/**
 * Toggle all details for a page.
 * @param {HTMLNode} toggleBtn - The button that called this method.
 */


function toggleAllDetails(toggleBtn) {
  if (isShowingAllDetails) {
    toggleBtn.querySelector('.a-btn_text').innerHTML = 'Show all details';
    toggleBtn.setAttribute('title', 'Show all details');
    window.localStorage.setItem('toggleState', 'show');
  } else {
    toggleBtn.querySelector('.a-btn_text').innerHTML = 'Hide all details';
    toggleBtn.setAttribute('title', 'Hide all details');
    window.localStorage.setItem('toggleState', 'hide');
  }

  var codeEls = document.querySelectorAll('.a-toggle_code');
  var buttonElm;

  for (var i = 0, len = codeEls.length; i < len; i++) {
    buttonElm = codeEls[i].querySelector('button:not(.u-hidden)');
    toggleDetails(buttonElm, window.document, isShowingAllDetails ? STATE_HIDE : STATE_SHOW);
  }

  isShowingAllDetails = !isShowingAllDetails;
}



/***/ }),

/***/ "./node_modules/govuk-frontend/govuk/all.js":
/*!**************************************************!*\
  !*** ./node_modules/govuk-frontend/govuk/all.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	0;
}(this, (function (exports) { 'use strict';

/**
 * TODO: Ideally this would be a NodeList.prototype.forEach polyfill
 * This seems to fail in IE8, requires more investigation.
 * See: https://github.com/imagitama/nodelist-foreach-polyfill
 */
function nodeListForEach (nodes, callback) {
  if (window.NodeList.prototype.forEach) {
    return nodes.forEach(callback)
  }
  for (var i = 0; i < nodes.length; i++) {
    callback.call(window, nodes[i], i, nodes);
  }
}

// Used to generate a unique string, allows multiple instances of the component without
// Them conflicting with each other.
// https://stackoverflow.com/a/8809472
function generateUniqueID () {
  var d = new Date().getTime();
  if (typeof window.performance !== 'undefined' && typeof window.performance.now === 'function') {
    d += window.performance.now(); // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Object/defineProperty/detect.js
var detect = (
  // In IE8, defineProperty could only act on DOM elements, so full support
  // for the feature requires the ability to set a property on an arbitrary object
  'defineProperty' in Object && (function() {
  	try {
  		var a = {};
  		Object.defineProperty(a, 'test', {value:42});
  		return true;
  	} catch(e) {
  		return false
  	}
  }())
);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.defineProperty&flags=always
(function (nativeDefineProperty) {

	var supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');
	var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
	var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';

	Object.defineProperty = function defineProperty(object, property, descriptor) {

		// Where native support exists, assume it
		if (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {
			return nativeDefineProperty(object, property, descriptor);
		}

		if (object === null || !(object instanceof Object || typeof object === 'object')) {
			throw new TypeError('Object.defineProperty called on non-object');
		}

		if (!(descriptor instanceof Object)) {
			throw new TypeError('Property description must be an object');
		}

		var propertyString = String(property);
		var hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;
		var getterType = 'get' in descriptor && typeof descriptor.get;
		var setterType = 'set' in descriptor && typeof descriptor.set;

		// handle descriptor.get
		if (getterType) {
			if (getterType !== 'function') {
				throw new TypeError('Getter must be a function');
			}
			if (!supportsAccessors) {
				throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
			}
			if (hasValueOrWritable) {
				throw new TypeError(ERR_VALUE_ACCESSORS);
			}
			Object.__defineGetter__.call(object, propertyString, descriptor.get);
		} else {
			object[propertyString] = descriptor.value;
		}

		// handle descriptor.set
		if (setterType) {
			if (setterType !== 'function') {
				throw new TypeError('Setter must be a function');
			}
			if (!supportsAccessors) {
				throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
			}
			if (hasValueOrWritable) {
				throw new TypeError(ERR_VALUE_ACCESSORS);
			}
			Object.__defineSetter__.call(object, propertyString, descriptor.set);
		}

		// OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above
		if ('value' in descriptor) {
			object[propertyString] = descriptor.value;
		}

		return object;
	};
}(Object.defineProperty));
})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof __webpack_require__.g && __webpack_require__.g || {});

(function(undefined) {
  // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Function/prototype/bind/detect.js
  var detect = 'bind' in Function.prototype;

  if (detect) return

  // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Function.prototype.bind&flags=always
  Object.defineProperty(Function.prototype, 'bind', {
      value: function bind(that) { // .length is 1
          // add necessary es5-shim utilities
          var $Array = Array;
          var $Object = Object;
          var ObjectPrototype = $Object.prototype;
          var ArrayPrototype = $Array.prototype;
          var Empty = function Empty() {};
          var to_string = ObjectPrototype.toString;
          var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
          var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, tryFunctionObject = function tryFunctionObject(value) { try { fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]'; isCallable = function isCallable(value) { if (typeof value !== 'function') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };
          var array_slice = ArrayPrototype.slice;
          var array_concat = ArrayPrototype.concat;
          var array_push = ArrayPrototype.push;
          var max = Math.max;
          // /add necessary es5-shim utilities

          // 1. Let Target be the this value.
          var target = this;
          // 2. If IsCallable(Target) is false, throw a TypeError exception.
          if (!isCallable(target)) {
              throw new TypeError('Function.prototype.bind called on incompatible ' + target);
          }
          // 3. Let A be a new (possibly empty) internal list of all of the
          //   argument values provided after thisArg (arg1, arg2 etc), in order.
          // XXX slicedArgs will stand in for "A" if used
          var args = array_slice.call(arguments, 1); // for normal call
          // 4. Let F be a new native ECMAScript object.
          // 11. Set the [[Prototype]] internal property of F to the standard
          //   built-in Function prototype object as specified in 15.3.3.1.
          // 12. Set the [[Call]] internal property of F as described in
          //   15.3.4.5.1.
          // 13. Set the [[Construct]] internal property of F as described in
          //   15.3.4.5.2.
          // 14. Set the [[HasInstance]] internal property of F as described in
          //   15.3.4.5.3.
          var bound;
          var binder = function () {

              if (this instanceof bound) {
                  // 15.3.4.5.2 [[Construct]]
                  // When the [[Construct]] internal method of a function object,
                  // F that was created using the bind function is called with a
                  // list of arguments ExtraArgs, the following steps are taken:
                  // 1. Let target be the value of F's [[TargetFunction]]
                  //   internal property.
                  // 2. If target has no [[Construct]] internal method, a
                  //   TypeError exception is thrown.
                  // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                  //   property.
                  // 4. Let args be a new list containing the same values as the
                  //   list boundArgs in the same order followed by the same
                  //   values as the list ExtraArgs in the same order.
                  // 5. Return the result of calling the [[Construct]] internal
                  //   method of target providing args as the arguments.

                  var result = target.apply(
                      this,
                      array_concat.call(args, array_slice.call(arguments))
                  );
                  if ($Object(result) === result) {
                      return result;
                  }
                  return this;

              } else {
                  // 15.3.4.5.1 [[Call]]
                  // When the [[Call]] internal method of a function object, F,
                  // which was created using the bind function is called with a
                  // this value and a list of arguments ExtraArgs, the following
                  // steps are taken:
                  // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                  //   property.
                  // 2. Let boundThis be the value of F's [[BoundThis]] internal
                  //   property.
                  // 3. Let target be the value of F's [[TargetFunction]] internal
                  //   property.
                  // 4. Let args be a new list containing the same values as the
                  //   list boundArgs in the same order followed by the same
                  //   values as the list ExtraArgs in the same order.
                  // 5. Return the result of calling the [[Call]] internal method
                  //   of target providing boundThis as the this value and
                  //   providing args as the arguments.

                  // equiv: target.call(this, ...boundArgs, ...args)
                  return target.apply(
                      that,
                      array_concat.call(args, array_slice.call(arguments))
                  );

              }

          };

          // 15. If the [[Class]] internal property of Target is "Function", then
          //     a. Let L be the length property of Target minus the length of A.
          //     b. Set the length own property of F to either 0 or L, whichever is
          //       larger.
          // 16. Else set the length own property of F to 0.

          var boundLength = max(0, target.length - args.length);

          // 17. Set the attributes of the length own property of F to the values
          //   specified in 15.3.5.1.
          var boundArgs = [];
          for (var i = 0; i < boundLength; i++) {
              array_push.call(boundArgs, '$' + i);
          }

          // XXX Build a dynamic function with desired amount of arguments is the only
          // way to set the length property of a function.
          // In environments where Content Security Policies enabled (Chrome extensions,
          // for ex.) all use of eval or Function costructor throws an exception.
          // However in all of these environments Function.prototype.bind exists
          // and so this code will never be executed.
          bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

          if (target.prototype) {
              Empty.prototype = target.prototype;
              bound.prototype = new Empty();
              // Clean up dangling references.
              Empty.prototype = null;
          }

          // TODO
          // 18. Set the [[Extensible]] internal property of F to true.

          // TODO
          // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
          // 20. Call the [[DefineOwnProperty]] internal method of F with
          //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
          //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
          //   false.
          // 21. Call the [[DefineOwnProperty]] internal method of F with
          //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
          //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
          //   and false.

          // TODO
          // NOTE Function objects created using Function.prototype.bind do not
          // have a prototype property or the [[Code]], [[FormalParameters]], and
          // [[Scope]] internal properties.
          // XXX can't delete prototype in pure-js.

          // 22. Return F.
          return bound;
      }
  });
})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof __webpack_require__.g && __webpack_require__.g || {});

(function(undefined) {

    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/master/packages/polyfill-library/polyfills/DOMTokenList/detect.js
    var detect = (
      'DOMTokenList' in this && (function (x) {
        return 'classList' in x ? !x.classList.toggle('x', false) && !x.className : true;
      })(document.createElement('x'))
    );

    if (detect) return

    // Polyfill from https://raw.githubusercontent.com/Financial-Times/polyfill-service/master/packages/polyfill-library/polyfills/DOMTokenList/polyfill.js
    (function (global) {
      var nativeImpl = "DOMTokenList" in global && global.DOMTokenList;

      if (
          !nativeImpl ||
          (
            !!document.createElementNS &&
            !!document.createElementNS('http://www.w3.org/2000/svg', 'svg') &&
            !(document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList)
          )
        ) {
        global.DOMTokenList = (function() { // eslint-disable-line no-unused-vars
          var dpSupport = true;
          var defineGetter = function (object, name, fn, configurable) {
            if (Object.defineProperty)
              Object.defineProperty(object, name, {
                configurable: false === dpSupport ? true : !!configurable,
                get: fn
              });

            else object.__defineGetter__(name, fn);
          };

          /** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */
          try {
            defineGetter({}, "support");
          }
          catch (e) {
            dpSupport = false;
          }


          var _DOMTokenList = function (el, prop) {
            var that = this;
            var tokens = [];
            var tokenMap = {};
            var length = 0;
            var maxLength = 0;
            var addIndexGetter = function (i) {
              defineGetter(that, i, function () {
                preop();
                return tokens[i];
              }, false);

            };
            var reindex = function () {

              /** Define getter functions for array-like access to the tokenList's contents. */
              if (length >= maxLength)
                for (; maxLength < length; ++maxLength) {
                  addIndexGetter(maxLength);
                }
            };

            /** Helper function called at the start of each class method. Internal use only. */
            var preop = function () {
              var error;
              var i;
              var args = arguments;
              var rSpace = /\s+/;

              /** Validate the token/s passed to an instance method, if any. */
              if (args.length)
                for (i = 0; i < args.length; ++i)
                  if (rSpace.test(args[i])) {
                    error = new SyntaxError('String "' + args[i] + '" ' + "contains" + ' an invalid character');
                    error.code = 5;
                    error.name = "InvalidCharacterError";
                    throw error;
                  }


              /** Split the new value apart by whitespace*/
              if (typeof el[prop] === "object") {
                tokens = ("" + el[prop].baseVal).replace(/^\s+|\s+$/g, "").split(rSpace);
              } else {
                tokens = ("" + el[prop]).replace(/^\s+|\s+$/g, "").split(rSpace);
              }

              /** Avoid treating blank strings as single-item token lists */
              if ("" === tokens[0]) tokens = [];

              /** Repopulate the internal token lists */
              tokenMap = {};
              for (i = 0; i < tokens.length; ++i)
                tokenMap[tokens[i]] = true;
              length = tokens.length;
              reindex();
            };

            /** Populate our internal token list if the targeted attribute of the subject element isn't empty. */
            preop();

            /** Return the number of tokens in the underlying string. Read-only. */
            defineGetter(that, "length", function () {
              preop();
              return length;
            });

            /** Override the default toString/toLocaleString methods to return a space-delimited list of tokens when typecast. */
            that.toLocaleString =
              that.toString = function () {
                preop();
                return tokens.join(" ");
              };

            that.item = function (idx) {
              preop();
              return tokens[idx];
            };

            that.contains = function (token) {
              preop();
              return !!tokenMap[token];
            };

            that.add = function () {
              preop.apply(that, args = arguments);

              for (var args, token, i = 0, l = args.length; i < l; ++i) {
                token = args[i];
                if (!tokenMap[token]) {
                  tokens.push(token);
                  tokenMap[token] = true;
                }
              }

              /** Update the targeted attribute of the attached element if the token list's changed. */
              if (length !== tokens.length) {
                length = tokens.length >>> 0;
                if (typeof el[prop] === "object") {
                  el[prop].baseVal = tokens.join(" ");
                } else {
                  el[prop] = tokens.join(" ");
                }
                reindex();
              }
            };

            that.remove = function () {
              preop.apply(that, args = arguments);

              /** Build a hash of token names to compare against when recollecting our token list. */
              for (var args, ignore = {}, i = 0, t = []; i < args.length; ++i) {
                ignore[args[i]] = true;
                delete tokenMap[args[i]];
              }

              /** Run through our tokens list and reassign only those that aren't defined in the hash declared above. */
              for (i = 0; i < tokens.length; ++i)
                if (!ignore[tokens[i]]) t.push(tokens[i]);

              tokens = t;
              length = t.length >>> 0;

              /** Update the targeted attribute of the attached element. */
              if (typeof el[prop] === "object") {
                el[prop].baseVal = tokens.join(" ");
              } else {
                el[prop] = tokens.join(" ");
              }
              reindex();
            };

            that.toggle = function (token, force) {
              preop.apply(that, [token]);

              /** Token state's being forced. */
              if (undefined !== force) {
                if (force) {
                  that.add(token);
                  return true;
                } else {
                  that.remove(token);
                  return false;
                }
              }

              /** Token already exists in tokenList. Remove it, and return FALSE. */
              if (tokenMap[token]) {
                that.remove(token);
                return false;
              }

              /** Otherwise, add the token and return TRUE. */
              that.add(token);
              return true;
            };

            return that;
          };

          return _DOMTokenList;
        }());
      }

      // Add second argument to native DOMTokenList.toggle() if necessary
      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.toggle('x', false);
        if (!e.classList.contains('x')) return;
        e.classList.constructor.prototype.toggle = function toggle(token /*, force*/) {
          var force = arguments[1];
          if (force === undefined) {
            var add = !this.contains(token);
            this[add ? 'add' : 'remove'](token);
            return add;
          }
          force = !!force;
          this[force ? 'add' : 'remove'](token);
          return force;
        };
      }());

      // Add multiple arguments to native DOMTokenList.add() if necessary
      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.add('a', 'b');
        if (e.classList.contains('b')) return;
        var native = e.classList.constructor.prototype.add;
        e.classList.constructor.prototype.add = function () {
          var args = arguments;
          var l = arguments.length;
          for (var i = 0; i < l; i++) {
            native.call(this, args[i]);
          }
        };
      }());

      // Add multiple arguments to native DOMTokenList.remove() if necessary
      (function () {
        var e = document.createElement('span');
        if (!('classList' in e)) return;
        e.classList.add('a');
        e.classList.add('b');
        e.classList.remove('a', 'b');
        if (!e.classList.contains('b')) return;
        var native = e.classList.constructor.prototype.remove;
        e.classList.constructor.prototype.remove = function () {
          var args = arguments;
          var l = arguments.length;
          for (var i = 0; i < l; i++) {
            native.call(this, args[i]);
          }
        };
      }());

    }(this));

}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof __webpack_require__.g && __webpack_require__.g || {});

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Document/detect.js
var detect = ("Document" in this);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Document&flags=always
if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {

	if (this.HTMLDocument) { // IE8

		// HTMLDocument is an extension of Document.  If the browser has HTMLDocument but not Document, the former will suffice as an alias for the latter.
		this.Document = this.HTMLDocument;

	} else {

		// Create an empty function to act as the missing constructor for the document object, attach the document object as its prototype.  The function needs to be anonymous else it is hoisted and causes the feature detect to prematurely pass, preventing the assignments below being made.
		this.Document = this.HTMLDocument = document.constructor = (new Function('return function Document() {}')());
		this.Document.prototype = document;
	}
}


})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof __webpack_require__.g && __webpack_require__.g || {});

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Element/detect.js
var detect = ('Element' in this && 'HTMLElement' in this);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Element&flags=always
(function () {

	// IE8
	if (window.Element && !window.HTMLElement) {
		window.HTMLElement = window.Element;
		return;
	}

	// create Element constructor
	window.Element = window.HTMLElement = new Function('return function Element() {}')();

	// generate sandboxed iframe
	var vbody = document.appendChild(document.createElement('body'));
	var frame = vbody.appendChild(document.createElement('iframe'));

	// use sandboxed iframe to replicate Element functionality
	var frameDocument = frame.contentWindow.document;
	var prototype = Element.prototype = frameDocument.appendChild(frameDocument.createElement('*'));
	var cache = {};

	// polyfill Element.prototype on an element
	var shiv = function (element, deep) {
		var
		childNodes = element.childNodes || [],
		index = -1,
		key, value, childNode;

		if (element.nodeType === 1 && element.constructor !== Element) {
			element.constructor = Element;

			for (key in cache) {
				value = cache[key];
				element[key] = value;
			}
		}

		while (childNode = deep && childNodes[++index]) {
			shiv(childNode, deep);
		}

		return element;
	};

	var elements = document.getElementsByTagName('*');
	var nativeCreateElement = document.createElement;
	var interval;
	var loopLimit = 100;

	prototype.attachEvent('onpropertychange', function (event) {
		var
		propertyName = event.propertyName,
		nonValue = !cache.hasOwnProperty(propertyName),
		newValue = prototype[propertyName],
		oldValue = cache[propertyName],
		index = -1,
		element;

		while (element = elements[++index]) {
			if (element.nodeType === 1) {
				if (nonValue || element[propertyName] === oldValue) {
					element[propertyName] = newValue;
				}
			}
		}

		cache[propertyName] = newValue;
	});

	prototype.constructor = Element;

	if (!prototype.hasAttribute) {
		// <Element>.hasAttribute
		prototype.hasAttribute = function hasAttribute(name) {
			return this.getAttribute(name) !== null;
		};
	}

	// Apply Element prototype to the pre-existing DOM as soon as the body element appears.
	function bodyCheck() {
		if (!(loopLimit--)) clearTimeout(interval);
		if (document.body && !document.body.prototype && /(complete|interactive)/.test(document.readyState)) {
			shiv(document, true);
			if (interval && document.body.prototype) clearTimeout(interval);
			return (!!document.body.prototype);
		}
		return false;
	}
	if (!bodyCheck()) {
		document.onreadystatechange = bodyCheck;
		interval = setInterval(bodyCheck, 25);
	}

	// Apply to any new elements created after load
	document.createElement = function createElement(nodeName) {
		var element = nativeCreateElement(String(nodeName).toLowerCase());
		return shiv(element);
	};

	// remove sandboxed iframe
	document.removeChild(vbody);
}());

})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof __webpack_require__.g && __webpack_require__.g || {});

(function(undefined) {

    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/8717a9e04ac7aff99b4980fbedead98036b0929a/packages/polyfill-library/polyfills/Element/prototype/classList/detect.js
    var detect = (
      'document' in this && "classList" in document.documentElement && 'Element' in this && 'classList' in Element.prototype && (function () {
        var e = document.createElement('span');
        e.classList.add('a', 'b');
        return e.classList.contains('b');
      }())
    );

    if (detect) return

    // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Element.prototype.classList&flags=always
    (function (global) {
      var dpSupport = true;
      var defineGetter = function (object, name, fn, configurable) {
        if (Object.defineProperty)
          Object.defineProperty(object, name, {
            configurable: false === dpSupport ? true : !!configurable,
            get: fn
          });

        else object.__defineGetter__(name, fn);
      };
      /** Ensure the browser allows Object.defineProperty to be used on native JavaScript objects. */
      try {
        defineGetter({}, "support");
      }
      catch (e) {
        dpSupport = false;
      }
      /** Polyfills a property with a DOMTokenList */
      var addProp = function (o, name, attr) {

        defineGetter(o.prototype, name, function () {
          var tokenList;

          var THIS = this,

          /** Prevent this from firing twice for some reason. What the hell, IE. */
          gibberishProperty = "__defineGetter__" + "DEFINE_PROPERTY" + name;
          if(THIS[gibberishProperty]) return tokenList;
          THIS[gibberishProperty] = true;

          /**
           * IE8 can't define properties on native JavaScript objects, so we'll use a dumb hack instead.
           *
           * What this is doing is creating a dummy element ("reflection") inside a detached phantom node ("mirror")
           * that serves as the target of Object.defineProperty instead. While we could simply use the subject HTML
           * element instead, this would conflict with element types which use indexed properties (such as forms and
           * select lists).
           */
          if (false === dpSupport) {

            var visage;
            var mirror = addProp.mirror || document.createElement("div");
            var reflections = mirror.childNodes;
            var l = reflections.length;

            for (var i = 0; i < l; ++i)
              if (reflections[i]._R === THIS) {
                visage = reflections[i];
                break;
              }

            /** Couldn't find an element's reflection inside the mirror. Materialise one. */
            visage || (visage = mirror.appendChild(document.createElement("div")));

            tokenList = DOMTokenList.call(visage, THIS, attr);
          } else tokenList = new DOMTokenList(THIS, attr);

          defineGetter(THIS, name, function () {
            return tokenList;
          });
          delete THIS[gibberishProperty];

          return tokenList;
        }, true);
      };

      addProp(global.Element, "classList", "className");
      addProp(global.HTMLElement, "classList", "className");
      addProp(global.HTMLLinkElement, "relList", "rel");
      addProp(global.HTMLAnchorElement, "relList", "rel");
      addProp(global.HTMLAreaElement, "relList", "rel");
    }(this));

}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof __webpack_require__.g && __webpack_require__.g || {});

function Accordion ($module) {
  this.$module = $module;
  this.moduleId = $module.getAttribute('id');
  this.$sections = $module.querySelectorAll('.govuk-accordion__section');
  this.$openAllButton = '';
  this.browserSupportsSessionStorage = helper.checkForSessionStorage();

  this.controlsClass = 'govuk-accordion__controls';
  this.openAllClass = 'govuk-accordion__open-all';
  this.iconClass = 'govuk-accordion__icon';

  this.sectionHeaderClass = 'govuk-accordion__section-header';
  this.sectionHeaderFocusedClass = 'govuk-accordion__section-header--focused';
  this.sectionHeadingClass = 'govuk-accordion__section-heading';
  this.sectionSummaryClass = 'govuk-accordion__section-summary';
  this.sectionButtonClass = 'govuk-accordion__section-button';
  this.sectionExpandedClass = 'govuk-accordion__section--expanded';
}

// Initialize component
Accordion.prototype.init = function () {
  // Check for module
  if (!this.$module) {
    return
  }

  this.initControls();

  this.initSectionHeaders();

  // See if "Open all" button text should be updated
  var areAllSectionsOpen = this.checkIfAllSectionsOpen();
  this.updateOpenAllButton(areAllSectionsOpen);
};

// Initialise controls and set attributes
Accordion.prototype.initControls = function () {
  // Create "Open all" button and set attributes
  this.$openAllButton = document.createElement('button');
  this.$openAllButton.setAttribute('type', 'button');
  this.$openAllButton.innerHTML = 'Open all <span class="govuk-visually-hidden">sections</span>';
  this.$openAllButton.setAttribute('class', this.openAllClass);
  this.$openAllButton.setAttribute('aria-expanded', 'false');
  this.$openAllButton.setAttribute('type', 'button');

  // Create control wrapper and add controls to it
  var accordionControls = document.createElement('div');
  accordionControls.setAttribute('class', this.controlsClass);
  accordionControls.appendChild(this.$openAllButton);
  this.$module.insertBefore(accordionControls, this.$module.firstChild);

  // Handle events for the controls
  this.$openAllButton.addEventListener('click', this.onOpenOrCloseAllToggle.bind(this));
};

// Initialise section headers
Accordion.prototype.initSectionHeaders = function () {
  // Loop through section headers
  nodeListForEach(this.$sections, function ($section, i) {
    // Set header attributes
    var header = $section.querySelector('.' + this.sectionHeaderClass);
    this.initHeaderAttributes(header, i);

    this.setExpanded(this.isExpanded($section), $section);

    // Handle events
    header.addEventListener('click', this.onSectionToggle.bind(this, $section));

    // See if there is any state stored in sessionStorage and set the sections to
    // open or closed.
    this.setInitialState($section);
  }.bind(this));
};

// Set individual header attributes
Accordion.prototype.initHeaderAttributes = function ($headerWrapper, index) {
  var $module = this;
  var $span = $headerWrapper.querySelector('.' + this.sectionButtonClass);
  var $heading = $headerWrapper.querySelector('.' + this.sectionHeadingClass);
  var $summary = $headerWrapper.querySelector('.' + this.sectionSummaryClass);

  // Copy existing span element to an actual button element, for improved accessibility.
  var $button = document.createElement('button');
  $button.setAttribute('type', 'button');
  $button.setAttribute('id', this.moduleId + '-heading-' + (index + 1));
  $button.setAttribute('aria-controls', this.moduleId + '-content-' + (index + 1));

  // Copy all attributes (https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) from $span to $button
  for (var i = 0; i < $span.attributes.length; i++) {
    var attr = $span.attributes.item(i);
    $button.setAttribute(attr.nodeName, attr.nodeValue);
  }

  $button.addEventListener('focusin', function (e) {
    if (!$headerWrapper.classList.contains($module.sectionHeaderFocusedClass)) {
      $headerWrapper.className += ' ' + $module.sectionHeaderFocusedClass;
    }
  });

  $button.addEventListener('blur', function (e) {
    $headerWrapper.classList.remove($module.sectionHeaderFocusedClass);
  });

  if (typeof ($summary) !== 'undefined' && $summary !== null) {
    $button.setAttribute('aria-describedby', this.moduleId + '-summary-' + (index + 1));
  }

  // $span could contain HTML elements (see https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content)
  $button.innerHTML = $span.innerHTML;

  $heading.removeChild($span);
  $heading.appendChild($button);

  // Add "+/-" icon
  var icon = document.createElement('span');
  icon.className = this.iconClass;
  icon.setAttribute('aria-hidden', 'true');

  $button.appendChild(icon);
};

// When section toggled, set and store state
Accordion.prototype.onSectionToggle = function ($section) {
  var expanded = this.isExpanded($section);
  this.setExpanded(!expanded, $section);

  // Store the state in sessionStorage when a change is triggered
  this.storeState($section);
};

// When Open/Close All toggled, set and store state
Accordion.prototype.onOpenOrCloseAllToggle = function () {
  var $module = this;
  var $sections = this.$sections;

  var nowExpanded = !this.checkIfAllSectionsOpen();

  nodeListForEach($sections, function ($section) {
    $module.setExpanded(nowExpanded, $section);
    // Store the state in sessionStorage when a change is triggered
    $module.storeState($section);
  });

  $module.updateOpenAllButton(nowExpanded);
};

// Set section attributes when opened/closed
Accordion.prototype.setExpanded = function (expanded, $section) {
  var $button = $section.querySelector('.' + this.sectionButtonClass);
  $button.setAttribute('aria-expanded', expanded);

  if (expanded) {
    $section.classList.add(this.sectionExpandedClass);
  } else {
    $section.classList.remove(this.sectionExpandedClass);
  }

  // See if "Open all" button text should be updated
  var areAllSectionsOpen = this.checkIfAllSectionsOpen();
  this.updateOpenAllButton(areAllSectionsOpen);
};

// Get state of section
Accordion.prototype.isExpanded = function ($section) {
  return $section.classList.contains(this.sectionExpandedClass)
};

// Check if all sections are open
Accordion.prototype.checkIfAllSectionsOpen = function () {
  // Get a count of all the Accordion sections
  var sectionsCount = this.$sections.length;
  // Get a count of all Accordion sections that are expanded
  var expandedSectionCount = this.$module.querySelectorAll('.' + this.sectionExpandedClass).length;
  var areAllSectionsOpen = sectionsCount === expandedSectionCount;

  return areAllSectionsOpen
};

// Update "Open all" button
Accordion.prototype.updateOpenAllButton = function (expanded) {
  var newButtonText = expanded ? 'Close all' : 'Open all';
  newButtonText += '<span class="govuk-visually-hidden"> sections</span>';
  this.$openAllButton.setAttribute('aria-expanded', expanded);
  this.$openAllButton.innerHTML = newButtonText;
};

// Check for `window.sessionStorage`, and that it actually works.
var helper = {
  checkForSessionStorage: function () {
    var testString = 'this is the test string';
    var result;
    try {
      window.sessionStorage.setItem(testString, testString);
      result = window.sessionStorage.getItem(testString) === testString.toString();
      window.sessionStorage.removeItem(testString);
      return result
    } catch (exception) {
      if ((typeof console === 'undefined' || typeof console.log === 'undefined')) {
        console.log('Notice: sessionStorage not available.');
      }
    }
  }
};

// Set the state of the accordions in sessionStorage
Accordion.prototype.storeState = function ($section) {
  if (this.browserSupportsSessionStorage) {
    // We need a unique way of identifying each content in the accordion. Since
    // an `#id` should be unique and an `id` is required for `aria-` attributes
    // `id` can be safely used.
    var $button = $section.querySelector('.' + this.sectionButtonClass);

    if ($button) {
      var contentId = $button.getAttribute('aria-controls');
      var contentState = $button.getAttribute('aria-expanded');

      if (typeof contentId === 'undefined' && (typeof console === 'undefined' || typeof console.log === 'undefined')) {
        console.error(new Error('No aria controls present in accordion section heading.'));
      }

      if (typeof contentState === 'undefined' && (typeof console === 'undefined' || typeof console.log === 'undefined')) {
        console.error(new Error('No aria expanded present in accordion section heading.'));
      }

      // Only set the state when both `contentId` and `contentState` are taken from the DOM.
      if (contentId && contentState) {
        window.sessionStorage.setItem(contentId, contentState);
      }
    }
  }
};

// Read the state of the accordions from sessionStorage
Accordion.prototype.setInitialState = function ($section) {
  if (this.browserSupportsSessionStorage) {
    var $button = $section.querySelector('.' + this.sectionButtonClass);

    if ($button) {
      var contentId = $button.getAttribute('aria-controls');
      var contentState = contentId ? window.sessionStorage.getItem(contentId) : null;

      if (contentState !== null) {
        this.setExpanded(contentState === 'true', $section);
      }
    }
  }
};

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Window/detect.js
var detect = ('Window' in this);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Window&flags=always
if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {
	(function (global) {
		if (global.constructor) {
			global.Window = global.constructor;
		} else {
			(global.Window = global.constructor = new Function('return function Window() {}')()).prototype = this;
		}
	}(this));
}

})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof __webpack_require__.g && __webpack_require__.g || {});

(function(undefined) {

// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Event/detect.js
var detect = (
  (function(global) {

  	if (!('Event' in global)) return false;
  	if (typeof global.Event === 'function') return true;

  	try {

  		// In IE 9-11, the Event object exists but cannot be instantiated
  		new Event('click');
  		return true;
  	} catch(e) {
  		return false;
  	}
  }(this))
);

if (detect) return

// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Event&flags=always
(function () {
	var unlistenableWindowEvents = {
		click: 1,
		dblclick: 1,
		keyup: 1,
		keypress: 1,
		keydown: 1,
		mousedown: 1,
		mouseup: 1,
		mousemove: 1,
		mouseover: 1,
		mouseenter: 1,
		mouseleave: 1,
		mouseout: 1,
		storage: 1,
		storagecommit: 1,
		textinput: 1
	};

	// This polyfill depends on availability of `document` so will not run in a worker
	// However, we asssume there are no browsers with worker support that lack proper
	// support for `Event` within the worker
	if (typeof document === 'undefined' || typeof window === 'undefined') return;

	function indexOf(array, element) {
		var
		index = -1,
		length = array.length;

		while (++index < length) {
			if (index in array && array[index] === element) {
				return index;
			}
		}

		return -1;
	}

	var existingProto = (window.Event && window.Event.prototype) || null;
	window.Event = Window.prototype.Event = function Event(type, eventInitDict) {
		if (!type) {
			throw new Error('Not enough arguments');
		}

		var event;
		// Shortcut if browser supports createEvent
		if ('createEvent' in document) {
			event = document.createEvent('Event');
			var bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
			var cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;

			event.initEvent(type, bubbles, cancelable);

			return event;
		}

		event = document.createEventObject();

		event.type = type;
		event.bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
		event.cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;

		return event;
	};
	if (existingProto) {
		Object.defineProperty(window.Event, 'prototype', {
			configurable: false,
			enumerable: false,
			writable: true,
			value: existingProto
		});
	}

	if (!('createEvent' in document)) {
		window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function addEventListener() {
			var
			element = this,
			type = arguments[0],
			listener = arguments[1];

			if (element === window && type in unlistenableWindowEvents) {
				throw new Error('In IE8 the event: ' + type + ' is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.');
			}

			if (!element._events) {
				element._events = {};
			}

			if (!element._events[type]) {
				element._events[type] = function (event) {
					var
					list = element._events[event.type].list,
					events = list.slice(),
					index = -1,
					length = events.length,
					eventElement;

					event.preventDefault = function preventDefault() {
						if (event.cancelable !== false) {
							event.returnValue = false;
						}
					};

					event.stopPropagation = function stopPropagation() {
						event.cancelBubble = true;
					};

					event.stopImmediatePropagation = function stopImmediatePropagation() {
						event.cancelBubble = true;
						event.cancelImmediate = true;
					};

					event.currentTarget = element;
					event.relatedTarget = event.fromElement || null;
					event.target = event.target || event.srcElement || element;
					event.timeStamp = new Date().getTime();

					if (event.clientX) {
						event.pageX = event.clientX + document.documentElement.scrollLeft;
						event.pageY = event.clientY + document.documentElement.scrollTop;
					}

					while (++index < length && !event.cancelImmediate) {
						if (index in events) {
							eventElement = events[index];

							if (indexOf(list, eventElement) !== -1 && typeof eventElement === 'function') {
								eventElement.call(element, event);
							}
						}
					}
				};

				element._events[type].list = [];

				if (element.attachEvent) {
					element.attachEvent('on' + type, element._events[type]);
				}
			}

			element._events[type].list.push(listener);
		};

		window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function removeEventListener() {
			var
			element = this,
			type = arguments[0],
			listener = arguments[1],
			index;

			if (element._events && element._events[type] && element._events[type].list) {
				index = indexOf(element._events[type].list, listener);

				if (index !== -1) {
					element._events[type].list.splice(index, 1);

					if (!element._events[type].list.length) {
						if (element.detachEvent) {
							element.detachEvent('on' + type, element._events[type]);
						}
						delete element._events[type];
					}
				}
			}
		};

		window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function dispatchEvent(event) {
			if (!arguments.length) {
				throw new Error('Not enough arguments');
			}

			if (!event || typeof event.type !== 'string') {
				throw new Error('DOM Events Exception 0');
			}

			var element = this, type = event.type;

			try {
				if (!event.bubbles) {
					event.cancelBubble = true;

					var cancelBubbleEvent = function (event) {
						event.cancelBubble = true;

						(element || window).detachEvent('on' + type, cancelBubbleEvent);
					};

					this.attachEvent('on' + type, cancelBubbleEvent);
				}

				this.fireEvent('on' + type, event);
			} catch (error) {
				event.target = element;

				do {
					event.currentTarget = element;

					if ('_events' in element && typeof element._events[type] === 'function') {
						element._events[type].call(element, event);
					}

					if (typeof element['on' + type] === 'function') {
						element['on' + type].call(element, event);
					}

					element = element.nodeType === 9 ? element.parentWindow : element.parentNode;
				} while (element && !event.cancelBubble);
			}

			return true;
		};

		// Add the DOMContentLoaded Event
		document.attachEvent('onreadystatechange', function() {
			if (document.readyState === 'complete') {
				document.dispatchEvent(new Event('DOMContentLoaded', {
					bubbles: true
				}));
			}
		});
	}
}());

})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof __webpack_require__.g && __webpack_require__.g || {});

var KEY_SPACE = 32;
var DEBOUNCE_TIMEOUT_IN_SECONDS = 1;

function Button ($module) {
  this.$module = $module;
  this.debounceFormSubmitTimer = null;
}

/**
* JavaScript 'shim' to trigger the click event of element(s) when the space key is pressed.
*
* Created since some Assistive Technologies (for example some Screenreaders)
* will tell a user to press space on a 'button', so this functionality needs to be shimmed
* See https://github.com/alphagov/govuk_elements/pull/272#issuecomment-233028270
*
* @param {object} event event
*/
Button.prototype.handleKeyDown = function (event) {
  // get the target element
  var target = event.target;
  // if the element has a role='button' and the pressed key is a space, we'll simulate a click
  if (target.getAttribute('role') === 'button' && event.keyCode === KEY_SPACE) {
    event.preventDefault();
    // trigger the target's click event
    target.click();
  }
};

/**
* If the click quickly succeeds a previous click then nothing will happen.
* This stops people accidentally causing multiple form submissions by
* double clicking buttons.
*/
Button.prototype.debounce = function (event) {
  var target = event.target;
  // Check the button that is clicked on has the preventDoubleClick feature enabled
  if (target.getAttribute('data-prevent-double-click') !== 'true') {
    return
  }

  // If the timer is still running then we want to prevent the click from submitting the form
  if (this.debounceFormSubmitTimer) {
    event.preventDefault();
    return false
  }

  this.debounceFormSubmitTimer = setTimeout(function () {
    this.debounceFormSubmitTimer = null;
  }.bind(this), DEBOUNCE_TIMEOUT_IN_SECONDS * 1000);
};

/**
* Initialise an event listener for keydown at document level
* this will help listening for later inserted elements with a role="button"
*/
Button.prototype.init = function () {
  this.$module.addEventListener('keydown', this.handleKeyDown);
  this.$module.addEventListener('click', this.debounce);
};

/**
 * JavaScript 'polyfill' for HTML5's <details> and <summary> elements
 * and 'shim' to add accessiblity enhancements for all browsers
 *
 * http://caniuse.com/#feat=details
 */

var KEY_ENTER = 13;
var KEY_SPACE$1 = 32;

function Details ($module) {
  this.$module = $module;
}

Details.prototype.init = function () {
  if (!this.$module) {
    return
  }

  // If there is native details support, we want to avoid running code to polyfill native behaviour.
  var hasNativeDetails = typeof this.$module.open === 'boolean';

  if (hasNativeDetails) {
    return
  }

  this.polyfillDetails();
};

Details.prototype.polyfillDetails = function () {
  var $module = this.$module;

  // Save shortcuts to the inner summary and content elements
  var $summary = this.$summary = $module.getElementsByTagName('summary').item(0);
  var $content = this.$content = $module.getElementsByTagName('div').item(0);

  // If <details> doesn't have a <summary> and a <div> representing the content
  // it means the required HTML structure is not met so the script will stop
  if (!$summary || !$content) {
    return
  }

  // If the content doesn't have an ID, assign it one now
  // which we'll need for the summary's aria-controls assignment
  if (!$content.id) {
    $content.id = 'details-content-' + generateUniqueID();
  }

  // Add ARIA role="group" to details
  $module.setAttribute('role', 'group');

  // Add role=button to summary
  $summary.setAttribute('role', 'button');

  // Add aria-controls
  $summary.setAttribute('aria-controls', $content.id);

  // Set tabIndex so the summary is keyboard accessible for non-native elements
  //
  // We have to use the camelcase `tabIndex` property as there is a bug in IE6/IE7 when we set the correct attribute lowercase:
  // See http://web.archive.org/web/20170120194036/http://www.saliences.com/browserBugs/tabIndex.html for more information.
  $summary.tabIndex = 0;

  // Detect initial open state
  var openAttr = $module.getAttribute('open') !== null;
  if (openAttr === true) {
    $summary.setAttribute('aria-expanded', 'true');
    $content.setAttribute('aria-hidden', 'false');
  } else {
    $summary.setAttribute('aria-expanded', 'false');
    $content.setAttribute('aria-hidden', 'true');
    $content.style.display = 'none';
  }

  // Bind an event to handle summary elements
  this.polyfillHandleInputs($summary, this.polyfillSetAttributes.bind(this));
};

/**
* Define a statechange function that updates aria-expanded and style.display
* @param {object} summary element
*/
Details.prototype.polyfillSetAttributes = function () {
  var $module = this.$module;
  var $summary = this.$summary;
  var $content = this.$content;

  var expanded = $summary.getAttribute('aria-expanded') === 'true';
  var hidden = $content.getAttribute('aria-hidden') === 'true';

  $summary.setAttribute('aria-expanded', (expanded ? 'false' : 'true'));
  $content.setAttribute('aria-hidden', (hidden ? 'false' : 'true'));

  $content.style.display = (expanded ? 'none' : '');

  var hasOpenAttr = $module.getAttribute('open') !== null;
  if (!hasOpenAttr) {
    $module.setAttribute('open', 'open');
  } else {
    $module.removeAttribute('open');
  }

  return true
};

/**
* Handle cross-modal click events
* @param {object} node element
* @param {function} callback function
*/
Details.prototype.polyfillHandleInputs = function (node, callback) {
  node.addEventListener('keypress', function (event) {
    var target = event.target;
    // When the key gets pressed - check if it is enter or space
    if (event.keyCode === KEY_ENTER || event.keyCode === KEY_SPACE$1) {
      if (target.nodeName.toLowerCase() === 'summary') {
        // Prevent space from scrolling the page
        // and enter from submitting a form
        event.preventDefault();
        // Click to let the click event do all the necessary action
        if (target.click) {
          target.click();
        } else {
          // except Safari 5.1 and under don't support .click() here
          callback(event);
        }
      }
    }
  });

  // Prevent keyup to prevent clicking twice in Firefox when using space key
  node.addEventListener('keyup', function (event) {
    var target = event.target;
    if (event.keyCode === KEY_SPACE$1) {
      if (target.nodeName.toLowerCase() === 'summary') {
        event.preventDefault();
      }
    }
  });

  node.addEventListener('click', callback);
};

function CharacterCount ($module) {
  this.$module = $module;
  this.$textarea = $module.querySelector('.govuk-js-character-count');
  if (this.$textarea) {
    this.$countMessage = $module.querySelector('[id=' + this.$textarea.id + '-info]');
  }
}

CharacterCount.prototype.defaults = {
  characterCountAttribute: 'data-maxlength',
  wordCountAttribute: 'data-maxwords'
};

// Initialize component
CharacterCount.prototype.init = function () {
  // Check for module
  var $module = this.$module;
  var $textarea = this.$textarea;
  var $countMessage = this.$countMessage;

  if (!$textarea || !$countMessage) {
    return
  }

  // We move count message right after the field
  // Kept for backwards compatibility
  $textarea.insertAdjacentElement('afterend', $countMessage);

  // Read options set using dataset ('data-' values)
  this.options = this.getDataset($module);

  // Determine the limit attribute (characters or words)
  var countAttribute = this.defaults.characterCountAttribute;
  if (this.options.maxwords) {
    countAttribute = this.defaults.wordCountAttribute;
  }

  // Save the element limit
  this.maxLength = $module.getAttribute(countAttribute);

  // Check for limit
  if (!this.maxLength) {
    return
  }

  // Remove hard limit if set
  $module.removeAttribute('maxlength');

  // When the page is restored after navigating 'back' in some browsers the
  // state of the character count is not restored until *after* the DOMContentLoaded
  // event is fired, so we need to sync after the pageshow event in browsers
  // that support it.
  if ('onpageshow' in window) {
    window.addEventListener('pageshow', this.sync.bind(this));
  } else {
    window.addEventListener('DOMContentLoaded', this.sync.bind(this));
  }

  this.sync();
};

CharacterCount.prototype.sync = function () {
  this.bindChangeEvents();
  this.updateCountMessage();
};

// Read data attributes
CharacterCount.prototype.getDataset = function (element) {
  var dataset = {};
  var attributes = element.attributes;
  if (attributes) {
    for (var i = 0; i < attributes.length; i++) {
      var attribute = attributes[i];
      var match = attribute.name.match(/^data-(.+)/);
      if (match) {
        dataset[match[1]] = attribute.value;
      }
    }
  }
  return dataset
};

// Counts characters or words in text
CharacterCount.prototype.count = function (text) {
  var length;
  if (this.options.maxwords) {
    var tokens = text.match(/\S+/g) || []; // Matches consecutive non-whitespace chars
    length = tokens.length;
  } else {
    length = text.length;
  }
  return length
};

// Bind input propertychange to the elements and update based on the change
CharacterCount.prototype.bindChangeEvents = function () {
  var $textarea = this.$textarea;
  $textarea.addEventListener('keyup', this.checkIfValueChanged.bind(this));

  // Bind focus/blur events to start/stop polling
  $textarea.addEventListener('focus', this.handleFocus.bind(this));
  $textarea.addEventListener('blur', this.handleBlur.bind(this));
};

// Speech recognition software such as Dragon NaturallySpeaking will modify the
// fields by directly changing its `value`. These changes don't trigger events
// in JavaScript, so we need to poll to handle when and if they occur.
CharacterCount.prototype.checkIfValueChanged = function () {
  if (!this.$textarea.oldValue) this.$textarea.oldValue = '';
  if (this.$textarea.value !== this.$textarea.oldValue) {
    this.$textarea.oldValue = this.$textarea.value;
    this.updateCountMessage();
  }
};

// Update message box
CharacterCount.prototype.updateCountMessage = function () {
  var countElement = this.$textarea;
  var options = this.options;
  var countMessage = this.$countMessage;

  // Determine the remaining number of characters/words
  var currentLength = this.count(countElement.value);
  var maxLength = this.maxLength;
  var remainingNumber = maxLength - currentLength;

  // Set threshold if presented in options
  var thresholdPercent = options.threshold ? options.threshold : 0;
  var thresholdValue = maxLength * thresholdPercent / 100;
  if (thresholdValue > currentLength) {
    countMessage.classList.add('govuk-character-count__message--disabled');
    // Ensure threshold is hidden for users of assistive technologies
    countMessage.setAttribute('aria-hidden', true);
  } else {
    countMessage.classList.remove('govuk-character-count__message--disabled');
    // Ensure threshold is visible for users of assistive technologies
    countMessage.removeAttribute('aria-hidden');
  }

  // Update styles
  if (remainingNumber < 0) {
    countElement.classList.add('govuk-textarea--error');
    countMessage.classList.remove('govuk-hint');
    countMessage.classList.add('govuk-error-message');
  } else {
    countElement.classList.remove('govuk-textarea--error');
    countMessage.classList.remove('govuk-error-message');
    countMessage.classList.add('govuk-hint');
  }

  // Update message
  var charVerb = 'remaining';
  var charNoun = 'character';
  var displayNumber = remainingNumber;
  if (options.maxwords) {
    charNoun = 'word';
  }
  charNoun = charNoun + ((remainingNumber === -1 || remainingNumber === 1) ? '' : 's');

  charVerb = (remainingNumber < 0) ? 'too many' : 'remaining';
  displayNumber = Math.abs(remainingNumber);

  countMessage.innerHTML = 'You have ' + displayNumber + ' ' + charNoun + ' ' + charVerb;
};

CharacterCount.prototype.handleFocus = function () {
  // Check if value changed on focus
  this.valueChecker = setInterval(this.checkIfValueChanged.bind(this), 1000);
};

CharacterCount.prototype.handleBlur = function () {
  // Cancel value checking on blur
  clearInterval(this.valueChecker);
};

function Checkboxes ($module) {
  this.$module = $module;
  this.$inputs = $module.querySelectorAll('input[type="checkbox"]');
}

/**
 * Initialise Checkboxes
 *
 * Checkboxes can be associated with a 'conditionally revealed' content block –
 * for example, a checkbox for 'Phone' could reveal an additional form field for
 * the user to enter their phone number.
 *
 * These associations are made using a `data-aria-controls` attribute, which is
 * promoted to an aria-controls attribute during initialisation.
 *
 * We also need to restore the state of any conditional reveals on the page (for
 * example if the user has navigated back), and set up event handlers to keep
 * the reveal in sync with the checkbox state.
 */
Checkboxes.prototype.init = function () {
  var $module = this.$module;
  var $inputs = this.$inputs;

  nodeListForEach($inputs, function ($input) {
    var target = $input.getAttribute('data-aria-controls');

    // Skip checkboxes without data-aria-controls attributes, or where the
    // target element does not exist.
    if (!target || !$module.querySelector('#' + target)) {
      return
    }

    // Promote the data-aria-controls attribute to a aria-controls attribute
    // so that the relationship is exposed in the AOM
    $input.setAttribute('aria-controls', target);
    $input.removeAttribute('data-aria-controls');
  });

  // When the page is restored after navigating 'back' in some browsers the
  // state of form controls is not restored until *after* the DOMContentLoaded
  // event is fired, so we need to sync after the pageshow event in browsers
  // that support it.
  if ('onpageshow' in window) {
    window.addEventListener('pageshow', this.syncAllConditionalReveals.bind(this));
  } else {
    window.addEventListener('DOMContentLoaded', this.syncAllConditionalReveals.bind(this));
  }

  // Although we've set up handlers to sync state on the pageshow or
  // DOMContentLoaded event, init could be called after those events have fired,
  // for example if they are added to the page dynamically, so sync now too.
  this.syncAllConditionalReveals();

  $module.addEventListener('click', this.handleClick.bind(this));
};

/**
 * Sync the conditional reveal states for all inputs in this $module.
 */
Checkboxes.prototype.syncAllConditionalReveals = function () {
  nodeListForEach(this.$inputs, this.syncConditionalRevealWithInputState.bind(this));
};

/**
 * Sync conditional reveal with the input state
 *
 * Synchronise the visibility of the conditional reveal, and its accessible
 * state, with the input's checked state.
 *
 * @param {HTMLInputElement} $input Checkbox input
 */
Checkboxes.prototype.syncConditionalRevealWithInputState = function ($input) {
  var $target = this.$module.querySelector('#' + $input.getAttribute('aria-controls'));

  if ($target && $target.classList.contains('govuk-checkboxes__conditional')) {
    var inputIsChecked = $input.checked;

    $input.setAttribute('aria-expanded', inputIsChecked);
    $target.classList.toggle('govuk-checkboxes__conditional--hidden', !inputIsChecked);
  }
};

/**
 * Click event handler
 *
 * Handle a click within the $module – if the click occurred on a checkbox, sync
 * the state of any associated conditional reveal with the checkbox state.
 *
 * @param {MouseEvent} event Click event
 */
Checkboxes.prototype.handleClick = function (event) {
  var $target = event.target;

  // If a checkbox with aria-controls, handle click
  var isCheckbox = $target.getAttribute('type') === 'checkbox';
  var hasAriaControls = $target.getAttribute('aria-controls');
  if (isCheckbox && hasAriaControls) {
    this.syncConditionalRevealWithInputState($target);
  }
};

(function(undefined) {

  // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/1f3c09b402f65bf6e393f933a15ba63f1b86ef1f/packages/polyfill-library/polyfills/Element/prototype/matches/detect.js
  var detect = (
    'document' in this && "matches" in document.documentElement
  );

  if (detect) return

  // Polyfill from https://raw.githubusercontent.com/Financial-Times/polyfill-service/1f3c09b402f65bf6e393f933a15ba63f1b86ef1f/packages/polyfill-library/polyfills/Element/prototype/matches/polyfill.js
  Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function matches(selector) {
    var element = this;
    var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
    var index = 0;

    while (elements[index] && elements[index] !== element) {
      ++index;
    }

    return !!elements[index];
  };

}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof __webpack_require__.g && __webpack_require__.g || {});

(function(undefined) {

  // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-service/1f3c09b402f65bf6e393f933a15ba63f1b86ef1f/packages/polyfill-library/polyfills/Element/prototype/closest/detect.js
  var detect = (
    'document' in this && "closest" in document.documentElement
  );

  if (detect) return

  // Polyfill from https://raw.githubusercontent.com/Financial-Times/polyfill-service/1f3c09b402f65bf6e393f933a15ba63f1b86ef1f/packages/polyfill-library/polyfills/Element/prototype/closest/polyfill.js
  Element.prototype.closest = function closest(selector) {
    var node = this;

    while (node) {
      if (node.matches(selector)) return node;
      else node = 'SVGElement' in window && node instanceof SVGElement ? node.parentNode : node.parentElement;
    }

    return null;
  };

}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof __webpack_require__.g && __webpack_require__.g || {});

function ErrorSummary ($module) {
  this.$module = $module;
}

ErrorSummary.prototype.init = function () {
  var $module = this.$module;
  if (!$module) {
    return
  }
  $module.focus();

  $module.addEventListener('click', this.handleClick.bind(this));
};

/**
* Click event handler
*
* @param {MouseEvent} event - Click event
*/
ErrorSummary.prototype.handleClick = function (event) {
  var target = event.target;
  if (this.focusTarget(target)) {
    event.preventDefault();
  }
};

/**
 * Focus the target element
 *
 * By default, the browser will scroll the target into view. Because our labels
 * or legends appear above the input, this means the user will be presented with
 * an input without any context, as the label or legend will be off the top of
 * the screen.
 *
 * Manually handling the click event, scrolling the question into view and then
 * focussing the element solves this.
 *
 * This also results in the label and/or legend being announced correctly in
 * NVDA (as tested in 2018.3.2) - without this only the field type is announced
 * (e.g. "Edit, has autocomplete").
 *
 * @param {HTMLElement} $target - Event target
 * @returns {boolean} True if the target was able to be focussed
 */
ErrorSummary.prototype.focusTarget = function ($target) {
  // If the element that was clicked was not a link, return early
  if ($target.tagName !== 'A' || $target.href === false) {
    return false
  }

  var inputId = this.getFragmentFromUrl($target.href);
  var $input = document.getElementById(inputId);
  if (!$input) {
    return false
  }

  var $legendOrLabel = this.getAssociatedLegendOrLabel($input);
  if (!$legendOrLabel) {
    return false
  }

  // Scroll the legend or label into view *before* calling focus on the input to
  // avoid extra scrolling in browsers that don't support `preventScroll` (which
  // at time of writing is most of them...)
  $legendOrLabel.scrollIntoView();
  $input.focus({ preventScroll: true });

  return true
};

/**
 * Get fragment from URL
 *
 * Extract the fragment (everything after the hash) from a URL, but not including
 * the hash.
 *
 * @param {string} url - URL
 * @returns {string} Fragment from URL, without the hash
 */
ErrorSummary.prototype.getFragmentFromUrl = function (url) {
  if (url.indexOf('#') === -1) {
    return false
  }

  return url.split('#').pop()
};

/**
 * Get associated legend or label
 *
 * Returns the first element that exists from this list:
 *
 * - The `<legend>` associated with the closest `<fieldset>` ancestor, as long
 *   as the top of it is no more than half a viewport height away from the
 *   bottom of the input
 * - The first `<label>` that is associated with the input using for="inputId"
 * - The closest parent `<label>`
 *
 * @param {HTMLElement} $input - The input
 * @returns {HTMLElement} Associated legend or label, or null if no associated
 *                        legend or label can be found
 */
ErrorSummary.prototype.getAssociatedLegendOrLabel = function ($input) {
  var $fieldset = $input.closest('fieldset');

  if ($fieldset) {
    var legends = $fieldset.getElementsByTagName('legend');

    if (legends.length) {
      var $candidateLegend = legends[0];

      // If the input type is radio or checkbox, always use the legend if there
      // is one.
      if ($input.type === 'checkbox' || $input.type === 'radio') {
        return $candidateLegend
      }

      // For other input types, only scroll to the fieldset’s legend (instead of
      // the label associated with the input) if the input would end up in the
      // top half of the screen.
      //
      // This should avoid situations where the input either ends up off the
      // screen, or obscured by a software keyboard.
      var legendTop = $candidateLegend.getBoundingClientRect().top;
      var inputRect = $input.getBoundingClientRect();

      // If the browser doesn't support Element.getBoundingClientRect().height
      // or window.innerHeight (like IE8), bail and just link to the label.
      if (inputRect.height && window.innerHeight) {
        var inputBottom = inputRect.top + inputRect.height;

        if (inputBottom - legendTop < window.innerHeight / 2) {
          return $candidateLegend
        }
      }
    }
  }

  return document.querySelector("label[for='" + $input.getAttribute('id') + "']") ||
    $input.closest('label')
};

function NotificationBanner ($module) {
  this.$module = $module;
}

/**
 * Initialise the component
 */
NotificationBanner.prototype.init = function () {
  var $module = this.$module;
  // Check for module
  if (!$module) {
    return
  }

  this.setFocus();
};

/**
 * Focus the element
 *
 * If `role="alert"` is set, focus the element to help some assistive technologies
 * prioritise announcing it.
 *
 * You can turn off the auto-focus functionality by setting `data-disable-auto-focus="true"` in the
 * component HTML. You might wish to do this based on user research findings, or to avoid a clash
 * with another element which should be focused when the page loads.
 */
NotificationBanner.prototype.setFocus = function () {
  var $module = this.$module;

  if ($module.getAttribute('data-disable-auto-focus') === 'true') {
    return
  }

  if ($module.getAttribute('role') !== 'alert') {
    return
  }

  // Set tabindex to -1 to make the element focusable with JavaScript.
  // Remove the tabindex on blur as the component doesn't need to be focusable after the page has
  // loaded.
  if (!$module.getAttribute('tabindex')) {
    $module.setAttribute('tabindex', '-1');

    $module.addEventListener('blur', function () {
      $module.removeAttribute('tabindex');
    });
  }

  $module.focus();
};

function Header ($module) {
  this.$module = $module;
  this.$menuButton = $module && $module.querySelector('.govuk-js-header-toggle');
  this.$menu = this.$menuButton && $module.querySelector(
    '#' + this.$menuButton.getAttribute('aria-controls')
  );
}

/**
 * Initialise header
 *
 * Check for the presence of the header, menu and menu button – if any are
 * missing then there's nothing to do so return early.
 */
Header.prototype.init = function () {
  if (!this.$module || !this.$menuButton || !this.$menu) {
    return
  }

  this.syncState(this.$menu.classList.contains('govuk-header__navigation--open'));
  this.$menuButton.addEventListener('click', this.handleMenuButtonClick.bind(this));
};

/**
 * Sync menu state
 *
 * Sync the menu button class and the accessible state of the menu and the menu
 * button with the visible state of the menu
 *
 * @param {boolean} isVisible Whether the menu is currently visible
 */
Header.prototype.syncState = function (isVisible) {
  this.$menuButton.classList.toggle('govuk-header__menu-button--open', isVisible);
  this.$menuButton.setAttribute('aria-expanded', isVisible);
};

/**
 * Handle menu button click
 *
 * When the menu button is clicked, change the visibility of the menu and then
 * sync the accessibility state and menu button state
 */
Header.prototype.handleMenuButtonClick = function () {
  var isVisible = this.$menu.classList.toggle('govuk-header__navigation--open');
  this.syncState(isVisible);
};

function Radios ($module) {
  this.$module = $module;
  this.$inputs = $module.querySelectorAll('input[type="radio"]');
}

/**
 * Initialise Radios
 *
 * Radios can be associated with a 'conditionally revealed' content block – for
 * example, a radio for 'Phone' could reveal an additional form field for the
 * user to enter their phone number.
 *
 * These associations are made using a `data-aria-controls` attribute, which is
 * promoted to an aria-controls attribute during initialisation.
 *
 * We also need to restore the state of any conditional reveals on the page (for
 * example if the user has navigated back), and set up event handlers to keep
 * the reveal in sync with the radio state.
 */
Radios.prototype.init = function () {
  var $module = this.$module;
  var $inputs = this.$inputs;

  nodeListForEach($inputs, function ($input) {
    var target = $input.getAttribute('data-aria-controls');

    // Skip radios without data-aria-controls attributes, or where the
    // target element does not exist.
    if (!target || !$module.querySelector('#' + target)) {
      return
    }

    // Promote the data-aria-controls attribute to a aria-controls attribute
    // so that the relationship is exposed in the AOM
    $input.setAttribute('aria-controls', target);
    $input.removeAttribute('data-aria-controls');
  });

  // When the page is restored after navigating 'back' in some browsers the
  // state of form controls is not restored until *after* the DOMContentLoaded
  // event is fired, so we need to sync after the pageshow event in browsers
  // that support it.
  if ('onpageshow' in window) {
    window.addEventListener('pageshow', this.syncAllConditionalReveals.bind(this));
  } else {
    window.addEventListener('DOMContentLoaded', this.syncAllConditionalReveals.bind(this));
  }

  // Although we've set up handlers to sync state on the pageshow or
  // DOMContentLoaded event, init could be called after those events have fired,
  // for example if they are added to the page dynamically, so sync now too.
  this.syncAllConditionalReveals();

  // Handle events
  $module.addEventListener('click', this.handleClick.bind(this));
};

/**
 * Sync the conditional reveal states for all inputs in this $module.
 */
Radios.prototype.syncAllConditionalReveals = function () {
  nodeListForEach(this.$inputs, this.syncConditionalRevealWithInputState.bind(this));
};

/**
 * Sync conditional reveal with the input state
 *
 * Synchronise the visibility of the conditional reveal, and its accessible
 * state, with the input's checked state.
 *
 * @param {HTMLInputElement} $input Radio input
 */
Radios.prototype.syncConditionalRevealWithInputState = function ($input) {
  var $target = document.querySelector('#' + $input.getAttribute('aria-controls'));

  if ($target && $target.classList.contains('govuk-radios__conditional')) {
    var inputIsChecked = $input.checked;

    $input.setAttribute('aria-expanded', inputIsChecked);
    $target.classList.toggle('govuk-radios__conditional--hidden', !inputIsChecked);
  }
};

/**
 * Click event handler
 *
 * Handle a click within the $module – if the click occurred on a radio, sync
 * the state of the conditional reveal for all radio buttons in the same form
 * with the same name (because checking one radio could have un-checked a radio
 * in another $module)
 *
 * @param {MouseEvent} event Click event
 */
Radios.prototype.handleClick = function (event) {
  var $clickedInput = event.target;

  // Ignore clicks on things that aren't radio buttons
  if ($clickedInput.type !== 'radio') {
    return
  }

  // We only need to consider radios with conditional reveals, which will have
  // aria-controls attributes.
  var $allInputs = document.querySelectorAll('input[type="radio"][aria-controls]');

  nodeListForEach($allInputs, function ($input) {
    var hasSameFormOwner = ($input.form === $clickedInput.form);
    var hasSameName = ($input.name === $clickedInput.name);

    if (hasSameName && hasSameFormOwner) {
      this.syncConditionalRevealWithInputState($input);
    }
  }.bind(this));
};

(function(undefined) {

    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-library/master/polyfills/Element/prototype/nextElementSibling/detect.js
    var detect = (
      'document' in this && "nextElementSibling" in document.documentElement
    );

    if (detect) return

    // Polyfill from https://raw.githubusercontent.com/Financial-Times/polyfill-library/master/polyfills/Element/prototype/nextElementSibling/polyfill.js
    Object.defineProperty(Element.prototype, "nextElementSibling", {
      get: function(){
        var el = this.nextSibling;
        while (el && el.nodeType !== 1) { el = el.nextSibling; }
        return el;
      }
    });

}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof __webpack_require__.g && __webpack_require__.g || {});

(function(undefined) {

    // Detection from https://raw.githubusercontent.com/Financial-Times/polyfill-library/master/polyfills/Element/prototype/previousElementSibling/detect.js
    var detect = (
      'document' in this && "previousElementSibling" in document.documentElement
    );

    if (detect) return

    // Polyfill from https://raw.githubusercontent.com/Financial-Times/polyfill-library/master/polyfills/Element/prototype/previousElementSibling/polyfill.js
    Object.defineProperty(Element.prototype, 'previousElementSibling', {
      get: function(){
        var el = this.previousSibling;
        while (el && el.nodeType !== 1) { el = el.previousSibling; }
        return el;
      }
    });

}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof __webpack_require__.g && __webpack_require__.g || {});

function Tabs ($module) {
  this.$module = $module;
  this.$tabs = $module.querySelectorAll('.govuk-tabs__tab');

  this.keys = { left: 37, right: 39, up: 38, down: 40 };
  this.jsHiddenClass = 'govuk-tabs__panel--hidden';
}

Tabs.prototype.init = function () {
  if (typeof window.matchMedia === 'function') {
    this.setupResponsiveChecks();
  } else {
    this.setup();
  }
};

Tabs.prototype.setupResponsiveChecks = function () {
  this.mql = window.matchMedia('(min-width: 40.0625em)');
  this.mql.addListener(this.checkMode.bind(this));
  this.checkMode();
};

Tabs.prototype.checkMode = function () {
  if (this.mql.matches) {
    this.setup();
  } else {
    this.teardown();
  }
};

Tabs.prototype.setup = function () {
  var $module = this.$module;
  var $tabs = this.$tabs;
  var $tabList = $module.querySelector('.govuk-tabs__list');
  var $tabListItems = $module.querySelectorAll('.govuk-tabs__list-item');

  if (!$tabs || !$tabList || !$tabListItems) {
    return
  }

  $tabList.setAttribute('role', 'tablist');

  nodeListForEach($tabListItems, function ($item) {
    $item.setAttribute('role', 'presentation');
  });

  nodeListForEach($tabs, function ($tab) {
    // Set HTML attributes
    this.setAttributes($tab);

    // Save bounded functions to use when removing event listeners during teardown
    $tab.boundTabClick = this.onTabClick.bind(this);
    $tab.boundTabKeydown = this.onTabKeydown.bind(this);

    // Handle events
    $tab.addEventListener('click', $tab.boundTabClick, true);
    $tab.addEventListener('keydown', $tab.boundTabKeydown, true);

    // Remove old active panels
    this.hideTab($tab);
  }.bind(this));

  // Show either the active tab according to the URL's hash or the first tab
  var $activeTab = this.getTab(window.location.hash) || this.$tabs[0];
  this.showTab($activeTab);

  // Handle hashchange events
  $module.boundOnHashChange = this.onHashChange.bind(this);
  window.addEventListener('hashchange', $module.boundOnHashChange, true);
};

Tabs.prototype.teardown = function () {
  var $module = this.$module;
  var $tabs = this.$tabs;
  var $tabList = $module.querySelector('.govuk-tabs__list');
  var $tabListItems = $module.querySelectorAll('.govuk-tabs__list-item');

  if (!$tabs || !$tabList || !$tabListItems) {
    return
  }

  $tabList.removeAttribute('role');

  nodeListForEach($tabListItems, function ($item) {
    $item.removeAttribute('role', 'presentation');
  });

  nodeListForEach($tabs, function ($tab) {
    // Remove events
    $tab.removeEventListener('click', $tab.boundTabClick, true);
    $tab.removeEventListener('keydown', $tab.boundTabKeydown, true);

    // Unset HTML attributes
    this.unsetAttributes($tab);
  }.bind(this));

  // Remove hashchange event handler
  window.removeEventListener('hashchange', $module.boundOnHashChange, true);
};

Tabs.prototype.onHashChange = function (e) {
  var hash = window.location.hash;
  var $tabWithHash = this.getTab(hash);
  if (!$tabWithHash) {
    return
  }

  // Prevent changing the hash
  if (this.changingHash) {
    this.changingHash = false;
    return
  }

  // Show either the active tab according to the URL's hash or the first tab
  var $previousTab = this.getCurrentTab();

  this.hideTab($previousTab);
  this.showTab($tabWithHash);
  $tabWithHash.focus();
};

Tabs.prototype.hideTab = function ($tab) {
  this.unhighlightTab($tab);
  this.hidePanel($tab);
};

Tabs.prototype.showTab = function ($tab) {
  this.highlightTab($tab);
  this.showPanel($tab);
};

Tabs.prototype.getTab = function (hash) {
  return this.$module.querySelector('.govuk-tabs__tab[href="' + hash + '"]')
};

Tabs.prototype.setAttributes = function ($tab) {
  // set tab attributes
  var panelId = this.getHref($tab).slice(1);
  $tab.setAttribute('id', 'tab_' + panelId);
  $tab.setAttribute('role', 'tab');
  $tab.setAttribute('aria-controls', panelId);
  $tab.setAttribute('aria-selected', 'false');
  $tab.setAttribute('tabindex', '-1');

  // set panel attributes
  var $panel = this.getPanel($tab);
  $panel.setAttribute('role', 'tabpanel');
  $panel.setAttribute('aria-labelledby', $tab.id);
  $panel.classList.add(this.jsHiddenClass);
};

Tabs.prototype.unsetAttributes = function ($tab) {
  // unset tab attributes
  $tab.removeAttribute('id');
  $tab.removeAttribute('role');
  $tab.removeAttribute('aria-controls');
  $tab.removeAttribute('aria-selected');
  $tab.removeAttribute('tabindex');

  // unset panel attributes
  var $panel = this.getPanel($tab);
  $panel.removeAttribute('role');
  $panel.removeAttribute('aria-labelledby');
  $panel.classList.remove(this.jsHiddenClass);
};

Tabs.prototype.onTabClick = function (e) {
  if (!e.target.classList.contains('govuk-tabs__tab')) {
  // Allow events on child DOM elements to bubble up to tab parent
    return false
  }
  e.preventDefault();
  var $newTab = e.target;
  var $currentTab = this.getCurrentTab();
  this.hideTab($currentTab);
  this.showTab($newTab);
  this.createHistoryEntry($newTab);
};

Tabs.prototype.createHistoryEntry = function ($tab) {
  var $panel = this.getPanel($tab);

  // Save and restore the id
  // so the page doesn't jump when a user clicks a tab (which changes the hash)
  var id = $panel.id;
  $panel.id = '';
  this.changingHash = true;
  window.location.hash = this.getHref($tab).slice(1);
  $panel.id = id;
};

Tabs.prototype.onTabKeydown = function (e) {
  switch (e.keyCode) {
    case this.keys.left:
    case this.keys.up:
      this.activatePreviousTab();
      e.preventDefault();
      break
    case this.keys.right:
    case this.keys.down:
      this.activateNextTab();
      e.preventDefault();
      break
  }
};

Tabs.prototype.activateNextTab = function () {
  var currentTab = this.getCurrentTab();
  var nextTabListItem = currentTab.parentNode.nextElementSibling;
  if (nextTabListItem) {
    var nextTab = nextTabListItem.querySelector('.govuk-tabs__tab');
  }
  if (nextTab) {
    this.hideTab(currentTab);
    this.showTab(nextTab);
    nextTab.focus();
    this.createHistoryEntry(nextTab);
  }
};

Tabs.prototype.activatePreviousTab = function () {
  var currentTab = this.getCurrentTab();
  var previousTabListItem = currentTab.parentNode.previousElementSibling;
  if (previousTabListItem) {
    var previousTab = previousTabListItem.querySelector('.govuk-tabs__tab');
  }
  if (previousTab) {
    this.hideTab(currentTab);
    this.showTab(previousTab);
    previousTab.focus();
    this.createHistoryEntry(previousTab);
  }
};

Tabs.prototype.getPanel = function ($tab) {
  var $panel = this.$module.querySelector(this.getHref($tab));
  return $panel
};

Tabs.prototype.showPanel = function ($tab) {
  var $panel = this.getPanel($tab);
  $panel.classList.remove(this.jsHiddenClass);
};

Tabs.prototype.hidePanel = function (tab) {
  var $panel = this.getPanel(tab);
  $panel.classList.add(this.jsHiddenClass);
};

Tabs.prototype.unhighlightTab = function ($tab) {
  $tab.setAttribute('aria-selected', 'false');
  $tab.parentNode.classList.remove('govuk-tabs__list-item--selected');
  $tab.setAttribute('tabindex', '-1');
};

Tabs.prototype.highlightTab = function ($tab) {
  $tab.setAttribute('aria-selected', 'true');
  $tab.parentNode.classList.add('govuk-tabs__list-item--selected');
  $tab.setAttribute('tabindex', '0');
};

Tabs.prototype.getCurrentTab = function () {
  return this.$module.querySelector('.govuk-tabs__list-item--selected .govuk-tabs__tab')
};

// this is because IE doesn't always return the actual value but a relative full path
// should be a utility function most prob
// http://labs.thesedays.com/blog/2010/01/08/getting-the-href-value-with-jquery-in-ie/
Tabs.prototype.getHref = function ($tab) {
  var href = $tab.getAttribute('href');
  var hash = href.slice(href.indexOf('#'), href.length);
  return hash
};

function initAll (options) {
  // Set the options to an empty object by default if no options are passed.
  options = typeof options !== 'undefined' ? options : {};

  // Allow the user to initialise GOV.UK Frontend in only certain sections of the page
  // Defaults to the entire document if nothing is set.
  var scope = typeof options.scope !== 'undefined' ? options.scope : document;

  var $buttons = scope.querySelectorAll('[data-module="govuk-button"]');
  nodeListForEach($buttons, function ($button) {
    new Button($button).init();
  });

  var $accordions = scope.querySelectorAll('[data-module="govuk-accordion"]');
  nodeListForEach($accordions, function ($accordion) {
    new Accordion($accordion).init();
  });

  var $details = scope.querySelectorAll('[data-module="govuk-details"]');
  nodeListForEach($details, function ($detail) {
    new Details($detail).init();
  });

  var $characterCounts = scope.querySelectorAll('[data-module="govuk-character-count"]');
  nodeListForEach($characterCounts, function ($characterCount) {
    new CharacterCount($characterCount).init();
  });

  var $checkboxes = scope.querySelectorAll('[data-module="govuk-checkboxes"]');
  nodeListForEach($checkboxes, function ($checkbox) {
    new Checkboxes($checkbox).init();
  });

  // Find first error summary module to enhance.
  var $errorSummary = scope.querySelector('[data-module="govuk-error-summary"]');
  new ErrorSummary($errorSummary).init();

  // Find first header module to enhance.
  var $toggleButton = scope.querySelector('[data-module="govuk-header"]');
  new Header($toggleButton).init();

  var $notificationBanners = scope.querySelectorAll('[data-module="govuk-notification-banner"]');
  nodeListForEach($notificationBanners, function ($notificationBanner) {
    new NotificationBanner($notificationBanner).init();
  });

  var $radios = scope.querySelectorAll('[data-module="govuk-radios"]');
  nodeListForEach($radios, function ($radio) {
    new Radios($radio).init();
  });

  var $tabs = scope.querySelectorAll('[data-module="govuk-tabs"]');
  nodeListForEach($tabs, function ($tabs) {
    new Tabs($tabs).init();
  });
}

exports.initAll = initAll;
exports.Accordion = Accordion;
exports.Button = Button;
exports.Details = Details;
exports.CharacterCount = CharacterCount;
exports.Checkboxes = Checkboxes;
exports.ErrorSummary = ErrorSummary;
exports.Header = Header;
exports.Radios = Radios;
exports.Tabs = Tabs;

})));


/***/ }),

/***/ "./docs/assets/css/main.less":
/*!***********************************!*\
  !*** ./docs/assets/css/main.less ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./packages/cfpb-icons/src/icons/close.svg":
/*!*************************************************!*\
  !*** ./packages/cfpb-icons/src/icons/close.svg ***!
  \*************************************************/
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 718.9 1200\" class=\"cf-icon-svg\"><path d=\"M451.4 613.7l248.1-248.1c25.6-25.1 26-66.3.8-91.9s-66.3-26-91.9-.8l-.8.8-248.1 248.1-248.1-248.1c-25.4-25.4-66.5-25.4-91.9 0s-25.4 66.5 0 91.9l248.1 248.1L19.5 861.8c-25.6 25.1-26 66.3-.8 91.9s66.3 26 91.9.8l.8-.8 248.1-248.1 248.1 248.1c25.4 25.4 66.5 25.4 91.9 0s25.4-66.5 0-91.9L451.4 613.7z\"></path></svg>"

/***/ }),

/***/ "./packages/cfpb-atomic-component/node_modules/ftdomdelegate/lib/delegate.js":
/*!***********************************************************************************!*\
  !*** ./packages/cfpb-atomic-component/node_modules/ftdomdelegate/lib/delegate.js ***!
  \***********************************************************************************/
/***/ (function(module) {

"use strict";
/*jshint browser:true, node:true*/
/* global HTMLDocument */



module.exports = Delegate;

/**
 * DOM event delegator
 *
 * The delegator will listen
 * for events that bubble up
 * to the root node.
 *
 * @constructor
 * @param {Node|string} [root] The root node or a selector string matching the root node
 */
function Delegate(root) {

  /**
   * Maintain a map of listener
   * lists, keyed by event name.
   *
   * @type Object
   */
  this.listenerMap = [{}, {}];
  if (root) {
    this.root(root);
  }

  /** @type function() */
  this.handle = Delegate.prototype.handle.bind(this);

  // Cache of event listeners removed during an event cycle
  this._removedListeners = [];
}

/**
 * Start listening for events
 * on the provided DOM element
 *
 * @param  {Node|string} [root] The root node or a selector string matching the root node
 * @returns {Delegate} This method is chainable
 */
Delegate.prototype.root = function(root) {
  var listenerMap = this.listenerMap;
  var eventType;

  // Remove master event listeners
  if (this.rootElement) {
    for (eventType in listenerMap[1]) {
      if (listenerMap[1].hasOwnProperty(eventType)) {
        this.rootElement.removeEventListener(eventType, this.handle, true);
      }
    }
    for (eventType in listenerMap[0]) {
      if (listenerMap[0].hasOwnProperty(eventType)) {
        this.rootElement.removeEventListener(eventType, this.handle, false);
      }
    }
  }

  // If no root or root is not
  // a dom node, then remove internal
  // root reference and exit here
  if (!root || !root.addEventListener) {
    if (this.rootElement) {
      delete this.rootElement;
    }
    return this;
  }

  /**
   * The root node at which
   * listeners are attached.
   *
   * @type Node
   */
  this.rootElement = root;

  // Set up master event listeners
  for (eventType in listenerMap[1]) {
    if (listenerMap[1].hasOwnProperty(eventType)) {
      this.rootElement.addEventListener(eventType, this.handle, true);
    }
  }
  for (eventType in listenerMap[0]) {
    if (listenerMap[0].hasOwnProperty(eventType)) {
      this.rootElement.addEventListener(eventType, this.handle, false);
    }
  }

  return this;
};

/**
 * @param {string} eventType
 * @returns boolean
 */
Delegate.prototype.captureForType = function(eventType) {
  return ['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(eventType) !== -1;
};

/**
 * Attach a handler to one
 * event for all elements
 * that match the selector,
 * now or in the future
 *
 * The handler function receives
 * three arguments: the DOM event
 * object, the node that matched
 * the selector while the event
 * was bubbling and a reference
 * to itself. Within the handler,
 * 'this' is equal to the second
 * argument.
 *
 * The node that actually received
 * the event can be accessed via
 * 'event.target'.
 *
 * @param {string} eventType Listen for these events
 * @param {string|undefined} selector Only handle events on elements matching this selector, if undefined match root element
 * @param {function()} handler Handler function - event data passed here will be in event.data
 * @param {boolean} [useCapture] see 'useCapture' in <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener>
 * @returns {Delegate} This method is chainable
 */
Delegate.prototype.on = function(eventType, selector, handler, useCapture) {
  var root, listenerMap, matcher, matcherParam;

  if (!eventType) {
    throw new TypeError('Invalid event type: ' + eventType);
  }

  // handler can be passed as
  // the second or third argument
  if (typeof selector === 'function') {
    useCapture = handler;
    handler = selector;
    selector = null;
  }

  // Fallback to sensible defaults
  // if useCapture not set
  if (useCapture === undefined) {
    useCapture = this.captureForType(eventType);
  }

  if (typeof handler !== 'function') {
    throw new TypeError('Handler must be a type of Function');
  }

  root = this.rootElement;
  listenerMap = this.listenerMap[useCapture ? 1 : 0];

  // Add master handler for type if not created yet
  if (!listenerMap[eventType]) {
    if (root) {
      root.addEventListener(eventType, this.handle, useCapture);
    }
    listenerMap[eventType] = [];
  }

  if (!selector) {
    matcherParam = null;

    // COMPLEX - matchesRoot needs to have access to
    // this.rootElement, so bind the function to this.
    matcher = matchesRoot.bind(this);

  // Compile a matcher for the given selector
  } else if (/^[a-z]+$/i.test(selector)) {
    matcherParam = selector;
    matcher = matchesTag;
  } else if (/^#[a-z0-9\-_]+$/i.test(selector)) {
    matcherParam = selector.slice(1);
    matcher = matchesId;
  } else {
    matcherParam = selector;
    matcher = matches;
  }

  // Add to the list of listeners
  listenerMap[eventType].push({
    selector: selector,
    handler: handler,
    matcher: matcher,
    matcherParam: matcherParam
  });

  return this;
};

/**
 * Remove an event handler
 * for elements that match
 * the selector, forever
 *
 * @param {string} [eventType] Remove handlers for events matching this type, considering the other parameters
 * @param {string} [selector] If this parameter is omitted, only handlers which match the other two will be removed
 * @param {function()} [handler] If this parameter is omitted, only handlers which match the previous two will be removed
 * @returns {Delegate} This method is chainable
 */
Delegate.prototype.off = function(eventType, selector, handler, useCapture) {
  var i, listener, listenerMap, listenerList, singleEventType;

  // Handler can be passed as
  // the second or third argument
  if (typeof selector === 'function') {
    useCapture = handler;
    handler = selector;
    selector = null;
  }

  // If useCapture not set, remove
  // all event listeners
  if (useCapture === undefined) {
    this.off(eventType, selector, handler, true);
    this.off(eventType, selector, handler, false);
    return this;
  }

  listenerMap = this.listenerMap[useCapture ? 1 : 0];
  if (!eventType) {
    for (singleEventType in listenerMap) {
      if (listenerMap.hasOwnProperty(singleEventType)) {
        this.off(singleEventType, selector, handler);
      }
    }

    return this;
  }

  listenerList = listenerMap[eventType];
  if (!listenerList || !listenerList.length) {
    return this;
  }

  // Remove only parameter matches
  // if specified
  for (i = listenerList.length - 1; i >= 0; i--) {
    listener = listenerList[i];

    if ((!selector || selector === listener.selector) && (!handler || handler === listener.handler)) {
      this._removedListeners.push(listener);
      listenerList.splice(i, 1);
    }
  }

  // All listeners removed
  if (!listenerList.length) {
    delete listenerMap[eventType];

    // Remove the main handler
    if (this.rootElement) {
      this.rootElement.removeEventListener(eventType, this.handle, useCapture);
    }
  }

  return this;
};


/**
 * Handle an arbitrary event.
 *
 * @param {Event} event
 */
Delegate.prototype.handle = function(event) {
  var i, l, type = event.type, root, phase, listener, returned, listenerList = [], target, /** @const */ EVENTIGNORE = 'ftLabsDelegateIgnore';

  if (event[EVENTIGNORE] === true) {
    return;
  }

  target = event.target;

  // Hardcode value of Node.TEXT_NODE
  // as not defined in IE8
  if (target.nodeType === 3) {
    target = target.parentNode;
  }

  // Handle SVG <use> elements in IE
  if (target.correspondingUseElement) {
    target = target.correspondingUseElement;
  }

  root = this.rootElement;

  phase = event.eventPhase || ( event.target !== event.currentTarget ? 3 : 2 );
  
  switch (phase) {
    case 1: //Event.CAPTURING_PHASE:
      listenerList = this.listenerMap[1][type];
    break;
    case 2: //Event.AT_TARGET:
      if (this.listenerMap[0] && this.listenerMap[0][type]) listenerList = listenerList.concat(this.listenerMap[0][type]);
      if (this.listenerMap[1] && this.listenerMap[1][type]) listenerList = listenerList.concat(this.listenerMap[1][type]);
    break;
    case 3: //Event.BUBBLING_PHASE:
      listenerList = this.listenerMap[0][type];
    break;
  }

  var toFire = [];

  // Need to continuously check
  // that the specific list is
  // still populated in case one
  // of the callbacks actually
  // causes the list to be destroyed.
  l = listenerList.length;
  while (target && l) {
    for (i = 0; i < l; i++) {
      listener = listenerList[i];

      // Bail from this loop if
      // the length changed and
      // no more listeners are
      // defined between i and l.
      if (!listener) {
        break;
      }

      if(
        target.tagName &&
        ["button", "input", "select", "textarea"].indexOf(target.tagName.toLowerCase()) > -1 &&
        target.hasAttribute("disabled")
      ) {
        // Remove things that have previously fired
        toFire = [];
      }
      // Check for match and fire
      // the event if there's one
      //
      // TODO:MCG:20120117: Need a way
      // to check if event#stopImmediatePropagation
      // was called. If so, break both loops.
      else if (listener.matcher.call(target, listener.matcherParam, target)) {
        toFire.push([event, target, listener]);
      }
    }

    // TODO:MCG:20120117: Need a way to
    // check if event#stopPropagation
    // was called. If so, break looping
    // through the DOM. Stop if the
    // delegation root has been reached
    if (target === root) {
      break;
    }

    l = listenerList.length;

    // Fall back to parentNode since SVG children have no parentElement in IE
    target = target.parentElement || target.parentNode;

    // Do not traverse up to document root when using parentNode, though
    if (target instanceof HTMLDocument) {
      break;
    }
  }

  var ret;

  for(i=0; i<toFire.length; i++) {
    // Has it been removed during while the event function was fired
    if(this._removedListeners.indexOf(toFire[i][2]) > -1) {
      continue;
    }
    returned = this.fire.apply(this, toFire[i]);

    // Stop propagation to subsequent
    // callbacks if the callback returned
    // false
    if (returned === false) {
      toFire[i][0][EVENTIGNORE] = true;
      toFire[i][0].preventDefault();
      ret = false;
      break;
    }
  }

  return ret;
};

/**
 * Fire a listener on a target.
 *
 * @param {Event} event
 * @param {Node} target
 * @param {Object} listener
 * @returns {boolean}
 */
Delegate.prototype.fire = function(event, target, listener) {
  return listener.handler.call(target, event, target);
};

/**
 * Check whether an element
 * matches a generic selector.
 *
 * @type function()
 * @param {string} selector A CSS selector
 */
var matches = (function(el) {
  if (!el) return;
  var p = el.prototype;
  return (p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector);
}(Element));

/**
 * Check whether an element
 * matches a tag selector.
 *
 * Tags are NOT case-sensitive,
 * except in XML (and XML-based
 * languages such as XHTML).
 *
 * @param {string} tagName The tag name to test against
 * @param {Element} element The element to test with
 * @returns boolean
 */
function matchesTag(tagName, element) {
  return tagName.toLowerCase() === element.tagName.toLowerCase();
}

/**
 * Check whether an element
 * matches the root.
 *
 * @param {?String} selector In this case this is always passed through as null and not used
 * @param {Element} element The element to test with
 * @returns boolean
 */
function matchesRoot(selector, element) {
  /*jshint validthis:true*/
  if (this.rootElement === window) {
    return (
      // Match the outer document (dispatched from document)
      element === document ||
      // The <html> element (dispatched from document.body or document.documentElement)
      element === document.documentElement ||
      // Or the window itself (dispatched from window)
      element === window
    );
  }
  return this.rootElement === element;
}

/**
 * Check whether the ID of
 * the element in 'this'
 * matches the given ID.
 *
 * IDs are case-sensitive.
 *
 * @param {string} id The ID to test against
 * @param {Element} element The element to test with
 * @returns boolean
 */
function matchesId(id, element) {
  return id === element.id;
}

/**
 * Short hand for off()
 * and root(), ie both
 * with no parameters
 *
 * @return void
 */
Delegate.prototype.destroy = function() {
  this.off();
  this.root();
};


/***/ }),

/***/ "./packages/cfpb-atomic-component/node_modules/ftdomdelegate/lib/index.js":
/*!********************************************************************************!*\
  !*** ./packages/cfpb-atomic-component/node_modules/ftdomdelegate/lib/index.js ***!
  \********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/*jshint browser:true, node:true*/



/**
 * @preserve Create and manage a DOM event delegator.
 *
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
var Delegate = __webpack_require__(/*! ./delegate */ "./packages/cfpb-atomic-component/node_modules/ftdomdelegate/lib/delegate.js");

module.exports = function(root) {
  return new Delegate(root);
};

module.exports.Delegate = Delegate;


/***/ }),

/***/ "./packages/cfpb-atomic-component/src/components/AtomicComponent.js":
/*!**************************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/components/AtomicComponent.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_atomic_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/atomic-helpers.js */ "./packages/cfpb-atomic-component/src/utilities/atomic-helpers.js");
/* harmony import */ var _utilities_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/object-assign.js */ "./packages/cfpb-atomic-component/src/utilities/object-assign.js");
/* harmony import */ var _mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/EventObserver.js */ "./packages/cfpb-atomic-component/src/mixins/EventObserver.js");
/* harmony import */ var _utilities_type_checkers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/type-checkers.js */ "./packages/cfpb-atomic-component/src/utilities/type-checkers.js");
/* ==========================================================================
   AtomicComponent

   Base Atomic Component

   Contains code copied from the following with major modifications :

   - Backbone.js ( http://backbonejs.org/docs/backbone.html ).
   - Marionette ( http://marionettejs.com ).

   ========================================================================== */



const Delegate = __webpack_require__(/*! ftdomdelegate */ "./packages/cfpb-atomic-component/node_modules/ftdomdelegate/lib/index.js").Delegate;



const TAG_NAME = 'div';

/**
 * Function as the constrcutor for the AtomicComponent.
 * Sets up initial instance properties and calls
 * necessary methods to properly instantiatie component.
 *
 * @param {HTMLElement} element - The element to set as the base element.
 * @param {Object} attributes - Hash of attributes to set on base element.
 */
function AtomicComponent( element, attributes ) {
  this.element = element;
  this.initializers = [];
  this.uId = this.uniqueId( 'ac' );
  (0,_utilities_object_assign_js__WEBPACK_IMPORTED_MODULE_1__.assign)( this, attributes );
  this.processModifiers();
  this.ensureElement();
  this.setCachedElements();
  this.initializers.push( this.initialize );
}

// Public instance Methods and properties.
(0,_utilities_object_assign_js__WEBPACK_IMPORTED_MODULE_1__.assign)( AtomicComponent.prototype, new _mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_2__.default(), {

  /**
   * Run through and call the component's initializers.
   * @returns {AtomicComponent} An instance.
   */
  init: function() {
    this.initializers.forEach( function( func ) {
      if ( _utilities_type_checkers_js__WEBPACK_IMPORTED_MODULE_3__.default.isFunction( func ) ) {
        func.apply( this, arguments );
      }
    }, this );
    this.dispatchEvent( 'component:initialized' );

    return this;
  },

  /**
   * Function used to process class modifiers. These should
   * correspond with BEM modifiers.
   *
   * @param {Object} attributes - Hash of attributes to set on base element.
   * @param {Object} atomicComponent - Base component.
   */
  processModifiers: function() {
    if ( !this.modifiers ) {
      return;
    }

    this.modifiers.forEach( function( modifier ) {
      const modifierClass = modifier.ui.base.substring( 1 );
      if ( this.element.classList.contains( modifierClass ) ) {
        if ( modifier.initialize ) {
          this.initializers.push( modifier.initialize );
          delete modifier.initialize;
        }
        (0,_utilities_object_assign_js__WEBPACK_IMPORTED_MODULE_1__.assign)( this, modifier );
      }
    }, this );
  },

  /**
   * Function used to render a template in Single Page Applications.
   *
   * @returns {AtomicComponent} An instance.
   */
  render: function() {
    return this;
  },

  /**
   * Function used to ensure and set / create the base DOM element.
   */
  ensureElement: function() {
    if ( !this.element ) { // eslint-disable-line no-negated-condition
      const attrs = (0,_utilities_object_assign_js__WEBPACK_IMPORTED_MODULE_1__.assign)( {}, this.attributes );
      attrs.id = this.id || this.u_id;
      if ( this.className ) attrs.class = this.className;
      this.setElement( document.createElement( TAG_NAME ) );
      this.setElementAttributes( attrs );
    } else {
      this.setElement( this.element );
    }
    (0,_utilities_atomic_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setInitFlag)( this.element );
  },

  /**
   * Function used to set the base DOM element.
   *
   * @param {HTMLElement} element - The element to set as the base element.
   * @returns {AtomicComponent} An instance.
   */
  setElement: function( element ) {
    if ( this.element ) {
      this.undelegateEvents();
    }
    this.element = element;
    this.delegateEvents();

    return this;
  },

  // TODO Fix complexity issue
  /* eslint-disable complexity */
  /**
   * Function used to set the cached DOM elements.
   *
   * @returns {Object} Hash of event names and cached elements.
   */
  setCachedElements: function() {
    const ui = (0,_utilities_object_assign_js__WEBPACK_IMPORTED_MODULE_1__.assign)( {}, this.ui );
    let key;
    let element;

    for ( key in ui ) {
      if ( ui.hasOwnProperty( key ) ) {
        element = this.element.querySelectorAll( ui[key] );
        if ( element.length === 1 ) {
          ui[key] = element[0];
        } else if ( element.length > 1 ) {
          ui[key] = element;
        } else {
          ui[key] = null;
        }
      }
    }
    this.ui = ui;

    return ui;
  },
  /* eslint-enable complexity */

  /**
   * Function used to remove the base element from the DOM
   * and unbind events.
   *
   * @returns {boolean} True if successful in tearing down component.
   */
  destroy: function() {
    if ( this.element ) {
      this.element.parentNode.removeChild( this.element );
      if ( this.element.view ) delete this.element.view;
      delete this.element;
    }
    this.undelegateEvents();
    this.dispatchEvent( 'component:destroyed' );

    return true;
  },

  /**
   * Function used to set the attributes on an element.
   *
   * @param {Object} attributes - Hash of attributes to set on base element.
   */
  setElementAttributes: function( attributes ) {
    let property;

    for ( property in attributes ) {
      if ( attributes.hasOwnProperty( property ) ) {
        this.element.setAttribute( property, attributes[property] );
      }
    }
  },

  // TODO Fix complexity issue
  /* eslint-disable complexity */
  /**
   * Function used to up event delegation on the base element.
   * Using Dom-delegate library to enable this functionality.
   *
   * @param {Object} events - Hash of events to bind to the dom element.
   * @returns {AtomicComponent} An instance.
   */
  delegateEvents: function( events ) {
    const delegateEventSplitter = /^(\S+)\s*(.*)$/;
    let key;
    let method;
    let match;

    events = events || ( events = this.events );
    if ( !events ) {
      return this;
    }

    this.undelegateEvents();
    this._delegate = new Delegate( this.element );
    for ( key in events ) {
      if ( {}.hasOwnProperty.call( events, key ) ) {
        method = events[key];
        if ( _utilities_type_checkers_js__WEBPACK_IMPORTED_MODULE_3__.default.isFunction( this[method] ) ) {
          method = this[method];
        }
        if ( method ) {
          match = key.match( delegateEventSplitter );
          this.delegate( match[1], match[2], method.bind( this ) );
        }
      }
    }
    this.dispatchEvent( 'component:bound' );

    return this;
  },
  /* eslint-enable complexity */

  /**
   * Function used to set the attributes on an element.
   *
   * @param {string} eventName - Event in which to listen for.
   * @param {string} selector - CSS selector.
   * @param {Function} listener - Callback for event.
   * @returns {AtomicComponent} An instance.
   */
  delegate: function( eventName, selector, listener ) {
    this._delegate.on( eventName, selector, listener );

    return this;
  },

  /**
   * Function used to remove events from the base element.
   *
   * @returns {AtomicComponent} An instance.
   */
  undelegateEvents: function() {
    if ( this._delegate ) {
      this._delegate.destroy();
    }
    this.element.removeAttribute( 'data-js-hook' );

    return this;
  },

  /**
   * Function used to set the attributes on an element.
   *
   * @param {string} prefix - String to use a prefix.
   * @returns {string} Prefixed unique id string.
   */
  uniqueId: function( prefix ) {
    return prefix + '_' + Math.random().toString( 36 ).substr( 2, 9 );
  }

} );

// Static Methods

/**
 * Function used to set the attributes on an element.
 * and unbind events.
 *
 * @param {Object} attributes - Hash of attributes to set on base element.
 * @returns {Function} Extended child constructor function.
 */
function extend( attributes ) {

  /**
   * Function used as constructor in order to establish inheritance chain.
   * @returns {AtomicComponent} An instance.
   */
  function child() {
    this._super = AtomicComponent.prototype;
    return AtomicComponent.apply( this, arguments );
  }

  child.prototype = Object.create( AtomicComponent.prototype );
  (0,_utilities_object_assign_js__WEBPACK_IMPORTED_MODULE_1__.assign)( child.prototype, attributes );
  (0,_utilities_object_assign_js__WEBPACK_IMPORTED_MODULE_1__.assign)( child, AtomicComponent );

  if ( attributes.hasOwnProperty( 'ui' ) &&
       attributes.ui.hasOwnProperty( 'base' ) ) {
    child.selector = attributes.ui.base;
  }

  child.constants = {};

  return child;
}

/**
 * Function used to instantiate all instances of the particular
 * atomic component on a page.
 *
 * @param {HTMLNode} scope - Where to search for components within.
 * @returns {Array} List of AtomicComponent instances.
 */
function init( scope ) {
  const components = (0,_utilities_atomic_helpers_js__WEBPACK_IMPORTED_MODULE_0__.instantiateAll)( this.selector, this, scope );
  return components;
}

// Set public static methods.
AtomicComponent.init = init;
AtomicComponent.extend = extend;

/* harmony default export */ __webpack_exports__["default"] = (AtomicComponent);


/***/ }),

/***/ "./packages/cfpb-atomic-component/src/mixins/EventObserver.js":
/*!********************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/mixins/EventObserver.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * EventObserver
 * @class
 *
 * @classdesc Used for creating an object
 *   that can be used to dispatch and listen to custom events.
 * @returns {Object} An EventObserver instance.
 */
function EventObserver() {

  // The events registered on this instance.
  const _events = {};

  /**
   * Register an event listener.
   * @param {string} event - The event name to listen for.
   * @param {Function} callback - The function called when the event has fired.
   * @returns {Object} The instance this EventObserver instance is decorating.
   */
  function addEventListener( event, callback ) {
    if ( _events.hasOwnProperty( event ) ) {
      _events[event].push( callback );
    } else {
      _events[event] = [ callback ];
    }

    return this;
  }

  /**
   * Remove an added event listener.
   * Must match a call made to addEventListener.
   * @param {string} event - The event name to remove.
   * @param {Function} callback - The function attached to the event.
   * @returns {Object} The instance this EventObserver instance is decorating.
   */
  function removeEventListener( event, callback ) {
    if ( !_events.hasOwnProperty( event ) ) {
      return this;
    }

    const index = _events[event].indexOf( callback );
    // Check if there are any callbacks associated with a particular event.
    if ( index !== -1 ) {
      _events[event].splice( index, 1 );
    }

    return this;
  }

  /**
   * Broadcast an event.
   * @param {string} event - The type of event to broadcast.
   * @param {Object} options - The event object to pass to the event handler.
   * @returns {Object} The instance this EventObserver instance is decorating.
   */
  function dispatchEvent( event, options ) {
    if ( !_events.hasOwnProperty( event ) ) {
      return this;
    }

    options = options || {};

    const evts = _events[event];
    for ( let i = 0, len = evts.length; i < len; i++ ) {
      evts[i].call( this, options );
    }

    return this;
  }

  /**
   * @returns {Object} Map of registered events.
   */
  function getRegisteredEvents() {
    return _events;
  }

  this.addEventListener = addEventListener;
  this.removeEventListener = removeEventListener;
  this.dispatchEvent = dispatchEvent;
  this.getRegisteredEvents = getRegisteredEvents;

  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (EventObserver);


/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/atomic-helpers.js":
/*!************************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/atomic-helpers.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDom": function() { return /* binding */ checkDom; },
/* harmony export */   "destroyInitFlag": function() { return /* binding */ destroyInitFlag; },
/* harmony export */   "instantiateAll": function() { return /* binding */ instantiateAll; },
/* harmony export */   "setInitFlag": function() { return /* binding */ setInitFlag; }
/* harmony export */ });
/* harmony import */ var _data_hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-hook */ "./packages/cfpb-atomic-component/src/utilities/data-hook.js");
/* harmony import */ var _standard_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./standard-type */ "./packages/cfpb-atomic-component/src/utilities/standard-type.js");
/* ==========================================================================
   Atomic Helpers.
   Utilities for helping validate atomic design element architecture.
   In descending order of scope, atomic components are:
   - Page
   - Template
   - Organism
   - Molecule
   - Atom
   ========================================================================= */




/**
 * @constant
 * @type {string}
 * @description
 * Flag that gets set on an atomic component after its .init()
 * method has been called. This is used so that an atomic
 * component won't get initialized a second time after it
 * has already been initialized.
 */
const INIT_FLAG = _standard_type__WEBPACK_IMPORTED_MODULE_1__.STATE_PREFIX + 'atomic_init';

/**
 * Check that a particular element passed into the constructor of
 * an atomic component exists and that the correct atomic class
 * is present on the element.
 * @param {HTMLNode} element
 *   The DOM element within which to search for the atomic element class.
 * @param {string} baseClass - The CSS class name for the atomic element.
 * @returns {HTMLNode} The DOM element for the atomic element.
 * @throws {Error} If DOM element passed into the atomic element is not valid.
 */
function checkDom( element, baseClass ) {
  _verifyElementExists( element, baseClass );
  const dom = _verifyClassExists( element, baseClass );

  return dom;
}

/**
 * @param {HTMLNode} element
 *   The DOM element within which to search for the atomic element class.
 * @param {string} baseClass - The CSS class name for the atomic element.
 * @returns {HTMLNode} The DOM element for the atomic element.
 * @throws {Error} If DOM element passed into the atomic element is not valid.
 */
function _verifyElementExists( element, baseClass ) {
  if ( !element || !element.classList ) {
    const msg = element + ' is not valid. ' +
              'Check that element is a DOM node with class "' +
              baseClass + '"';
    throw new Error( msg );
  }

  return element;
}

/**
 * @param {HTMLNode} element
 *   The DOM element within which to search for the atomic element class.
 * @param {string} baseClass The CSS class name for the atomic element.
 * @returns {HTMLNode} The DOM element for the atomic element.
 * @throws {Error} If baseClass was not found on the element.
 */
function _verifyClassExists( element, baseClass ) {
  const dom = element.classList.contains( baseClass ) ?
    element : element.querySelector( '.' + baseClass );
  if ( !dom ) {
    const msg = baseClass + ' not found on or in passed DOM node.';
    throw new Error( msg );
  }

  return dom;
}

/**
 * Set a flag on an atomic component when it is initialized.
 * Use the returned boolean to handle cases where an atomic component
 * is initializing when it has already been initialized elsewhere.
 * @param {HTMLNode} element - The DOM element for the atomic component.
 * @param {null} destroy - Pass in true to .
 * @returns {boolean} True if the init data-js-* hook attribute was set,
 *   false otherwise.
 */
function setInitFlag( element ) {
  if ( (0,_data_hook__WEBPACK_IMPORTED_MODULE_0__.contains)( element, INIT_FLAG ) ) {
    return false;
  }

  (0,_data_hook__WEBPACK_IMPORTED_MODULE_0__.add)( element, INIT_FLAG );

  return true;
}

/**
 * Remove the initialization flag on an atomic component.
 * This might be used if the DOM of an atomic element is cloned.
 * @param {HTMLNode} element - The DOM element for the atomic component.
 * @returns {boolean} True if the init data-js-* hook attribute was destroyed,
 *   otherwise false if it didn't exist.
 */
function destroyInitFlag( element ) {
  if ( !(0,_data_hook__WEBPACK_IMPORTED_MODULE_0__.contains)( element, INIT_FLAG ) ) {
    return false;
  }

  (0,_data_hook__WEBPACK_IMPORTED_MODULE_0__.remove)( element, INIT_FLAG );

  return true;
}

/**
 * @param {string} selector - Selector to search for in the document.
 * @param {Function} Constructor - A constructor function.
 * @param {HTMLNode} [scope] - A dom node in which to query the selector.
 *   If not supplied, it defaults to the `document`.
 * @returns {Array} List of instances that were instantiated.
 */
function instantiateAll( selector, Constructor, scope ) {
  const base = scope || document;
  const elements = base.querySelectorAll( selector );
  const insts = [];
  let inst;
  let element;
  for ( let i = 0, len = elements.length; i < len; i++ ) {
    element = elements[i];
    if ( (0,_data_hook__WEBPACK_IMPORTED_MODULE_0__.contains)( element, INIT_FLAG ) === false ) {
      inst = new Constructor( element );
      inst.init();
      insts.push( inst );
    }
  }
  return insts;
}

// Expose public methods.



/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/data-hook.js":
/*!*******************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/data-hook.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": function() { return /* binding */ add; },
/* harmony export */   "contains": function() { return /* binding */ contains; },
/* harmony export */   "remove": function() { return /* binding */ remove; }
/* harmony export */ });
/* harmony import */ var _standard_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./standard-type */ "./packages/cfpb-atomic-component/src/utilities/standard-type.js");
// Required modules.


/**
 * @param {HTMLNode} element - DOM element.
 * @param {string} value
 *   Value to add to the element's JS data-* hook.
 * @returns {string} The value that was added.
 * @throws {Error} If supplied value contains a space,
 *   meaning it would be two values, which is likely a typo.
 */
function add( element, value ) {
  if ( value.indexOf( ' ' ) !== -1 ) {
    const msg = _standard_type__WEBPACK_IMPORTED_MODULE_0__.JS_HOOK + ' values cannot contain spaces!';
    throw new Error( msg );
  }

  const values = element.getAttribute( _standard_type__WEBPACK_IMPORTED_MODULE_0__.JS_HOOK );
  if ( values !== null ) {
    value = values + ' ' + value;
  }
  element.setAttribute( _standard_type__WEBPACK_IMPORTED_MODULE_0__.JS_HOOK, value );

  return value;
}

/**
 * @param {HTMLNode} element - DOM element.
 * @param {string} value
 *   Value to remove from the JS data-* hook value.
 * @returns {boolean} True if value was removed, false otherwise.
 */
function remove( element, value ) {
  const values = element.getAttribute( _standard_type__WEBPACK_IMPORTED_MODULE_0__.JS_HOOK );
  const index = values.indexOf( value );
  const valuesList = values.split( ' ' );
  if ( index > -1 ) {
    valuesList.splice( index, 1 );
    element.setAttribute( _standard_type__WEBPACK_IMPORTED_MODULE_0__.JS_HOOK, valuesList.join( ' ' ) );
    return true;
  }

  return false;
}

/**
 * @param {HTMLNode} element - DOM element.
 * @param {string} value
 *   Value to check as existing as a JS data-* hook value.
 * @returns {boolean} True if the data-* hook value exists, false otherwise.
 */
function contains( element, value ) {
  if ( !element ) { return false; }
  let values = element.getAttribute( _standard_type__WEBPACK_IMPORTED_MODULE_0__.JS_HOOK );
  // If JS data-* hook is not set return immediately.
  if ( !values ) { return false; }
  values = values.split( ' ' );

  return values.indexOf( value ) > -1 ? true : false;
}




/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/dom-traverse.js":
/*!**********************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/dom-traverse.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryOne": function() { return /* binding */ queryOne; },
/* harmony export */   "closest": function() { return /* binding */ closest; }
/* harmony export */ });
/* harmony import */ var _type_checkers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type-checkers.js */ "./packages/cfpb-atomic-component/src/utilities/type-checkers.js");


/**
 * Queries for the first match unless an HTMLNode is passed
 * @param   {(HTMLNode|string)} expr HTMLNode or string to query for
 * @param   {Object}          con  The document location to query
 * @returns {HTMLNode}             The elem
 */
function queryOne( expr, con ) {
  return _type_checkers_js__WEBPACK_IMPORTED_MODULE_0__.default.isString( expr ) ?
    ( con || document ).querySelector( expr ) :
    expr || null;
}

/**
 * Traverse the element and its parents (heading toward the document root)
 * until a node is found that matches the provided selector string.
 * Will return itself or the matching ancestor.
 * If no such element exists, it returns null.
 *
 * @param {HTMLNode} elem - A DOM element.
 * @param {string} selector - CSS selector.
 * @returns {HTMLNode} Element or nearest parent node that matches the selector.
 *   Or null, if nothing is found.
 */
function closest( elem, selector ) {
  if ( 'closest' in elem ) {
    return elem.closest( selector );
  }

  const matchesSelector = _getMatchesMethod( elem );

  try {
    let parent = elem;
    let match;
    while ( parent ) {
      if ( matchesSelector.bind( parent )( selector ) ) {
        match = parent;
      } else {
        parent = parent.parentNode;
      }

      if ( match ) {
        return parent;
      }
    }
  } catch ( err ) {
    return null;
  }

  return null;
}

/**
 * Search for support of the matches() method by looking at
 * browser prefixes.
 * @param {HTMLNode} elem
 *   The element to check for support of matches() method.
 * @returns {Function} The appropriate matches() method of elem.
 */
function _getMatchesMethod( elem ) {

  return elem.matches ||
         elem.webkitMatchesSelector ||
         elem.mozMatchesSelector ||
         elem.msMatchesSelector;
}




/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/media-helpers.js":
/*!***********************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/media-helpers.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMobileUserAgent": function() { return /* binding */ isMobileUserAgent; }
/* harmony export */ });
/* ==========================================================================
   Media Helpers.
   Utilities for working with different screen sizes and operating systems.
   ========================================================================= */

/**
 * Query the browser's user agent string to see if it's on a mobile OS.
 * @returns {boolean} True if on a mobile user agent, false otherwise.
 */
function isMobileUserAgent() {
  const regex = new RegExp(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  );
  if ( regex.test( navigator.userAgent ) ) {
    return true;
  }
  return false;

}

// Expose public methods.



/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/object-assign.js":
/*!***********************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/object-assign.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assign": function() { return /* binding */ assign; }
/* harmony export */ });
/* ==========================================================================
   Assign

   Contains code copied from the following with major modifications :

   - https://github.com/maslennikov/shallow-extend
     Copyright (c) 2014 Alexey Maslennikov

   ========================================================================== */

/**
 * @param {object} object - JavaScript object.
 * @returns {boolean} True if object is a plain JavaScript object.
 */
function _isPlainObject( object ) {
  return Object.prototype.toString.call( object ) === '[object Object]';
}

// TODO Fix complexity issue
/* eslint-disable complexity */
/**
 * Copies properties of all sources to the destination object overriding its own
 * existing properties. When assigning from multiple sources, fields of every
 * next source will override same named fields of previous sources.
 *
 * @param {Object} destination object.
 * @returns {Object} assigned destination object.
*/
function assign( destination ) {
  destination = destination || {};
  for ( let i = 1, len = arguments.length; i < len; i++ ) {
    const source = arguments[i] || {};
    let key;
    for ( key in source ) {
      if ( Object.prototype.hasOwnProperty.call( source, key ) ) {
        const value = source[key];
        if ( _isPlainObject( value ) ) {
          assign( destination[key] || ( destination[key] = {} ), value );
        } else {
          destination[key] = value;
        }
      }
    }
  }

  return destination;
}
/* eslint-enable complexity */

// Expose public methods.



/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/standard-type.js":
/*!***********************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/standard-type.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BEHAVIOR_PREFIX": function() { return /* binding */ BEHAVIOR_PREFIX; },
/* harmony export */   "JS_HOOK": function() { return /* binding */ JS_HOOK; },
/* harmony export */   "noopFunct": function() { return /* binding */ noopFunct; },
/* harmony export */   "STATE_PREFIX": function() { return /* binding */ STATE_PREFIX; },
/* harmony export */   "DIRECTIONS": function() { return /* binding */ DIRECTIONS; }
/* harmony export */ });
/**
 * @constant
 * @type {string}
 * @description
 * Constant for the name of the data-* attribute set on
 * HTML DOM elements for access by JavaScript.
 */
const JS_HOOK = 'data-js-hook';

/**
 * @constant
 * @type {string}
 * @description
 * Flag prefix for settings that describe what JavaScript
 * behaviors should be attached to a component.
 * This would be set in the markup and initialized when
 * the JavaScript loads.
 *
 * @example
 * A component may flag that it has certain JavaScript behaviors attached,
 * such as:
 * `data-js-hook="behavior_flyout-menu behavior_clearable-input"`,
 * which defines that two scripts (FlyoutMenu) and (ClearableInput)
 * should access this DOM element and initialize its behaviors.
 */
const BEHAVIOR_PREFIX = 'behavior_';

/**
 * @constant
 * @type {string}
 * @description
 * Flag prefix for settings related to changes in a components
 * state set in the data-* JavaScript hook.
 *
 * @example
 * A component may flag that it has been initialized by setting
 * `data-js-hook="state_atomic_init"` after page load.
 * Which specifies that the init method of a atomic constructor
 * has been called, such as
 * `var globalSearch = new GlobalSearch( 'm-global-search' ).init()`.
 */
const STATE_PREFIX = 'state_';

/**
 * Empty function that will do nothing.
 * A usecase is when an object has empty functions used for callbacks,
 * which are meant to be overridden with functionality, but if not,
 * noopFunct will fire and do nothing instead.
 *
 * @example
 * callback.onComplete = standardType.noopFunct;
 */
function noopFunct() {
  // Placeholder function meant to be overridden.
}

// Bit values intended to be used for bit inversion.
const DIRECTIONS = {
  UP:    0,
  RIGHT: 1,
  DOWN:  -1,
  LEFT:  -2
};




/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/transition/AlphaTransition.js":
/*!************************************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/transition/AlphaTransition.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseTransition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseTransition.js */ "./packages/cfpb-atomic-component/src/utilities/transition/BaseTransition.js");
/* harmony import */ var _cfpb_cfpb_atomic_component_src_mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/mixins/EventObserver.js */ "./packages/cfpb-atomic-component/src/mixins/EventObserver.js");
// Required modules.



// Exported constants.
const CLASSES = {
  CSS_PROPERTY: 'opacity',
  BASE_CLASS:   'u-alpha-transition',
  ALPHA_100:    'u-alpha-100',
  ALPHA_0:      'u-alpha-0'
};

/**
 * AlphaTransition
 * @class
 *
 * @classdesc Initializes new AlphaTransition behavior.
 *
 * @param {HTMLNode} element
 *   DOM element to apply opacity transition to.
 * @returns {AlphaTransition} An instance.
 */
function AlphaTransition( element ) {

  const _baseTransition = new _BaseTransition_js__WEBPACK_IMPORTED_MODULE_0__.default( element, CLASSES );

  /**
   * @returns {AlphaTransition} An instance.
   */
  function init() {
    _baseTransition.init();
    const _transitionCompleteBinded = _transitionComplete.bind( this );
    _baseTransition.addEventListener(
      _BaseTransition_js__WEBPACK_IMPORTED_MODULE_0__.default.END_EVENT,
      _transitionCompleteBinded
    );
    return this;
  }

  /**
   * Handle the end of a transition.
   */
  function _transitionComplete() {
    this.dispatchEvent( _BaseTransition_js__WEBPACK_IMPORTED_MODULE_0__.default.END_EVENT, { target: this } );
  }

  /**
   * Fade to 100% by applying a utility alpha class.
   * @returns {AlphaTransition} An instance.
   */
  function fadeIn() {
    _baseTransition.applyClass( CLASSES.ALPHA_100 );

    return this;
  }

  /**
   * Fade to nothing by applying a utility alpha class.
   * @returns {AlphaTransition} An instance.
   */
  function fadeOut() {
    _baseTransition.applyClass( CLASSES.ALPHA_0 );

    return this;
  }

  // Attach public events.
  const eventObserver = new _cfpb_cfpb_atomic_component_src_mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_1__.default();
  this.addEventListener = eventObserver.addEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;
  this.removeEventListener = eventObserver.removeEventListener;

  this.animateOff = _baseTransition.animateOff;
  this.animateOn = _baseTransition.animateOn;
  this.halt = _baseTransition.halt;
  this.isAnimated = _baseTransition.isAnimated;
  this.remove = _baseTransition.remove;
  this.setElement = _baseTransition.setElement;

  this.fadeIn = fadeIn;
  this.fadeOut = fadeOut;
  this.init = init;

  return this;
}

// Public static properties.
AlphaTransition.CLASSES = CLASSES;

/* harmony default export */ __webpack_exports__["default"] = (AlphaTransition);


/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/transition/BaseTransition.js":
/*!***********************************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/transition/BaseTransition.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cfpb_cfpb_atomic_component_src_mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/mixins/EventObserver.js */ "./packages/cfpb-atomic-component/src/mixins/EventObserver.js");
// Required modules.


// eslint-disable-next-line max-statements
/**
 * BaseTransition
 * @class
 *
 * @classdesc Initializes new BaseTransition behavior.
 *   This shouldn't be used directly, but instead should be
 *   the base class used through composition by a specific transition.
 *
 * @param {HTMLNode} element
 *   DOM element to apply transition to.
 * @param {Object} classes
 *   The classes to apply to this transition.
 * @returns {BaseTransition} An instance.
 */
function BaseTransition( element, classes ) {
  const _classes = classes;
  let _dom;

  let _lastClass;
  let _transitionEndEvent;
  let _transitionCompleteBinded;
  let _addEventListenerBinded;
  let _isAnimating = false;
  let _isFlushed = false;

  // Make sure required attributes are passed in.
  if ( typeof _classes.CSS_PROPERTY === 'undefined' ||
       typeof _classes.BASE_CLASS === 'undefined' ) {
    throw new Error(
      'Transitions require CSS_PROPERTY and BASE_CLASS ' +
      'to be passed into BaseTransition.'
    );
  }

  /**
   * @returns {BaseTransition} An instance.
   */
  function init() {
    _transitionCompleteBinded = _transitionComplete.bind( this );
    _addEventListenerBinded = _addEventListener.bind( this );
    setElement( element );

    return this;
  }

  /**
   * Set the HTML element target of this transition.
   * @param {HTMLNode} targetElement - The target of the transition.
   */
  function setElement( targetElement ) {
    /*
      If the element has already been set,
      clear the transition classes from the old element.
    */
    if ( _dom ) {
      remove();
      animateOn();
    }
    _dom = targetElement;
    _dom.classList.add( _classes.BASE_CLASS );
    _transitionEndEvent = _getTransitionEndEvent( _dom );
  }

  /**
   * Add a "transition-duration: 0s" utility CSS class.
   * @returns {BaseTransition} An instance.
   */
  function animateOn() {
    if ( !_dom ) { return this; }
    _dom.classList.remove( BaseTransition.NO_ANIMATION_CLASS );

    return this;
  }

  /**
   * Remove a "transition-duration: 0s" utility CSS class.
   * @returns {BaseTransition} An instance.
   */
  function animateOff() {
    if ( !_dom ) { return this; }
    _dom.classList.add( BaseTransition.NO_ANIMATION_CLASS );

    return this;
  }

  /**
   * @returns {boolean} Whether the transition has a duration or not.
   *   Returns false if this transition has not been initialized.
   */
  function isAnimated() {
    if ( !_dom ) { return false; }
    return !_dom.classList.contains( BaseTransition.NO_ANIMATION_CLASS );
  }

  /**
   * Halt an in-progress animation and call the complete event immediately.
   */
  function halt() {
    if ( !_isAnimating ) { return; }
    _dom.style.webkitTransitionDuration = '0';
    _dom.style.mozTransitionDuration = '0';
    _dom.style.oTransitionDuration = '0';
    _dom.style.transitionDuration = '0';
    _dom.removeEventListener(
      _transitionEndEvent,
      _transitionCompleteBinded
    );
    _transitionCompleteBinded();
    _dom.style.webkitTransitionDuration = '';
    _dom.style.mozTransitionDuration = '';
    _dom.style.oTransitionDuration = '';
    _dom.style.transitionDuration = '';
  }

  /**
   * Add an event listener to the transition, or call the transition
   * complete handler immediately if transition not supported.
   */
  function _addEventListener() {
    _dom.classList.add( BaseTransition.ANIMATING_CLASS );
    _isAnimating = true;

    /*
      If transition is not supported, call handler directly (IE9/OperaMini).
      Also, if "transition-duration: 0s" is set, transitionEnd event will not
      fire, so we need to call the handler straight away.
    */
    if ( _transitionEndEvent &&
         !_dom.classList.contains( BaseTransition.NO_ANIMATION_CLASS ) ) {
      _dom.addEventListener( _transitionEndEvent, _transitionCompleteBinded );
      this.dispatchEvent( BaseTransition.BEGIN_EVENT, { target: this } );
    } else {
      this.dispatchEvent( BaseTransition.BEGIN_EVENT, { target: this } );
      _transitionCompleteBinded();
    }
  }

  /**
   * Remove an event listener to the transition.
   */
  function _removeEventListener() {
    _dom.removeEventListener( _transitionEndEvent, _transitionCompleteBinded );
  }

  /**
   * Handle the end of a transition.
   * @param {TransitionEvent} evt - Transition event object.
   * @returns {boolean} True if transition was cleaned up,
   *   false if an outside transitioning property triggered this event handler.
   */
  function _transitionComplete( evt ) {
    if ( evt && evt.propertyName !== _classes.CSS_PROPERTY ) {
      return false;
    }

    _removeEventListener();
    _dom.classList.remove( BaseTransition.ANIMATING_CLASS );
    this.dispatchEvent( BaseTransition.END_EVENT, { target: this } );
    _isAnimating = false;
    return true;
  }

  /**
   * Search for and remove initial BaseTransition classes that have
   * already been applied to this BaseTransition's target element.
   */
  function _flush() {
    let prop;
    for ( prop in _classes ) {
      if ( _classes.hasOwnProperty( prop ) &&
           _classes[prop] !== _classes.BASE_CLASS &&
           _dom.classList.contains( _classes[prop] ) ) {
        _dom.classList.remove( _classes[prop] );
      }
    }
  }

  /**
   * Remove all transition classes, if transition is initialized.
   * @returns {boolean}
   *   True, if the element's CSS classes were touched, false otherwise.
   */
  function remove() {
    if ( _dom ) {
      halt();
      _dom.classList.remove( _classes.BASE_CLASS );
      _flush();
      return true;
    }

    return false;
  }

  /**
   * @param {string} className - A CSS class.
   * @returns {boolean} False if the class is already applied
   *   or the transition is not initialized,
   *   otherwise true if the class was applied.
   */
  function applyClass( className ) {
    if ( !_dom ) { return false; }
    if ( !_isFlushed ) {
      _flush();
      _isFlushed = true;
    }

    if ( _dom.classList.contains( className ) ) {
      return false;
    }

    _removeEventListener();
    _dom.classList.remove( _lastClass );
    _lastClass = className;
    _addEventListenerBinded();
    _dom.classList.add( _lastClass );

    return true;
  }

  /**
   * @param {HTMLNode} elem
   *   The element to check for support of transition end event.
   * @returns {string} The browser-prefixed transition end event.
   */
  function _getTransitionEndEvent( elem ) {
    if ( !elem ) {
      const msg = 'Element does not have TransitionEnd event. It may be null!';
      throw new Error( msg );
    }

    let transition;
    const transitions = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition:    'transitionend',
      OTransition:      'oTransitionEnd otransitionend',
      transition:       'transitionend'
    };

    let transitionEvent;
    for ( transitionEvent in transitions ) {
      if ( transitions.hasOwnProperty( transitionEvent ) &&
           typeof elem.style[transitionEvent] !== 'undefined' ) {
        transition = transitions[transitionEvent];
        break;
      }
    }
    return transition;
  }

  // Attach public events.
  const eventObserver = new _cfpb_cfpb_atomic_component_src_mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_0__.default();
  this.addEventListener = eventObserver.addEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;
  this.removeEventListener = eventObserver.removeEventListener;

  this.animateOff = animateOff;
  this.animateOn = animateOn;
  this.applyClass = applyClass;
  this.halt = halt;
  this.init = init;
  this.isAnimated = isAnimated;
  this.remove = remove;
  this.setElement = setElement;

  return this;
}

// Public static constants.
BaseTransition.BEGIN_EVENT = 'transitionBegin';
BaseTransition.END_EVENT = 'transitionEnd';
BaseTransition.NO_ANIMATION_CLASS = 'u-no-animation';
BaseTransition.ANIMATING_CLASS = 'u-is-animating';

/* harmony default export */ __webpack_exports__["default"] = (BaseTransition);


/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/transition/MaxHeightTransition.js":
/*!****************************************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/transition/MaxHeightTransition.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cfpb_cfpb_atomic_component_src_utilities_transition_BaseTransition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/utilities/transition/BaseTransition.js */ "./packages/cfpb-atomic-component/src/utilities/transition/BaseTransition.js");
/* harmony import */ var _cfpb_cfpb_atomic_component_src_mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/mixins/EventObserver.js */ "./packages/cfpb-atomic-component/src/mixins/EventObserver.js");
// Required modules.



// Exported constants.
const CLASSES = {
  CSS_PROPERTY: 'max-height',
  BASE_CLASS:   'u-max-height-transition',
  MH_DEFAULT:   'u-max-height-default',
  MH_SUMMARY:   'u-max-height-summary',
  MH_ZERO:      'u-max-height-zero'
};

/**
 * MoveTransition
 * @class
 *
 * @classdesc Initializes new MoveTransition behavior.
 *
 * @param {HTMLNode} element
 *   DOM element to apply transition to.
 * @returns {MaxHeightTransition} An instance.
 */
function MaxHeightTransition( element ) {
  const _baseTransition = new _cfpb_cfpb_atomic_component_src_utilities_transition_BaseTransition_js__WEBPACK_IMPORTED_MODULE_0__.default( element, CLASSES );
  let previousHeight;

  /**
   * @returns {MaxHeightTransition} An instance.
   */
  function init() {
    _baseTransition.init();

    element.style.maxHeight = element.scrollHeight + 'px';

    const _transitionCompleteBinded = _transitionComplete.bind( this );
    _baseTransition.addEventListener(
      _cfpb_cfpb_atomic_component_src_utilities_transition_BaseTransition_js__WEBPACK_IMPORTED_MODULE_0__.default.END_EVENT,
      _transitionCompleteBinded
    );

    return this;
  }

  /**
   * Handle the end of a transition.
   */
  function _transitionComplete() {
    this.dispatchEvent( _cfpb_cfpb_atomic_component_src_utilities_transition_BaseTransition_js__WEBPACK_IMPORTED_MODULE_0__.default.END_EVENT, { target: this } );

    if ( element.scrollHeight > previousHeight ) {
      element.style.maxHeight = element.scrollHeight + 'px';
    }
  }

  /**
   * Reset the max-height to the default size.
   * @returns {PostitionTransition} An instance.
   */
  function maxHeightDefault() {
    _baseTransition.applyClass( CLASSES.MH_DEFAULT );

    if ( !previousHeight || element.scrollHeight > previousHeight ) {
      previousHeight = element.scrollHeight;
    }

    return this;
  }

  /**
   * Collapses the max-height to just a summary height.
   * @returns {PostitionTransition} An instance.
   */
  function maxHeightSummary() {
    _baseTransition.applyClass( CLASSES.MH_SUMMARY );

    previousHeight = element.scrollHeight;

    return this;
  }

  /**
   * Collapses thte max-height completely.
   * @returns {PostitionTransition} An instance.
   */
  function maxHeightZero() {
    _baseTransition.applyClass( CLASSES.MH_ZERO );

    previousHeight = element.scrollHeight;

    return this;
  }

  /**
   * Remove style attribute.
   * Remove all transition classes, if transition is initialized.
   * @returns {boolean}
   *   True, if the element's CSS classes were touched, false otherwise.
   */
  function remove() {
    element.style.maxHeight = '';
    return _baseTransition.remove();
  }

  // Attach public events.
  const eventObserver = new _cfpb_cfpb_atomic_component_src_mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_1__.default();
  this.addEventListener = eventObserver.addEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;
  this.removeEventListener = eventObserver.removeEventListener;

  this.animateOff = _baseTransition.animateOff;
  this.animateOn = _baseTransition.animateOn;
  this.halt = _baseTransition.halt;
  this.isAnimated = _baseTransition.isAnimated;
  this.setElement = _baseTransition.setElement;
  this.remove = remove;

  this.init = init;
  this.maxHeightDefault = maxHeightDefault;
  this.maxHeightSummary = maxHeightSummary;
  this.maxHeightZero = maxHeightZero;

  return this;
}

// Public static properties.
MaxHeightTransition.CLASSES = CLASSES;

/* harmony default export */ __webpack_exports__["default"] = (MaxHeightTransition);


/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/transition/MoveTransition.js":
/*!***********************************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/transition/MoveTransition.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseTransition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseTransition.js */ "./packages/cfpb-atomic-component/src/utilities/transition/BaseTransition.js");
/* harmony import */ var _cfpb_cfpb_atomic_component_src_mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/mixins/EventObserver.js */ "./packages/cfpb-atomic-component/src/mixins/EventObserver.js");
// Required modules.



// Exported constants.
const CLASSES = {
  CSS_PROPERTY:   'transform',
  BASE_CLASS:     'u-move-transition',
  MOVE_TO_ORIGIN: 'u-move-to-origin',
  MOVE_LEFT:      'u-move-left',
  MOVE_LEFT_2X:   'u-move-left-2x',
  MOVE_LEFT_3X:   'u-move-left-3x',
  MOVE_RIGHT:     'u-move-right',
  MOVE_UP:        'u-move-up'
};

/**
 * MoveTransition
 * @class
 *
 * @classdesc Initializes new MoveTransition behavior.
 *
 * @param {HTMLNode} element
 *   DOM element to apply move transition to.
 * @returns {MoveTransition} An instance.
 */
function MoveTransition( element ) {

  const _baseTransition = new _BaseTransition_js__WEBPACK_IMPORTED_MODULE_0__.default( element, CLASSES );

  /**
   * @returns {MoveTransition} An instance.
   */
  function init() {
    _baseTransition.init();
    const _transitionCompleteBinded = _transitionComplete.bind( this );
    _baseTransition.addEventListener(
      _BaseTransition_js__WEBPACK_IMPORTED_MODULE_0__.default.END_EVENT,
      _transitionCompleteBinded
    );
    return this;
  }

  /**
   * Handle the end of a transition.
   */
  function _transitionComplete() {
    this.dispatchEvent( _BaseTransition_js__WEBPACK_IMPORTED_MODULE_0__.default.END_EVENT, { target: this } );
  }

  /**
   * Move to the element's original coordinates.
   * @returns {MoveTransition} An instance.
   */
  function moveToOrigin() {
    _baseTransition.applyClass( CLASSES.MOVE_TO_ORIGIN );

    return this;
  }

  /**
   * Move to the left by applying a utility move class.
   * @param {Number} count
   *   How many times to move left as a multiplication of the element's width.
   * @returns {MoveTransition} An instance.
   */
  function moveLeft( count ) {
    count = count || 1;
    const moveClasses = [
      CLASSES.MOVE_LEFT,
      CLASSES.MOVE_LEFT_2X,
      CLASSES.MOVE_LEFT_3X
    ];

    if ( count < 1 || count > moveClasses.length ) {
      throw new Error( 'MoveTransition: moveLeft count is out of range!' );
    }

    _baseTransition.applyClass( moveClasses[count - 1] );

    return this;
  }

  /**
   * Move to the right by applying a utility move class.
   * @returns {MoveTransition} An instance.
   */
  function moveRight() {
    _baseTransition.applyClass( CLASSES.MOVE_RIGHT );

    return this;
  }

  /**
   * Move up by applying a utility move class.
   * @returns {MoveTransition} An instance.
   */
  function moveUp() {
    _baseTransition.applyClass( CLASSES.MOVE_UP );

    return this;
  }

  // Attach public events.
  const eventObserver = new _cfpb_cfpb_atomic_component_src_mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_1__.default();
  this.addEventListener = eventObserver.addEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;
  this.removeEventListener = eventObserver.removeEventListener;

  this.animateOff = _baseTransition.animateOff;
  this.animateOn = _baseTransition.animateOn;
  this.halt = _baseTransition.halt;
  this.isAnimated = _baseTransition.isAnimated;
  this.setElement = _baseTransition.setElement;
  this.remove = _baseTransition.remove;

  this.init = init;
  this.moveLeft = moveLeft;
  this.moveRight = moveRight;
  this.moveToOrigin = moveToOrigin;
  this.moveUp = moveUp;

  return this;
}

// Public static properties.
MoveTransition.CLASSES = CLASSES;

/* harmony default export */ __webpack_exports__["default"] = (MoveTransition);


/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/type-checkers.js":
/*!***********************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/type-checkers.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* ==========================================================================
   Javascript Type Checkers

   Various utility functions to check Javascript types and primitives.

   Contains code copied from with moderate modifications:

   https://github.com/angular/angular.js/blob/master/src/Angular.js.
   Copyright (c) 2010-2015 Google, Inc. http://angularjs.org

   ========================================================================== */

const _toString = Object.prototype.toString;

/**
 * @name isUndefined
 * @kind function
 *
 * @description
 * Determines if a reference is undefined.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is undefined.
 */
function isUndefined( value ) {
  return typeof value === 'undefined';
}


/**
 * @name isDefined
 * @kind function
 *
 * @description
 * Determines if a reference is defined.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is defined.
 */
function isDefined( value ) {
  return typeof value !== 'undefined';
}


/**
 * @name isObject
 * @kind function
 *
 * @description
 * Determines if a reference is an `Object`.
 * Unlike `typeof` in JavaScript, `null`s are not
 * considered to be objects. Note that JavaScript arrays are objects.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is an `Object` but not `null`.
 */
function isObject( value ) {
  // http://jsperf.com/isobject4
  return value !== null && typeof value === 'object';
}


/**
 * @name isString
 * @kind function
 *
 * @description
 * Determines if a reference is a `String`.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `String`.
 */
function isString( value ) {
  return _toString.call( value ) === '[object String]';
}


/**
 * @name isNumber
 * @kind function
 *
 * @description
 * Determines if a reference is a `Number`.
 *
 * This includes the "special" numbers `NaN`, `+Infinity` and `-Infinity`.
 *
 * If you wish to exclude these then you can use the native
 * [`isFinite'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *                      Reference/Global_Objects/isFinite)
 * method.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `Number`.
 */
function isNumber( value ) {
  return _toString.call( value ) === '[object Number]';
}


/**
 * @name isDate
 * @kind function
 *
 * @description
 * Determines if a value is a date.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `Date`.
 */
function isDate( value ) {
  return _toString.call( value ) === '[object Date]';
}


/**
 * @name isArray
 * @kind function
 *
 * @description
 * Determines if a reference is an `Array`.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is an `Array`.
 */
const isArray = Array.isArray || function isArray( value ) {
  return _toString.call( value ) === '[object Array]';
};


/**
 * @name isFunction
 * @kind function
 *
 * @description
 * Determines if a reference is a `Function`.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `Function`.
 */
function isFunction( value ) {
  return _toString.call( value ) === '[object Function]';
}

// TODO Fix complexity issue
/* eslint-disable complexity, no-mixed-operators */
/**
 * @name isEmpty
 * @kind function
 *
 * @description
 * Determines if a reference is empty.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is empty.
 */
function isEmpty( value ) {
  return isUndefined( value ) ||
         value === null ||
         isString( value ) &&
         value.length <= 0 ||
         ( /^\s*$/ ).test( value );
}
/* eslint-enable complexity, no-mixed-operators */

// Expose public methods.
/* harmony default export */ __webpack_exports__["default"] = ({
  isUndefined: isUndefined,
  isDefined: isDefined,
  isObject: isObject,
  isString: isString,
  isNumber: isNumber,
  isDate: isDate,
  isArray: isArray,
  isFunction: isFunction,
  isEmpty: isEmpty
});


/***/ }),

/***/ "./packages/cfpb-expandables/src/Expandable.js":
/*!*****************************************************!*\
  !*** ./packages/cfpb-expandables/src/Expandable.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cfpb_cfpb_atomic_component_src_components_AtomicComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/components/AtomicComponent.js */ "./packages/cfpb-atomic-component/src/components/AtomicComponent.js");
/* harmony import */ var _cfpb_cfpb_atomic_component_src_mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/mixins/EventObserver.js */ "./packages/cfpb-atomic-component/src/mixins/EventObserver.js");
/* harmony import */ var _ExpandableTransition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpandableTransition.js */ "./packages/cfpb-expandables/src/ExpandableTransition.js");
/* harmony import */ var _cfpb_cfpb_atomic_component_src_utilities_dom_traverse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/utilities/dom-traverse.js */ "./packages/cfpb-atomic-component/src/utilities/dom-traverse.js");
/* ==========================================================================
   Expandable Organism
   ========================================================================== */






const eventObserver = new _cfpb_cfpb_atomic_component_src_mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_1__.default();

const Expandable = _cfpb_cfpb_atomic_component_src_components_AtomicComponent_js__WEBPACK_IMPORTED_MODULE_0__.default.extend( {

  ui: {
    base:    '.o-expandable',
    target:  '.o-expandable_target',
    content: '.o-expandable_content',
    header:  '.o-expandable_header',
    label:   '.o-expandable_label'
  },

  classes: {
    targetExpanded:  'o-expandable_target__expanded',
    targetCollapsed: 'o-expandable_target__collapsed',
    group:           'o-expandable-group',
    groupAccordion:  'o-expandable-group__accordion'
  },

  events: {
    'click .o-expandable_target': 'expandableClickHandler'
  },

  transition:       null,
  isAccordionGroup: false,
  activeAccordion:  false,

  initialize:             initialize,
  expandableClickHandler: expandableClickHandler,
  toggleTargetState:      toggleTargetState,
  getLabelText:           getLabelText
} );

/**
 * Initialize a new expandable.
 */
function initialize() {
  const transition = new _ExpandableTransition_js__WEBPACK_IMPORTED_MODULE_2__.default(
    this.ui.content
  );
  this.transition = transition.init();
  this.transition.addEventListener( 'expandBegin', expandBeginHandler.bind( this ) );
  this.transition.addEventListener( 'collapseEnd', collapseEndHandler.bind( this ) );

  if ( this.ui.content.classList.contains( _ExpandableTransition_js__WEBPACK_IMPORTED_MODULE_2__.default.CLASSES.EXPANDED ) ) {
    this.ui.target.classList.add( this.classes.targetExpanded );
  } else {
    this.ui.target.classList.add( this.classes.targetCollapsed );
    this.ui.content.classList.add( 'u-hidden' );
  }

  const expandableGroup = (0,_cfpb_cfpb_atomic_component_src_utilities_dom_traverse_js__WEBPACK_IMPORTED_MODULE_3__.closest)( this.ui.target, '.' + this.classes.group );

  this.isAccordionGroup = expandableGroup !== null &&
    expandableGroup.classList.contains( this.classes.groupAccordion );

  if ( this.isAccordionGroup ) {
    eventObserver.addEventListener(
      'accordionActivated',
      _accordionActivatedHandler.bind( this )
    );
  }
}

/**
 * Event handler for when an accordion is activated
 */
function _accordionActivatedHandler() {
  if ( this.activeAccordion ) {
    this.transition.toggleExpandable();
    this.toggleTargetState( this.ui.target );
    this.activeAccordion = false;
  }
}

/**
 * Event handler for when an expandable is clicked.
 */
function expandableClickHandler() {
  this.transition.toggleExpandable();
  this.toggleTargetState( this.ui.target );

  if ( this.isAccordionGroup ) {
    if ( this.activeAccordion ) {
      this.activeAccordion = false;
    } else {
      eventObserver.dispatchEvent( 'accordionActivated', { target: this } );
      this.activeAccordion = true;
    }
  }
}

/**
 * Event handler for when an expandable begins expanding.
 */
function expandBeginHandler() {
  this.ui.content.classList.remove( 'u-hidden' );
}

/**
 * Event handler for when an expandable is finished collapsing.
 */
function collapseEndHandler() {
  this.ui.content.classList.add( 'u-hidden' );
}

/**
 * Toggle an expandable to open or closed.
 * @param {HTMLNode} element - The expandable target HTML DOM element.
 */
function toggleTargetState( element ) {
  if ( element.classList.contains( this.classes.targetExpanded ) ) {
    this.ui.target.classList.add( this.classes.targetCollapsed );
    this.ui.target.classList.remove( this.classes.targetExpanded );
  } else {
    this.ui.target.classList.add( this.classes.targetExpanded );
    this.ui.target.classList.remove( this.classes.targetCollapsed );
  }
}

/**
 * Retrieve the label text of the expandable header.
 * @returns {string} The text of the expandable's label.
 */
function getLabelText() {
  return this.ui.label.textContent.trim();
}

/* harmony default export */ __webpack_exports__["default"] = (Expandable);


/***/ }),

/***/ "./packages/cfpb-expandables/src/ExpandableTransition.js":
/*!***************************************************************!*\
  !*** ./packages/cfpb-expandables/src/ExpandableTransition.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cfpb_cfpb_atomic_component_src_utilities_transition_BaseTransition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/utilities/transition/BaseTransition.js */ "./packages/cfpb-atomic-component/src/utilities/transition/BaseTransition.js");
/* harmony import */ var _cfpb_cfpb_atomic_component_src_mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/mixins/EventObserver.js */ "./packages/cfpb-atomic-component/src/mixins/EventObserver.js");
// Required modules.



// Exported constants.
const CLASSES = {
  CSS_PROPERTY: 'max-height',
  BASE_CLASS:   'o-expandable_content__transition',
  EXPANDED:     'o-expandable_content__expanded',
  COLLAPSED:    'o-expandable_content__collapsed',
  OPEN_DEFAULT: 'o-expandable_content__onload-open'
};

/* eslint-disable max-lines-per-function */
/**
 * ExpandableTransition
 * @class
 *
 * @classdesc Initializes new ExpandableTransition behavior.
 *
 * @param {HTMLNode} element - DOM element to apply move transition to.
 * @returns {ExpandableTransition} An instance.
 */
function ExpandableTransition( element ) {
  const _baseTransition = new _cfpb_cfpb_atomic_component_src_utilities_transition_BaseTransition_js__WEBPACK_IMPORTED_MODULE_0__.default( element, CLASSES );
  let previousHeight;

  /**
   * @returns {ExpandableTransition} An instance.
   */
  function init() {
    _baseTransition.init();
    _baseTransition.addEventListener(
      _cfpb_cfpb_atomic_component_src_utilities_transition_BaseTransition_js__WEBPACK_IMPORTED_MODULE_0__.default.END_EVENT,
      _transitionComplete.bind( this )
    );

    if ( element.classList.contains( CLASSES.OPEN_DEFAULT ) ) {
      this.expand();
    } else {
      this.collapse();
    }

    return this;
  }

  /**
   * Handle the end of a transition.
   */
  function _transitionComplete() {
    if ( element.classList.contains( CLASSES.EXPANDED ) ) {
      this.dispatchEvent( 'expandEnd', { target: this } );

      if ( element.scrollHeight > previousHeight ) {
        element.style.maxHeight = element.scrollHeight + 'px';
      }
    } else if ( element.classList.contains( CLASSES.COLLAPSED ) ) {
      this.dispatchEvent( 'collapseEnd', { target: this } );
    }
  }

  /**
   * Toggle the expandable
   * @returns {ExpandableTransition} An instance.
   */
  function toggleExpandable() {
    if ( element.classList.contains( CLASSES.COLLAPSED ) ) {
      this.expand();
    } else {
      this.collapse();
    }

    return this;
  }

  /**
   * Collapses the expandable content
   * @returns {ExpandableTransition} An instance.
   */
  function collapse() {
    this.dispatchEvent( 'collapseBegin', { target: this } );

    previousHeight = element.scrollHeight;
    element.style.maxHeight = '0';
    _baseTransition.applyClass( CLASSES.COLLAPSED );

    return this;
  }

  /**
   * Expands the expandable content
   * @returns {ExpandableTransition} An instance.
   */
  function expand() {
    this.dispatchEvent( 'expandBegin', { target: this } );

    if ( !previousHeight || element.scrollHeight > previousHeight ) {
      previousHeight = element.scrollHeight;
    }

    element.style.maxHeight = previousHeight + 'px';
    _baseTransition.applyClass( CLASSES.EXPANDED );

    return this;
  }

  // Attach public events.
  const eventObserver = new _cfpb_cfpb_atomic_component_src_mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_1__.default();
  this.addEventListener = eventObserver.addEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;
  this.removeEventListener = eventObserver.removeEventListener;

  this.animateOff = _baseTransition.animateOff;
  this.animateOn = _baseTransition.animateOn;
  this.halt = _baseTransition.halt;
  this.isAnimated = _baseTransition.isAnimated;
  this.setElement = _baseTransition.setElement;
  this.remove = _baseTransition.remove;

  this.init = init;
  this.toggleExpandable = toggleExpandable;
  this.collapse = collapse;
  this.expand = expand;

  return this;
}
/* eslint-enable max-lines-per-function */

// Public static properties.
ExpandableTransition.CLASSES = CLASSES;

/* harmony default export */ __webpack_exports__["default"] = (ExpandableTransition);


/***/ }),

/***/ "./packages/cfpb-forms/src/organisms/Multiselect.js":
/*!**********************************************************!*\
  !*** ./packages/cfpb-forms/src/organisms/Multiselect.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cfpb_cfpb_atomic_component_src_utilities_atomic_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/utilities/atomic-helpers.js */ "./packages/cfpb-atomic-component/src/utilities/atomic-helpers.js");
/* harmony import */ var _cfpb_cfpb_atomic_component_src_utilities_media_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/utilities/media-helpers.js */ "./packages/cfpb-atomic-component/src/utilities/media-helpers.js");
/* harmony import */ var _cfpb_cfpb_atomic_component_src_mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/mixins/EventObserver.js */ "./packages/cfpb-atomic-component/src/mixins/EventObserver.js");
/* harmony import */ var _MultiselectModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MultiselectModel.js */ "./packages/cfpb-forms/src/organisms/MultiselectModel.js");
/* harmony import */ var _MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MultiselectUtils.js */ "./packages/cfpb-forms/src/organisms/MultiselectUtils.js");
/* harmony import */ var _cfpb_cfpb_icons_src_icons_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cfpb/cfpb-icons/src/icons/close.svg */ "./packages/cfpb-icons/src/icons/close.svg");
/* harmony import */ var _cfpb_cfpb_icons_src_icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_cfpb_cfpb_icons_src_icons_close_svg__WEBPACK_IMPORTED_MODULE_5__);
// Required modules.








const BASE_CLASS = 'o-multiselect';

/**
 * Multiselect
 * @class
 *
 * @classdesc Initializes a new Multiselect molecule.
 *
 * @param {HTMLNode} element
 *   The DOM element within which to search for the molecule.
 * @returns {Multiselect} An instance.
 */
function Multiselect( element ) { // eslint-disable-line max-statements

  const CHECKBOX_INPUT_CLASS = 'a-checkbox';
  const TEXT_INPUT_CLASS = 'a-text-input';

  /* TODO: As the multiselect is developed further
     explore whether it should use an updated
     class name or data-* attribute in the
     markup so that it doesn't apply globally by default. */
  element.classList.add( BASE_CLASS );

  // Constants for direction.
  const DIR_PREV = 'prev';
  const DIR_NEXT = 'next';

  // Constants for key binding.
  const KEY_RETURN = 13;
  const KEY_SPACE = 32;
  const KEY_ESCAPE = 27;
  const KEY_UP = 38;
  const KEY_DOWN = 40;
  const KEY_TAB = 9;

  // Internal vars.
  let _dom = (0,_cfpb_cfpb_atomic_component_src_utilities_atomic_helpers_js__WEBPACK_IMPORTED_MODULE_0__.checkDom)( element, BASE_CLASS );
  let _isBlurSkipped = false;
  let _name;
  let _placeholder;
  let _model;
  let _options;
  let _optionsData;

  // Markup elems, conver this to templating engine in the future.
  let _containerDom;
  let _selectionsDom;
  let _headerDom;
  let _searchDom;
  let _fieldsetDom;
  let _optionsDom;
  const _optionItemDoms = [];
  let _instance;

  /**
   * Set up and create the multiselect.
   * @returns {Multiselect} An instance.
   */
  function init() {
    if ( !(0,_cfpb_cfpb_atomic_component_src_utilities_atomic_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setInitFlag)( _dom ) ) {
      return this;
    }

    if ( (0,_cfpb_cfpb_atomic_component_src_utilities_media_helpers_js__WEBPACK_IMPORTED_MODULE_1__.isMobileUserAgent)() ) {
      return this;
    }

    _instance = this;
    _name = _dom.name || _dom.id;
    _placeholder = _dom.getAttribute( 'placeholder' );
    _options = _dom.options || [];

    if ( _options.length > 0 ) {
      _model = new _MultiselectModel_js__WEBPACK_IMPORTED_MODULE_3__.default( _options, _name ).init();
      _optionsData = _model.getOptions();
      const newDom = _populateMarkup();

      /* Removes <select> element,
         and re-assign DOM reference. */
      _dom.parentNode.removeChild( _dom );
      _dom = newDom;

      /* We need to set init flag again since we've created a new <div>
         to replace the <select> element. */
      (0,_cfpb_cfpb_atomic_component_src_utilities_atomic_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setInitFlag)( _dom );

      _bindEvents();
    }

    return this;
  }

  /**
   * Expand the multiselect drop down.
   * @returns {Multiselect} An instance.
   */
  function expand() {
    _containerDom.classList.add( 'u-active' );
    _fieldsetDom.classList.remove( 'u-invisible' );
    _fieldsetDom.setAttribute( 'aria-hidden', false );
    _instance.dispatchEvent( 'expandBegin', { target: _instance } );

    return _instance;
  }

  /**
   * Collapse the multiselect drop down.
   * @returns {Multiselect} An instance.
   */
  function collapse() {
    _containerDom.classList.remove( 'u-active' );
    _fieldsetDom.classList.add( 'u-invisible' );
    _fieldsetDom.setAttribute( 'aria-hidden', true );
    _model.resetIndex();
    _instance.dispatchEvent( 'expandEnd', { target: _instance } );

    return _instance;
  }

  /**
   * Populates and injects the markup for the custom multiselect.
   * @returns {HTMLNode} Newly created <div> element to hold the multiselect.
   */
  function _populateMarkup() {
    // Add a container for our markup
    _containerDom = _MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_4__.default.create( 'div', {
      className: BASE_CLASS,
      around:    _dom
    } );

    // Create all our markup but wait to manipulate the DOM just once
    _selectionsDom = _MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_4__.default.create( 'ul', {
      className: BASE_CLASS + '_choices',
      inside:    _containerDom
    } );

    _headerDom = _MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_4__.default.create( 'header', {
      className: BASE_CLASS + '_header'
    } );

    _searchDom = _MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_4__.default.create( 'input', {
      className:    BASE_CLASS + '_search ' + TEXT_INPUT_CLASS,
      type:         'text',
      placeholder:  _placeholder || 'Select up to five',
      inside:       _headerDom,
      id:           _name,
      autocomplete: 'off'
    } );

    _fieldsetDom = _MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_4__.default.create( 'fieldset', {
      'className':   BASE_CLASS + '_fieldset u-invisible',
      'aria-hidden': 'true'
    } );

    _optionsDom = _MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_4__.default.create( 'ul', {
      className: BASE_CLASS + '_options',
      inside:    _fieldsetDom
    } );

    let option;
    for ( let i = 0, len = _optionsData.length; i < len; i++ ) {
      option = _optionsData[i];
      const _optionsItemDom = _MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_4__.default.create( 'li', {
        'data-option': option.value,
        'class': 'm-form-field m-form-field__checkbox'
      } );

      _MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_4__.default.create( 'input', {
        'id':      option.id,
        // Type must come before value or IE fails
        'type':    'checkbox',
        'value':   option.value,
        'name':    _name,
        'class':   CHECKBOX_INPUT_CLASS + ' ' + BASE_CLASS + '_checkbox',
        'inside':  _optionsItemDom,
        'checked': option.checked,
        'data-index': i
      } );

      _MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_4__.default.create( 'label', {
        'for':         option.id,
        'textContent': option.text,
        'className':   BASE_CLASS + '_label a-label',
        'inside':      _optionsItemDom
      } );

      _optionItemDoms.push( _optionsItemDom );
      _optionsDom.appendChild( _optionsItemDom );

      if ( option.checked ) {
        _createSelectedItem( _selectionsDom, option );
      }
    }

    // Write our new markup to the DOM.
    _containerDom.appendChild( _headerDom );
    _containerDom.appendChild( _fieldsetDom );

    return _containerDom;
  }

  /**
   * @param {HTMLNode} selectionsDom - The UL item to inject list item into.
   * @param {HTMLNode} option - The OPTION item to extract content from.
   */
  function _createSelectedItem( selectionsDom, option ) {
    const selectionsItemDom = _MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_4__.default.create( 'li', {
      'data-option': option.value
    } );

    const selectionsItemLabelDom = _MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_4__.default.create( 'button', {
      type: 'button',
      innerHTML: '<label for=' + option.id + '>' +
                 option.text + (_cfpb_cfpb_icons_src_icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default()) + '</label>',
      inside: selectionsItemDom
    } );

    selectionsDom.appendChild( selectionsItemDom );
    selectionsItemDom.appendChild( selectionsItemLabelDom );

    selectionsItemLabelDom.addEventListener( 'click', _selectionClickHandler );
    selectionsItemLabelDom.addEventListener( 'keydown', _selectionKeyDownHandler );
  }

  /**
   * Highlights an option in the list.
   * @param {string} direction Direction to highlight compared to the
   *                           current focus.
   */
  function _highlight( direction ) {
    if ( direction === DIR_NEXT ) {
      _model.setIndex( _model.getIndex() + 1 );
    } else if ( direction === DIR_PREV ) {
      _model.setIndex( _model.getIndex() - 1 );
    }

    const index = _model.getIndex();
    if ( index > -1 ) {
      let filteredIndex = index;
      const filterIndices = _model.getFilterIndices();
      if ( filterIndices.length > 0 ) {
        filteredIndex = filterIndices[index];
      }
      const option = _model.getOption( filteredIndex );
      const value = option.value;
      const item = _optionsDom.querySelector( '[data-option="' + value + '"]' );
      const input = item.querySelector( 'input' );

      _isBlurSkipped = true;
      input.focus();
    } else {
      _isBlurSkipped = false;
      _searchDom.focus();
    }
  }

  /**
   * Tracks a user's selections and updates the list in the dom.
   * @param {number} optionIndex - The index position of the chosen option.
   */
  function _updateSelections( optionIndex ) {
    const option = _optionsData[optionIndex] || _optionsData[_model.getIndex()];

    if ( option ) {
      if ( option.checked ) {
        if ( _optionsDom.classList.contains( 'u-max-selections' ) ) {
          _optionsDom.classList.remove( 'u-max-selections' );
        }

        const dataOptionSel = '[data-option="' + option.value + '"]';
        const _selectionsItemDom = _selectionsDom.querySelector( dataOptionSel );

        if ( typeof _selectionsItemDom !== 'undefined' ) {
          _selectionsDom.removeChild( _selectionsItemDom );
        }
      } else {
        _createSelectedItem( _selectionsDom, option );
      }
      _model.toggleOption( optionIndex );

      if ( _model.isAtMaxSelections() ) {
        _optionsDom.classList.add( 'u-max-selections' );
      }

      _instance.dispatchEvent( 'selectionsUpdated', { target: _instance } );
    }

    _model.resetIndex();
    _isBlurSkipped = false;

    if ( _fieldsetDom.getAttribute( 'aria-hidden' ) === 'false' ) {
      _searchDom.focus();
    }
  }

  /**
   * Evaluates the list of options based on the user's query in the
   * search input.
   * @param {string} value Text the user has entered in the search query.
   */
  function _evaluate( value ) {
    _resetFilter();
    _model.resetIndex();
    const matchedIndices = _model.filterIndices( value );
    _filterList( matchedIndices );
  }

  /**
   * Resets the search input and filtering.
   */
  function _resetSearch() {
    _searchDom.value = '';
    _resetFilter();
  }

  /**
   * Filter the options list.
   * Every time we filter we have two lists of indices:
   * - The matching options (filterIndices).
   * - The matching options of the last filter (_lastFilterIndices).
   * We need to turn off the filter for any of the last filter matches
   * that are not in the new set, and turn on the filter for the matches
   * that are not in the last set.
   * @param {Array} filterIndices - List of indices to filter from the options.
   * @returns {boolean} True if options are filtered, false otherwise.
   */
  function _filterList( filterIndices ) {
    if ( filterIndices.length > 0 ) {
      _filterMatches();
      return true;
    }

    _filterNoMatches();
    return false;
  }

  /**
   * Resets the filtered option list.
   */
  function _resetFilter() {
    _optionsDom.classList.remove( 'u-filtered', 'u-no-results' );

    for ( let i = 0, len = _optionsDom.children.length; i < len; i++ ) {
      _optionsDom.children[i].classList.remove( 'u-filter-match' );
    }

    _model.clearFilter();
  }

  /**
   * Set the filtered matched state.
   */
  function _filterMatches() {
    _optionsDom.classList.remove( 'u-no-results' );
    _optionsDom.classList.add( 'u-filtered' );

    let filteredIndices = _model.getLastFilterIndices();
    for ( let i = 0, len = filteredIndices.length; i < len; i++ ) {
      _optionItemDoms[filteredIndices[i]].classList.remove( 'u-filter-match' );
    }

    filteredIndices = _model.getFilterIndices();
    for ( let j = 0, len = filteredIndices.length; j < len; j++ ) {
      _optionItemDoms[filteredIndices[j]].classList.add( 'u-filter-match' );
    }
  }

  /**
   * Updates the list of options to show the user there
   * are no matching results.
   */
  function _filterNoMatches() {
    _optionsDom.classList.add( 'u-no-results' );
    _optionsDom.classList.remove( 'u-filtered' );
  }

  /**
   * Binds events to the search input, option list, and checkboxes.
   */
  function _bindEvents() {

    _headerDom.addEventListener( 'mousemove', function( event ) {
      const target = event.target;
      // Check if we're over the down-arrow on the right side of the input.
      if ( event.layerX > target.offsetWidth - 35 ) {
        target.style.cursor = 'pointer';
      } else {
        target.style.cursor = 'auto';
      }
    } );

    _searchDom.addEventListener( 'input', function() {
      _evaluate( this.value );
    } );

    _searchDom.addEventListener( 'focus', function() {
      if ( _fieldsetDom.getAttribute( 'aria-hidden' ) === 'true' ) {
        expand();
      }
    } );

    _searchDom.addEventListener( 'blur', function() {
      if ( !_isBlurSkipped &&
           _fieldsetDom.getAttribute( 'aria-hidden' ) === 'false' ) {
        collapse();
      }
    } );

    _searchDom.addEventListener( 'keydown', function( event ) {
      const key = event.keyCode;

      if ( _fieldsetDom.getAttribute( 'aria-hidden' ) === 'true' &&
            key !== KEY_TAB ) {
        expand();
      }

      if ( key === KEY_RETURN ) {
        event.preventDefault();
        _highlight( DIR_NEXT );
      } else if ( key === KEY_ESCAPE ) {
        _resetSearch();
        collapse();
      } else if ( key === KEY_DOWN ) {
        _highlight( DIR_NEXT );
      } else if ( key === KEY_TAB &&
                  !event.shiftKey &&
                  _fieldsetDom.getAttribute( 'aria-hidden' ) === 'false' ) {
        collapse();
      }
    } );

    _optionsDom.addEventListener( 'mousedown', function() {
      _isBlurSkipped = true;
    } );

    _optionsDom.addEventListener( 'keydown', function( event ) {
      const key = event.keyCode;
      const target = event.target;
      const checked = target.checked;

      if ( key === KEY_RETURN ) {
        event.preventDefault();

        /* Programmatically checking a checkbox does not fire a change event
        so we need to manually create an event and dispatch it from the input.
        */
        target.checked = !checked;
        const evt = document.createEvent( 'HTMLEvents' );
        evt.initEvent( 'change', false, true );
        target.dispatchEvent( evt );
      } else if ( key === KEY_ESCAPE ) {
        _searchDom.focus();
        collapse();
      } else if ( key === KEY_UP ) {
        _highlight( DIR_PREV );
      } else if ( key === KEY_DOWN ) {
        _highlight( DIR_NEXT );
      }
    } );

    _fieldsetDom.addEventListener( 'mousedown', function() {
      _isBlurSkipped = true;
    } );

    const inputs = _optionsDom.querySelectorAll( 'input' );
    for ( let i = 0, len = inputs.length; i < len; i++ ) {
      inputs[i].addEventListener( 'change', _changeHandler );
    }

    // Add event listeners to any selections that are present at page load.
    const labelButtons = _selectionsDom.querySelectorAll( 'button' );
    for ( let j = 0, len = labelButtons.length; j < len; j++ ) {
      labelButtons[j].addEventListener( 'click', _selectionClickHandler );
      labelButtons[j].addEventListener( 'keydown', _selectionKeyDownHandler );
    }
  }

  /**
   * This passes the click of the selected item button down to the label it
   * contains. This is only required for browsers (IE11) that prevent the
   * click of a selected item from cascading from the button down to the label
   * it contains.
   * @param {MouseEvent} event - The mouse click event object.
   */
  function _selectionClickHandler( event ) {
    const target = event.target;
    if ( target.tagName === 'BUTTON' ) {
      event.preventDefault();
      target.removeEventListener( 'click', _selectionClickHandler );
      target.querySelector( 'label' ).click();
    }
  }

  /**
   * @param {KeyEvent} event - The key down event object.
   */
  function _selectionKeyDownHandler( event ) {
    if ( event.keyCode === KEY_SPACE ||
         event.keyCode === KEY_RETURN ) {
      const label = event.target.querySelector( 'label' );
      const checkbox = _optionsDom.querySelector( '#' + label.getAttribute( 'for' ) );
      checkbox.click();
    }
  }

  /**
   * Handles the functions to trigger on the checkbox change.
   * @param   {Event} event The checkbox change event.
   */
  function _changeHandler( event ) {
    _updateSelections( Number( event.target.getAttribute( 'data-index' ) ) );
    _resetSearch();
  }

  // Attach public events.
  this.init = init;
  this.expand = expand;
  this.collapse = collapse;

  const eventObserver = new _cfpb_cfpb_atomic_component_src_mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_2__.default();
  this.addEventListener = eventObserver.addEventListener;
  this.removeEventListener = eventObserver.removeEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;

  return this;
}

Multiselect.BASE_CLASS = BASE_CLASS;

/* harmony default export */ __webpack_exports__["default"] = (Multiselect);


/***/ }),

/***/ "./packages/cfpb-forms/src/organisms/MultiselectModel.js":
/*!***************************************************************!*\
  !*** ./packages/cfpb-forms/src/organisms/MultiselectModel.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Undefined return value for void methods.
let UNDEFINED;

// How many options may be checked.
const MAX_SELECTIONS = 5;

/**
 * Escapes a string.
 * @param {string} str The string to escape.
 * @returns {string} The escaped string.
 */
function stringEscape( str ) {
  return str.replace( /[-\\^$*+?.()|[\]{}]/g, '\\$&' );
}

/**
 * Tests whether a string matches another.
 * @param   {string}  x The control string.
 * @param   {string}  y The comparison string.
 * @returns {boolean}   True if `x` and `y` match, false otherwise.
 */
function stringMatch( x, y ) {
  return RegExp( stringEscape( y.trim() ), 'i' ).test( x );
}

/**
 * @class
 * MultiselectModel
 * @param {HTMLOptionsCollection} options -
 *   Set of options from a <select> element.
 * @param {string} name - a unique name for this multiselect.
 */
function MultiselectModel( options, name ) {
  const _options = options;
  const _name = name;
  let _optionsData = [];

  let _selectedIndices = [];
  let _filterIndices = [];

  /* When the options list is filtered, we store a list of filtered indices
  so that when the filter changes we can reset the last matched options. */
  let _lastFilterIndices = [];

  // Which option is in focus. -1 means the focus is on the search input.
  let _index = -1;

  /**
   * @returns {MultiselectModel} An instance.
   */
  function init() {
    _optionsData = _formatOptions( _options );

    return this;
  }

  /**
   * Cleans up a list of options for saving to memory.
   * @param {HTMLOptionsCollection} list - The options from a select element.
   * @returns {Array} An array of option objects.
   */
  function _formatOptions( list ) {
    let item;
    const cleaned = [];

    let isChecked = false;
    for ( let i = 0, len = list.length; i < len; i++ ) {
      item = list[i];
      isChecked = item.defaultSelected;
      cleaned.push( {
        id:      _getOptionId( item ),
        value:   item.value,
        text:    item.text,
        checked: isChecked
      } );

      // If an option is initially checked, we need to record it.
      if ( isChecked ) {
        _selectedIndices.push( i );
      }
    }

    return cleaned;
  }

  /**
   * Toggle checked value of an option.
   * @param {number} index - The index position of the option in the list.
   * @returns {boolean} A value of true is checked and false is unchecked.
   */
  function toggleOption( index ) {
    _optionsData[index].checked = !_optionsData[index].checked;

    if ( _selectedIndices.length < MAX_SELECTIONS &&
         _optionsData[index].checked ) {
      _selectedIndices.push( index );
      _selectedIndices.sort();

      return true;
    }
    // We're over the max selections, reverse the check of the option.
    _optionsData[index].checked = false;
    _selectedIndices = _selectedIndices.filter(
      function( currIndex ) {
        return currIndex !== index;
      }
    );

    return false;
  }

  /**
   * @returns {boolean}
   *   True if the maximum number of options are checked, false otherwise.
   */
  function isAtMaxSelections() {
    return _selectedIndices.length === MAX_SELECTIONS;
  }

  /**
   * Search for a query string in the options text and return the indices of
   * the matching positions in the options array.
   * @param {string} query - A query string.
   * @returns {Array} List of indices of the matching entries from the options.
   */
  function filterIndices( query ) {
    // Convert query to a string if its not.
    if ( Object.prototype.toString.call( query ) !== '[object String]' ) {
      query = '';
    }
    _lastFilterIndices = _filterIndices;
    if ( _optionsData.length > 0 ) {
      _filterIndices = _optionsData.reduce(
        function( acc, item, index ) {
          return _searchAggregator( acc, item, index, query );
        },
        []
      );
    }
    // Reset index position.
    _index = -1;

    return _filterIndices;
  }

  /**
   * Retrieve an option object from the options list.
   * @param {number} index - The index position in the options list.
   * @returns {Object} The option object with text, value, and checked value.
   */
  function getOption( index ) {
    return _optionsData[index];
  }

  /**
   * Utility function for Array.reduce() used in searchIndices.
   * @param {Array} aggregate - The reducer's accumulator.
   * @param {Object} item - Each item in the collection.
   * @param {number} index - The index of item in the collection.
   * @param {string} value - The value of item in the collection.
   * @returns {Array} The reducer's accumulator.
   */
  function _searchAggregator( aggregate, item, index, value ) {
    if ( stringMatch( item.text, value ) ) {
      aggregate.push( index );
    }
    return aggregate;
  }

  /**
   * Set the index of the collection (represents the highlighted option).
   * @param {number} value - The index to set.
   */
  function setIndex( value ) {
    const filterCount = _filterIndices.length;
    const count = filterCount === 0 ? _optionsData.length : filterCount;
    if ( value < 0 ) {
      _index = -1;
    } else if ( value >= count ) {
      _index = count - 1;
    } else {
      _index = value;
    }
  }

  /**
   * @returns {number} The current index (highlighted option).
   */
  function getIndex() {
    return _index;
  }

  /**
   * @param {HTMLNode} item - An option HTML node.
   * @returns {string} A (hopefully) unique ID.
   *   If it's not unique, we have a duplicate option value.
   */
  function _getOptionId( item ) {
    return _name + '-' + item.value.trim().replace( /\s+/g, '-' ).toLowerCase();
  }

  this.init = init;

  // This is used to check an item in the collection.
  this.toggleOption = toggleOption;
  this.getSelectedIndices = function() { return _selectedIndices; };
  this.isAtMaxSelections = isAtMaxSelections;

  // This is used to search the items in the collection.
  this.filterIndices = filterIndices;
  this.clearFilter = function() {
    _filterIndices = _lastFilterIndices = [];
    return UNDEFINED;
  };
  this.getFilterIndices = function() { return _filterIndices; };
  this.getLastFilterIndices = function() { return _lastFilterIndices; };

  // These are used to highlight items in the collection.
  this.getIndex = getIndex;
  this.setIndex = setIndex;
  this.resetIndex = function() {
    _index = -1;
    return _index;
  };

  // This is used to retrieve items from the collection.
  this.getOption = getOption;
  this.getOptions = function() { return _optionsData; };

  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (MultiselectModel);


/***/ }),

/***/ "./packages/cfpb-forms/src/organisms/MultiselectUtils.js":
/*!***************************************************************!*\
  !*** ./packages/cfpb-forms/src/organisms/MultiselectUtils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cfpb_cfpb_atomic_component_src_utilities_dom_traverse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/utilities/dom-traverse.js */ "./packages/cfpb-atomic-component/src/utilities/dom-traverse.js");


/**
 * Shortcut for creating new dom elements.
 * @param {string} tag - The html elem to create.
 * @param {Object} options - The options for building the elem.
 * @returns {HTMLNode} The created elem.
 */
function create( tag, options ) {
  const elem = document.createElement( tag );

  let i;
  for ( i in options ) {
    if ( options.hasOwnProperty( i ) ) {
      const val = options[i];
      let ref;

      if ( i === 'inside' ) {
        ref = (0,_cfpb_cfpb_atomic_component_src_utilities_dom_traverse_js__WEBPACK_IMPORTED_MODULE_0__.queryOne)( val );
        ref.appendChild( elem );
      } else if ( i === 'around' ) {
        ref = (0,_cfpb_cfpb_atomic_component_src_utilities_dom_traverse_js__WEBPACK_IMPORTED_MODULE_0__.queryOne)( val );
        ref.parentNode.insertBefore( elem, ref );
        elem.appendChild( ref );
      } else if ( i in elem ) {
        elem[i] = val;
      } else {
        elem.setAttribute( i, val );
      }
    }
  }

  return elem;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  create: create
});


/***/ }),

/***/ "./packages/cfpb-tables/src/Table.js":
/*!*******************************************!*\
  !*** ./packages/cfpb-tables/src/Table.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cfpb_cfpb_atomic_component_src_components_AtomicComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/components/AtomicComponent.js */ "./packages/cfpb-atomic-component/src/components/AtomicComponent.js");
/* harmony import */ var _TableRowLinks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableRowLinks.js */ "./packages/cfpb-tables/src/TableRowLinks.js");
/* harmony import */ var _TableSortable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableSortable.js */ "./packages/cfpb-tables/src/TableSortable.js");
/* harmony import */ var _cfpb_cfpb_atomic_component_src_utilities_standard_type_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/utilities/standard-type.js */ "./packages/cfpb-atomic-component/src/utilities/standard-type.js");
/* ==========================================================================
   Table Organism
   ========================================================================== */






const Table = _cfpb_cfpb_atomic_component_src_components_AtomicComponent_js__WEBPACK_IMPORTED_MODULE_0__.default.extend( {
  ui: {
    base: '.o-table'
  },

  modifiers: [ _TableSortable_js__WEBPACK_IMPORTED_MODULE_2__.default, _TableRowLinks_js__WEBPACK_IMPORTED_MODULE_1__.default ]
} );

Table.constants.DIRECTIONS = _cfpb_cfpb_atomic_component_src_utilities_standard_type_js__WEBPACK_IMPORTED_MODULE_3__.DIRECTIONS;

/* harmony default export */ __webpack_exports__["default"] = (Table);


/***/ }),

/***/ "./packages/cfpb-tables/src/TableRowLinks.js":
/*!***************************************************!*\
  !*** ./packages/cfpb-tables/src/TableRowLinks.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cfpb_cfpb_atomic_component_src_utilities_dom_traverse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/utilities/dom-traverse.js */ "./packages/cfpb-atomic-component/src/utilities/dom-traverse.js");
/* ==========================================================================
   Table Row Links

   Mixin for adding row link click functionality to Table organism.
   ========================================================================== */




const TableRowLinks = {
  ui: {
    base: '.o-table__row-links'
  },

  events: {
    'click tbody tr': 'onRowLinkClick'
  },

  onRowLinkClick: onRowLinkClick
};

/**
 * Handle a click of the table.
 *
 * @param {MouseEvent} event - Mouse event for click on the table.
 */
function onRowLinkClick( event ) {
  let target = event.target;
  if ( target && target.tagName === 'A' ) {
    return;
  }
  target = (0,_cfpb_cfpb_atomic_component_src_utilities_dom_traverse_js__WEBPACK_IMPORTED_MODULE_0__.closest)( event.target, 'tr' );
  const link = target.querySelector( 'a' );
  if ( link ) {
    window.location = link.getAttribute( 'href' );
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TableRowLinks);


/***/ }),

/***/ "./packages/cfpb-tables/src/TableSortable.js":
/*!***************************************************!*\
  !*** ./packages/cfpb-tables/src/TableSortable.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cfpb_cfpb_atomic_component_src_utilities_dom_traverse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/utilities/dom-traverse.js */ "./packages/cfpb-atomic-component/src/utilities/dom-traverse.js");
/* harmony import */ var _cfpb_cfpb_atomic_component_src_utilities_standard_type_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component/src/utilities/standard-type.js */ "./packages/cfpb-atomic-component/src/utilities/standard-type.js");
/* ==========================================================================
   Table Sortablle

   Mixin for sorting table organism.
   ========================================================================== */





let UNDEFINED;

const TableSortable = {
  ui: {
    base:       '.o-table__sortable',
    tableBody:  'tbody',
    sortButton: '.sorted-up, .sorted-down'
  },

  classes: {
    sortDown: 'sorted-down',
    sortUp:   'sorted-up'
  },

  events: {
    'click .sortable': 'onSortableClick'
  },

  initialize:      initialize,
  bindProperties:  bindProperties,
  getColumnIndex:  getColumnIndex,
  updateTable:     updateTable,
  updateTableData: updateTableData,
  updateTableDom:  updateTableDom,
  tableDataSorter: tableDataSorter,
  onSortableClick: onSortableClick
};

/**
 * Function used to create computed and triggered properties.
 */
function initialize() {
  this.sortClass = UNDEFINED;
  this.sortColumnIndex = UNDEFINED;
  this.sortDirection = UNDEFINED;
  this.tableData = [];
  this.bindProperties();
  if ( this.ui.sortButton ) {
    this.sortColumnIndex = this.getColumnIndex();

    this.sortDirection = _cfpb_cfpb_atomic_component_src_utilities_standard_type_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTIONS.UP;
    if ( this.ui.sortButton.classList.contains( this.classes.sortDown ) ) {
      this.sortDirection = _cfpb_cfpb_atomic_component_src_utilities_standard_type_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTIONS.DOWN;
    }

    this.updateTable();
  }
}

/**
 * Function used to create computed and trigger properties.
 */
function bindProperties() {
  let sortDirection;

  Object.defineProperty( this, 'sortDirection', {
    configurable: true,
    get: function() {
      return sortDirection;
    },
    set: function( value ) {
      if ( value === _cfpb_cfpb_atomic_component_src_utilities_standard_type_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTIONS.UP ) {
        this.sortClass = this.classes.sortUp;
      } else if ( value === _cfpb_cfpb_atomic_component_src_utilities_standard_type_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTIONS.DOWN ) {
        this.sortClass = this.classes.sortDown;
      }
      sortDirection = value;
    }
  } );
}

/**
 * Function used to get the column index of the active sort column.
 *
 * @param {HTMLNode} element - The element used as the sortable.
 * @returns {number} The column index of the active sort column.
 */
function getColumnIndex( element ) {
  return (0,_cfpb_cfpb_atomic_component_src_utilities_dom_traverse_js__WEBPACK_IMPORTED_MODULE_0__.closest)( element || this.ui.sortButton, 'td, th' ).cellIndex;
}

/**
 * Function used to update the table data and dom.
 * @returns {boolean} TODO: Add description.
 */
function updateTable() {
  return this.updateTableData() && this.updateTableDom();
}

/**
 * Function used to get, sort, and update the table data array.
 *
 * @param {number} columnIndex - The index of the column used for sorting.
 * @returns {Array} Multidimensional array of column's cell value
 * and corresponding row element.
 */
function updateTableData( columnIndex ) {
  let cell;
  const rows = this.ui.tableBody.querySelectorAll( 'tr' );
  this.tableData = [];
  columnIndex = columnIndex || this.sortColumnIndex;

  for ( let i = 0, len = rows.length; i < len; ++i ) {
    cell = rows[i].cells[columnIndex];
    if ( cell ) {
      cell = cell.textContent.trim();
    }
    this.tableData.push( [ cell, rows[i] ] );
  }

  const sortType = this.ui.sortButton.getAttribute( 'data-sort_type' );
  this.tableData.sort( this.tableDataSorter( this.sortDirection, sortType ) );

  return this.tableData;
}

/**
 * Function used to update the table DOM.
 * @returns {HTMLNode} The table's <tbody> element.
 */
function updateTableDom() {
  const tableBody = this.ui.tableBody;

  /* Empty the table body to prepare for sorting the rows
     TODO: It might make sense to use innerHTML
     from a performance and garbage collection standpoint. */
  while ( tableBody.lastChild ) {
    tableBody.removeChild( tableBody.lastChild );
  }

  const documentFragment = document.createDocumentFragment();
  for ( let i = 0; i < this.tableData.length; i++ ) {
    documentFragment.appendChild( this.tableData[i][1] );
  }

  tableBody.appendChild( documentFragment );
  this.dispatchEvent( 'table:updated' );

  return tableBody;
}

// TODO Fix complexity issue
/* eslint-disable complexity */
/**
 * Function used to create a function for sorting table data.
 * Passed to Array.sort method.
 *
 * @param {number} direction - A number where a negative number indicates a
 * reverse sort.
 * @param {string} sortType - A string used for sort types. By default,
 * the values are sorted by their native type. If this value is set to
 * 'number', then the cells' numeric values are used.
 * @returns {Function} - A function to be used by the Array.sort method,
 * where the parameters 'a' and 'b' is each an Array (of Arrays) to be sorted.
 */
function tableDataSorter( direction, sortType ) {
  return function( a, b ) {
    const sign = direction === _cfpb_cfpb_atomic_component_src_utilities_standard_type_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTIONS.DOWN ? -1 : 1;
    let order = 0;
    const regex = /[^\d.-]/g;

    // Set a and b to the first Array in each Array-of-Arrays
    a = a[0];
    b = b[0];

    // For number sort, convert a & b to numbers.
    if ( sortType === 'number' ) {
      a = Number( a.replace( regex, '' ) );
      b = Number( b.replace( regex, '' ) );
    }

    // Sort the values
    if ( a < b ) {
      order = sign * -1;
    } else if ( a > b ) {
      order = sign;
    }

    return order;
  };
}
/* eslint-enable complexity */

/**
 * Function used as callback for the sortable click event.
 *
 * @param {Event} event - DOM event.
 * @returns {Object} - TOOD: Add description.
 */
function onSortableClick( event ) {
  if ( this.ui.sortButton ) {
    this.ui.sortButton.classList.remove( this.sortClass );
  }
  if ( this.ui.sortButton === event.target ) {
    this.sortDirection = ~this.sortDirection;
  } else {
    this.ui.sortButton = event.target;
    this.sortColumnIndex = this.getColumnIndex();
    this.sortDirection = _cfpb_cfpb_atomic_component_src_utilities_standard_type_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTIONS.UP;
  }
  // The active sort class is changing when the sort direction changes.
  this.ui.sortButton.classList.add( this.sortClass );
  this.updateTable();

  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (TableSortable);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./docs/assets/js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./docs/assets/css/main.less");
/******/ })()
;
//# sourceMappingURL=main.js.map