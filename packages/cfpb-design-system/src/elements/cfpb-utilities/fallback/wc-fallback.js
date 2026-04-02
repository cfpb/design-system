/**
 * This utility IIFE function can be added to a page with web components
 * to support the display of any fallback content in `<noscript>` tags
 * that would otherwise not appear if JavaScript was enabled, but
 * the Web Component APIs were not supported.
 */
(function () {
  /**
   * Within a custom element (web component),
   * convert any `<noscript>` tags into `<div class="fallback">`,
   * so that the fallback content appears in environments where
   * JavaScript is enabled, but web component APIs are not supported.
   * @param {HTMLElement} el - A custom element.
   */
  function applyFallback(el) {
    if (!el) return;

    const tag = el.tagName.toLowerCase();
    const isDefined = !!customElements.get(tag);
    const noscript = el.querySelector('noscript');

    // Only act if the element is NOT defined and there is a <noscript>
    if (!isDefined && noscript) {
      // Create a <div> with the fallback content.
      const fallbackDiv = document.createElement('div');
      fallbackDiv.className = 'fallback';
      fallbackDiv.innerHTML = noscript.innerHTML;

      // Insert fallback at the top.
      el.insertBefore(fallbackDiv, el.firstChild);

      // Hide the original <noscript> to avoid duplicates.
      noscript.style.display = 'none';

      /*
    // Hide other non-fallback children (optional; wc-fallback.css handles this).
    Array.from(el.children).forEach((child) => {
      if (child !== fallbackDiv && child !== noscript) {
        child.style.display = 'none';
      }
    });
    */
    }
  }

  /**
   * Query the document for custom elements that have the "fallback" attribute,
   * e.g. <my-custom-btn fallback>
   * @param {string} selector - The CSS selector to search for on the page.
   */
  function applyAllFallbacks(selector = '[fallback]') {
    document.querySelectorAll(selector).forEach((el) => applyFallback(el));
  }

  // Check for browser support of the Web Component APIs.
  const supportsWC =
    'customElements' in window &&
    'attachShadow' in Element.prototype &&
    'content' in document.createElement('template');

  // Only run the fallback utility script globally if web components are NOT supported.
  if (!supportsWC) {
    document.addEventListener('DOMContentLoaded', applyAllFallbacks);
  }
})();
