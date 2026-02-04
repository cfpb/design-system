const BASE_CLASS = 'm-tabs';

/**
 * @param {HTMLElement} dom - The HTML DOM node.
 * @returns {Tabs} An instance.
 */
function Tabs(dom) {
  // DOM references.
  const _dom = dom;
  let _tabsItemsDom;
  let _tabsPanelsDom;

  // Store the current selected tab index.
  let _selectedTabIndex;

  /**
   * Change the selected tab index.
   * @param {number} index - An index position of the selected tab.
   * @returns {Tabs} An instance.
   */
  function changeTab(index) {
    // Remove classes from prior selected tab and panel.
    _tabsItemsDom[_selectedTabIndex].classList.remove(
      `${BASE_CLASS}__list-item-selected`,
    );
    _tabsPanelsDom[_selectedTabIndex].classList.add('u-hidden');

    // Store new selected index.
    _selectedTabIndex = index;

    // Add classes for the new selected tab and panel.
    _tabsItemsDom[_selectedTabIndex].classList.add(
      `${BASE_CLASS}__list-item-selected`,
    );
    _tabsPanelsDom[_selectedTabIndex].classList.remove('u-hidden');

    return this;
  }

  /**
   * Initialize the Tabs instance.
   * @returns {Tabs} An instance.
   */
  function init() {
    _tabsItemsDom = _dom.querySelectorAll(`.${BASE_CLASS}__list-item`);

    if (_tabsItemsDom.length === 0) {
      // Bail out because there are no tabs to initialize.
      return this;
    }

    // Add events to tab items.
    _tabsPanelsDom = _dom.querySelectorAll(`.${BASE_CLASS}__panel`);
    for (let i = 0, len = _tabsItemsDom.length; i < len; i++) {
      _tabsItemsDom[i].addEventListener('click', (event) => {
        event.preventDefault();
        changeTab(i);
      });

      // Hide panels initially.
      if (i > 0) {
        _tabsPanelsDom[i].classList.add('u-hidden');
      }
    }

    // Set the default selected tab to index zero.
    _selectedTabIndex = 0;

    return this;
  }

  // Attach public events.
  this.init = init;
  this.changeTab = changeTab;

  return this;
}

Tabs.BASE_CLASS = BASE_CLASS;

export default Tabs;
