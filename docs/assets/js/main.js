import { toggleAllDetails, toggleDetails } from './toggle-details.js';
import AnchorJS from 'anchor-js';
import {
  Expandable,
  ExpandableGroup,
  Summary,
  SummaryMinimal,
  Multiselect,
  FlyoutMenu,
  AlphaTransition,
  MaxHeightTransition,
  MoveTransition,
} from '@cfpb/cfpb-design-system';
import { Tooltip } from '@cfpb/cfpb-design-system/tooltips';
import Tabs from './tabs.js';
import redirectBanner from './redirect-banner.js';
import sidebar from './sidebar.js';
export * as MainStyles from '../css/main.scss';

redirectBanner.init();
sidebar.init();

const anchors = new AnchorJS();
// Add anchors to all headings (except page title headings)
anchors.add('h2:not(.title), h3, h4, h5');
// Ensure there are no anchors in inconvenient places
anchors.remove(`
  .a-live__code h2,
  .a-live__code h3,
  .a-live__code h4,
  .a-live__code h5,
  .o-expandable__label,
  #search-results h3
`);

Summary.init();
SummaryMinimal.init();
ExpandableGroup.init();
Expandable.init();
Multiselect.init();
Tooltip.init();

// Exporting these classes to the window so that the transition-patterns.md
// page can use them in its code snippets.
window.AlphaTransition = AlphaTransition;
window.MoveTransition = MoveTransition;
window.MaxHeightTransition = MaxHeightTransition;
window.FlyoutMenu = FlyoutMenu;

// Tabs show under the show/hide details button on a pattern.
const tabsContainerDom = document.querySelectorAll(`.${Tabs.BASE_CLASS}`);
if (tabsContainerDom.length > 0) {
  let tabsInst;
  for (let i = 0, len = tabsContainerDom.length; i < len; i++) {
    tabsInst = new Tabs(tabsContainerDom[i]);
    tabsInst.init();
  }
}
const toggleAllBtn = document.querySelector('#toggle-details');
const toggleBtns = document.querySelectorAll('.a-toggle__code button');

/**
 * @param {MouseEvent} event - The mouse event object from the click.
 */
function handleToggleAllClick(event) {
  event.preventDefault();
  toggleAllDetails(toggleAllBtn);
}

/**
 * @param {MouseEvent} event - The mouse event object from the click.
 */
function handleToggleClick(event) {
  const target = event.target;
  toggleDetails(target);
}

if (toggleAllBtn) {
  toggleAllBtn.addEventListener('click', handleToggleAllClick, false);

  if (window.localStorage.getItem('toggleState') === 'hide') {
    toggleAllDetails(toggleAllBtn);
  }
}

for (let i = 0, len = toggleBtns.length; i < len; i++) {
  toggleBtns[i].addEventListener('click', handleToggleClick, false);
}
