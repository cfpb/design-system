/* ==========================================================================
   Design System
   Atomic component utilities
   ========================================================================== */

import EventObserver from './mixins/EventObserver.js';

import {
  checkDom,
  instantiateAll,
  setInitFlag,
} from './utilities/atomic-helpers.js';

import {
  attach,
  checkBehaviorDom,
  find,
  remove,
} from './utilities/behavior/behavior.js';

import FlyoutMenu from './utilities/behavior/FlyoutMenu.js';

import { add, contains } from './utilities/data-hook.js';

import { isMobileUserAgent } from './utilities/media-helpers.js';

import {
  BEHAVIOR_PREFIX,
  JS_HOOK,
  STATE_PREFIX,
} from './utilities/standard-type.js';

import AlphaTransition from './utilities/transition/AlphaTransition.js';
import BaseTransition from './utilities/transition/BaseTransition.js';
import MaxHeightTransition from './utilities/transition/MaxHeightTransition.js';
import MoveTransition from './utilities/transition/MoveTransition.js';

import {
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

export {
  EventObserver,
  checkDom,
  instantiateAll,
  setInitFlag,
  attach,
  checkBehaviorDom,
  find,
  remove,
  FlyoutMenu,
  add,
  contains,
  isMobileUserAgent,
  BEHAVIOR_PREFIX,
  JS_HOOK,
  STATE_PREFIX,
  AlphaTransition,
  BaseTransition,
  MaxHeightTransition,
  MoveTransition,
  isUndefined,
  isDefined,
  isObject,
  isString,
  isNumber,
  isDate,
  isArray,
  isFunction,
  isEmpty,
};
