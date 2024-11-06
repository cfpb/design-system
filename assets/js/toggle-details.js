const HIDDEN_CLASS = 'u-hidden';
const TOGGLE_ATTRIBUTE = 'data-toggle-details';
const STATE_SHOW = 'show';
const STATE_HIDE = 'hide';

let isShowingAllDetails = false;

/**
 * Toggle details for a single variation.
 * @param {HTMLElement} button - Button element that controls the toggling.
 * @param {HTMLElement} document -
 *   Defaults to window.document but overridable for react DOM references.
 * @param {string} [state] -
 *   Optional param to specify whether to force showing or hiding of the details
 *   Value should be either 'show' or 'hide'.
 */
function toggleDetails(button, document = window.document, state) {
  const container = button.parentNode;
  const codeEl = document.querySelector(button.getAttribute('href'));
  const hideCodeBtn = container.querySelector(`[${TOGGLE_ATTRIBUTE}="hide"]`);
  const showCodeBtn = container.querySelector(`[${TOGGLE_ATTRIBUTE}="show"]`);

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
    toggleBtn.querySelector('.a-btn span').innerHTML = 'Show all details';
    toggleBtn.setAttribute('title', 'Show all details');
    window.localStorage.setItem('toggleState', 'show');
  } else {
    toggleBtn.querySelector('.a-btn span').innerHTML = 'Hide all details';
    toggleBtn.setAttribute('title', 'Hide all details');
    window.localStorage.setItem('toggleState', 'hide');
  }

  const codeEls = document.querySelectorAll('.a-toggle__code');
  let buttonElm;
  for (let i = 0, len = codeEls.length; i < len; i++) {
    buttonElm = codeEls[i].querySelector('button:not(.u-hidden)');
    toggleDetails(
      buttonElm,
      window.document,
      isShowingAllDetails ? STATE_HIDE : STATE_SHOW,
    );
  }

  isShowingAllDetails = !isShowingAllDetails;
}

export { TOGGLE_ATTRIBUTE, toggleDetails, toggleAllDetails };
