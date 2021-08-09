const BASE_CLASS = 'm-tabs';

export function Tabs() {
  function init() {
    const tabsContainerDom = document.querySelectorAll(`.${BASE_CLASS}`);

    console.log(tabsContainerDom);
    console.log(tabsContainerDom.length);

    if (tabsContainerDom && tabsContainerDom.length > 0) {
      console.log('tabs.js if');
      for (let i = 0; i < tabsContainerDom.length; i++) {
        console.log('tabs.js for');
        new Tabs().init();
        console.log('TABS INITIALIZED');
      }
    }
  }

  function changeTab(tab, document = window.document) {
    const TABS_CONTAINER_CLASS = 'm-tabs';
    const TAB_CLASS = 'm-tabs_list-item';
    const TAB_CLASS_SELECTED = 'm-tabs_list-item-selected';
    const TAB_CONTENT_CLASS = 'm-tabs_panel';
    const TAB_CONTENT_CLASS_HIDDEN = 'm-tabs_panel-hidden';

    const selectedTabContent = document.querySelector(tab.getAttribute('href'));
    const selectedTabListItem = tab.closest(`.${TAB_CLASS}`);
    const tabsContainer = tab.closest(`.${TABS_CONTAINER_CLASS}`);

    // Un-highlight all tabs
    tabsContainer.querySelectorAll(`.${TAB_CLASS}`).forEach((tabListItem) => {
      tabListItem.classList.remove(TAB_CLASS_SELECTED);
    });

    // Hide all tab content
    tabsContainer
      .querySelectorAll(`.${TAB_CONTENT_CLASS}`)
      .forEach((content) => {
        content.classList.add(TAB_CONTENT_CLASS_HIDDEN);
      });

    // Highlight the selected tab
    selectedTabListItem.classList.add(TAB_CLASS_SELECTED);

    // Show the selected tab's content
    selectedTabContent.classList.remove(TAB_CONTENT_CLASS_HIDDEN);
  }

  // Attach public events.
  this.init = init;
  this.changeTab = changeTab;

  return this;
}

// Create new tabs instance.
const tabs = new Tabs();

// call method on instance.
tabs.init();
