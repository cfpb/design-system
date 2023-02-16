/* ==========================================================================
   Design System
   Atomic component utilities
   ========================================================================== */

export {
  BEHAVIOR_PREFIX,
  JS_HOOK,
  STATE_PREFIX,
} from './utilities/standard-type.js';

export { EventObserver } from './mixins/EventObserver.js';

export {
  checkDom,
  instantiateAll,
  setInitFlag,
} from './utilities/atomic-helpers.js';

export {
  attach,
  checkBehaviorDom,
  find,
  remove,
} from './utilities/behavior/behavior.js';

export {
  isUndefined,
  isDefined,
  isObject,
  isString,
  isNumber,
  isDate,
  isArray,
  isFunction,
  isEmpty,
} from './utilities/type-checkers.js';

export { add, contains } from './utilities/data-hook.js';

export { isMobileUserAgent } from './utilities/media-helpers.js';

export { FlyoutMenu } from './utilities/behavior/FlyoutMenu.js';

export { AlphaTransition } from './utilities/transition/AlphaTransition.js';
export { BaseTransition } from './utilities/transition/BaseTransition.js';
export { MaxHeightTransition } from './utilities/transition/MaxHeightTransition.js';
export { MoveTransition } from './utilities/transition/MoveTransition.js';
