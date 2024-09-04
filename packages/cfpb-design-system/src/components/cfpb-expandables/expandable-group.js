/* ==========================================================================
   Expandable Organism
   ========================================================================== */

import { checkDom, setInitFlag, instantiateAll } from '../../utilities';
import { Expandable } from './expandable.js';

import * as ExpandableGroupStyles from './expandable-group.scss';

const BASE_CLASS = 'o-expandable-group';

/**
 * ExpandableGroup
 * @class
 * @classdesc Initializes a new Expandable molecule.
 * @param {HTMLElement} element - The DOM element within which to search
 *   for the molecule.
 * @returns {ExpandableGroup} An instance.
 */
function ExpandableGroup(element) {
  // Internal vars.
  const _dom = checkDom(element, BASE_CLASS);
  const _isAccordion = _dom.classList.contains(`${BASE_CLASS}--accordion`);
  let _expandables;
  let _lastExpanded;

  /**
   * @param {object} evt - The event object.
   */
  function _handleExpandBegin(evt) {
    const target = evt.target;
    if (_lastExpanded && _lastExpanded !== target) {
      _lastExpanded.collapse();
    }
    _lastExpanded = target;
  }

  /**
   * Set up and create the multiselect.
   * @param {Array} expandables - List of expandables inside this group.
   * @returns {ExpandableGroup} An instance.
   */
  function init(expandables) {
    if (!setInitFlag(_dom)) {
      return this;
    }

    if (_isAccordion) {
      _expandables = expandables;

      _expandables.forEach((expandable) => {
        expandable.addEventListener('expandbegin', _handleExpandBegin);
      });
    }

    return this;
  }

  // Attach public events.
  this.init = init;

  return this;
}

ExpandableGroup.BASE_CLASS = BASE_CLASS;
ExpandableGroup.init = (scope) => {
  const base = scope || document;
  const expandableGroupsDom = base.querySelectorAll(`.${BASE_CLASS}`);
  expandableGroupsDom.forEach((expandableGroupDom) => {
    const expandables = instantiateAll(
      `.${Expandable.BASE_CLASS}`,
      Expandable,
      expandableGroupDom,
    );
    const expandableGroup = new ExpandableGroup(expandableGroupDom);
    expandableGroup.init(expandables);
  });
};

export { ExpandableGroup, ExpandableGroupStyles };
