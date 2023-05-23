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
(function(root, factory) {
  'use strict';

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(globalThis, function() {
  'use strict';

  function AnchorJS(options) {
    this.options = options || {};
    this.elements = [];

    /**
     * Assigns options to the internal options object, and provides defaults.
     * @param {Object} opts - Options object
     */
    function _applyRemainingDefaultOptions(opts) {
      opts.icon = Object.prototype.hasOwnProperty.call(opts, 'icon') ? opts.icon : '\uE9CB'; // Accepts characters (and also URLs?), like  '#', '¶', '❡', or '§'.
      opts.visible = Object.prototype.hasOwnProperty.call(opts, 'visible') ? opts.visible : 'hover'; // Also accepts 'always'
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
          hrefBase,
          indexesToDrop = [];

      // We reapply options here because somebody may have overwritten the default options object when setting options.
      // For example, this overwrites all options but visible:
      //
      // anchors.options = { visible: 'always'; }
      _applyRemainingDefaultOptions(this.options);

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

        if (this.options.visible === 'always') {
          anchor.style.opacity = '1';
        }

        if (this.options.icon === '\uE9CB') {
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
          anchor.style.marginLeft = '-1.25em';
          anchor.style.paddingRight = '.25em';
          anchor.style.paddingLeft = '.25em';
          elements[i].insertBefore(anchor, elements[i].firstChild);
        } else { // if the option provided is `right` (or anything else).
          anchor.style.marginLeft = '.1875em';
          anchor.style.paddingRight = '.1875em';
          anchor.style.paddingLeft = '.1875em';
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
      var nonsafeChars = /[& +$,:;=?@"#{}|^~[`%!'<>\]./()*\\\n\t\b\v\u00A0]/g;

      // The reason we include this _applyRemainingDefaultOptions is so urlify can be called independently,
      // even after setting options. This can be useful for tests or other applications.
      if (!this.options.truncate) {
        _applyRemainingDefaultOptions(this.options);
      }

      // Note: we trim hyphens after truncating because truncating can cause dangling hyphens.
      // Example string:                      // " ⚡⚡ Don't forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
      return text.trim()                      // "⚡⚡ Don't forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
        .replace(/'/gi, '')                   // "⚡⚡ Dont forget: URL fragments should be i18n-friendly, hyphenated, short, and clean."
        .replace(nonsafeChars, '-')           // "⚡⚡-Dont-forget--URL-fragments-should-be-i18n-friendly--hyphenated--short--and-clean-"
        .replace(/-{2,}/g, '-')               // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated-short-and-clean-"
        .substring(0, this.options.truncate)  // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated-"
        .replace(/^-+|-+$/gm, '')             // "⚡⚡-Dont-forget-URL-fragments-should-be-i18n-friendly-hyphenated"
        .toLowerCase();                       // "⚡⚡-dont-forget-url-fragments-should-be-i18n-friendly-hyphenated"
    };

    /**
     * Determines if this element already has an AnchorJS link on it.
     * Uses this technique: https://stackoverflow.com/a/5898748/1154642
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

/***/ "./packages/cfpb-icons/src/icons/error.svg":
/*!*************************************************!*\
  !*** ./packages/cfpb-icons/src/icons/error.svg ***!
  \*************************************************/
/***/ (function(module) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"cf-icon-svg cf-icon-svg__error\" viewBox=\"0 0 12 19\"><path d=\"M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z\"></path></svg>"

/***/ }),

/***/ "./docs/assets/js/Tabs.js":
/*!********************************!*\
  !*** ./docs/assets/js/Tabs.js ***!
  \********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BASE_CLASS = 'm-tabs';

/**
 * @param {HTMLElement} dom - The HTML DOM node.
 * @returns {Tabs} An instance.
 */
function Tabs(dom) {
  // DOM references.
  var _dom = dom;
  var _tabsItemsDom;
  var _tabsPanelsDom;

  // Store the current selected tab index.
  var _selectedTabIndex;

  /**
   * Change the selected tab index.
   * @param {number} index - An index position of the selected tab.
   * @returns {Tabs} An instance.
   */
  function changeTab(index) {
    // Remove classes from prior selected tab and panel.
    _tabsItemsDom[_selectedTabIndex].classList.remove("".concat(BASE_CLASS, "_list-item-selected"));
    _tabsPanelsDom[_selectedTabIndex].classList.add('u-hidden');

    // Store new selected index.
    _selectedTabIndex = index;

    // Add classes for the new selected tab and panel.
    _tabsItemsDom[_selectedTabIndex].classList.add("".concat(BASE_CLASS, "_list-item-selected"));
    _tabsPanelsDom[_selectedTabIndex].classList.remove('u-hidden');
    return this;
  }

  /**
   * Initialize the Tabs instance.
   * @returns {Tabs} An instance.
   */
  function init() {
    _tabsItemsDom = _dom.querySelectorAll(".".concat(BASE_CLASS, "_list-item"));
    if (_tabsItemsDom.length === 0) {
      // Bail out because there are no tabs to initialize.
      return this;
    }

    // Add events to tab items.
    _tabsPanelsDom = _dom.querySelectorAll(".".concat(BASE_CLASS, "_panel"));
    var _loop = function _loop(i) {
      _tabsItemsDom[i].addEventListener('click', function (event) {
        event.preventDefault();
        changeTab(i);
      });

      // Hide panels initially.
      if (i > 0) {
        _tabsPanelsDom[i].classList.add('u-hidden');
      }
    };
    for (var i = 0, len = _tabsItemsDom.length; i < len; i++) {
      _loop(i);
    }

    // Set the default selected tab to index zero.
    _selectedTabIndex = 0;
    return this;
  }

  // Attach public events.
  this.init = init;
  this.changeTab = changeTab;
  return this;
}
Tabs.BASE_CLASS = BASE_CLASS;
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./docs/assets/js/redirect-banner.js":
/*!*******************************************!*\
  !*** ./docs/assets/js/redirect-banner.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Retrieve redirect source name and URL.
 * @param {Array} match - Matched URL UTM source.
 * @returns {object} Hash of redirect source's name and URL.
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
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Initialize the side navigation script to handle opening the sidebar
 * when the page is resized between mobile and desktop sizes.
 */
function init() {
  var secondaryNavCat = document.querySelector('.ds-nav-container');

  // First collapse the navigation if in mobile.
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
  }

  // Check viewport state on page load.
  handleViewportChange();

  // Add event listener for checking viewport state on window resize.
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
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TOGGLE_ATTRIBUTE": function() { return /* binding */ TOGGLE_ATTRIBUTE; },
/* harmony export */   "toggleAllDetails": function() { return /* binding */ toggleAllDetails; },
/* harmony export */   "toggleDetails": function() { return /* binding */ toggleDetails; }
/* harmony export */ });
var HIDDEN_CLASS = 'u-hidden';
var TOGGLE_ATTRIBUTE = 'data-toggle-details';
var STATE_SHOW = 'show';
var STATE_HIDE = 'hide';
var isShowingAllDetails = false;

/**
 * Toggle details for a single variation.
 * @param {HTMLElement} button - Button element that controls the toggling.
 * @param {HTMLElement} document -
 *   Defaults to window.document but overridable for react DOM references.
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
 * @param {HTMLElement} toggleBtn - The button that called this method.
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

/***/ "./packages/cfpb-atomic-component/src/index.js":
/*!*****************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlphaTransition": function() { return /* reexport safe */ _utilities_transition_AlphaTransition_js__WEBPACK_IMPORTED_MODULE_8__.AlphaTransition; },
/* harmony export */   "BEHAVIOR_PREFIX": function() { return /* reexport safe */ _utilities_standard_type_js__WEBPACK_IMPORTED_MODULE_0__.BEHAVIOR_PREFIX; },
/* harmony export */   "BaseTransition": function() { return /* reexport safe */ _utilities_transition_BaseTransition_js__WEBPACK_IMPORTED_MODULE_9__.BaseTransition; },
/* harmony export */   "EventObserver": function() { return /* reexport safe */ _mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_1__.EventObserver; },
/* harmony export */   "FlyoutMenu": function() { return /* reexport safe */ _utilities_behavior_FlyoutMenu_js__WEBPACK_IMPORTED_MODULE_7__.FlyoutMenu; },
/* harmony export */   "JS_HOOK": function() { return /* reexport safe */ _utilities_standard_type_js__WEBPACK_IMPORTED_MODULE_0__.JS_HOOK; },
/* harmony export */   "MaxHeightTransition": function() { return /* reexport safe */ _utilities_transition_MaxHeightTransition_js__WEBPACK_IMPORTED_MODULE_10__.MaxHeightTransition; },
/* harmony export */   "MoveTransition": function() { return /* reexport safe */ _utilities_transition_MoveTransition_js__WEBPACK_IMPORTED_MODULE_11__.MoveTransition; },
/* harmony export */   "STATE_PREFIX": function() { return /* reexport safe */ _utilities_standard_type_js__WEBPACK_IMPORTED_MODULE_0__.STATE_PREFIX; },
/* harmony export */   "add": function() { return /* reexport safe */ _utilities_data_hook_js__WEBPACK_IMPORTED_MODULE_5__.add; },
/* harmony export */   "attach": function() { return /* reexport safe */ _utilities_behavior_behavior_js__WEBPACK_IMPORTED_MODULE_3__.attach; },
/* harmony export */   "checkBehaviorDom": function() { return /* reexport safe */ _utilities_behavior_behavior_js__WEBPACK_IMPORTED_MODULE_3__.checkBehaviorDom; },
/* harmony export */   "checkDom": function() { return /* reexport safe */ _utilities_atomic_helpers_js__WEBPACK_IMPORTED_MODULE_2__.checkDom; },
/* harmony export */   "contains": function() { return /* reexport safe */ _utilities_data_hook_js__WEBPACK_IMPORTED_MODULE_5__.contains; },
/* harmony export */   "find": function() { return /* reexport safe */ _utilities_behavior_behavior_js__WEBPACK_IMPORTED_MODULE_3__.find; },
/* harmony export */   "instantiateAll": function() { return /* reexport safe */ _utilities_atomic_helpers_js__WEBPACK_IMPORTED_MODULE_2__.instantiateAll; },
/* harmony export */   "isArray": function() { return /* reexport safe */ _utilities_type_checkers_js__WEBPACK_IMPORTED_MODULE_4__.isArray; },
/* harmony export */   "isDate": function() { return /* reexport safe */ _utilities_type_checkers_js__WEBPACK_IMPORTED_MODULE_4__.isDate; },
/* harmony export */   "isDefined": function() { return /* reexport safe */ _utilities_type_checkers_js__WEBPACK_IMPORTED_MODULE_4__.isDefined; },
/* harmony export */   "isEmpty": function() { return /* reexport safe */ _utilities_type_checkers_js__WEBPACK_IMPORTED_MODULE_4__.isEmpty; },
/* harmony export */   "isFunction": function() { return /* reexport safe */ _utilities_type_checkers_js__WEBPACK_IMPORTED_MODULE_4__.isFunction; },
/* harmony export */   "isMobileUserAgent": function() { return /* reexport safe */ _utilities_media_helpers_js__WEBPACK_IMPORTED_MODULE_6__.isMobileUserAgent; },
/* harmony export */   "isNumber": function() { return /* reexport safe */ _utilities_type_checkers_js__WEBPACK_IMPORTED_MODULE_4__.isNumber; },
/* harmony export */   "isObject": function() { return /* reexport safe */ _utilities_type_checkers_js__WEBPACK_IMPORTED_MODULE_4__.isObject; },
/* harmony export */   "isString": function() { return /* reexport safe */ _utilities_type_checkers_js__WEBPACK_IMPORTED_MODULE_4__.isString; },
/* harmony export */   "isUndefined": function() { return /* reexport safe */ _utilities_type_checkers_js__WEBPACK_IMPORTED_MODULE_4__.isUndefined; },
/* harmony export */   "remove": function() { return /* reexport safe */ _utilities_behavior_behavior_js__WEBPACK_IMPORTED_MODULE_3__.remove; },
/* harmony export */   "setInitFlag": function() { return /* reexport safe */ _utilities_atomic_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setInitFlag; }
/* harmony export */ });
/* harmony import */ var _utilities_standard_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/standard-type.js */ "./packages/cfpb-atomic-component/src/utilities/standard-type.js");
/* harmony import */ var _mixins_EventObserver_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/EventObserver.js */ "./packages/cfpb-atomic-component/src/mixins/EventObserver.js");
/* harmony import */ var _utilities_atomic_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/atomic-helpers.js */ "./packages/cfpb-atomic-component/src/utilities/atomic-helpers.js");
/* harmony import */ var _utilities_behavior_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities/behavior/behavior.js */ "./packages/cfpb-atomic-component/src/utilities/behavior/behavior.js");
/* harmony import */ var _utilities_type_checkers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/type-checkers.js */ "./packages/cfpb-atomic-component/src/utilities/type-checkers.js");
/* harmony import */ var _utilities_data_hook_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities/data-hook.js */ "./packages/cfpb-atomic-component/src/utilities/data-hook.js");
/* harmony import */ var _utilities_media_helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities/media-helpers.js */ "./packages/cfpb-atomic-component/src/utilities/media-helpers.js");
/* harmony import */ var _utilities_behavior_FlyoutMenu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/behavior/FlyoutMenu.js */ "./packages/cfpb-atomic-component/src/utilities/behavior/FlyoutMenu.js");
/* harmony import */ var _utilities_transition_AlphaTransition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/transition/AlphaTransition.js */ "./packages/cfpb-atomic-component/src/utilities/transition/AlphaTransition.js");
/* harmony import */ var _utilities_transition_BaseTransition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utilities/transition/BaseTransition.js */ "./packages/cfpb-atomic-component/src/utilities/transition/BaseTransition.js");
/* harmony import */ var _utilities_transition_MaxHeightTransition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utilities/transition/MaxHeightTransition.js */ "./packages/cfpb-atomic-component/src/utilities/transition/MaxHeightTransition.js");
/* harmony import */ var _utilities_transition_MoveTransition_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utilities/transition/MoveTransition.js */ "./packages/cfpb-atomic-component/src/utilities/transition/MoveTransition.js");
/* ==========================================================================
   Design System
   Atomic component utilities
   ========================================================================== */























/***/ }),

/***/ "./packages/cfpb-atomic-component/src/mixins/EventObserver.js":
/*!********************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/mixins/EventObserver.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventObserver": function() { return /* binding */ EventObserver; }
/* harmony export */ });
/**
 * EventObserver
 * @class
 * @classdesc Used for creating an object
 *   that can be used to dispatch and listen to custom events.
 * @returns {object} An EventObserver instance.
 */
function EventObserver() {
  // The events registered on this instance.
  const _events = {};

  /**
   * Register an event listener.
   * @param {string} event - The event name to listen for.
   * @param {Function} callback - The function called when the event has fired.
   * @returns {object} The instance this EventObserver instance is decorating.
   */
  function addEventListener(event, callback) {
    if ({}.hasOwnProperty.call(_events, event)) {
      _events[event].push(callback);
    } else {
      _events[event] = [callback];
    }

    return this;
  }

  /**
   * Remove an added event listener.
   * Must match a call made to addEventListener.
   * @param {string} event - The event name to remove.
   * @param {Function} callback - The function attached to the event.
   * @returns {object} The instance this EventObserver instance is decorating.
   */
  function removeEventListener(event, callback) {
    if (!{}.hasOwnProperty.call(_events, event)) {
      return this;
    }

    const index = _events[event].indexOf(callback);
    // Check if there are any callbacks associated with a particular event.
    if (index !== -1) {
      _events[event].splice(index, 1);
    }

    return this;
  }

  /**
   * Broadcast an event.
   * @param {string} event - The type of event to broadcast.
   * @param {object} options - The event object to pass to the event handler.
   * @returns {object} The instance this EventObserver instance is decorating.
   */
  function dispatchEvent(event, options) {
    if (!{}.hasOwnProperty.call(_events, event)) {
      return this;
    }

    options = options || {};

    const evts = _events[event];
    for (let i = 0, len = evts.length; i < len; i++) {
      evts[i].call(this, options);
    }

    return this;
  }

  this.addEventListener = addEventListener;
  this.removeEventListener = removeEventListener;
  this.dispatchEvent = dispatchEvent;
  this.getRegisteredEvents = () => _events;

  return this;
}




/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/atomic-helpers.js":
/*!************************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/atomic-helpers.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDom": function() { return /* binding */ checkDom; },
/* harmony export */   "instantiateAll": function() { return /* binding */ instantiateAll; },
/* harmony export */   "setInitFlag": function() { return /* binding */ setInitFlag; }
/* harmony export */ });
/* harmony import */ var _data_hook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-hook.js */ "./packages/cfpb-atomic-component/src/utilities/data-hook.js");
/* harmony import */ var _standard_type_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./standard-type.js */ "./packages/cfpb-atomic-component/src/utilities/standard-type.js");
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
const INIT_FLAG = _standard_type_js__WEBPACK_IMPORTED_MODULE_1__.STATE_PREFIX + 'atomic_init';

/**
 * @param {HTMLElement} element - The DOM element within which to search for
 *   the atomic element class.
 * @param {string} baseClass - The CSS class name for the atomic element.
 * @returns {HTMLElement} The DOM element for the atomic element.
 * @throws {Error} If DOM element passed into the atomic element is not valid.
 */
function _verifyElementExists(element, baseClass) {
  if (!element || !element.classList) {
    const msg =
      element +
      ' is not valid. ' +
      'Check that element is a DOM node with class "' +
      baseClass +
      '"';
    throw new Error(msg);
  }

  return element;
}

/**
 * @param {HTMLElement} element - The DOM element within which to search
 *   for the atomic element class.
 * @param {string} baseClass - The CSS class name for the atomic element.
 * @returns {HTMLElement} The DOM element for the atomic element.
 * @throws {Error} If baseClass was not found on the element.
 */
function _verifyClassExists(element, baseClass) {
  const dom = element.classList.contains(baseClass)
    ? element
    : element.querySelector('.' + baseClass);
  if (!dom) {
    const msg = baseClass + ' not found on or in passed DOM node.';
    throw new Error(msg);
  }

  return dom;
}

/**
 * Check that a particular element passed into the constructor of
 * an atomic component exists and that the correct atomic class
 * is present on the element.
 * @param {HTMLElement} element - The DOM element within which to search
 *   for the atomic element class.
 * @param {string} baseClass - The CSS class name for the atomic element.
 * @returns {HTMLElement} The DOM element for the atomic element.
 * @throws {Error} If DOM element passed into the atomic element is not valid.
 */
function checkDom(element, baseClass) {
  _verifyElementExists(element, baseClass);
  const dom = _verifyClassExists(element, baseClass);

  return dom;
}

/**
 * Set a flag on an atomic component when it is initialized.
 * Use the returned boolean to handle cases where an atomic component
 * is initializing when it has already been initialized elsewhere.
 * @param {HTMLElement} element - The DOM element for the atomic component.
 * @returns {boolean} True if the init data-js-* hook attribute was set,
 *   false otherwise.
 */
function setInitFlag(element) {
  if ((0,_data_hook_js__WEBPACK_IMPORTED_MODULE_0__.contains)(element, INIT_FLAG)) {
    return false;
  }

  (0,_data_hook_js__WEBPACK_IMPORTED_MODULE_0__.add)(element, INIT_FLAG);

  return true;
}

/**
 * @param {string} selector - Selector to search for in the document.
 * @param {Function} Constructor - A constructor function.
 * @param {HTMLElement} [scope] - A dom node in which to query the selector.
 *   If not supplied, it defaults to the `document`.
 * @returns {Array} List of instances that were instantiated.
 */
function instantiateAll(selector, Constructor, scope) {
  const base = scope || document;
  const elements = base.querySelectorAll(selector);
  const insts = [];
  let inst;
  let element;
  for (let i = 0, len = elements.length; i < len; i++) {
    element = elements[i];
    if ((0,_data_hook_js__WEBPACK_IMPORTED_MODULE_0__.contains)(element, INIT_FLAG) === false) {
      inst = new Constructor(element);
      inst.init();
      insts.push(inst);
    }
  }
  return insts;
}

// Expose public methods.



/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/behavior/FlyoutMenu.js":
/*!*****************************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/behavior/FlyoutMenu.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlyoutMenu": function() { return /* binding */ FlyoutMenu; }
/* harmony export */ });
/* harmony import */ var _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component */ "./packages/cfpb-atomic-component/src/index.js");
/* eslint-disable no-use-before-define */


const BASE_CLASS = _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.BEHAVIOR_PREFIX + 'flyout-menu';
const SEL_PREFIX = '[' + _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.JS_HOOK + '=' + BASE_CLASS;

/**
 * FlyoutMenu
 * @class
 * @classdesc Initializes new FlyoutMenu behavior.
 * Behaviors are functionality that can be shared between different pieces
 * of markup. They are not strictly atomic, though they likely are used
 * on atomic components.
 * As added JS behavior, this is added through HTML data-js-hook attributes.
 *
 * Structure is:
 * behavior_flyout-menu
 *   behavior_flyout-menu_trigger
 *   behavior_flyout-menu_content
 *     behavior_flyout-menu_trigger (optional)
 *
 * The second trigger is optional and may be used for a button in the content
 * area, which may obscure the first trigger.
 * The flyout can be triggered through a click of either trigger.
 * @param {HTMLElement} element - The DOM element to attach FlyoutMenu behavior.
 * @param {boolean} autoHideContent - Whether to add `hidden` attribute to
 *   content when it is collapsed.
 * @returns {FlyoutMenu} An instance.
 */
function FlyoutMenu(element, autoHideContent = true) {
  // Verify that the expected dom attributes are present.
  const _dom = (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.checkBehaviorDom)(element, BASE_CLASS);
  const _triggerDoms = _findTriggers(element);
  const _contentDom = (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.checkBehaviorDom)(element, BASE_CLASS + '_content');

  // Flyouts appear in one of four states.
  let _state = 0;
  const COLLAPSED = 0;
  const COLLAPSING = 1;
  const EXPANDING = 2;
  const EXPANDED = 3;

  let _transition;
  let _expandTransitionMethod;
  let _collapseTransitionMethod;

  // Binded events.
  // Needed to add and remove events to transitions.
  const _collapseEndBinded = _collapseEnd.bind(this);
  const _expandEndBinded = _expandEnd.bind(this);

  /* If this menu appears in a data source,
     this can be used to store the source.
     Examples include the index in an Array,
     a key in an Hash, or a node in a Tree. */
  let _data;

  // Whether this instance's behaviors are suspended or not.
  let _suspended = true;

  /* Event immediately preceeding mouseover is touchstart,
     if that event's present we'll want to ignore mouseover
     to avoid a mouseover and click immediately after each other. */
  let _touchTriggered = false;

  /**
   * Iterate over dom tree and find FlyoutMenu triggers.
   * We need to exclude the ones that are nested FlyoutMenus, since those
   * will be managed by their own instance of this class.
   * @param {HTMLElement} element - The DOM element to search for triggers within.
   * @returns {Array} List of trigger DOM references within this FlyoutMenu.
   */
  function _findTriggers(element) {
    const triggersList = [];
    const triggers = element.querySelectorAll(`${SEL_PREFIX}_trigger]`);

    let trigger;
    let triggerParent;
    let isSubTrigger;
    // Iterate backwards ensuring that length is an UInt32.
    for (let i = triggers.length >>> 0; i--; ) {
      isSubTrigger = false;
      trigger = triggers[i];
      triggerParent = trigger.parentElement;
      while (triggerParent !== element) {
        if (
          triggerParent.getAttribute(_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.JS_HOOK) &&
          triggerParent.getAttribute(_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.JS_HOOK).split(' ').indexOf(BASE_CLASS) !==
            -1
        ) {
          isSubTrigger = true;
          triggerParent = element;
        } else {
          triggerParent = triggerParent.parentElement;
        }
      }

      if (!isSubTrigger) {
        triggersList.unshift(triggers[i]);
      }
    }

    return triggersList;
  }

  /**
   * @returns {FlyoutMenu} An instance.
   * @param {boolean} isExpanded - Whether the flyout menu is expanded at
   *   initialization-time or collapsed.
   */
  function init(isExpanded = false) {
    _state = isExpanded ? EXPANDED : COLLAPSED;
    _triggerDoms.forEach((triggerDom) => {
      _setAriaAttr('expanded', triggerDom, isExpanded);

      triggerDom.addEventListener('click', _handleTriggerClicked.bind(this));
      triggerDom.addEventListener('touchstart', _handleTouchStart, {
        passive: true,
      });
      triggerDom.addEventListener('mouseover', _handleTriggerOver.bind(this));
      triggerDom.addEventListener('mouseout', _handleTriggerOut.bind(this));
    });

    _contentDom.setAttribute('data-open', isExpanded ? 'true' : 'false');
    if (autoHideContent && !isExpanded) _contentDom.setAttribute('hidden', '');

    resume();

    return this;
  }

  /**
   * Set an aria attribute on an HTML element.
   * @param {string} type - The aria attribute to set
   *   (without the aria- prefix).
   * @param {HTMLElement} elem - The element to set.
   * @param {boolean} value - The value to set on `aria-expanded`,
   *   casts to a string.
   * @returns {string} The cast value.
   */
  function _setAriaAttr(type, elem, value) {
    const strValue = String(value);
    elem.setAttribute('aria-' + type, strValue);
    return strValue;
  }

  /**
   * Event handler for when the search input trigger is touched.
   */
  function _handleTouchStart() {
    _touchTriggered = true;
  }

  /**
   * Event handler for when the trigger is hovered over.
   * @param {MouseEvent} event - The clicked flyout trigger event object.
   */
  function _handleTriggerOver(event) {
    if (_suspended) return;

    if (!_touchTriggered) {
      this.dispatchEvent('triggerover', {
        target: this,
        trigger: event.target,
        type: 'triggerover',
      });
    }

    _touchTriggered = false;
  }

  /**
   * Event handler for when the trigger is hovered out.
   * @param {MouseEvent} event - The clicked flyout trigger event object.
   */
  function _handleTriggerOut(event) {
    if (_suspended) return;

    this.dispatchEvent('triggerout', {
      target: this,
      trigger: event.target,
      type: 'triggerout',
    });
  }

  /**
   * Event handler for when the search input trigger is clicked,
   * which opens/closes the search input.
   * @param {MouseEvent} event - The clicked flyout trigger event object.
   */
  function _handleTriggerClicked(event) {
    if (_suspended) return;

    this.dispatchEvent('triggerclick', {
      target: this,
      trigger: event.target,
      type: 'triggerclick',
    });

    event.preventDefault();

    switch (_state) {
      case COLLAPSED:
      case COLLAPSING:
        this.expand();
        break;
      case EXPANDING:
      case EXPANDED:
        this.collapse();
        break;
    }
  }

  /**
   * Open the search box.
   * @returns {FlyoutMenu} An instance.
   */
  function expand() {
    _transition?.halt();
    if (_state === EXPANDING || _state === EXPANDED) return this;

    _state = EXPANDING;
    if (autoHideContent) _contentDom.removeAttribute('hidden');
    this.dispatchEvent('expandbegin', { target: this, type: 'expandbegin' });

    // Only use transitions if both expand and collapse are set.
    if (!_expandTransitionMethod || !_collapseTransitionMethod) {
      _expandEndBinded();
      return this;
    }

    const hasTransition = _transition?.isAnimated();
    if (hasTransition) {
      _transition.addEventListener(_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.BaseTransition.END_EVENT, _expandEndBinded);
    }

    _expandTransitionMethod();

    if (!hasTransition) {
      _expandEndBinded();
    }

    return this;
  }

  /**
   * Close the search box.
   * If collapse is called when expand animation is underway,
   * save a deferred call to collapse, which is called when
   * expand completes.
   * @returns {FlyoutMenu} An instance.
   */
  function collapse() {
    _transition?.halt();
    if (_state === COLLAPSING || _state === COLLAPSED) return this;

    for (let i = 0, len = _triggerDoms.length; i < len; i++) {
      _setAriaAttr('expanded', _triggerDoms[i], false);
    }

    _contentDom.setAttribute('data-open', 'false');

    _state = COLLAPSING;
    this.dispatchEvent('collapsebegin', {
      target: this,
      type: 'collapsebegin',
    });

    // Only use transitions if both expand and collapse are set.
    if (!_collapseTransitionMethod || !_expandTransitionMethod) {
      _collapseEndBinded();
      return this;
    }

    const hasTransition = _transition?.isAnimated();
    if (hasTransition) {
      _transition.addEventListener(
        _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.BaseTransition.END_EVENT,
        _collapseEndBinded
      );
    }

    _collapseTransitionMethod();

    if (!hasTransition) {
      _collapseEndBinded();
    }

    return this;
  }

  /**
   * Expand animation has completed.
   * Call deferred collapse function,
   * if set (otherwise it will call a noop function).
   */
  function _expandEnd() {
    _state = EXPANDED;
    _contentDom.setAttribute('data-open', 'true');
    if (_transition) {
      _transition.removeEventListener(
        _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.BaseTransition.END_EVENT,
        _expandEndBinded
      );
    }
    this.dispatchEvent('expandend', { target: this, type: 'expandend' });

    for (let i = 0, len = _triggerDoms.length; i < len; i++) {
      _setAriaAttr('expanded', _triggerDoms[i], true);
    }
  }

  /**
   * Collapse animation has completed.
   */
  function _collapseEnd() {
    _state = COLLAPSED;

    if (autoHideContent) _contentDom.setAttribute('hidden', '');

    if (_transition) {
      _transition.removeEventListener(
        _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.BaseTransition.END_EVENT,
        _collapseEndBinded
      );
    }

    this.dispatchEvent('collapseend', { target: this, type: 'collapseend' });
  }

  /**
   * Set the transition that runs when this flyout is expanded/collapsed.
   * @param {BaseTransition} transition - A transition object.
   * @param {Function} collapseMethod - The collapse method to call on the transition.
   * @param {Function} expandMethod - The expand method to call on the transition.
   */
  function setTransition(transition, collapseMethod, expandMethod) {
    _transition = transition;

    if (collapseMethod && collapseMethod !== _collapseTransitionMethod) {
      _collapseTransitionMethod = collapseMethod;
    }

    if (expandMethod && expandMethod !== _expandTransitionMethod) {
      _expandTransitionMethod = expandMethod;
    }
  }

  /**
   * Clear the transitions attached to this FlyoutMenu instance.
   */
  function clearTransition() {
    if (_transition) {
      _transition.remove();
    }

    let UNDEFINED;

    _transition = UNDEFINED;

    _expandTransitionMethod = UNDEFINED;
    _collapseTransitionMethod = UNDEFINED;
  }

  /**
   * @returns {object}
   *   Hash of container, content DOM references, and a list of trigger DOMs.
   */
  function getDom() {
    return {
      container: _dom,
      content: _contentDom,
      trigger: _triggerDoms,
    };
  }

  /**
   * Enable broadcasting of trigger events.
   * @returns {boolean} True if resumed, false otherwise.
   */
  function resume() {
    if (_suspended) _suspended = false;

    return !_suspended;
  }

  /**
   * Suspend broadcasting of trigger events.
   * @returns {boolean} True if suspended, false otherwise.
   */
  function suspend() {
    if (!_suspended) _suspended = true;

    return _suspended;
  }

  /**
   * @param {number | string | object} data - A data identifier
   *   such as an Array index, Hash key, or Tree node.
   * @returns {FlyoutMenu} An instance.
   */
  function setData(data) {
    _data = data;

    return this;
  }

  // Attach public events.
  const eventObserver = new _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.EventObserver();
  this.addEventListener = eventObserver.addEventListener;
  this.removeEventListener = eventObserver.removeEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;

  this.init = init;
  this.expand = expand;
  this.collapse = collapse;
  this.setTransition = setTransition;
  this.clearTransition = clearTransition;
  this.getData = () => _data;
  this.getTransition = () => _transition;
  this.getDom = getDom;
  this.isAnimating = () => _state === EXPANDING || _state === COLLAPSING;
  this.isExpanded = () => _state === EXPANDED;
  this.resume = resume;
  this.setData = setData;
  this.suspend = suspend;

  // Public static properties.
  FlyoutMenu.BASE_CLASS = BASE_CLASS;

  return this;
}




/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/behavior/behavior.js":
/*!***************************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/behavior/behavior.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attach": function() { return /* binding */ attach; },
/* harmony export */   "checkBehaviorDom": function() { return /* binding */ checkBehaviorDom; },
/* harmony export */   "find": function() { return /* binding */ find; },
/* harmony export */   "remove": function() { return /* binding */ remove; }
/* harmony export */ });
/* harmony import */ var _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component */ "./packages/cfpb-atomic-component/src/index.js");
/* ==========================================================================
   Dom Behaviors
   Behaviors are functionality that can be shared between different pieces
   of markup. They are not strictly atomic, though they likely are used
   on atomic components. An example of shared behavior may be a menu that
   expands and collapses and sets the aria-expanded attribute on the HTML.
   Or an input field that can be cleared by clicking an (x) button in the
   input. These are both behaviors that may appear in different parts of
   the codebase, but could share the same functionality.
   Behaviors are added through the `data-js-hook` attribute on the HTML
   and have a prefix of `behavior_`
   (both those designators are set in modules/util/standard-type.js).
   For example, `behaviors/FlyoutMenu.js` defines the behavior of
   expanding and collapsing an expandable menu. At a minimum, three things
   need to be defined: (A) The containing scope of the menu, (B) the trigger
   to activate the menu, and (C) the content to show/hide when the trigger
   is clicked. So the markup looks something like:
   <div data-js-hook="behavior_flyout-menu">
     <button data-js-hook="behavior_flyout-menu_trigger">
     <div data-js-hook="behavior_flyout-menu_content">…</div>
   </div>
   ========================================================================== */



/**
 * @param {string} behaviorSelector - Behavior type used to find the element
 *   within the dom.
 * @param {HTMLElement} baseElement - Containing element for the behavior element.
 * @returns {Array|NodeList} behaviorElements if it exists in the dom,
 *   null otherwise.
 */
function _findElements(behaviorSelector, baseElement) {
  baseElement = baseElement || document;
  let behaviorElements = [];

  try {
    behaviorElements = baseElement.querySelectorAll(behaviorSelector);
  } catch (error) {
    const msg = `${behaviorSelector} not found in DOM! ${error}`;
    throw new Error(msg);
  }

  if (
    behaviorElements.length === 0 &&
    behaviorSelector.indexOf(_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.BEHAVIOR_PREFIX) === -1
  ) {
    // eslint-disable-next-line no-use-before-define
    behaviorElements = find(behaviorSelector, baseElement);
  }

  return behaviorElements;
}

/**
 * @param {( string|HTMLElement|Array|NodeList )} behaviorElement - Used to
 *   query dom for elements.
 * @param {string} event - Event type to add to element.
 * @param {Function} eventHandler - Callback for event.
 * @param {HTMLElement} baseElement - Containing element
 *   for the behavior element.
 * @returns {Array|NodeList} if it exists in the dom, null otherwise.
 */
function attach(behaviorElement, event, eventHandler, baseElement) {
  let behaviorElements = [];

  if (behaviorElement instanceof NodeList === true) {
    behaviorElements = behaviorElement;
  } else if (behaviorElement instanceof Node === true) {
    behaviorElements = [behaviorElement];
  } else if (typeof behaviorElement === 'string') {
    behaviorElements = _findElements(behaviorElement, baseElement);
  }

  for (let i = 0, len = behaviorElements.length; i < len; i++) {
    behaviorElements[i].addEventListener(event, eventHandler, false);
  }

  return behaviorElements;
}

/**
 * @param {HTMLElement} element - The DOM element within which to search
 *   for the behavior in the data-js-hook attribute.
 * @param {string} behaviorDataAttr - The value in the data-js-hook.
 *   This is the name of the behavior.
 *   E.g. `behavior_flyout-menu`, `behavior_flyout-menu_content`.
 * @returns {HTMLElement} The DOM element that has an attached behavior.
 * @throws {Error} If data-js-hook attribute value was not found on DOM element.
 */
function checkBehaviorDom(element, behaviorDataAttr) {
  // Check that the behavior is found on the passed DOM node.
  let dom;

  if ((0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.contains)(element, behaviorDataAttr)) {
    dom = element;
    return dom;
  }

  /* If the passed DOM node isn't null,
     query the node to see if it's in the children. */
  if (element) {
    const selector = '[' + _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.JS_HOOK + '=' + behaviorDataAttr + ']';
    dom = element.querySelector(selector);
  }

  if (!dom) {
    const msg = behaviorDataAttr + ' behavior not found on passed DOM node!';
    throw new Error(msg);
  }

  return dom;
}

/**
 * @param {string} behaviorSelector - Behavior type used to find
 *   the element within the dom.
 * @param {HTMLElement} baseElement - Containing element
 *   for the behavior element.
 * @returns {NodeList} if it exists in the dom, null otherwise.
 */
function find(behaviorSelector, baseElement) {
  behaviorSelector = _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.JS_HOOK + '*=' + _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.BEHAVIOR_PREFIX + behaviorSelector;
  behaviorSelector = '[' + behaviorSelector + ']';

  return _findElements(behaviorSelector, baseElement);
}

/**
 * @param {HTMLElement} behaviorElement - Element in which to remove the event.
 * @param {string} event - Event type to remove from the element.
 * @param {Function} eventHandler - Callback for event.
 */
function remove(behaviorElement, event, eventHandler) {
  behaviorElement.removeEventListener(event, eventHandler);
}

// Expose public methods.



/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/data-hook.js":
/*!*******************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/data-hook.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": function() { return /* binding */ add; },
/* harmony export */   "contains": function() { return /* binding */ contains; }
/* harmony export */ });
/* harmony import */ var _standard_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./standard-type.js */ "./packages/cfpb-atomic-component/src/utilities/standard-type.js");


/**
 * @param {HTMLElement} element - DOM element.
 * @param {string} value - Value to check as existing as a JS data-* hook value.
 * @returns {boolean} True if the data-* hook value exists, false otherwise.
 */
function contains(element, value) {
  if (!element) {
    return false;
  }
  let values = element.getAttribute(_standard_type_js__WEBPACK_IMPORTED_MODULE_0__.JS_HOOK);
  // If JS data-* hook is not set return immediately.
  if (!values) {
    return false;
  }
  values = values.split(' ');

  return values.indexOf(value) > -1 ? true : false;
}

/**
 * @param {HTMLElement} element - DOM element.
 * @param {string} value - Value to add to the element's JS data-* hook.
 * @returns {string} The value that was added.
 * @throws {Error} If supplied value contains a space,
 *   meaning it would be two values, which is likely a typo.
 */
function add(element, value) {
  if (contains(element, value)) return value;

  if (value.indexOf(' ') !== -1) {
    const msg = _standard_type_js__WEBPACK_IMPORTED_MODULE_0__.JS_HOOK + ' values cannot contain spaces!';
    throw new Error(msg);
  }

  const values = element.getAttribute(_standard_type_js__WEBPACK_IMPORTED_MODULE_0__.JS_HOOK);
  if (values !== null) {
    value = values + ' ' + value;
  }
  element.setAttribute(_standard_type_js__WEBPACK_IMPORTED_MODULE_0__.JS_HOOK, value);

  return value;
}




/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/media-helpers.js":
/*!***********************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/media-helpers.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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
  if (regex.test(navigator.userAgent)) {
    return true;
  }
  return false;
}

// Expose public methods.



/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/standard-type.js":
/*!***********************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/standard-type.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BEHAVIOR_PREFIX": function() { return /* binding */ BEHAVIOR_PREFIX; },
/* harmony export */   "JS_HOOK": function() { return /* binding */ JS_HOOK; },
/* harmony export */   "STATE_PREFIX": function() { return /* binding */ STATE_PREFIX; }
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
 * @example
 * A component may flag that it has been initialized by setting
 * `data-js-hook="state_atomic_init"` after page load.
 * Which specifies that the init method of a atomic constructor
 * has been called, such as
 * `var globalSearch = new GlobalSearch( 'm-global-search' ).init()`.
 */
const STATE_PREFIX = 'state_';




/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/transition/AlphaTransition.js":
/*!************************************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/transition/AlphaTransition.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlphaTransition": function() { return /* binding */ AlphaTransition; }
/* harmony export */ });
/* harmony import */ var _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component */ "./packages/cfpb-atomic-component/src/index.js");


// Exported constants.
const CLASSES = {
  CSS_PROPERTY: 'opacity',
  BASE_CLASS: 'u-alpha-transition',
  ALPHA_100: 'u-alpha-100',
  ALPHA_0: 'u-alpha-0',
};

/**
 * AlphaTransition
 * @class
 * @classdesc Initializes new AlphaTransition behavior.
 * @param {HTMLElement} element - DOM element to apply opacity transition to.
 * @returns {AlphaTransition} An instance.
 */
function AlphaTransition(element) {
  const eventObserver = new _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.EventObserver();
  const _baseTransition = new _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.BaseTransition(element, CLASSES, this);

  /**
   * @param {Function} initialClass - The initial state for this transition.
   * @returns {AlphaTransition} An instance.
   */
  function init(initialClass) {
    _baseTransition.init(initialClass);

    return this;
  }

  /**
   * Fade to 100% by applying a utility alpha class.
   * @returns {AlphaTransition} An instance.
   */
  function fadeIn() {
    _baseTransition.applyClass(CLASSES.ALPHA_100);

    return this;
  }

  /**
   * Fade to nothing by applying a utility alpha class.
   * @returns {AlphaTransition} An instance.
   */
  function fadeOut() {
    _baseTransition.applyClass(CLASSES.ALPHA_0);

    return this;
  }

  // Attach public events.
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




/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/transition/BaseTransition.js":
/*!***********************************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/transition/BaseTransition.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": function() { return /* binding */ BaseTransition; }
/* harmony export */ });
/**
 * BaseTransition
 * @class
 * @classdesc Initializes new BaseTransition behavior.
 *   This shouldn't be used directly, but instead should be
 *   the base class used through composition by a specific transition.
 * @param {HTMLElement} element - DOM element to apply transition to.
 * @param {object} classes - The classes to apply to this transition.
 * @param {object} child - The child transition using this as a base.
 * @returns {BaseTransition} An instance.
 */
function BaseTransition(element, classes, child) {
  const _classes = classes;
  let _dom = element;
  if (!child) throw new Error('Child transition argument must be defined!');
  const _child = child;

  let _lastClass;
  let _transitionEndEvent;
  let _transitionCompleteBinded;

  let _isAnimated = false;
  let _isAnimating = false;
  let _isFlushed = false;

  // Make sure required attributes are passed in.
  if (
    typeof _classes.CSS_PROPERTY === 'undefined' ||
    typeof _classes.BASE_CLASS === 'undefined'
  ) {
    throw new Error(
      'Transitions require CSS_PROPERTY and BASE_CLASS ' +
        'to be passed into BaseTransition.'
    );
  }

  /**
   * Add an event listener to the transition, or call the transition
   * complete handler immediately if the transition is not supported.
   */
  function _addEventListener() {
    /*
      If transition is supported and the animation is animated,
      listen for transition end event, otherwise call the handler directly.
      Some browsers (e.g. IE9/OperaMini) do not support transitionend event.
      If "transition-duration: 0s" is set, transitionEnd event will not
      fire, so we need to call the handler straight away.
    */
    if (_transitionEndEvent && _isAnimated) {
      _dom.addEventListener(_transitionEndEvent, _transitionCompleteBinded);
      _child.dispatchEvent(BaseTransition.BEGIN_EVENT, {
        target: _child,
        type: BaseTransition.BEGIN_EVENT,
      });

      _dom.classList.add(BaseTransition.ANIMATING_CLASS);
      _isAnimating = true;
    } else {
      _child.dispatchEvent(BaseTransition.BEGIN_EVENT, {
        target: _child,
        type: BaseTransition.BEGIN_EVENT,
      });
      _transitionCompleteBinded();
    }
  }

  /**
   * Remove an event listener to the transition.
   */
  function _removeEventListener() {
    _dom.removeEventListener(_transitionEndEvent, _transitionCompleteBinded);
  }

  /**
   * Handle the end of a transition.
   * @param {TransitionEvent} evt - Transition event object.
   * @returns {boolean} True if transition was cleaned up,
   *   false if an outside transitioning property triggered this event handler.
   */
  function _transitionComplete(evt) {
    if (evt && evt.propertyName !== _classes.CSS_PROPERTY) {
      return false;
    }

    _removeEventListener();
    _dom.classList.remove(BaseTransition.ANIMATING_CLASS);
    _child.dispatchEvent(BaseTransition.END_EVENT, {
      target: _child,
      type: BaseTransition.END_EVENT,
    });
    _isAnimating = false;
    return true;
  }

  /**
   * Search for and remove initial BaseTransition classes that have
   * already been applied to this BaseTransition's target element.
   */
  function _flush() {
    let prop;
    for (prop in _classes) {
      if (
        {}.hasOwnProperty.call(_classes, prop) &&
        _classes[prop] !== _classes.BASE_CLASS &&
        _dom.classList.contains(_classes[prop])
      ) {
        _dom.classList.remove(_classes[prop]);
      }
    }
  }

  /**
   * Halt an in-progress animation and call the complete event immediately.
   */
  function halt() {
    if (!_isAnimating) {
      return;
    }
    _dom.style.webkitTransitionDuration = '0';
    _dom.style.mozTransitionDuration = '0';
    _dom.style.oTransitionDuration = '0';
    _dom.style.transitionDuration = '0';
    _dom.removeEventListener(_transitionEndEvent, _transitionCompleteBinded);
    _transitionCompleteBinded();
    _dom.style.webkitTransitionDuration = '';
    _dom.style.mozTransitionDuration = '';
    _dom.style.oTransitionDuration = '';
    _dom.style.transitionDuration = '';
  }

  /**
   * Remove all transition classes, if transition is initialized.
   */
  function remove() {
    halt();
    _flush();
    _dom.classList.remove(_classes.BASE_CLASS);
  }

  /**
   * Add a "transition-duration: 0s" utility CSS class.
   */
  function animateOn() {
    _dom.classList.remove(BaseTransition.NO_ANIMATION_CLASS);
    _isAnimated = true;
  }

  /**
   * Remove a "transition-duration: 0s" utility CSS class.
   */
  function animateOff() {
    _dom.classList.add(BaseTransition.NO_ANIMATION_CLASS);
    _isAnimated = false;
  }

  /**
   * @param {HTMLElement} elem - The element to check
   *   for support of transition end event.
   * @returns {string} The browser-prefixed transition end event.
   */
  function _getTransitionEndEvent(elem) {
    if (!elem) {
      const msg = 'Element does not have TransitionEnd event. It may be null!';
      throw new Error(msg);
    }

    let transition;
    const transitions = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend',
    };

    let transitionEvent;
    for (transitionEvent in transitions) {
      if (
        {}.hasOwnProperty.call(transitions, transitionEvent) &&
        typeof elem.style[transitionEvent] !== 'undefined'
      ) {
        transition = transitions[transitionEvent];
        break;
      }
    }
    return transition;
  }

  /**
   * Set the HTML element target of this transition.
   * @param {HTMLElement} targetElement - The target of the transition.
   */
  function setElement(targetElement) {
    // Clear the transition classes from the old element.
    remove();
    animateOn();

    _dom = targetElement;
    _dom.classList.add(_classes.BASE_CLASS);
    _transitionEndEvent = _getTransitionEndEvent(_dom);
  }

  /**
   * @param {Function} initialClass - The initial state for this transition.
   * @returns {BaseTransition} An instance.
   */
  function init(initialClass) {
    _isAnimated = !_dom.classList.contains(BaseTransition.NO_ANIMATION_CLASS);
    _transitionCompleteBinded = _transitionComplete.bind(this);
    setElement(_dom);
    if (!initialClass) {
      throw new Error(
        'Transition needs to be passed an initial CSS class on initialization!'
      );
    }
    _dom.classList.add(initialClass);

    return this;
  }

  /**
   * @param {string} className - A CSS class.
   * @returns {boolean} False if the class is already applied,
   *   otherwise true if the class was applied.
   */
  function applyClass(className) {
    if (!_isFlushed) {
      _flush();
      _isFlushed = true;
    }

    if (_dom.classList.contains(className)) {
      return false;
    }

    _removeEventListener();
    _dom.classList.remove(_lastClass);
    _lastClass = className;
    _addEventListener();
    _dom.classList.add(_lastClass);

    return true;
  }

  // Attach public events.
  this.animateOff = animateOff;
  this.animateOn = animateOn;
  this.applyClass = applyClass;
  this.halt = halt;
  this.init = init;
  this.isAnimated = () => _isAnimated;
  this.remove = remove;
  this.setElement = setElement;

  return this;
}

// Public static constants.
BaseTransition.BEGIN_EVENT = 'transitionbegin';
BaseTransition.END_EVENT = 'transitionend';
BaseTransition.NO_ANIMATION_CLASS = 'u-no-animation';
BaseTransition.ANIMATING_CLASS = 'u-is-animating';




/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/transition/MaxHeightTransition.js":
/*!****************************************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/transition/MaxHeightTransition.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaxHeightTransition": function() { return /* binding */ MaxHeightTransition; }
/* harmony export */ });
/* harmony import */ var _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component */ "./packages/cfpb-atomic-component/src/index.js");


// Exported constants.
const CLASSES = {
  CSS_PROPERTY: 'max-height',
  BASE_CLASS: 'u-max-height-transition',
  MH_DEFAULT: 'u-max-height-default',
  MH_SUMMARY: 'u-max-height-summary',
  MH_ZERO: 'u-max-height-zero',
};

/**
 * MoveTransition
 * @class
 * @classdesc Initializes new MoveTransition behavior.
 * @param {HTMLElement} element - DOM element to apply transition to.
 * @returns {MaxHeightTransition} An instance.
 */
function MaxHeightTransition(element) {
  const eventObserver = new _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.EventObserver();
  const _baseTransition = new _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.BaseTransition(element, CLASSES, this);
  let _previousHeight = 0;

  /**
   * Refresh the max height set on the element.
   * This may be useful if resizing the window and the content height changes.
   */
  function refresh() {
    const elmHeight = element.scrollHeight;
    const newHeight = elmHeight + 'px';
    element.style.maxHeight = newHeight;
  }

  /**
   * The whole page has loaded,
   * including all dependent resources such as stylesheets and images.
   */
  function _pageLoaded() {
    window.removeEventListener('load', _pageLoaded);
    refresh();
  }

  /**
   * @param {Function} initialClass - The initial state for this transition.
   * @returns {MaxHeightTransition} An instance.
   */
  function init(initialClass) {
    _baseTransition.init(initialClass);

    /*
    The scrollHeight of an element may be incorrect if the page hasn't
    fully loaded yet, so we listen for that to happen before calculating
    the element max-height.
    */
    window.addEventListener('load', _pageLoaded);

    /*
    The scrollHeight of an element may change on page load.
    */
    window.addEventListener('resize', () => {
      refresh();
    });

    return this;
  }

  /**
   * Reset the max-height to the default size.
   * @returns {MaxHeightTransition} An instance.
   */
  function maxHeightDefault() {
    refresh();
    _baseTransition.applyClass(CLASSES.MH_DEFAULT);

    if (!_previousHeight || element.scrollHeight > _previousHeight) {
      _previousHeight = element.scrollHeight;
    }

    return this;
  }

  /**
   * Collapses the max-height to just a summary height.
   * @returns {MaxHeightTransition} An instance.
   */
  function maxHeightSummary() {
    _baseTransition.applyClass(CLASSES.MH_SUMMARY);

    _previousHeight = element.scrollHeight;

    return this;
  }

  /**
   * Collapses thte max-height completely.
   * @returns {MaxHeightTransition} An instance.
   */
  function maxHeightZero() {
    _baseTransition.applyClass(CLASSES.MH_ZERO);

    _previousHeight = element.scrollHeight;

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
  this.addEventListener = eventObserver.addEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;
  this.removeEventListener = eventObserver.removeEventListener;

  this.animateOff = _baseTransition.animateOff;
  this.animateOn = _baseTransition.animateOn;
  this.halt = _baseTransition.halt;
  this.isAnimated = _baseTransition.isAnimated;
  this.setElement = _baseTransition.setElement;
  this.refresh = refresh;
  this.remove = remove;

  this.init = init;
  this.maxHeightDefault = maxHeightDefault;
  this.maxHeightSummary = maxHeightSummary;
  this.maxHeightZero = maxHeightZero;

  return this;
}

// Public static properties.
MaxHeightTransition.CLASSES = CLASSES;




/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/transition/MoveTransition.js":
/*!***********************************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/transition/MoveTransition.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoveTransition": function() { return /* binding */ MoveTransition; }
/* harmony export */ });
/* harmony import */ var _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component */ "./packages/cfpb-atomic-component/src/index.js");


// Exported constants.
const CLASSES = {
  CSS_PROPERTY: 'transform',
  BASE_CLASS: 'u-move-transition',
  MOVE_TO_ORIGIN: 'u-move-to-origin',
  MOVE_LEFT: 'u-move-left',
  MOVE_LEFT_2X: 'u-move-left-2x',
  MOVE_LEFT_3X: 'u-move-left-3x',
  MOVE_RIGHT: 'u-move-right',
  MOVE_UP: 'u-move-up',
};

/**
 * MoveTransition
 * @class
 * @classdesc Initializes new MoveTransition behavior.
 * @param {HTMLElement} element - DOM element to apply move transition to.
 * @returns {MoveTransition} An instance.
 */
function MoveTransition(element) {
  const eventObserver = new _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.EventObserver();
  const _baseTransition = new _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.BaseTransition(element, CLASSES, this);

  /**
   * @param {Function} initialClass - The initial state for this transition.
   * @returns {MoveTransition} An instance.
   */
  function init(initialClass) {
    _baseTransition.init(initialClass);

    return this;
  }

  /**
   * Move to the element's original coordinates.
   * @returns {MoveTransition} An instance.
   */
  function moveToOrigin() {
    _baseTransition.applyClass(CLASSES.MOVE_TO_ORIGIN);

    return this;
  }

  /**
   * Move to the left by applying a utility move class.
   * @param {number} count - How many times to move left
   *   as a multiplication of the element's width.
   * @returns {MoveTransition} An instance.
   */
  function _moveLeft(count) {
    count = count || 1;
    const moveClasses = [
      CLASSES.MOVE_LEFT,
      CLASSES.MOVE_LEFT_2X,
      CLASSES.MOVE_LEFT_3X,
    ];

    _baseTransition.applyClass(moveClasses[count - 1]);

    return this;
  }

  /**
   * Move to the right by applying a utility move class.
   * @returns {MoveTransition} An instance.
   */
  function moveRight() {
    _baseTransition.applyClass(CLASSES.MOVE_RIGHT);

    return this;
  }

  /**
   * Move up by applying a utility move class.
   * @returns {MoveTransition} An instance.
   */
  function moveUp() {
    _baseTransition.applyClass(CLASSES.MOVE_UP);

    return this;
  }

  // Attach public events.
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
  this.moveLeft = () => _moveLeft(1);
  this.moveLeft2 = () => _moveLeft(2);
  this.moveLeft3 = () => _moveLeft(3);
  this.moveRight = moveRight;
  this.moveToOrigin = moveToOrigin;
  this.moveUp = moveUp;

  return this;
}

// Public static properties.
MoveTransition.CLASSES = CLASSES;




/***/ }),

/***/ "./packages/cfpb-atomic-component/src/utilities/type-checkers.js":
/*!***********************************************************************!*\
  !*** ./packages/cfpb-atomic-component/src/utilities/type-checkers.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArray": function() { return /* binding */ isArray; },
/* harmony export */   "isDate": function() { return /* binding */ isDate; },
/* harmony export */   "isDefined": function() { return /* binding */ isDefined; },
/* harmony export */   "isEmpty": function() { return /* binding */ isEmpty; },
/* harmony export */   "isFunction": function() { return /* binding */ isFunction; },
/* harmony export */   "isNumber": function() { return /* binding */ isNumber; },
/* harmony export */   "isObject": function() { return /* binding */ isObject; },
/* harmony export */   "isString": function() { return /* binding */ isString; },
/* harmony export */   "isUndefined": function() { return /* binding */ isUndefined; }
/* harmony export */ });
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
 * @description
 * Determines if a reference is undefined.
 * @param {*} value - Reference to check.
 * @returns {boolean} True if `value` is undefined.
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

/**
 * @name isDefined
 * @kind function
 * @description
 * Determines if a reference is defined.
 * @param {*} value - Reference to check.
 * @returns {boolean} True if `value` is defined.
 */
function isDefined(value) {
  return typeof value !== 'undefined';
}

/**
 * @name isObject
 * @kind function
 * @description
 * Determines if a reference is an `Object`.
 * Unlike `typeof` in JavaScript, `null`s are not
 * considered to be objects. Note that JavaScript arrays are objects.
 * @param {*} value - Reference to check.
 * @returns {boolean} True if `value` is an `Object` but not `null`.
 */
function isObject(value) {
  // http://jsperf.com/isobject4
  return value !== null && typeof value === 'object';
}

/**
 * @name isString
 * @kind function
 * @description
 * Determines if a reference is a `String`.
 * @param {*} value - Reference to check.
 * @returns {boolean} True if `value` is a `String`.
 */
function isString(value) {
  return _toString.call(value) === '[object String]';
}

/**
 * @name isNumber
 * @kind function
 * @description
 * Determines if a reference is a `Number`.
 *
 * This includes the "special" numbers `NaN`, `+Infinity` and `-Infinity`.
 *
 * If you wish to exclude these then you can use the native
 * [`isFinite'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/
 *                      Reference/Global_Objects/isFinite)
 * method.
 * @param {*} value - Reference to check.
 * @returns {boolean} True if `value` is a `Number`.
 */
function isNumber(value) {
  return _toString.call(value) === '[object Number]';
}

/**
 * @name isDate
 * @kind function
 * @description
 * Determines if a value is a date.
 * @param {*} value - Reference to check.
 * @returns {boolean} True if `value` is a `Date`.
 */
function isDate(value) {
  return _toString.call(value) === '[object Date]';
}

/**
 * @name isArray
 * @kind function
 * @description
 * Determines if a reference is an `Array`.
 * @param {*} value - Reference to check.
 * @returns {boolean} True if `value` is an `Array`.
 */
const isArray =
  Array.isArray ||
  function isArray(value) {
    return _toString.call(value) === '[object Array]';
  };

/**
 * @name isFunction
 * @kind function
 * @description
 * Determines if a reference is a `Function`.
 * @param {*} value - Reference to check.
 * @returns {boolean} True if `value` is a `Function`.
 */
function isFunction(value) {
  return _toString.call(value) === '[object Function]';
}

// TODO Fix complexity issue
/* eslint-disable complexity, no-mixed-operators */
/**
 * @name isEmpty
 * @kind function
 * @description
 * Determines if a reference is empty.
 * @param {*} value - Reference to check.
 * @returns {boolean} True if `value` is empty.
 */
function isEmpty(value) {
  return (
    isUndefined(value) ||
    value === null ||
    (isString(value) && value.length <= 0) ||
    /^\s*$/.test(value)
  );
}
/* eslint-enable complexity, no-mixed-operators */

// Expose public methods.



/***/ }),

/***/ "./packages/cfpb-core/src/breakpoint-state.js":
/*!****************************************************!*\
  !*** ./packages/cfpb-core/src/breakpoint-state.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DESKTOP": function() { return /* binding */ DESKTOP; },
/* harmony export */   "MOBILE": function() { return /* binding */ MOBILE; },
/* harmony export */   "TABLET": function() { return /* binding */ TABLET; },
/* harmony export */   "getBreakpointState": function() { return /* binding */ getBreakpointState; },
/* harmony export */   "viewportIsIn": function() { return /* binding */ viewportIsIn; }
/* harmony export */ });
/* harmony import */ var _cfpb_cfpb_core_src_vars_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-core/src/vars-breakpoints.js */ "./packages/cfpb-core/src/vars-breakpoints.js");
/* ==========================================================================
   Get Breakpoint State
   ========================================================================== */



/**
 * @returns {number} The base font size set on the body element.
 */
function _getBodyBaseFontSize() {
  let fontSize = getComputedStyle(document.body).fontSize;
  fontSize = fontSize === '' ? -1 : fontSize;
  return parseFloat(fontSize);
}

/**
 * @param {object} breakpointRange - Object containing breakpoint constants.
 *   For example, for `bpXS` the value `{ min: 0, max: 600 }` would be passed.
 * @param {number} width - Current window width.
 * @returns {boolean} Whether the passed width is within a breakpoint range.
 */
function _inBreakpointRange(breakpointRange, width) {
  let breakpointRangeMin = breakpointRange.min;
  let breakpointRangeMax = breakpointRange.max;

  // Whether the user has set a custom size for the font in their browser.
  const useEmsConversation =
    _getBodyBaseFontSize() > 0 && _getBodyBaseFontSize() !== 16;
  if (useEmsConversation) {
    /* 16 = base font size without adjustments.
       The CSS converts breakpoints to ems, which then change the width of the
       pixel width of the breakpoint. In JavaScript, the breakpoints are defined
       in pixels, so we first convert them to ems using the 16px base font size
       and then multiply them by any adjustments set by customizations of the
       font size in the user's browser. */
    breakpointRangeMin = (breakpointRangeMin / 16) * _getBodyBaseFontSize();
    breakpointRangeMax = (breakpointRangeMax / 16) * _getBodyBaseFontSize();
  }

  const min = breakpointRangeMin || 0;
  const max = breakpointRangeMax || Number.POSITIVE_INFINITY;

  return min <= width && width <= max;
}

/**
 * @param {number} width - Current window width.
 * @returns {object} An object literal with boolean
 *   bpXS, bpSM, bpMED, bpLG, bpXL properties.
 */
function getBreakpointState(width) {
  const breakpointState = {};
  width = width || window.innerWidth;

  let rangeKey;
  // eslint-disable-next-line guard-for-in
  for (rangeKey in _cfpb_cfpb_core_src_vars_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    breakpointState[rangeKey] = _inBreakpointRange(
      _cfpb_cfpb_core_src_vars_breakpoints_js__WEBPACK_IMPORTED_MODULE_0__["default"][rangeKey],
      width
    );
  }

  return breakpointState;
}

// Constants for breakpoint groupings.
const MOBILE = 'mobile';
const TABLET = 'tablet';
const DESKTOP = 'desktop';

/**
 * Checks whether the current breakpoint is in a particular breakpoint group.
 * @param {string} breakpointGroup - Breakpoint group names.
 * @returns {boolean} True if in the breakpoint group, otherwise false.
 */
function viewportIsIn(breakpointGroup) {
  let response = false;
  const currentBreakpoint = getBreakpointState();

  if (
    (breakpointGroup === MOBILE && currentBreakpoint.bpXS) ||
    (breakpointGroup === TABLET && currentBreakpoint.bpSM) ||
    (breakpointGroup === DESKTOP &&
      (currentBreakpoint.bpMED ||
        currentBreakpoint.bpLG ||
        currentBreakpoint.bpXL))
  ) {
    response = true;
  }

  return response;
}

// Expose public methods.



/***/ }),

/***/ "./packages/cfpb-core/src/vars-breakpoints.js":
/*!****************************************************!*\
  !*** ./packages/cfpb-core/src/vars-breakpoints.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* ==========================================================================
   Design System
   Breakpoint JavaScript variables.
   All values are pixel based.

   NOTE: If any of the values in this file are adjusted,
         they need to be adjusted in vars-breakpoints.less as well.
   ========================================================================== */

/* harmony default export */ __webpack_exports__["default"] = ({
  bpXS: {
    min: 0,
    max: 600,
  },
  bpSM: {
    min: 601,
    max: 900,
  },
  bpMED: {
    min: 901,
    max: 1020,
  },
  bpLG: {
    min: 1021,
    max: 1200,
  },
  bpXL: {
    min: 1201,
  },
});


/***/ }),

/***/ "./packages/cfpb-expandables/src/Expandable.js":
/*!*****************************************************!*\
  !*** ./packages/cfpb-expandables/src/Expandable.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Expandable": function() { return /* binding */ Expandable; }
/* harmony export */ });
/* harmony import */ var _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component */ "./packages/cfpb-atomic-component/src/index.js");
/* ==========================================================================
   Expandable Organism
   ========================================================================== */



const BASE_CLASS = 'o-expandable';

/**
 * Expandable
 * @class
 * @classdesc Initializes a new Expandable molecule.
 * @param {HTMLElement} element - The DOM element within which to search
 *   for the molecule.
 * @returns {Expandable} An instance.
 */
function Expandable(element) {
  // Internal vars.
  const _dom = (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.checkDom)(element, BASE_CLASS);
  let _targetDom;
  let _contentDom;
  let _labelDom;

  // Animation vars.
  let _transition;
  let _flyout;

  /**
   * Set up and create the multiselect.
   * @returns {Expandable} An instance.
   */
  function init() {
    if (!(0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.setInitFlag)(_dom)) {
      return this;
    }

    _targetDom = _dom.querySelector(`.${BASE_CLASS}_header`);
    _contentDom = _dom.querySelector(`.${BASE_CLASS}_content`);
    _labelDom = _dom.querySelector(`.${BASE_CLASS}_label`);

    const isExpanded = _dom.classList.contains(`${BASE_CLASS}__onload-open`);

    // Add behavior hooks.
    (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.add)(_dom, 'behavior_flyout-menu');
    (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.add)(_targetDom, 'behavior_flyout-menu_trigger');
    (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.add)(_contentDom, 'behavior_flyout-menu_content');

    // If it's expanded we don't set an initial height,
    // as it will be calculated internally.
    const initialClass = isExpanded
      ? _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.MaxHeightTransition.CLASSES.MH_DEFAULT
      : _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.MaxHeightTransition.CLASSES.MH_ZERO;
    _transition = new _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.MaxHeightTransition(_contentDom).init(initialClass);

    // Create root menu.
    _flyout = new _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.FlyoutMenu(_dom);

    _flyout.setTransition(
      _transition,
      _transition.maxHeightZero,
      _transition.maxHeightDefault
    );

    _flyout.init(isExpanded);

    // Add events.
    _flyout.addEventListener('expandbegin', () => {
      _contentDom.classList.remove('u-hidden');
      this.dispatchEvent('expandbegin', { target: this });
    });
    _flyout.addEventListener('collapseend', () => {
      _contentDom.classList.add('u-hidden');
    });

    return this;
  }

  /**
   * @returns {string} The expandable label text.
   */
  function getLabelText() {
    return _labelDom.textContent.trim();
  }

  // Attach public events.
  this.init = init;
  this.expand = () => _flyout.expand();
  this.collapse = () => _flyout.collapse();
  this.isExpanded = () => _flyout.isExpanded();
  this.refresh = () => _flyout.getTransition().refresh();
  this.getLabelText = getLabelText;

  const eventObserver = new _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.EventObserver();
  this.addEventListener = eventObserver.addEventListener;
  this.removeEventListener = eventObserver.removeEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;

  return this;
}

Expandable.BASE_CLASS = BASE_CLASS;
Expandable.init = (scope) =>
  (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.instantiateAll)(`.${Expandable.BASE_CLASS}`, Expandable, scope);




/***/ }),

/***/ "./packages/cfpb-expandables/src/ExpandableGroup.js":
/*!**********************************************************!*\
  !*** ./packages/cfpb-expandables/src/ExpandableGroup.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpandableGroup": function() { return /* binding */ ExpandableGroup; }
/* harmony export */ });
/* harmony import */ var _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component */ "./packages/cfpb-atomic-component/src/index.js");
/* harmony import */ var _cfpb_cfpb_expandables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cfpb/cfpb-expandables */ "./packages/cfpb-expandables/src/index.js");
/* ==========================================================================
   Expandable Organism
   ========================================================================== */




const BASE_CLASS = 'o-expandable-group';

/**
 * ExpandableGroup
 * @class
 * @classdesc Initializes a new Expandable molecule.
 * @param {HTMLElement} element - The DOM element within which to search
 *   for the molecule.
 * @returns {ExpandableGroup} An instance.
 */
function ExpandableGroup(element) {
  // Internal vars.
  const _dom = (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.checkDom)(element, BASE_CLASS);
  const _isAccordion = _dom.classList.contains(`${BASE_CLASS}__accordion`);
  let _expandables;
  let _lastExpanded;

  /**
   * @param {object} evt - The event object.
   */
  function _handleExpandBegin(evt) {
    const target = evt.target;
    if (_lastExpanded && _lastExpanded !== target) {
      _lastExpanded.collapse();
    }
    _lastExpanded = target;
  }

  /**
   * Set up and create the multiselect.
   * @param {Array} expandables - List of expandables inside this group.
   * @returns {ExpandableGroup} An instance.
   */
  function init(expandables) {
    if (!(0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.setInitFlag)(_dom)) {
      return this;
    }

    if (_isAccordion) {
      _expandables = expandables;

      _expandables.forEach((expandable) => {
        expandable.addEventListener('expandbegin', _handleExpandBegin);
      });
    }

    return this;
  }

  // Attach public events.
  this.init = init;

  return this;
}

ExpandableGroup.BASE_CLASS = BASE_CLASS;
ExpandableGroup.init = (scope) => {
  const base = scope || document;
  const expandableGroupsDom = base.querySelectorAll(`.${BASE_CLASS}`);
  expandableGroupsDom.forEach((expandableGroupDom) => {
    const expandables = (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.instantiateAll)(
      `.${_cfpb_cfpb_expandables__WEBPACK_IMPORTED_MODULE_1__.Expandable.BASE_CLASS}`,
      _cfpb_cfpb_expandables__WEBPACK_IMPORTED_MODULE_1__.Expandable,
      expandableGroupDom
    );
    const expandableGroup = new ExpandableGroup(expandableGroupDom);
    expandableGroup.init(expandables);
  });
};




/***/ }),

/***/ "./packages/cfpb-expandables/src/Summary.js":
/*!**************************************************!*\
  !*** ./packages/cfpb-expandables/src/Summary.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Summary": function() { return /* binding */ Summary; }
/* harmony export */ });
/* harmony import */ var _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component */ "./packages/cfpb-atomic-component/src/index.js");
/* harmony import */ var _cfpb_core_src_breakpoint_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cfpb-core/src/breakpoint-state.js */ "./packages/cfpb-core/src/breakpoint-state.js");
/* eslint-disable no-use-before-define */



const BASE_CLASS = 'o-summary';

/**
 * Summary
 * @class
 * @classdesc Initializes a new Summary organism.
 * @param {HTMLElement} element - The DOM element within which to search
 *   for the organism.
 * @returns {Summary} An instance.
 */
function Summary(element) {
  const _dom = (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.checkDom)(element, BASE_CLASS);
  const _hasMobileModifier = _dom.classList.contains(`${BASE_CLASS}__mobile`);
  const _contentDom = _dom.querySelector(`.${BASE_CLASS}_content`);
  const _btnDom = _dom.querySelector(`.${BASE_CLASS}_btn`);
  let _transition;
  let _flyout;

  // Whether this instance's behaviors are suspended or not.
  let _suspended;

  /**
   * @returns {Summary} An instance.
   */
  function init() {
    if (!(0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.setInitFlag)(_dom)) {
      return this;
    }

    _suspended = !_shouldSuspend();

    // Add FlyoutMenu behavior data-js-hooks.
    (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.add)(_dom, 'behavior_flyout-menu');
    (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.add)(_contentDom, 'behavior_flyout-menu_content');
    (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.add)(_btnDom, 'behavior_flyout-menu_trigger');

    // Don't initialize the Summary till the page has loaded, so we can have
    // an accurate idea of its height.
    window.addEventListener('load', _pageLoadHandler);

    return this;
  }

  /**
   * The page (content + CSS) has loaded.
   */
  function _pageLoadHandler() {
    window.removeEventListener('load', _pageLoadHandler);

    _flyout = new _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.FlyoutMenu(_dom, false);
    _transition = new _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.MaxHeightTransition(_contentDom);
    _transition.init(
      _suspended
        ? _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.MaxHeightTransition.CLASSES.MH_SUMMARY
        : _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.MaxHeightTransition.CLASSES.MH_DEFAULT
    );
    _flyout.setTransition(
      _transition,
      _transition.maxHeightSummary,
      _transition.maxHeightDefault
    );
    _flyout.addEventListener('triggerclick', _triggerClickHandler);
    _flyout.init();

    _resizeHandler();

    window.addEventListener('resize', _resizeHandler);
    // Pipe window resize handler into orientation change on supported devices.
    if ('onorientationchange' in window) {
      window.addEventListener('orientationchange', _resizeHandler);
    }

    _dom.addEventListener('focusin', _focusInHandler);

    /* When we click inside the content area we may be changing the size,
       such as when a video player expands on being clicked.
       So, let's refresh the transition to recalculate the max-height,
       just in case. */
    _contentDom.addEventListener('click', _contentClicked);
  }

  /**
   * Handling tabbing into the content area that is hidden.
   * If the focus goes onto a focusable element within the content area,
   * we'll act like the summary expansion button was clicked.
   * @param {Event} evt - The focus event.
   */
  function _focusInHandler(evt) {
    if (!_suspended && evt.target !== _btnDom) {
      _btnDom.click();
      _dom.removeEventListener('focusin', _focusInHandler);
    }
  }

  /**
   * Handler for when the content area is clicked.
   * Refresh the transition to recalculate the max-height.
   * @param {MouseEvent} evt - the mouse event object.
   */
  function _contentClicked(evt) {
    /* We don't need to refresh if a link was clicked as we'll be navigating
       to another page. */
    if (evt.target.tagName !== 'A' && _flyout.isExpanded()) {
      _transition.refresh();
    }
  }

  /**
   * Handle resizing of the window,
   * suspends or resumes the mobile or desktop behaviors.
   */
  function _resizeHandler() {
    if (_shouldSuspend()) {
      _suspend();
    } else {
      _resume();
    }
  }

  /**
   * @returns {boolean} True if this should be suspended, false otherwise.
   */
  function _shouldSuspend() {
    /* Bail out of initializatiion if the height of the summary's content
       is less than our summary height of 5.5ems
       16 * 5.5 = 88
       See https://github.com/cfpb/design-system/blob/72623270013f2ad08dbe92b5b709ed2b434ee41e/packages/cfpb-atomic-component/src/utilities/transition/transition.less#L84
    */
    return (
      (_hasMobileModifier && !(0,_cfpb_core_src_breakpoint_state_js__WEBPACK_IMPORTED_MODULE_1__.viewportIsIn)(_cfpb_core_src_breakpoint_state_js__WEBPACK_IMPORTED_MODULE_1__.MOBILE)) ||
      _contentDom.scrollHeight <= 88
    );
  }

  /**
   * Handle click of flyout.
   */
  function _triggerClickHandler() {
    _flyout.addEventListener('expandend', _expandEndHandler);
  }

  /**
   * After the summary opens, remove the "read more" button.
   */
  function _expandEndHandler() {
    _hideButton();
    window.removeEventListener('resize', _resizeHandler);
    window.removeEventListener('orientationchange', _resizeHandler);
    _flyout.removeEventListener('expandend', _expandEndHandler);
    _flyout.suspend();
    _transition.remove();
  }

  /**
   *
   */
  function _showButton() {
    _btnDom.classList.remove('u-hidden');
  }

  /**
   *
   */
  function _hideButton() {
    _btnDom.classList.add('u-hidden');
  }

  /**
   * Add events necessary for the desktop menu behaviors.
   * @returns {boolean} Whether it has successfully been resumed or not.
   */
  function _resume() {
    if (_suspended) {
      _flyout.collapse();
      _transition.animateOn();
      _showButton();

      _suspended = false;
    }

    return !_suspended;
  }

  /**
   * Remove events necessary for the desktop menu behaviors.
   * @returns {boolean} Whether it has successfully been suspended or not.
   */
  function _suspend() {
    if (!_suspended) {
      _transition.animateOff();
      _flyout.expand();
      _hideButton();

      _suspended = true;
    }

    return _suspended;
  }

  // Attach public events.
  const eventObserver = new _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.EventObserver();
  this.addEventListener = eventObserver.addEventListener;
  this.removeEventListener = eventObserver.removeEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;

  this.init = init;

  return this;
}

Summary.BASE_CLASS = BASE_CLASS;
Summary.init = (scope) => (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.instantiateAll)(`.${BASE_CLASS}`, Summary, scope);




/***/ }),

/***/ "./packages/cfpb-expandables/src/SummaryMinimal.js":
/*!*********************************************************!*\
  !*** ./packages/cfpb-expandables/src/SummaryMinimal.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryMinimal": function() { return /* binding */ SummaryMinimal; }
/* harmony export */ });
/* harmony import */ var _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component */ "./packages/cfpb-atomic-component/src/index.js");
/* eslint-disable no-use-before-define */


const BASE_CLASS = 'o-summary-minimal';

/**
 * SummaryMinimal
 * @class
 * @classdesc Initializes a new SummaryMinimal organism.
 * @param {HTMLElement} element - The DOM element within which to search
 *   for the organism.
 * @returns {SummaryMinimal} An instance.
 */
function SummaryMinimal(element) {
  const _dom = (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.checkDom)(element, BASE_CLASS);
  const _contentDom = _dom.querySelector(`.${BASE_CLASS}_content`);
  const _btnDom = _dom.querySelector(`.${BASE_CLASS}_btn`);
  let _transition;
  let _flyout;

  /**
   * @returns {SummaryMinimal} An instance.
   */
  function init() {
    if (!(0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.setInitFlag)(_dom)) {
      return this;
    }

    // Add FlyoutMenu behavior data-js-hooks.
    (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.add)(_dom, 'behavior_flyout-menu');
    (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.add)(_contentDom, 'behavior_flyout-menu_content');
    (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.add)(_btnDom, 'behavior_flyout-menu_trigger');

    // Don't initialize the SummaryMinimal till the page has loaded,
    // so we can have an accurate idea of its height.
    window.addEventListener('load', _pageLoadHandler);

    return this;
  }

  /**
   * The page (content + CSS) has loaded.
   */
  function _pageLoadHandler() {
    window.removeEventListener('load', _pageLoadHandler);

    _flyout = new _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.FlyoutMenu(_dom, false);
    _transition = new _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.MaxHeightTransition(_contentDom);
    _transition.init(_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.MaxHeightTransition.CLASSES.MH_SUMMARY);
    _flyout.setTransition(
      _transition,
      _transition.maxHeightSummary,
      _transition.maxHeightDefault
    );
    _flyout.init();

    _dom.addEventListener('focusin', _focusInHandler);

    /* When we click inside the content area we may be changing the size,
       such as when a video player expands on being clicked.
       So, let's refresh the transition to recalculate the max-height,
       just in case. */
    _contentDom.addEventListener('click', _contentClicked);

    _flyout.collapse();
    _transition.animateOn();
  }

  /**
   * Handling tabbing into the content area that is hidden.
   * If the focus goes onto a focusable element within the content area,
   * we'll act like the summary expansion button was clicked.
   * @param {Event} evt - The focus event.
   */
  function _focusInHandler(evt) {
    if (evt.target !== _btnDom) {
      _btnDom.click();
      _dom.removeEventListener('focusin', _focusInHandler);
    }
  }

  /**
   * Handler for when the content area is clicked.
   * Refresh the transition to recalculate the max-height.
   * @param {MouseEvent} evt - the mouse event object.
   */
  function _contentClicked(evt) {
    /* We don't need to refresh if a link was clicked as we'll be navigating
       to another page. */
    if (evt.target.tagName !== 'A' && _flyout.isExpanded()) {
      _transition.refresh();
    }
  }

  // Attach public events.
  const eventObserver = new _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.EventObserver();
  this.addEventListener = eventObserver.addEventListener;
  this.removeEventListener = eventObserver.removeEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;

  this.init = init;

  return this;
}

SummaryMinimal.BASE_CLASS = BASE_CLASS;
SummaryMinimal.init = (scope) =>
  (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.instantiateAll)(`.${BASE_CLASS}`, SummaryMinimal, scope);




/***/ }),

/***/ "./packages/cfpb-expandables/src/index.js":
/*!************************************************!*\
  !*** ./packages/cfpb-expandables/src/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Expandable": function() { return /* reexport safe */ _Expandable_js__WEBPACK_IMPORTED_MODULE_0__.Expandable; },
/* harmony export */   "ExpandableGroup": function() { return /* reexport safe */ _ExpandableGroup_js__WEBPACK_IMPORTED_MODULE_1__.ExpandableGroup; },
/* harmony export */   "Summary": function() { return /* reexport safe */ _Summary_js__WEBPACK_IMPORTED_MODULE_2__.Summary; },
/* harmony export */   "SummaryMinimal": function() { return /* reexport safe */ _SummaryMinimal_js__WEBPACK_IMPORTED_MODULE_3__.SummaryMinimal; }
/* harmony export */ });
/* harmony import */ var _Expandable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expandable.js */ "./packages/cfpb-expandables/src/Expandable.js");
/* harmony import */ var _ExpandableGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpandableGroup.js */ "./packages/cfpb-expandables/src/ExpandableGroup.js");
/* harmony import */ var _Summary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Summary.js */ "./packages/cfpb-expandables/src/Summary.js");
/* harmony import */ var _SummaryMinimal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SummaryMinimal.js */ "./packages/cfpb-expandables/src/SummaryMinimal.js");
/* ==========================================================================
   Design System
   Expandables
   ========================================================================== */







/***/ }),

/***/ "./packages/cfpb-forms/src/index.js":
/*!******************************************!*\
  !*** ./packages/cfpb-forms/src/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Multiselect": function() { return /* reexport safe */ _organisms_Multiselect_js__WEBPACK_IMPORTED_MODULE_0__.Multiselect; }
/* harmony export */ });
/* harmony import */ var _organisms_Multiselect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organisms/Multiselect.js */ "./packages/cfpb-forms/src/organisms/Multiselect.js");
/* ==========================================================================
   Design System
   Forms
   ========================================================================== */




/***/ }),

/***/ "./packages/cfpb-forms/src/organisms/Multiselect.js":
/*!**********************************************************!*\
  !*** ./packages/cfpb-forms/src/organisms/Multiselect.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Multiselect": function() { return /* binding */ Multiselect; }
/* harmony export */ });
/* harmony import */ var _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component */ "./packages/cfpb-atomic-component/src/index.js");
/* harmony import */ var _MultiselectModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiselectModel.js */ "./packages/cfpb-forms/src/organisms/MultiselectModel.js");
/* harmony import */ var _MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiselectUtils.js */ "./packages/cfpb-forms/src/organisms/MultiselectUtils.js");
/* harmony import */ var _cfpb_cfpb_icons_src_icons_error_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cfpb/cfpb-icons/src/icons/error.svg */ "./packages/cfpb-icons/src/icons/error.svg");





const closeIcon = _cfpb_cfpb_icons_src_icons_error_svg__WEBPACK_IMPORTED_MODULE_3__;

const BASE_CLASS = 'o-multiselect';
const CHECKBOX_INPUT_CLASS = 'a-checkbox';
const TEXT_INPUT_CLASS = 'a-text-input';

// Constants for direction.
const DIR_PREV = 'prev';
const DIR_NEXT = 'next';

// Constants for key binding.
const KEY_RETURN = 'Enter';
const KEY_SPACE = ' ';
const KEY_ESCAPE = 'Escape';
const KEY_UP = 'ArrowUp';
const KEY_DOWN = 'ArrowDown';
const KEY_TAB = 'Tab';

/**
 * Multiselect
 * @class
 * @classdesc Initializes a new Multiselect molecule.
 * @param {HTMLElement} element - The DOM element within which to search
 *   for the molecule.
 * @returns {Multiselect} An instance.
 */
function Multiselect(element) {
  /* TODO: As the multiselect is developed further
     explore whether it should use an updated
     class name or data-* attribute in the
     markup so that it doesn't apply globally by default. */
  element.classList.add(BASE_CLASS);

  // Internal vars.
  let _dom = (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.checkDom)(element, BASE_CLASS);
  let _isBlurSkipped = false;
  let _name;
  let _placeholder;
  let _model;
  let _options;

  // Markup elems, convert this to templating engine in the future.
  let _containerDom;
  let _selectionsDom;
  let _headerDom;
  let _searchDom;
  let _fieldsetDom;
  let _optionsDom;
  const _optionItemDoms = [];
  let _instance;

  /**
   * Set the filtered matched state.
   */
  function _filterMatches() {
    _optionsDom.classList.remove('u-no-results');
    _optionsDom.classList.add('u-filtered');

    let filteredIndices = _model.getLastFilterIndices();
    for (let i = 0, len = filteredIndices.length; i < len; i++) {
      _optionItemDoms[filteredIndices[i]].classList.remove('u-filter-match');
    }

    filteredIndices = _model.getFilterIndices();
    for (let j = 0, len = filteredIndices.length; j < len; j++) {
      _optionItemDoms[filteredIndices[j]].classList.add('u-filter-match');
    }
  }

  /**
   * Resets the filtered option list.
   */
  function _resetFilter() {
    _optionsDom.classList.remove('u-filtered', 'u-no-results');

    for (let i = 0, len = _optionsDom.children.length; i < len; i++) {
      _optionsDom.children[i].classList.remove('u-filter-match');
    }

    _model.clearFilter();
  }

  /**
   * Updates the list of options to show the user there
   * are no matching results.
   */
  function _filterNoMatches() {
    _optionsDom.classList.add('u-no-results');
    _optionsDom.classList.remove('u-filtered');
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
  function _filterList(filterIndices) {
    if (filterIndices.length > 0) {
      _filterMatches();
      return true;
    }

    _filterNoMatches();
    return false;
  }

  /**
   * Evaluates the list of options based on the user's query in the
   * search input.
   * @param {string} value - Text the user has entered in the search query.
   */
  function _evaluate(value) {
    _resetFilter();
    _model.resetIndex();
    const matchedIndices = _model.filterIndices(value);
    _filterList(matchedIndices);
  }

  /**
   * Expand the multiselect drop down.
   * @returns {Multiselect} An instance.
   */
  function expand() {
    _containerDom.classList.add('u-active');
    _fieldsetDom.classList.remove('u-invisible');
    _fieldsetDom.setAttribute('aria-hidden', false);
    _instance.dispatchEvent('expandbegin', { target: _instance });

    return _instance;
  }

  /**
   * Collapse the multiselect drop down.
   * @returns {Multiselect} An instance.
   */
  function collapse() {
    _containerDom.classList.remove('u-active');
    _fieldsetDom.classList.add('u-invisible');
    _fieldsetDom.setAttribute('aria-hidden', true);
    _model.resetIndex();
    _instance.dispatchEvent('collapsebegin', { target: _instance });

    return _instance;
  }

  /**
   * Highlights an option in the list.
   * @param {string} direction
   *   Direction to highlight compared to the current focus.
   */
  function _highlight(direction) {
    if (direction === DIR_NEXT) {
      _model.setIndex(_model.getIndex() + 1);
    } else if (direction === DIR_PREV) {
      _model.setIndex(_model.getIndex() - 1);
    }

    const index = _model.getIndex();
    if (index > -1) {
      let filteredIndex = index;
      const filterIndices = _model.getFilterIndices();
      if (filterIndices.length > 0) {
        filteredIndex = filterIndices[index];
      }
      const option = _model.getOption(filteredIndex);
      const value = option.value;
      const item = _optionsDom.querySelector('[data-option="' + value + '"]');
      const input = item.querySelector('input');

      _isBlurSkipped = true;
      input.focus();
    } else {
      _isBlurSkipped = false;
      _searchDom.focus();
    }
  }

  /**
   * Resets the search input and filtering.
   */
  function _resetSearch() {
    _searchDom.value = '';
    _resetFilter();
  }

  /**
   * This passes the click of the selected item button down to the label it
   * contains. This is only required for browsers (IE11) that prevent the
   * click of a selected item from cascading from the button down to the label
   * it contains.
   * @param {MouseEvent} event - The mouse click event object.
   */
  function _selectionClickHandler(event) {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
      event.preventDefault();
      target.removeEventListener('click', _selectionClickHandler);
      target.querySelector('label').click();
    }
  }

  /**
   * @param {KeyboardEvent} event - The key down event object.
   */
  function _selectionKeyDownHandler(event) {
    if (event.key === KEY_SPACE || event.key === KEY_RETURN) {
      const label = event.target.querySelector('label');
      const checkbox = _optionsDom.querySelector(
        '#' + label.getAttribute('for')
      );
      checkbox.click();
    }
  }

  /**
   * Create a unique ID based on a select's option HTML element.
   * @param {HTMLElement} option - A option HTML element.
   * @returns {string} A hopefully unique ID.
   */
  function _getOptionId(option) {
    /* Replace any character that is not a word character with a dash.
       https://regex101.com/r/ShHmRw/1
    */
    return (
      _name + '-' + option.value.trim().replace(/[^\w]/g, '-').toLowerCase()
    );
  }

  /**
   * @param {HTMLElement} selectionsDom - The UL item to inject list item into.
   * @param {HTMLElement} option - The OPTION item to extract content from.
   */
  function _createSelectedItem(selectionsDom, option) {
    const optionId = _getOptionId(option);
    const selectionsItemDom = (0,_MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_2__.create)('li', null, {
      'data-option': option.value,
    });

    const selectionsItemLabelDom = (0,_MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_2__.create)('button', selectionsItemDom, {
      type: 'button',
      innerHTML:
        '<label for=' + optionId + '>' + option.text + closeIcon + '</label>',
    });

    selectionsDom.appendChild(selectionsItemDom);

    selectionsItemLabelDom.addEventListener('click', _selectionClickHandler);
    selectionsItemLabelDom.addEventListener(
      'keydown',
      _selectionKeyDownHandler
    );
  }

  /**
   * Tracks a user's selections and updates the list in the dom.
   * @param {number} optionIndex - The index position of the chosen option.
   */
  function _updateSelections(optionIndex) {
    const option =
      _model.getOption(optionIndex) || _model.getOption(_model.getIndex());

    if (option) {
      if (option.checked) {
        if (_optionsDom.classList.contains('u-max-selections')) {
          _optionsDom.classList.remove('u-max-selections');
        }

        const dataOptionSel = '[data-option="' + option.value + '"]';
        const _selectionsItemDom = _selectionsDom.querySelector(dataOptionSel);

        if (typeof _selectionsItemDom !== 'undefined') {
          _selectionsDom.removeChild(_selectionsItemDom);
        }
      } else {
        _createSelectedItem(_selectionsDom, option);
      }
      _model.toggleOption(optionIndex);

      if (_model.isAtMaxSelections()) {
        _optionsDom.classList.add('u-max-selections');
      }

      _instance.dispatchEvent('selectionsupdated', { target: _instance });
    }

    _model.resetIndex();
    _isBlurSkipped = false;

    if (_fieldsetDom.getAttribute('aria-hidden') === 'false') {
      _searchDom.focus();
    }
  }

  /**
   * Handles the functions to trigger on the checkbox change.
   * @param {Event} event - The checkbox change event.
   */
  function _changeHandler(event) {
    _updateSelections(Number(event.target.getAttribute('data-index')));
    _resetSearch();
  }

  /**
   * Binds events to the search input, option list, and checkboxes.
   */
  function _bindEvents() {
    _headerDom.addEventListener('mousemove', function (event) {
      const target = event.target;
      // Check if we're over the down-arrow on the right side of the input.
      if (event.offsetX > target.offsetWidth - 35) {
        target.style.cursor = 'pointer';
      } else {
        target.style.cursor = 'auto';
      }
    });

    _headerDom.addEventListener('mouseup', function (event) {
      const target = event.target;

      /* Check if we're over the down-arrow on the right side of the input.
         Also check if the fieldset is open.
         35 = width of the arrow on the right of the search input.
         140 = the max-height value set in multiselect.less for the fieldset.
      */
      if (
        event.offsetX > target.offsetWidth - 35 &&
        _fieldsetDom.offsetHeight === 140
      ) {
        _searchDom.blur();
      }
    });

    _searchDom.addEventListener('input', function () {
      _evaluate(this.value);
    });

    _searchDom.addEventListener('focus', function () {
      if (_fieldsetDom.getAttribute('aria-hidden') === 'true') {
        expand();
      }
    });

    _searchDom.addEventListener('blur', function () {
      if (
        !_isBlurSkipped &&
        _fieldsetDom.getAttribute('aria-hidden') === 'false'
      ) {
        collapse();
      }
    });

    _searchDom.addEventListener('keydown', function (event) {
      const key = event.key;

      if (
        _fieldsetDom.getAttribute('aria-hidden') === 'true' &&
        key !== KEY_TAB
      ) {
        expand();
      }

      if (key === KEY_RETURN) {
        event.preventDefault();
        _highlight(DIR_NEXT);
      } else if (key === KEY_ESCAPE) {
        _resetSearch();
        collapse();
      } else if (key === KEY_DOWN) {
        _highlight(DIR_NEXT);
      } else if (
        key === KEY_TAB &&
        !event.shiftKey &&
        _fieldsetDom.getAttribute('aria-hidden') === 'false'
      ) {
        collapse();
      }
    });

    _optionsDom.addEventListener('mousedown', function () {
      _isBlurSkipped = true;
    });

    _optionsDom.addEventListener('keydown', function (event) {
      const key = event.key;
      const target = event.target;
      const checked = target.checked;

      if (key === KEY_RETURN) {
        event.preventDefault();

        /* Programmatically checking a checkbox does not fire a change event
        so we need to manually create an event and dispatch it from the input.
        */
        target.checked = !checked;
        const evt = document.createEvent('HTMLEvents');
        evt.initEvent('change', false, true);
        target.dispatchEvent(evt);
      } else if (key === KEY_ESCAPE) {
        _searchDom.focus();
        collapse();
      } else if (key === KEY_UP) {
        _highlight(DIR_PREV);
      } else if (key === KEY_DOWN) {
        _highlight(DIR_NEXT);
      }
    });

    _fieldsetDom.addEventListener('mousedown', function (event) {
      if (event.target.tagName === 'LABEL') {
        _isBlurSkipped = true;
      }
    });

    const inputs = _optionsDom.querySelectorAll('input');
    for (let i = 0, len = inputs.length; i < len; i++) {
      inputs[i].addEventListener('change', _changeHandler);
    }

    // Add event listeners to any selections that are present at page load.
    const labelButtons = _selectionsDom.querySelectorAll('button');
    for (let j = 0, len = labelButtons.length; j < len; j++) {
      labelButtons[j].addEventListener('click', _selectionClickHandler);
      labelButtons[j].addEventListener('keydown', _selectionKeyDownHandler);
    }
  }

  /**
   * Populates and injects the markup for the custom multiselect.
   * @returns {HTMLElement} Newly created <div> element to hold the multiselect.
   */
  function _populateMarkup() {
    // Add a container for our markup
    _containerDom = document.createElement('div');
    _containerDom.className = BASE_CLASS;

    // Create all our markup but wait to manipulate the DOM just once
    _selectionsDom = (0,_MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_2__.create)('ul', null, {
      className: BASE_CLASS + '_choices',
    });

    _headerDom = (0,_MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_2__.create)('header', _containerDom, {
      className: BASE_CLASS + '_header',
    });

    _searchDom = (0,_MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_2__.create)('input', _headerDom, {
      className: BASE_CLASS + '_search ' + TEXT_INPUT_CLASS,
      type: 'text',
      placeholder: _placeholder || 'Select up to five',
      id: _dom.id,
      autocomplete: 'off',
    });

    _fieldsetDom = (0,_MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_2__.create)('fieldset', _containerDom, {
      className: BASE_CLASS + '_fieldset u-invisible',
      'aria-hidden': 'true',
    });

    let optionsClasses = BASE_CLASS + '_options';
    if (_model.isAtMaxSelections()) {
      optionsClasses += ' u-max-selections';
    }

    _optionsDom = (0,_MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_2__.create)('ul', _fieldsetDom, {
      className: optionsClasses,
    });

    let option;
    let optionId;
    let isChecked;
    for (let i = 0, len = _options.length; i < len; i++) {
      option = _options[i];
      optionId = _getOptionId(option);
      isChecked = _model.getOption(i).checked;
      const optionsItemDom = (0,_MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_2__.create)('li', _optionsDom, {
        'data-option': option.value,
        'data-cy': 'multiselect-option',
        class: 'm-form-field m-form-field__checkbox',
      });

      (0,_MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_2__.create)('input', optionsItemDom, {
        id: optionId,
        // Type must come before value or IE fails
        type: 'checkbox',
        value: option.value,
        name: _name,
        class: CHECKBOX_INPUT_CLASS + ' ' + BASE_CLASS + '_checkbox',
        checked: isChecked,
        'data-index': i,
      });

      (0,_MultiselectUtils_js__WEBPACK_IMPORTED_MODULE_2__.create)('label', optionsItemDom, {
        for: optionId,
        textContent: option.text,
        className: BASE_CLASS + '_label a-label',
      });

      _optionItemDoms.push(optionsItemDom);

      if (isChecked) {
        _createSelectedItem(_selectionsDom, option);
      }
    }

    // Write our new markup to the DOM.
    _containerDom.insertBefore(_selectionsDom, _headerDom);
    _dom.parentNode.insertBefore(_containerDom, _dom);
    _containerDom.appendChild(_dom);

    return _containerDom;
  }

  /**
   * Set up and create the multiselect.
   * @returns {Multiselect} An instance.
   */
  function init() {
    if (!(0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.setInitFlag)(_dom)) {
      return this;
    }

    if ((0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.isMobileUserAgent)()) {
      return this;
    }

    _instance = this;
    _name = _dom.name || _dom.id;
    _placeholder = _dom.getAttribute('placeholder');
    _options = _dom.options || [];

    if (_options.length > 0) {
      _model = new _MultiselectModel_js__WEBPACK_IMPORTED_MODULE_1__["default"](_options, _name).init();
      const newDom = _populateMarkup();

      /* Removes <select> element,
         and re-assign DOM reference. */
      _dom.parentNode.removeChild(_dom);
      _dom = newDom;

      /* We need to set init flag again since we've created a new <div>
         to replace the <select> element. */
      (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.setInitFlag)(_dom);

      _bindEvents();
    }

    return this;
  }

  // Attach public events.
  this.init = init;
  this.expand = expand;
  this.collapse = collapse;

  const eventObserver = new _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.EventObserver();
  this.addEventListener = eventObserver.addEventListener;
  this.removeEventListener = eventObserver.removeEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;

  return this;
}

Multiselect.BASE_CLASS = BASE_CLASS;
Multiselect.init = () => (0,_cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_0__.instantiateAll)(`.${BASE_CLASS}`, Multiselect);




/***/ }),

/***/ "./packages/cfpb-forms/src/organisms/MultiselectModel.js":
/*!***************************************************************!*\
  !*** ./packages/cfpb-forms/src/organisms/MultiselectModel.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Undefined return value for void methods.
let UNDEFINED;

// How many options may be checked.
const MAX_SELECTIONS = 5;

/**
 * Escapes a string.
 * @param {string} str - The string to escape.
 * @returns {string} The escaped string.
 */
function stringEscape(str) {
  return str.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
}

/**
 * Tests whether a string matches another.
 * @param   {string}  x - The control string.
 * @param   {string}  y - The comparison string.
 * @returns {boolean}   True if `x` and `y` match, false otherwise.
 */
function stringMatch(x, y) {
  return RegExp(stringEscape(y.trim()), 'i').test(x);
}

/**
 * @class
 * MultiselectModel
 * @param {HTMLOptionsCollection} options -
 *   Set of options from a <select> element.
 * @param {string} name - a unique name for this multiselect.
 */
function MultiselectModel(options, name) {
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
   * @param {HTMLElement} item - An option HTML node.
   * @returns {string} A (hopefully) unique ID.
   *   If it's not unique, we have a duplicate option value.
   */
  function _getOptionId(item) {
    return _name + '-' + item.value.trim().replace(/\s+/g, '-').toLowerCase();
  }

  /**
   * @returns {boolean}
   *   True if the maximum number of options are checked, false otherwise.
   */
  function isAtMaxSelections() {
    return _selectedIndices.length === MAX_SELECTIONS;
  }

  /**
   * Cleans up a list of options for saving to memory.
   * @param {HTMLOptionsCollection} list - The options from a select element.
   * @returns {Array} An array of option objects.
   */
  function _formatOptions(list) {
    let item;
    const cleaned = [];

    let isChecked = false;
    for (let i = 0, len = list.length; i < len; i++) {
      item = list[i];
      isChecked = isAtMaxSelections() ? false : item.defaultSelected;
      cleaned.push({
        id: _getOptionId(item),
        value: item.value,
        text: item.text,
        checked: isChecked,
      });

      // If an option is initially checked, we need to record it.
      if (isChecked) {
        _selectedIndices.push(i);
      }
    }

    return cleaned;
  }

  /**
   * @returns {MultiselectModel} An instance.
   */
  function init() {
    _optionsData = _formatOptions(_options);

    return this;
  }

  /**
   * Toggle checked value of an option.
   * @param {number} index - The index position of the option in the list.
   * @returns {boolean} A value of true is checked and false is unchecked.
   */
  function toggleOption(index) {
    _optionsData[index].checked = !_optionsData[index].checked;

    if (
      _selectedIndices.length < MAX_SELECTIONS &&
      _optionsData[index].checked
    ) {
      _selectedIndices.push(index);
      _selectedIndices.sort();

      return true;
    }
    // We're over the max selections, reverse the check of the option.
    _optionsData[index].checked = false;
    _selectedIndices = _selectedIndices.filter(function (currIndex) {
      return currIndex !== index;
    });

    return false;
  }

  /**
   * Utility function for Array.reduce() used in searchIndices.
   * @param {Array} aggregate - The reducer's accumulator.
   * @param {object} item - Each item in the collection.
   * @param {number} index - The index of item in the collection.
   * @param {string} value - The value of item in the collection.
   * @returns {Array} The reducer's accumulator.
   */
  function _searchAggregator(aggregate, item, index, value) {
    if (stringMatch(item.text, value)) {
      aggregate.push(index);
    }
    return aggregate;
  }

  /**
   * Search for a query string in the options text and return the indices of
   * the matching positions in the options array.
   * @param {string} query - A query string.
   * @returns {Array} List of indices of the matching entries from the options.
   */
  function filterIndices(query) {
    // Convert query to a string if its not.
    if (Object.prototype.toString.call(query) !== '[object String]') {
      query = '';
    }
    _lastFilterIndices = _filterIndices;
    if (_optionsData.length > 0) {
      _filterIndices = _optionsData.reduce(function (acc, item, index) {
        return _searchAggregator(acc, item, index, query);
      }, []);
    }
    // Reset index position.
    _index = -1;

    return _filterIndices;
  }

  /**
   * Retrieve an option object from the options list.
   * @param {number} index - The index position in the options list.
   * @returns {object} The option object with text, value, and checked value.
   */
  function getOption(index) {
    return _optionsData[index];
  }

  /**
   * Set the index of the collection (represents the highlighted option).
   * @param {number} value - The index to set.
   */
  function setIndex(value) {
    const filterCount = _filterIndices.length;
    const count = filterCount === 0 ? _optionsData.length : filterCount;
    if (value < 0) {
      _index = -1;
    } else if (value >= count) {
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

  this.init = init;

  // This is used to check an item in the collection.
  this.toggleOption = toggleOption;
  this.getSelectedIndices = function () {
    return _selectedIndices;
  };
  this.isAtMaxSelections = isAtMaxSelections;

  // This is used to search the items in the collection.
  this.filterIndices = filterIndices;
  this.clearFilter = function () {
    _filterIndices = _lastFilterIndices = [];
    return UNDEFINED;
  };
  this.getFilterIndices = function () {
    return _filterIndices;
  };
  this.getLastFilterIndices = function () {
    return _lastFilterIndices;
  };

  // These are used to highlight items in the collection.
  this.getIndex = getIndex;
  this.setIndex = setIndex;
  this.resetIndex = function () {
    _index = -1;
    return _index;
  };

  // This is used to retrieve items from the collection.
  this.getOption = getOption;

  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (MultiselectModel);


/***/ }),

/***/ "./packages/cfpb-forms/src/organisms/MultiselectUtils.js":
/*!***************************************************************!*\
  !*** ./packages/cfpb-forms/src/organisms/MultiselectUtils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": function() { return /* binding */ create; }
/* harmony export */ });
/**
 * Shortcut for creating new dom elements.
 * @param {string} tag - The html elem to create.
 * @param {HTMLElement} parentNode - The parent node to attach to.
 * @param {object} options - The options for building the elem.
 * @returns {HTMLElement} The created elem.
 */
function create(tag, parentNode, options) {
  const elem = document.createElement(tag);

  Object.keys(options).forEach((key) => {
    const val = options[key];
    if (key in elem) {
      elem[key] = val;
    } else {
      elem.setAttribute(key, val);
    }
  });

  if (parentNode) parentNode.appendChild(elem);
  return elem;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./docs/assets/js/main.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle-details.js */ "./docs/assets/js/toggle-details.js");
/* harmony import */ var anchor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! anchor-js */ "./node_modules/anchor-js/anchor.js");
/* harmony import */ var _cfpb_cfpb_expandables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cfpb/cfpb-expandables */ "./packages/cfpb-expandables/src/index.js");
/* harmony import */ var _cfpb_cfpb_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cfpb/cfpb-forms */ "./packages/cfpb-forms/src/index.js");
/* harmony import */ var _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cfpb/cfpb-atomic-component */ "./packages/cfpb-atomic-component/src/index.js");
/* harmony import */ var _Tabs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tabs.js */ "./docs/assets/js/Tabs.js");
/* harmony import */ var _redirect_banner_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redirect-banner.js */ "./docs/assets/js/redirect-banner.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar.js */ "./docs/assets/js/sidebar.js");








_redirect_banner_js__WEBPACK_IMPORTED_MODULE_6__["default"].init();
_sidebar_js__WEBPACK_IMPORTED_MODULE_7__["default"].init();
var anchors = new anchor_js__WEBPACK_IMPORTED_MODULE_1__();
// Add anchors to all headings (except page title headings)
anchors.add('h2:not(.title), h3, h4, h5');
// Ensure there are no anchors in inconvenient places
anchors.remove("\n  .a-live_code h2,\n  .a-live_code h3,\n  .a-live_code h4,\n  .a-live_code h5,\n  .o-expandable_label,\n  #search-results h3\n");
_cfpb_cfpb_expandables__WEBPACK_IMPORTED_MODULE_2__.Summary.init();
_cfpb_cfpb_expandables__WEBPACK_IMPORTED_MODULE_2__.SummaryMinimal.init();
_cfpb_cfpb_expandables__WEBPACK_IMPORTED_MODULE_2__.ExpandableGroup.init();
_cfpb_cfpb_expandables__WEBPACK_IMPORTED_MODULE_2__.Expandable.init();
_cfpb_cfpb_forms__WEBPACK_IMPORTED_MODULE_3__.Multiselect.init();

// Exporting these classes to the window so that the transition-patterns.md
// page can use them in its code snippets.
window.AlphaTransition = _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_4__.AlphaTransition;
window.MoveTransition = _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_4__.MoveTransition;
window.MaxHeightTransition = _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_4__.MaxHeightTransition;
window.FlyoutMenu = _cfpb_cfpb_atomic_component__WEBPACK_IMPORTED_MODULE_4__.FlyoutMenu;

// Tabs show under the show/hide details button on a pattern.
var tabsContainerDom = document.querySelectorAll(".".concat(_Tabs_js__WEBPACK_IMPORTED_MODULE_5__["default"].BASE_CLASS));
if (tabsContainerDom.length > 0) {
  var tabsInst;
  for (var i = 0, len = tabsContainerDom.length; i < len; i++) {
    tabsInst = new _Tabs_js__WEBPACK_IMPORTED_MODULE_5__["default"](tabsContainerDom[i]);
    tabsInst.init();
  }
}
var toggleAllBtn = document.querySelector('#toggle-details');
var toggleBtns = document.querySelectorAll('.a-toggle_code button');

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
if (toggleAllBtn) {
  toggleAllBtn.addEventListener('click', handleToggleAllClick, false);
  if (window.localStorage.getItem('toggleState') === 'hide') {
    (0,_toggle_details_js__WEBPACK_IMPORTED_MODULE_0__.toggleAllDetails)(toggleAllBtn);
  }
}
for (var _i = 0, _len = toggleBtns.length; _i < _len; _i++) {
  toggleBtns[_i].addEventListener('click', handleToggleClick, false);
}
}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***********************************!*\
  !*** ./docs/assets/css/main.less ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

}();
/******/ })()
;
//# sourceMappingURL=main.js.map