const BASE_CLASS = 'm-tabs';

function Tabs() {
  function init() {
    const tabsContainerDom = document.querySelector( `.${ BASE_CLASS }` );
    const tabsListDom = tabsContainerDom.querySelectorAll( `.${ BASE_CLASS }_list` );

  if ( tabsContainerDom && tabsContainerDom.length > 0 ) {
    for ( let i = 0; i < tabs.length; i++ ) {
      const tab = tabs[i];
      new Tabs().init();
    }
  }
}

function changeTab( tab, document = window.document ) {
  const TABS_CONTAINER_CLASS = 'm-tabs';
  const TAB_CLASS = 'm-tabs_list-item';
  const TAB_CLASS_SELECTED = 'm-tabs_list-item-selected';
  const TAB_CONTENT_CLASS = 'm-tabs_panel';
  const TAB_CONTENT_CLASS_HIDDEN = 'm-tabs_panel-hidden';

  const selectedTabContent = document.querySelector( tab.getAttribute( 'href' ) );
  const selectedTabListItem = tab.closest( `.${ TAB_CLASS }` );
  const tabsContainer = tab.closest( `.${ TABS_CONTAINER_CLASS }` );

  // Un-highlight all tabs
  tabsContainer.querySelectorAll( `.${ TAB_CLASS }` ).forEach( tabListItem => {
    tabListItem.classList.remove( TAB_CLASS_SELECTED );
  } );

  // Hide all tab content
  tabsContainer.querySelectorAll( `.${ TAB_CONTENT_CLASS }` ).forEach( content => {
    content.classList.add( TAB_CONTENT_CLASS_HIDDEN );
  } );

  // Highlight the selected tab
  selectedTabListItem.classList.add( TAB_CLASS_SELECTED );

  // Show the selected tab's content
  selectedTabContent.classList.remove( TAB_CONTENT_CLASS_HIDDEN );
}

  // Attach public events.
  this.init = init;
  this.changeTab = changeTab;

  return this;
}

export default Tabs;
