import { Tabs } from 'govuk-frontend';

/**
 * @param {DOMNode} container - Parent element containing Gov UK tab HTML
 */
export function init( container ) {
  const tabs = container.querySelectorAll( '[data-module="tabs"]' );

  if ( tabs && tabs.length > 0 ) {
    for ( let i = 0; i < tabs.length; i++ ) {
      const tab = tabs[i];
      new Tabs( tab ).init( );
    }
  }
}

/**
 * This is a helper function that is only used within Netlify CMS.
 * The original Gov UK tabs code modifies the URL's hash which breaks Netlify
 * so we replace their functionality with some simple tab switching below.
 *
 * @param {DOMNode} tab - Tab element that was clicked
 * @param {DOMNode} document - Defaults to window.document but overridable for ReactDOM
 */
export function changeTab( tab, document = window.document ) {
  const TABS_CONTAINER_CLASS = 'govuk-tabs';
  const TAB_CLASS = 'govuk-tabs__list-item';
  const TAB_CLASS_SELECTED = 'govuk-tabs__list-item--selected';
  const TAB_CONTENT_CLASS = 'govuk-tabs__panel';
  const TAB_CONTENT_CLASS_HIDDEN = 'govuk-tabs__panel--hidden';

  const selectedTabContent = document.querySelector( tab.getAttribute( 'href' ) );
  const selectedTabListItem = tab.closest( `.${TAB_CLASS}` );
  const tabsContainer = tab.closest( `.${TABS_CONTAINER_CLASS}` );

  // Un-highlight all tabs
  tabsContainer.querySelectorAll( `.${TAB_CLASS}` ).forEach( tabListItem => {
    tabListItem.classList.remove( TAB_CLASS_SELECTED );
  } );

  // Hide all tab content
  tabsContainer.querySelectorAll( `.${TAB_CONTENT_CLASS}` ).forEach( content => {
    content.classList.add( TAB_CONTENT_CLASS_HIDDEN );
  } );

  // Highlight the selected tab
  selectedTabListItem.classList.add( TAB_CLASS_SELECTED );

  // Show the selected tab's content
  selectedTabContent.classList.remove( TAB_CONTENT_CLASS_HIDDEN );
}
