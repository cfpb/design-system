/* ==========================================================================
   Design System
   Atomic component utilities
   ========================================================================== */

export * as utilitiesStyles from './utilities.scss';

export { BEHAVIOR_PREFIX, JS_HOOK, STATE_PREFIX } from './standard-type.js';

export { EventObserver } from './event-observer.js';

export {
  behaviorAttach,
  checkBehaviorDom,
  behaviorFind,
} from './behavior/behavior.js';

export { add, contains } from './data-hook.js';

export { FlyoutMenu } from './behavior/flyout-menu.js';

export { BaseTransition } from './transition/base-transition.js';
export { MaxHeightTransition } from './transition/max-height-transition.js';
