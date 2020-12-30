import {
  toggleAllDetails,
  toggleDetails
} from './toggle-details.js';
import AnchorJS from 'anchor-js';
import Expandable from '@cfpb/cfpb-expandables/src/Expandable';
import Multiselect from '@cfpb/cfpb-forms/src/organisms/Multiselect';
import AlphaTransition from '@cfpb/cfpb-atomic-component/src/utilities/transition/AlphaTransition.js';
import MoveTransition from '@cfpb/cfpb-atomic-component/src/utilities/transition/MoveTransition.js';
import Table from '@cfpb/cfpb-tables/src/Table';
import { Tabs } from 'govuk-frontend';
import redirectBanner from './redirect-banner.js';
import sidebar from './sidebar.js';

redirectBanner.init();
sidebar.init();

const anchors = new AnchorJS();
// Add anchors to all headings (except page title headings)
anchors.add( 'h2:not(.title), h3, h4, h5' );
// Ensure there are no anchors in inconvenient places
anchors.remove( `
  .live-code-example h2,
  .live-code-example h3,
  .live-code-example h4,
  .live-code-example h5,
  .o-expandable_label,
  #search-results h3
` );

const multiselectDom = document.querySelector( '.o-multiselect' );
if ( multiselectDom ) {
  const multiselect = new Multiselect( multiselectDom );
  multiselect.init();
}

Expandable.init();
Table.init();

// Transition example code.
const moveTransitionExample = document.querySelector( '.example-box.u-move-transition' );
if ( moveTransitionExample !== null ) {
  const moveTransition = new MoveTransition( moveTransitionExample ).init();
  moveTransitionExample.addEventListener( 'click', () => {
    moveTransition.moveRight();
  } );
}

const alphaTransitionExample = document.querySelector( '.example-box.u-alpha-transition' );
if ( alphaTransitionExample !== null ) {
  const alphaTransition = new AlphaTransition( alphaTransitionExample ).init();
  alphaTransitionExample.addEventListener( 'click', () => {
    alphaTransition.fadeOut();
  } );
}

const main = document.querySelector( '#main' );
const tabs = document.querySelectorAll( '[data-module="tabs"]' );

if ( tabs && tabs.length > 0 ) {
  main.classList.add( 'js-enabled' );
  for ( let i = 0; i < tabs.length; i++ ) {
    const tab = tabs[i];
    new Tabs( tab ).init();
  }
}

const toggleAllBtn = document.querySelector( '#toggle-details' );
const toggleBtns = document.querySelectorAll( '.a-toggle_code button' );

if ( toggleAllBtn ) {
  toggleAllBtn.addEventListener( 'click', handleToggleAllClick, false );

  if ( window.localStorage.getItem( 'toggleState' ) === 'hide' ) {
    toggleAllDetails( toggleAllBtn );
  }
}

for ( let i = 0, len = toggleBtns.length; i < len; i++ ) {
  toggleBtns[i].addEventListener( 'click', handleToggleClick, false );
}

/**
 * @param {MouseEvent} event - The mouse event object from the click.
 */
function handleToggleAllClick( event ) {
  event.preventDefault();
  toggleAllDetails( toggleAllBtn );
}

/**
 * @param {MouseEvent} event - The mouse event object from the click.
 */
function handleToggleClick( event ) {
  const target = event.target;
  toggleDetails( target );
}
