/******/ (() => { // webpackBootstrap
/************************************************************************/
/*!****************************************!*\
  !*** ./docs/assets/js/interstitial.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/**
 * @param {String} name - The key of the URL query parameter to retrieve
 * @returns {String} - Value of URL query parameter
 */
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

var page = getUrlParameter('page');

if (page && window.PAGES_ALLOWED[page]) {
  // Skip the interstitial page if they've seen it within the past two weeks
  if (localStorage.getItem('cms-directions-last-seen')) {
    var now = new Date();
    var lastSeen = Date.parse(localStorage.getItem('cms-directions-last-seen'));
    var daysSinceDirectionsSeen = (now - lastSeen) / 1000 / 60 / 60 / 24;

    if (daysSinceDirectionsSeen <= 14) {
      window.location.replace(window.PAGES_ALLOWED[page]);
    }
  }

  var pageNames = document.querySelectorAll('[data-interstitial-page-name]');

  for (var i = 0; i < pageNames.length; i++) {
    pageNames[i].textContent = "\"".concat(page, "\"");
  }

  document.querySelector('[data-interstitial-notification]').classList.add('m-notification__visible');
  document.querySelector('[data-interstitial-next-step]').classList.remove('u-hidden');
  document.querySelector('[data-interstitial-redirect-button]').setAttribute('href', window.PAGES_ALLOWED[page]);
  localStorage.setItem('cms-directions-last-seen', new Date());
}
/******/ })()
;
//# sourceMappingURL=interstitial.js.map