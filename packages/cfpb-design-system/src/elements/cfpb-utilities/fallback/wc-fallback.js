(function () {
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
    // Hide other non-fallback children (optional; fallback.css handles this).
    Array.from(el.children).forEach((child) => {
      if (child !== fallbackDiv && child !== noscript) {
        child.style.display = 'none';
      }
    });
    */
    }
  }

  function applyAllFallbacks(selector = '[fallback]') {
    document.querySelectorAll(selector).forEach((el) => applyFallback(el));
  }

  // Web Component support detection.
  const supportsWC =
    'customElements' in window &&
    'attachShadow' in Element.prototype &&
    'content' in document.createElement('template');

  // Only apply fallback globally if web components are NOT supported.
  if (!supportsWC) {
    document.addEventListener('DOMContentLoaded', applyAllFallbacks);
  }
})();
