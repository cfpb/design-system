/* ==========================================================================
   Expandable Organism
   ========================================================================== */

import AtomicComponent from '@cfpb/cfpb-atomic-component/src/components/AtomicComponent.js';
import EventObserver from '@cfpb/cfpb-atomic-component/src/mixins/EventObserver.js';
import ExpandableTransition from './ExpandableTransition.js';
import { closest } from '@cfpb/cfpb-atomic-component/src/utilities/dom-traverse.js';

const eventObserver = new EventObserver();

const Expandable = AtomicComponent.extend( {

  ui: {
    base:    '.o-expandable',
    target:  '.o-expandable_target',
    content: '.o-expandable_content',
    header:  '.o-expandable_header',
    label:   '.o-expandable_label'
  },

  classes: {
    targetExpanded:  'o-expandable_target__expanded',
    targetCollapsed: 'o-expandable_target__collapsed',
    group:           'o-expandable-group',
    groupAccordion:  'o-expandable-group__accordion'
  },

  events: {
    'click .o-expandable_target': 'expandableClickHandler'
  },

  transition:       null,
  isAccordionGroup: false,
  activeAccordion:  false,

  initialize:             initialize,
  expandableClickHandler: expandableClickHandler,
  toggleTargetState:      toggleTargetState,
  getLabelText:           getLabelText
} );

/**
 * Initialize a new expandable.
 */
function initialize() {
  const transition = new ExpandableTransition(
    this.ui.content
  );
  this.transition = transition.init();
  this.transition.addEventListener( 'expandBegin', expandBeginHandler.bind( this ) );
  this.transition.addEventListener( 'collapseEnd', collapseEndHandler.bind( this ) );

  if ( this.ui.content.classList.contains( ExpandableTransition.CLASSES.EXPANDED ) ) {
    this.ui.target.classList.add( this.classes.targetExpanded );
  } else {
    this.ui.target.classList.add( this.classes.targetCollapsed );
    this.ui.content.classList.add( 'u-hidden' );
  }

  const expandableGroup = closest( this.ui.target, '.' + this.classes.group );

  this.isAccordionGroup = expandableGroup !== null &&
    expandableGroup.classList.contains( this.classes.groupAccordion );

  if ( this.isAccordionGroup ) {
    eventObserver.addEventListener(
      'accordionActivated',
      _accordionActivatedHandler.bind( this )
    );
  }
}

/**
 * Event handler for when an accordion is activated
 */
function _accordionActivatedHandler() {
  if ( this.activeAccordion ) {
    this.transition.toggleExpandable();
    this.toggleTargetState( this.ui.target );
    this.activeAccordion = false;
  }
}

/**
 * Event handler for when an expandable is clicked.
 */
function expandableClickHandler() {
  this.transition.toggleExpandable();
  this.toggleTargetState( this.ui.target );

  if ( this.isAccordionGroup ) {
    if ( this.activeAccordion ) {
      this.activeAccordion = false;
    } else {
      eventObserver.dispatchEvent( 'accordionActivated', { target: this } );
      this.activeAccordion = true;
    }
  }
}

/**
 * Event handler for when an expandable begins expanding.
 */
function expandBeginHandler() {
  this.ui.content.classList.remove( 'u-hidden' );
}

/**
 * Event handler for when an expandable is finished collapsing.
 */
function collapseEndHandler() {
  this.ui.content.classList.add( 'u-hidden' );
}

/**
 * Toggle an expandable to open or closed.
 * @param {HTMLNode} element - The expandable target HTML DOM element.
 */
function toggleTargetState( element ) {
  if ( element.classList.contains( this.classes.targetExpanded ) ) {
    this.ui.target.classList.add( this.classes.targetCollapsed );
    this.ui.target.classList.remove( this.classes.targetExpanded );
  } else {
    this.ui.target.classList.add( this.classes.targetExpanded );
    this.ui.target.classList.remove( this.classes.targetCollapsed );
  }
}

/**
 * Retrieve the label text of the expandable header.
 * @returns {string} The text of the expandable's label.
 */
function getLabelText() {
  return this.ui.label.textContent.trim();
}

export default Expandable;
