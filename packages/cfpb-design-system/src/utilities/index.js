/* ==========================================================================
   Design System
   Atomic component utilities
   ========================================================================== */

export * as utilitiesStyles from './utilities.scss';

export {
  MOBILE,
  viewportIsIn,
} from '../components/utilities/breakpoint-state.js';

export { BEHAVIOR_PREFIX, JS_HOOK, STATE_PREFIX } from './standard-type.js';

export { EventObserver } from './event-observer.js';

export {
  checkDom,
  instantiateAll,
  setInitFlag,
} from '../components/utilities/atomic-helpers.js';

export {
  behaviorAttach,
  checkBehaviorDom,
  behaviorFind,
} from './behavior/behavior.js';

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
} from '../components/utilities/type-checkers.js';

export { add, contains } from './data-hook.js';

export { isMobileUserAgent } from '../components/utilities/media-helpers.js';

export { FlyoutMenu } from './behavior/flyout-menu.js';

export { AlphaTransition } from '../components/utilities/transition/alpha-transition.js';
export { BaseTransition } from './transition/base-transition.js';
export { MaxHeightTransition } from './transition/max-height-transition.js';
export { MoveTransition } from '../components/utilities/transition/move-transition.js';
