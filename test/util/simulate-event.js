/**
 * @param {string} eventType - The type of event.
 * @param {HTMLElement} target - Target of the event.
 * @param {object} eventOption - Options to add to the event.
 * @returns {HTMLElement} The target of the event.
 */
function simulateEvent(eventType, target, eventOption) {
  const event = document.createEvent('Event');
  if (eventOption && eventOption.keyCode) {
    event.keyCode = eventOption.keyCode;
  }
  event.initEvent(eventType, true, true);
  return target.dispatchEvent(event);
}

export default simulateEvent;
