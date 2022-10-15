/**
 * EventObserver
 *
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
   *
   * @param {string} event - The event name to listen for.
   * @param {Function} callback - The function called when the event has fired.
   * @returns {object} The instance this EventObserver instance is decorating.
   */
  function addEventListener(event, callback) {
    if (Object.prototype.hasOwnProperty(_events, event)) {
      _events[event].push(callback);
    } else {
      _events[event] = [callback];
    }

    return this;
  }

  /**
   * Remove an added event listener.
   * Must match a call made to addEventListener.
   *
   * @param {string} event - The event name to remove.
   * @param {Function} callback - The function attached to the event.
   * @returns {object} The instance this EventObserver instance is decorating.
   */
  function removeEventListener(event, callback) {
    if (!Object.prototype.hasOwnProperty(_events, event)) {
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
   *
   * @param {string} event - The type of event to broadcast.
   * @param {object} options - The event object to pass to the event handler.
   * @returns {object} The instance this EventObserver instance is decorating.
   */
  function dispatchEvent(event, options) {
    if (!Object.prototype.hasOwnProperty(_events, event)) {
      return this;
    }

    options = options || {};

    const evts = _events[event];
    for (let i = 0, len = evts.length; i < len; i++) {
      evts[i].call(this, options);
    }

    return this;
  }

  /**
   * @returns {object} Map of registered events.
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

export default EventObserver;
