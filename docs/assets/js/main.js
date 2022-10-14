import { toggleAllDetails, toggleDetails } from "./toggle-details.js";
import AnchorJS from "anchor-js";
import Expandable from "@cfpb/cfpb-expandables/src/Expandable";
import Multiselect from "@cfpb/cfpb-forms/src/organisms/Multiselect";
import AlphaTransition from "@cfpb/cfpb-atomic-component/src/utilities/transition/AlphaTransition.js";
import MoveTransition from "@cfpb/cfpb-atomic-component/src/utilities/transition/MoveTransition.js";
import MaxHeightTransition from "@cfpb/cfpb-atomic-component/src/utilities/transition/MaxHeightTransition.js";
import Table from "@cfpb/cfpb-tables/src/Table";
import Tabs from "./Tabs.js";
import redirectBanner from "./redirect-banner.js";
import sidebar from "./sidebar.js";

redirectBanner.init();
sidebar.init();

const anchors = new AnchorJS();
// Add anchors to all headings (except page title headings)
anchors.add("h2:not(.title), h3, h4, h5");
// Ensure there are no anchors in inconvenient places
anchors.remove(`
  .a-live_code h2,
  .a-live_code h3,
  .a-live_code h4,
  .a-live_code h5,
  .o-expandable_label,
  #search-results h3
`);

const multiselectDom = document.querySelector(".o-multiselect");
if (multiselectDom) {
  const multiselect = new Multiselect(multiselectDom);
  multiselect.init();
}

Expandable.init();
Table.init();

// Exporting these classes to the window so that the transition-patterns.md
// page can use them in its code snippets.
window.AlphaTransition = AlphaTransition;
window.MoveTransition = MoveTransition;
window.MaxHeightTransition = MaxHeightTransition;

// Tabs show under the show/hide details button on a pattern.
const tabsContainerDom = document.querySelectorAll(`.${Tabs.BASE_CLASS}`);
if (tabsContainerDom.length > 0) {
  let tabsInst;
  for (let i = 0, len = tabsContainerDom.length; i < len; i++) {
    tabsInst = new Tabs(tabsContainerDom[i]);
    tabsInst.init();
  }
}

const toggleAllBtn = document.querySelector("#toggle-details");
const toggleBtns = document.querySelectorAll(".a-toggle_code button");

if (toggleAllBtn) {
  toggleAllBtn.addEventListener("click", handleToggleAllClick, false);

  if (window.localStorage.getItem("toggleState") === "hide") {
    toggleAllDetails(toggleAllBtn);
  }
}

for (let i = 0, len = toggleBtns.length; i < len; i++) {
  toggleBtns[i].addEventListener("click", handleToggleClick, false);
}

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
