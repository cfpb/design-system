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
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
  );
  if (regex.test(navigator.userAgent)) {
    return true;
  }
  return false;
}

// Expose public methods.
export { isMobileUserAgent };
