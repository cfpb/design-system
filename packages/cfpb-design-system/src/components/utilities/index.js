/* ==========================================================================
   Design System
   LegacyComponent utilities
   ========================================================================== */

export { add, contains } from '../../utilities/data-hook.js';

export { EventObserver } from '../../utilities/event-observer.js';

export { FlyoutMenu } from '../../utilities/behavior/flyout-menu.js';

export { MaxHeightTransition } from '../../utilities/transition/max-height-transition.js';

export {
  MOBILE,
  TABLET,
  DESKTOP,
  getBreakpointState,
  viewportIsIn,
} from './breakpoint-state.js';

export { isMobileUserAgent } from './media-helpers.js';

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
} from './type-checkers.js';

export { AlphaTransition } from './transition/alpha-transition.js';

export { MoveTransition } from './transition/move-transition.js';
