/* ==========================================================================
   Events

   Mixin to add basic event callback functionality.
   ========================================================================== */

const Events = {

  /**
   * Function used to add events to an event stack.
   *
   * @param {string} eventName -
   *   The name of the event to add to the event stack.
   * @param {Function} callback - Function to call when event is triggered.
   * @returns {Object} An instance.
   */
  on: function( eventName, callback ) {
    const events = this.events = this.events || {};
    events[eventName] = this.events[eventName] || [];
    events[eventName].push( callback );

    return this;
  },

  /**
   * Function used to remove events from an event stack.
   *
   * @param {string} eventName -
   *   The name of the event to remove from the event stack.
   * @returns {Object} An instance.
   */
  off: function( eventName ) {
    if ( this.events && this.events[eventName] ) delete this.events[eventName];

    return this;
  },

  /**
   * Function used to trigger events that exist on the event stack.
   *
   * @param {string} eventName - The name of the event to trigger.
   * @returns {Object} An instance.
   */
  trigger: function( eventName ) {
    const events = this.events || {};
    if ( events.hasOwnProperty( eventName ) === false ) {
      return this;
    }
    for ( let i = 0, len = events[eventName].length; i < len; i++ ) {
      this.events[eventName][i].apply( this, arguments );
    }

    return this;
  }
};

module.exports = Events;
