/* ==========================================================================
   AtomicComponent

   Base Atomic Component

   Contains code copied from the following with major modifications :

   - Backbone.js ( http://backbonejs.org/docs/backbone.html ).
   - Marionette ( http://marionettejs.com ).

   ========================================================================== */

const Delegate = require( 'ftdomdelegate' ).Delegate;
import EventObserver from '../mixins/EventObserver.js';
import { assign } from '../utilities/object-assign';
import typeCheckers from '../utilities/type-checkers';

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
  assign( this, attributes );
  this.processModifiers();
  this.ensureElement();
  this.setCachedElements();
  this.initializers.push( this.initialize );
  this.initializers.forEach( function( func ) {
    if ( typeCheckers.isFunction( func ) ) {
      func.apply( this, arguments );
    }
  }, this );
  this.dispatchEvent( 'component:initialized' );
}

// Public instance Methods and properties.
assign( AtomicComponent.prototype, new EventObserver(), {

  tagName: 'div',

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
        assign( this, modifier );
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
      const attrs = assign( {}, this.attributes );
      attrs.id = this.id || this.u_id;
      if ( this.className ) attrs.class = this.className;
      this.setElement( document.createElement( this.tagName ) );
      this.setElementAttributes( attrs );
    } else {
      this.setElement( this.element );
    }
    this.element.setAttribute( 'data-bound', true );
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
    const ui = assign( {}, this.ui );
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
        if ( typeCheckers.isFunction( this[method] ) ) {
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
    this.element.removeAttribute( 'data-bound' );

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
AtomicComponent.extend = function( attributes ) {

  /**
   * Function used as constructor in order to establish inheritance chain.
   * @returns {AtomicComponent} An instance.
   */
  function child() {
    this._super = AtomicComponent.prototype;
    return AtomicComponent.apply( this, arguments );
  }

  child.prototype = Object.create( AtomicComponent.prototype );
  assign( child.prototype, attributes );
  assign( child, AtomicComponent );

  if ( attributes.hasOwnProperty( 'ui' ) &&
       attributes.ui.hasOwnProperty( 'base' ) ) {
    child.selector = attributes.ui.base;
  }

  child.constants = {};

  return child;
};


/**
 * Function used to instantiate all instances of the particular
 * atomic component on a page.
 *
 * @param {HTMLNode} scope - Where to search for components within.
 * @returns {Array} List of AtomicComponent instances.
 */
AtomicComponent.init = function( scope ) {
  const base = scope || document;
  const elements = base.querySelectorAll( this.selector );
  const components = [];

  let element;
  for ( let i = 0, len = elements.length; i < len; i++ ) {
    element = elements[i];
    if ( element.hasAttribute( 'data-bound' ) === false ) {
      components.push( new this( element ) );
    }
  }

  return components;
};

export default AtomicComponent;
