import {
  EventObserver,
  checkDom,
  setInitFlag,
  instantiateAll,
} from '@cfpb/cfpb-atomic-component';

const BASE_CLASS = 'o-input-tree';

/**
 * InputTree
 *
 * @class
 * @classdesc Initializes a new InputTree molecule.
 * @param {HTMLElement} element - The DOM element within which to search
 *   for the molecule.
 * @returns {InputTree} An instance.
 */
function InputTree(element) {
  const _dom = checkDom(element, BASE_CLASS);
  let _parentInput;
  let _childInputs;
  let _numChildInputChecked = 0;

  /**
   * Set up and create the input tree.
   *
   * @returns {InputTree} An instance.
   */
  function init() {
    if (!setInitFlag(_dom)) {
      return this;
    }

    const inputs = _dom.querySelectorAll('input');
    _dom.addEventListener('toggle', (evt) => {
      if (evt.target.hasAttribute('open')) {
        this.dispatchEvent('onopen', { target: this });
      } else {
        this.dispatchEvent('onclose', { target: this });
      }
    });

    _childInputs = [];
    inputs.forEach((input) => {
      input.addEventListener('change', _handleChange);
      _childInputs.push(input);
    });

    _parentInput = _childInputs.shift();

    return this;
  }

  function _handleChange(evt) {
    if (_parentInput === evt.target) {
      _toggleChildren(_parentInput.checked);
      _parentInput.indeterminate = false;
    } else {
      if (evt.target.checked === true) {
        _numChildInputChecked++;
      } else {
        _numChildInputChecked--;
      }

      if (_numChildInputChecked === 0) {
        _parentInput.checked = false;
        _parentInput.indeterminate = false;
      } else if (_numChildInputChecked < _childInputs.length) {
        _parentInput.checked = false;
        _parentInput.indeterminate = true;
      } else {
        _parentInput.checked = true;
        _parentInput.indeterminate = false;
      }
    }
  }

  function _toggleChildren(state) {
    _childInputs.forEach((input) => {
      input.checked = state;
    });

    _numChildInputChecked = state ? _childInputs.length : 0;
  }

  // Attach public events.
  this.init = init;

  const eventObserver = new EventObserver();
  this.addEventListener = eventObserver.addEventListener;
  this.removeEventListener = eventObserver.removeEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;

  return this;
}

InputTree.BASE_CLASS = BASE_CLASS;
InputTree.init = (scope) =>
  instantiateAll(`.${InputTree.BASE_CLASS}`, InputTree, scope);

export { InputTree };
