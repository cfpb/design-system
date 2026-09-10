import type { CfpbAlert } from '../packages/cfpb-design-system/src/elements/cfpb-alert/index.js';
import type { CfpbButton } from '../packages/cfpb-design-system/src/elements/cfpb-button/index.js';
import type { CfpbCheckboxIcon } from '../packages/cfpb-design-system/src/elements/cfpb-checkbox-icon/index.js';
import type { CfpbExpandable } from '../packages/cfpb-design-system/src/elements/cfpb-expandable/index.js';
import type { CfpbFileUpload } from '../packages/cfpb-design-system/src/elements/cfpb-file-upload/index.js';
import type { CfpbFlagUsa } from '../packages/cfpb-design-system/src/elements/cfpb-flag-usa/index.js';
import type { CfpbFormAlert } from '../packages/cfpb-design-system/src/elements/cfpb-form-alert/index.js';
import type { CfpbFormChoice } from '../packages/cfpb-design-system/src/elements/cfpb-form-choice/index.js';
import type { CfpbFormSearchInput } from '../packages/cfpb-design-system/src/elements/cfpb-form-search-input/index.js';
import type { CfpbFormSearch } from '../packages/cfpb-design-system/src/elements/cfpb-form-search/index.js';
import type { CfpbIconText } from '../packages/cfpb-design-system/src/elements/cfpb-icon-text/index.js';
import type { CfpbIcon } from '../packages/cfpb-design-system/src/elements/cfpb-icon/index.js';
import type { CfpbLabel } from '../packages/cfpb-design-system/src/elements/cfpb-label/index.js';
import type { CfpbLink } from '../packages/cfpb-design-system/src/elements/cfpb-link/index.js';
import type { CfpbListItem } from '../packages/cfpb-design-system/src/elements/cfpb-list-item/index.js';
import type { CfpbList } from '../packages/cfpb-design-system/src/elements/cfpb-list/index.js';
import type { CfpbListboxItem } from '../packages/cfpb-design-system/src/elements/cfpb-listbox-item/index.js';
import type { CfpbListbox } from '../packages/cfpb-design-system/src/elements/cfpb-listbox/index.js';
import type { CfpbPagination } from '../packages/cfpb-design-system/src/elements/cfpb-pagination/index.js';
import type { CfpbSelect } from '../packages/cfpb-design-system/src/elements/cfpb-select/index.js';
import type { CfpbTagFilter } from '../packages/cfpb-design-system/src/elements/cfpb-tag-filter/index.js';
import type { CfpbTagTopic } from '../packages/cfpb-design-system/src/elements/cfpb-tag-topic/index.js';
import type { CfpbTagline } from '../packages/cfpb-design-system/src/elements/cfpb-tagline/index.js';

/**
 * This type can be used to create scoped tags for your components.
 *
 * Usage:
 *
 * ```ts
 * import type { ScopedElements } from "path/to/library/jsx-integration";
 *
 * declare module "my-library" {
 *   namespace JSX {
 *     interface IntrinsicElements
 *       extends ScopedElements<'test-', ''> {}
 *   }
 * }
 * ```
 *
 * @deprecated Runtime scoped elements result in duplicate types and can confusing for developers. It is recommended to use the `prefix` and `suffix` options to generate new types instead.
 */
export type ScopedElements<
  Prefix extends string = '',
  Suffix extends string = '',
> = {
  [
    Key in keyof CustomElements as `${Prefix}${Key}${Suffix}`
  ]: CustomElements[Key];
};

type BaseProps<T extends HTMLElement> = {
  /** Content added between the opening and closing tags of the element */
  children?: any | undefined;
  /** Used for declaratively styling one or more elements using CSS (Cascading Stylesheets) */
  class?: string | undefined;
  /** Used for declaratively styling one or more elements using CSS (Cascading Stylesheets) */
  className?: string | undefined;
  /** Takes an object where the key is the class name(s) and the value is a boolean expression. When true, the class is applied, and when false, it is removed. */
  classList?: Record<string, boolean | undefined> | undefined;
  /** Specifies the text direction of the element. */
  dir?: 'ltr' | 'rtl' | undefined;
  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string | undefined;
  /** For <label> and <output>, lets you associate the label with some control. */
  htmlFor?: string | undefined;
  /** Specifies whether the element should be hidden. */
  hidden?: boolean | string | undefined;
  /** A unique identifier for the element. */
  id?: string | undefined;
  /** Keys tell React which array item each component corresponds to */
  key?: string | number | undefined;
  /** Specifies the language of the element. */
  lang?: string | undefined;
  /** Defines the element's semantic role for accessibility APIs. */
  role?: string | undefined;
  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string | undefined;
  /** Use the ref attribute with a variable to assign a DOM element to the variable once the element is rendered. */
  ref?: (T | ((e: T) => void)) | undefined;
  /** Adds a reference for a custom element slot */
  slot?: string | undefined;
  /** Prop for setting inline styles */
  style?: Record<string, string | number> | undefined;
  /** Overrides the default Tab button behavior. Avoid using values other than -1 and 0. */
  tabIndex?: number | undefined;
  /** Specifies the tooltip text for the element. */
  title?: string | undefined;
  /** Passing 'no' excludes the element content from being translated. */
  translate?: 'yes' | 'no' | undefined;
  /** The popover global attribute is used to designate an element as a popover element. */
  popover?: 'auto' | 'hint' | 'manual' | undefined;
  /** Turns an element element into a popover control button; takes the ID of the popover element to control as its value. */
  popovertarget?: 'top' | 'bottom' | 'left' | 'right' | 'auto' | undefined;
  /** Specifies the action to be performed on a popover element being controlled by a control element. */
  popovertargetaction?: 'show' | 'hide' | 'toggle' | undefined;
};

type BaseEvents = {};

export type CfpbAlertProps = {
  /** The alert status: error, success, warning, info, loading. */
  status?: CfpbAlert['status'] | undefined;
  /** The message heading on an alert. */
  message?: CfpbAlert['message'] | undefined;
};

export type CfpbAlertSolidJsProps = {
  /** The alert status: error, success, warning, info, loading. */
  'prop:status'?: CfpbAlert['status'] | undefined;
  /** The message heading on an alert. */
  'prop:message'?: CfpbAlert['message'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbButtonProps = {
  /** The button type: button, submit, or reset. */
  type?: CfpbButton['type'] | undefined;
  /** The URL to link to (makes the button a link). */
  href?: CfpbButton['href'] | undefined;
  /** Whether the button is disabled or not. */
  disabled?: CfpbButton['disabled'] | undefined;
  /** The button variant: primary, secondary, or warning. */
  variant?: CfpbButton['variant'] | undefined;
  /** The name of the icon on the left. */
  'icon-left'?: CfpbButton['iconLeft'] | undefined;
  /** The name of the icon on the left. */
  iconLeft?: CfpbButton['iconLeft'] | undefined;
  /** The name of the icon on the right. */
  'icon-right'?: CfpbButton['iconRight'] | undefined;
  /** The name of the icon on the right. */
  iconRight?: CfpbButton['iconRight'] | undefined;
  /** Whether the left icon spins or not. */
  'icon-left-spin'?: CfpbButton['isIconLeftSpin'] | undefined;
  /** Whether the left icon spins or not. */
  isIconLeftSpin?: CfpbButton['isIconLeftSpin'] | undefined;
  /** Whether the right icon spins or not. */
  'icon-right-spin'?: CfpbButton['isIconRightSpin'] | undefined;
  /** Whether the right icon spins or not. */
  isIconRightSpin?: CfpbButton['isIconRightSpin'] | undefined;
  /** Whether to be width 100% on mobile. */
  'full-on-mobile'?: CfpbButton['fullOnMobile'] | undefined;
  /** Whether to be width 100% on mobile. */
  fullOnMobile?: CfpbButton['fullOnMobile'] | undefined;
  /** Whether button is not rounded on left. */
  'flush-left'?: CfpbButton['flushLeft'] | undefined;
  /** Whether button is not rounded on left. */
  flushLeft?: CfpbButton['flushLeft'] | undefined;
  /** Whether button is not rounded on right. */
  'flush-right'?: CfpbButton['flushRight'] | undefined;
  /** Whether button is not rounded on right. */
  flushRight?: CfpbButton['flushRight'] | undefined;
  /** Style the button as a link. */
  'style-as-link'?: CfpbButton['styleAsLink'] | undefined;
  /** Style the button as a link. */
  styleAsLink?: CfpbButton['styleAsLink'] | undefined;
};

export type CfpbButtonSolidJsProps = {
  /** The button type: button, submit, or reset. */
  'prop:type'?: CfpbButton['type'] | undefined;
  /** The URL to link to (makes the button a link). */
  'prop:href'?: CfpbButton['href'] | undefined;
  /** Whether the button is disabled or not. */
  'prop:disabled'?: CfpbButton['disabled'] | undefined;
  /** The button variant: primary, secondary, or warning. */
  'prop:variant'?: CfpbButton['variant'] | undefined;
  /** The name of the icon on the left. */
  'attr:icon-left'?: CfpbButton['iconLeft'] | undefined;
  /** The name of the icon on the left. */
  'prop:iconLeft'?: CfpbButton['iconLeft'] | undefined;
  /** The name of the icon on the right. */
  'attr:icon-right'?: CfpbButton['iconRight'] | undefined;
  /** The name of the icon on the right. */
  'prop:iconRight'?: CfpbButton['iconRight'] | undefined;
  /** Whether the left icon spins or not. */
  'bool:icon-left-spin'?: CfpbButton['isIconLeftSpin'] | undefined;
  /** Whether the left icon spins or not. */
  'prop:isIconLeftSpin'?: CfpbButton['isIconLeftSpin'] | undefined;
  /** Whether the right icon spins or not. */
  'bool:icon-right-spin'?: CfpbButton['isIconRightSpin'] | undefined;
  /** Whether the right icon spins or not. */
  'prop:isIconRightSpin'?: CfpbButton['isIconRightSpin'] | undefined;
  /** Whether to be width 100% on mobile. */
  'bool:full-on-mobile'?: CfpbButton['fullOnMobile'] | undefined;
  /** Whether to be width 100% on mobile. */
  'prop:fullOnMobile'?: CfpbButton['fullOnMobile'] | undefined;
  /** Whether button is not rounded on left. */
  'bool:flush-left'?: CfpbButton['flushLeft'] | undefined;
  /** Whether button is not rounded on left. */
  'prop:flushLeft'?: CfpbButton['flushLeft'] | undefined;
  /** Whether button is not rounded on right. */
  'bool:flush-right'?: CfpbButton['flushRight'] | undefined;
  /** Whether button is not rounded on right. */
  'prop:flushRight'?: CfpbButton['flushRight'] | undefined;
  /** Style the button as a link. */
  'bool:style-as-link'?: CfpbButton['styleAsLink'] | undefined;
  /** Style the button as a link. */
  'prop:styleAsLink'?: CfpbButton['styleAsLink'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbCheckboxIconProps = {
  /** Whether the checkbox has a border or not. */
  borderless?: CfpbCheckboxIcon['borderless'] | undefined;
  /** Whether the checkbox is checked or not. */
  checked?: CfpbCheckboxIcon['checked'] | undefined;
  /** Whether the checkbox is disabled or not. */
  disabled?: CfpbCheckboxIcon['disabled'] | undefined;
  /** Validation style: error, warning, success. */
  validation?: CfpbCheckboxIcon['validation'] | undefined;
};

export type CfpbCheckboxIconSolidJsProps = {
  /** Whether the checkbox has a border or not. */
  'prop:borderless'?: CfpbCheckboxIcon['borderless'] | undefined;
  /** Whether the checkbox is checked or not. */
  'prop:checked'?: CfpbCheckboxIcon['checked'] | undefined;
  /** Whether the checkbox is disabled or not. */
  'prop:disabled'?: CfpbCheckboxIcon['disabled'] | undefined;
  /** Validation style: error, warning, success. */
  'prop:validation'?: CfpbCheckboxIcon['validation'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbExpandableProps = {
  /** Whether the expandable is expanded or not. */
  open?: CfpbExpandable['isExpanded'] | undefined;
  /** Whether the expandable is expanded or not. */
  isExpanded?: CfpbExpandable['isExpanded'] | undefined;

  /** The expandable started expanding. */
  onexpandbegin?: ((e: CustomEvent) => void) | undefined;
  /** The expandable finshed expanding. */
  onexpandend?: ((e: CustomEvent) => void) | undefined;
  /** The expandables started collapsing. */
  oncollapsebegin?: ((e: CustomEvent) => void) | undefined;
  /** The expandables finished collapsing. */
  oncollapseend?: ((e: CustomEvent) => void) | undefined;
};

export type CfpbExpandableSolidJsProps = {
  /** Whether the expandable is expanded or not. */
  'bool:open'?: CfpbExpandable['isExpanded'] | undefined;
  /** Whether the expandable is expanded or not. */
  'prop:isExpanded'?: CfpbExpandable['isExpanded'] | undefined;
  /** The expandable started expanding. */
  'on:expandbegin'?: ((e: CustomEvent) => void) | undefined;
  /** The expandable finshed expanding. */
  'on:expandend'?: ((e: CustomEvent) => void) | undefined;
  /** The expandables started collapsing. */
  'on:collapsebegin'?: ((e: CustomEvent) => void) | undefined;
  /** The expandables finished collapsing. */
  'on:collapseend'?: ((e: CustomEvent) => void) | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbFileUploadProps = {
  /**  */
  accept?: CfpbFileUpload['accept'] | undefined;
  /**  */
  isDetailHidden?: CfpbFileUpload['isDetailHidden'] | undefined;
  /**  */
  fileName?: CfpbFileUpload['fileName'] | undefined;
  /**  */
  files?: CfpbFileUpload['files'] | undefined;

  /**  */
  'onfile-change'?: ((e: CustomEvent) => void) | undefined;
};

export type CfpbFileUploadSolidJsProps = {
  /**  */
  'prop:accept'?: CfpbFileUpload['accept'] | undefined;
  /**  */
  'prop:isDetailHidden'?: CfpbFileUpload['isDetailHidden'] | undefined;
  /**  */
  'prop:fileName'?: CfpbFileUpload['fileName'] | undefined;
  /**  */
  'prop:files'?: CfpbFileUpload['files'] | undefined;
  /**  */
  'on:file-change'?: ((e: CustomEvent) => void) | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbFlagUsaProps = {};

export type CfpbFlagUsaSolidJsProps = {
  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbFormAlertProps = {
  /** Validation style: error, warning, success. */
  validation?: CfpbFormAlert['validation'] | undefined;
};

export type CfpbFormAlertSolidJsProps = {
  /** Validation style: error, warning, success. */
  'prop:validation'?: CfpbFormAlert['validation'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbFormChoiceProps = {
  /** Whether the choice is checked or not. */
  checked?: CfpbFormChoice['checked'] | undefined;
  /** Whether the choice is disabled or not. */
  disabled?: CfpbFormChoice['disabled'] | undefined;
  /** Whether the choice has a large target area. */
  large?: CfpbFormChoice['large'] | undefined;
  /** Validation style: error, warning, success. */
  validation?: CfpbFormChoice['validation'] | undefined;
  /** Choice type: checkbox or radio. */
  type?: CfpbFormChoice['type'] | undefined;
  /** The name within a form. */
  name?: CfpbFormChoice['name'] | undefined;
  /** The value to submit within a form. */
  value?: CfpbFormChoice['value'] | undefined;

  /**  */
  onchange?: ((e: Event) => void) | undefined;
  /**  */
  oninput?: ((e: Event) => void) | undefined;
};

export type CfpbFormChoiceSolidJsProps = {
  /** Whether the choice is checked or not. */
  'prop:checked'?: CfpbFormChoice['checked'] | undefined;
  /** Whether the choice is disabled or not. */
  'prop:disabled'?: CfpbFormChoice['disabled'] | undefined;
  /** Whether the choice has a large target area. */
  'prop:large'?: CfpbFormChoice['large'] | undefined;
  /** Validation style: error, warning, success. */
  'prop:validation'?: CfpbFormChoice['validation'] | undefined;
  /** Choice type: checkbox or radio. */
  'prop:type'?: CfpbFormChoice['type'] | undefined;
  /** The name within a form. */
  'prop:name'?: CfpbFormChoice['name'] | undefined;
  /** The value to submit within a form. */
  'prop:value'?: CfpbFormChoice['value'] | undefined;
  /**  */
  'on:change'?: ((e: Event) => void) | undefined;
  /**  */
  'on:input'?: ((e: Event) => void) | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbFormSearchInputProps = {
  /** Whether the input is disabled or not. */
  disabled?: CfpbFormSearchInput['disabled'] | undefined;
  /** Validation style: error, warning, success. */
  validation?: CfpbFormSearchInput['validation'] | undefined;
  /** The aria-label for the input. */
  label?: CfpbFormSearchInput['label'] | undefined;
  /** The name within a form. */
  name?: CfpbFormSearchInput['name'] | undefined;
  /**  */
  title?: CfpbFormSearchInput['title'] | undefined;
  /** The value within the input. */
  value?: CfpbFormSearchInput['value'] | undefined;
  /** The maximum characters allowed in the input. */
  maxlength?: CfpbFormSearchInput['maxlength'] | undefined;
  /** The placeholder value. */
  placeholder?: CfpbFormSearchInput['placeholder'] | undefined;
  /** aria-label for input. */
  'aria-label-input'?: CfpbFormSearchInput['ariaLabelInput'] | undefined;
  /** aria-label for input. */
  ariaLabelInput?: CfpbFormSearchInput['ariaLabelInput'] | undefined;
  /** aria-label for button. */
  'aria-label-button'?: CfpbFormSearchInput['ariaLabelButton'] | undefined;
  /** aria-label for button. */
  ariaLabelButton?: CfpbFormSearchInput['ariaLabelButton'] | undefined;
  /** Whether the input has a border or not. */
  borderless?: CfpbFormSearchInput['borderless'] | undefined;

  /**  */
  'onenter-down'?: ((e: CustomEvent) => void) | undefined;
  /**  */
  onblur?: ((e: Event) => void) | undefined;
  /**  */
  onclear?: ((e: CustomEvent) => void) | undefined;
};

export type CfpbFormSearchInputSolidJsProps = {
  /** Whether the input is disabled or not. */
  'prop:disabled'?: CfpbFormSearchInput['disabled'] | undefined;
  /** Validation style: error, warning, success. */
  'prop:validation'?: CfpbFormSearchInput['validation'] | undefined;
  /** The aria-label for the input. */
  'prop:label'?: CfpbFormSearchInput['label'] | undefined;
  /** The name within a form. */
  'prop:name'?: CfpbFormSearchInput['name'] | undefined;
  /**  */
  'prop:title'?: CfpbFormSearchInput['title'] | undefined;
  /** The value within the input. */
  'prop:value'?: CfpbFormSearchInput['value'] | undefined;
  /** The maximum characters allowed in the input. */
  'prop:maxlength'?: CfpbFormSearchInput['maxlength'] | undefined;
  /** The placeholder value. */
  'prop:placeholder'?: CfpbFormSearchInput['placeholder'] | undefined;
  /** aria-label for input. */
  'attr:aria-label-input'?: CfpbFormSearchInput['ariaLabelInput'] | undefined;
  /** aria-label for input. */
  'prop:ariaLabelInput'?: CfpbFormSearchInput['ariaLabelInput'] | undefined;
  /** aria-label for button. */
  'attr:aria-label-button'?: CfpbFormSearchInput['ariaLabelButton'] | undefined;
  /** aria-label for button. */
  'prop:ariaLabelButton'?: CfpbFormSearchInput['ariaLabelButton'] | undefined;
  /** Whether the input has a border or not. */
  'prop:borderless'?: CfpbFormSearchInput['borderless'] | undefined;
  /**  */
  'on:enter-down'?: ((e: CustomEvent) => void) | undefined;
  /**  */
  'on:blur'?: ((e: Event) => void) | undefined;
  /**  */
  'on:clear'?: ((e: CustomEvent) => void) | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbFormSearchProps = {
  /** Whether the choice is disabled or not. */
  disabled?: CfpbFormSearch['disabled'] | undefined;
  /** Validation style: error, warning, success. */
  validation?: CfpbFormSearch['validation'] | undefined;
  /** The aria-label for the input. */
  label?: CfpbFormSearch['label'] | undefined;
  /** The name within a form. */
  name?: CfpbFormSearch['name'] | undefined;
  /**  */
  title?: CfpbFormSearch['title'] | undefined;
  /** The value within the input. */
  value?: CfpbFormSearch['value'] | undefined;
  /** The maximum characters allowed in the input. */
  maxlength?: CfpbFormSearch['maxlength'] | undefined;
  /** The placeholder value. */
  placeholder?: CfpbFormSearch['placeholder'] | undefined;
  /** aria-label for input. */
  'aria-label-input'?: CfpbFormSearch['ariaLabelInput'] | undefined;
  /** aria-label for input. */
  ariaLabelInput?: CfpbFormSearch['ariaLabelInput'] | undefined;
  /** aria-label for button. */
  'aria-label-button'?: CfpbFormSearch['ariaLabelButton'] | undefined;
  /** aria-label for button. */
  ariaLabelButton?: CfpbFormSearch['ariaLabelButton'] | undefined;
  /**  */
  searchlist?: CfpbFormSearch['searchList'] | undefined;
  /**  */
  searchList?: CfpbFormSearch['searchList'] | undefined;
};

export type CfpbFormSearchSolidJsProps = {
  /** Whether the choice is disabled or not. */
  'prop:disabled'?: CfpbFormSearch['disabled'] | undefined;
  /** Validation style: error, warning, success. */
  'prop:validation'?: CfpbFormSearch['validation'] | undefined;
  /** The aria-label for the input. */
  'prop:label'?: CfpbFormSearch['label'] | undefined;
  /** The name within a form. */
  'prop:name'?: CfpbFormSearch['name'] | undefined;
  /**  */
  'prop:title'?: CfpbFormSearch['title'] | undefined;
  /** The value within the input. */
  'prop:value'?: CfpbFormSearch['value'] | undefined;
  /** The maximum characters allowed in the input. */
  'prop:maxlength'?: CfpbFormSearch['maxlength'] | undefined;
  /** The placeholder value. */
  'prop:placeholder'?: CfpbFormSearch['placeholder'] | undefined;
  /** aria-label for input. */
  'attr:aria-label-input'?: CfpbFormSearch['ariaLabelInput'] | undefined;
  /** aria-label for input. */
  'prop:ariaLabelInput'?: CfpbFormSearch['ariaLabelInput'] | undefined;
  /** aria-label for button. */
  'attr:aria-label-button'?: CfpbFormSearch['ariaLabelButton'] | undefined;
  /** aria-label for button. */
  'prop:ariaLabelButton'?: CfpbFormSearch['ariaLabelButton'] | undefined;
  /**  */
  'attr:searchlist'?: CfpbFormSearch['searchList'] | undefined;
  /**  */
  'prop:searchList'?: CfpbFormSearch['searchList'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbIconTextProps = {
  /** Apply disabled styles or not. */
  disabled?: CfpbIconText['disabled'] | undefined;
  /** The name of the icon on the left. */
  'icon-left'?: CfpbIconText['iconLeft'] | undefined;
  /** The name of the icon on the left. */
  iconLeft?: CfpbIconText['iconLeft'] | undefined;
  /** The name of the icon on the right. */
  'icon-right'?: CfpbIconText['iconRight'] | undefined;
  /** The name of the icon on the right. */
  iconRight?: CfpbIconText['iconRight'] | undefined;
  /** Whether the left icon spins or not. */
  'icon-left-spin'?: CfpbIconText['isIconLeftSpin'] | undefined;
  /** Whether the left icon spins or not. */
  isIconLeftSpin?: CfpbIconText['isIconLeftSpin'] | undefined;
  /** Whether the right icon spins or not. */
  'icon-right-spin'?: CfpbIconText['isIconRightSpin'] | undefined;
  /** Whether the right icon spins or not. */
  isIconRightSpin?: CfpbIconText['isIconRightSpin'] | undefined;
  /** If true, render a divider. */
  'has-div'?: CfpbIconText['hasDiv'] | undefined;
  /** If true, render a divider. */
  hasDiv?: CfpbIconText['hasDiv'] | undefined;
  /** "all" for all screen sizes, "tablet-up", for tablet and above, "none", for only on hover on tablet and above. */
  underline?: CfpbIconText['underline'] | undefined;
  /**  */
  'mobile-icon-align-end'?: CfpbIconText['mobileIconAlignEnd'] | undefined;
  /**  */
  mobileIconAlignEnd?: CfpbIconText['mobileIconAlignEnd'] | undefined;
  /**  */
  inline?: CfpbIconText['inline'] | undefined;
  /** If true render an underline at mobile. */
  mobileUnderline?: CfpbIconText['mobileUnderline'] | undefined;
};

export type CfpbIconTextSolidJsProps = {
  /** Apply disabled styles or not. */
  'prop:disabled'?: CfpbIconText['disabled'] | undefined;
  /** The name of the icon on the left. */
  'attr:icon-left'?: CfpbIconText['iconLeft'] | undefined;
  /** The name of the icon on the left. */
  'prop:iconLeft'?: CfpbIconText['iconLeft'] | undefined;
  /** The name of the icon on the right. */
  'attr:icon-right'?: CfpbIconText['iconRight'] | undefined;
  /** The name of the icon on the right. */
  'prop:iconRight'?: CfpbIconText['iconRight'] | undefined;
  /** Whether the left icon spins or not. */
  'attr:icon-left-spin'?: CfpbIconText['isIconLeftSpin'] | undefined;
  /** Whether the left icon spins or not. */
  'prop:isIconLeftSpin'?: CfpbIconText['isIconLeftSpin'] | undefined;
  /** Whether the right icon spins or not. */
  'attr:icon-right-spin'?: CfpbIconText['isIconRightSpin'] | undefined;
  /** Whether the right icon spins or not. */
  'prop:isIconRightSpin'?: CfpbIconText['isIconRightSpin'] | undefined;
  /** If true, render a divider. */
  'bool:has-div'?: CfpbIconText['hasDiv'] | undefined;
  /** If true, render a divider. */
  'prop:hasDiv'?: CfpbIconText['hasDiv'] | undefined;
  /** "all" for all screen sizes, "tablet-up", for tablet and above, "none", for only on hover on tablet and above. */
  'prop:underline'?: CfpbIconText['underline'] | undefined;
  /**  */
  'bool:mobile-icon-align-end'?: CfpbIconText['mobileIconAlignEnd'] | undefined;
  /**  */
  'prop:mobileIconAlignEnd'?: CfpbIconText['mobileIconAlignEnd'] | undefined;
  /**  */
  'prop:inline'?: CfpbIconText['inline'] | undefined;
  /** If true render an underline at mobile. */
  'prop:mobileUnderline'?: CfpbIconText['mobileUnderline'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbIconProps = {
  /** The name of the icon. */
  name?: CfpbIcon['name'] | undefined;
  /**  */
  spin?: CfpbIcon['spin'] | undefined;
};

export type CfpbIconSolidJsProps = {
  /** The name of the icon. */
  'prop:name'?: CfpbIcon['name'] | undefined;
  /**  */
  'prop:spin'?: CfpbIcon['spin'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbLabelProps = {
  /** Whether this has block or inline helper text. */
  block?: CfpbLabel['block'] | undefined;
  /** Associate the label with an ID elsewhere. */
  for?: CfpbLabel['for'] | undefined;
};

export type CfpbLabelSolidJsProps = {
  /** Whether this has block or inline helper text. */
  'prop:block'?: CfpbLabel['block'] | undefined;
  /** Associate the label with an ID elsewhere. */
  'prop:for'?: CfpbLabel['for'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbLinkProps = {
  /**  */
  'link-variant'?: CfpbLink['linkVariant'] | undefined;
  /**  */
  linkVariant?: CfpbLink['linkVariant'] | undefined;
  /**  */
  size?: CfpbLink['size'] | undefined;
  /**  */
  'color-theme'?: CfpbLink['colorTheme'] | undefined;
  /**  */
  colorTheme?: CfpbLink['colorTheme'] | undefined;
  /**  */
  'no-underline'?: CfpbLink['noUnderline'] | undefined;
  /**  */
  noUnderline?: CfpbLink['noUnderline'] | undefined;
  /**  */
  'no-top-border'?: CfpbLink['noTopBorder'] | undefined;
  /**  */
  noTopBorder?: CfpbLink['noTopBorder'] | undefined;
  /**  */
  inline?: CfpbLink['inline'] | undefined;
  /**  */
  linkText?: CfpbLink['linkText'] | undefined;
  /**  */
  linkAttributes?: CfpbLink['linkAttributes'] | undefined;
};

export type CfpbLinkSolidJsProps = {
  /**  */
  'attr:link-variant'?: CfpbLink['linkVariant'] | undefined;
  /**  */
  'prop:linkVariant'?: CfpbLink['linkVariant'] | undefined;
  /**  */
  'prop:size'?: CfpbLink['size'] | undefined;
  /**  */
  'attr:color-theme'?: CfpbLink['colorTheme'] | undefined;
  /**  */
  'prop:colorTheme'?: CfpbLink['colorTheme'] | undefined;
  /**  */
  'bool:no-underline'?: CfpbLink['noUnderline'] | undefined;
  /**  */
  'prop:noUnderline'?: CfpbLink['noUnderline'] | undefined;
  /**  */
  'bool:no-top-border'?: CfpbLink['noTopBorder'] | undefined;
  /**  */
  'prop:noTopBorder'?: CfpbLink['noTopBorder'] | undefined;
  /**  */
  'prop:inline'?: CfpbLink['inline'] | undefined;
  /**  */
  'prop:linkText'?: CfpbLink['linkText'] | undefined;
  /**  */
  'prop:linkAttributes'?: CfpbLink['linkAttributes'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbListItemProps = {};

export type CfpbListItemSolidJsProps = {
  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbListProps = {
  /** Structure data to create child components. */
  childdata?: CfpbList['childData'] | undefined;
  /** Structure data to create child components. */
  childData?: CfpbList['childData'] | undefined;
  /** The color theme of the link. Takes 'dark'. */
  'color-theme'?: CfpbList['colorTheme'] | undefined;
  /** The color theme of the link. Takes 'dark'. */
  colorTheme?: CfpbList['colorTheme'] | undefined;

  /** An item was clicked. */
  'onitem-click'?: ((e: CustomEvent) => void) | undefined;
  /** An item was added to the group. */
  'onitem-added'?: ((e: CustomEvent) => void) | undefined;
  /** An item was removed to the group. */
  'onitem-removed'?: ((e: CustomEvent) => void) | undefined;
};

export type CfpbListSolidJsProps = {
  /** Structure data to create child components. */
  'attr:childdata'?: CfpbList['childData'] | undefined;
  /** Structure data to create child components. */
  'prop:childData'?: CfpbList['childData'] | undefined;
  /** The color theme of the link. Takes 'dark'. */
  'attr:color-theme'?: CfpbList['colorTheme'] | undefined;
  /** The color theme of the link. Takes 'dark'. */
  'prop:colorTheme'?: CfpbList['colorTheme'] | undefined;
  /** An item was clicked. */
  'on:item-click'?: ((e: CustomEvent) => void) | undefined;
  /** An item was added to the group. */
  'on:item-added'?: ((e: CustomEvent) => void) | undefined;
  /** An item was removed to the group. */
  'on:item-removed'?: ((e: CustomEvent) => void) | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbListboxItemProps = {
  /** Choice type: plain, check, checkbox. */
  type?: CfpbListboxItem['type'] | undefined;
  /** Whether the list item is checked or not. */
  checked?: CfpbListboxItem['checked'] | undefined;
  /** Whether the list item is selectable or not. */
  disabled?: CfpbListboxItem['disabled'] | undefined;
  /** Whether the list item is hidden or not. */
  hidden?: CfpbListboxItem['hidden'] | undefined;
  /**  */
  href?: CfpbListboxItem['href'] | undefined;
  /**  */
  value?: CfpbListboxItem['value'] | undefined;

  /**  */
  'onitem-click'?: ((e: CustomEvent) => void) | undefined;
};

export type CfpbListboxItemSolidJsProps = {
  /** Choice type: plain, check, checkbox. */
  'prop:type'?: CfpbListboxItem['type'] | undefined;
  /** Whether the list item is checked or not. */
  'prop:checked'?: CfpbListboxItem['checked'] | undefined;
  /** Whether the list item is selectable or not. */
  'prop:disabled'?: CfpbListboxItem['disabled'] | undefined;
  /** Whether the list item is hidden or not. */
  'prop:hidden'?: CfpbListboxItem['hidden'] | undefined;
  /**  */
  'prop:href'?: CfpbListboxItem['href'] | undefined;
  /**  */
  'prop:value'?: CfpbListboxItem['value'] | undefined;
  /**  */
  'on:item-click'?: ((e: CustomEvent) => void) | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbListboxProps = {
  /** Structure data to create child components. */
  childdata?: CfpbListbox['childData'] | undefined;
  /** Structure data to create child components. */
  childData?: CfpbListbox['childData'] | undefined;
  /** Whether the select supports multiple or not. */
  multiple?: CfpbListbox['multiple'] | undefined;
  /** List item type: plain, check, or checkbox. */
  type?: CfpbListbox['type'] | undefined;
  /** The aria-label for the list container. */
  'aria-label'?: CfpbListbox['ariaLabel'] | undefined;
  /** The aria-label for the list container. */
  ariaLabel?: CfpbListbox['ariaLabel'] | undefined;

  /**  */
  'onitems-ready'?: ((e: CustomEvent) => void) | undefined;
  /**  */
  'onitem-click'?: ((e: CustomEvent) => void) | undefined;
  /**  */
  'onitems-filter'?: ((e: CustomEvent) => void) | undefined;
};

export type CfpbListboxSolidJsProps = {
  /** Structure data to create child components. */
  'attr:childdata'?: CfpbListbox['childData'] | undefined;
  /** Structure data to create child components. */
  'prop:childData'?: CfpbListbox['childData'] | undefined;
  /** Whether the select supports multiple or not. */
  'prop:multiple'?: CfpbListbox['multiple'] | undefined;
  /** List item type: plain, check, or checkbox. */
  'prop:type'?: CfpbListbox['type'] | undefined;
  /** The aria-label for the list container. */
  'attr:aria-label'?: CfpbListbox['ariaLabel'] | undefined;
  /** The aria-label for the list container. */
  'prop:ariaLabel'?: CfpbListbox['ariaLabel'] | undefined;
  /**  */
  'on:items-ready'?: ((e: CustomEvent) => void) | undefined;
  /**  */
  'on:item-click'?: ((e: CustomEvent) => void) | undefined;
  /**  */
  'on:items-filter'?: ((e: CustomEvent) => void) | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbPaginationProps = {
  /** The currently selected page. */
  value?: CfpbPagination['currentPage'] | undefined;
  /** The currently selected page. */
  currentPage?: CfpbPagination['currentPage'] | undefined;
  /** The maximum page count. */
  max?: CfpbPagination['maxPage'] | undefined;
  /** The maximum page count. */
  maxPage?: CfpbPagination['maxPage'] | undefined;
  /**  */
  lang?: CfpbPagination['lang'] | undefined;

  /**  */
  'onpage-change'?: ((e: CustomEvent) => void) | undefined;
};

export type CfpbPaginationSolidJsProps = {
  /** The currently selected page. */
  'attr:value'?: CfpbPagination['currentPage'] | undefined;
  /** The currently selected page. */
  'prop:currentPage'?: CfpbPagination['currentPage'] | undefined;
  /** The maximum page count. */
  'attr:max'?: CfpbPagination['maxPage'] | undefined;
  /** The maximum page count. */
  'prop:maxPage'?: CfpbPagination['maxPage'] | undefined;
  /**  */
  'prop:lang'?: CfpbPagination['lang'] | undefined;
  /**  */
  'on:page-change'?: ((e: CustomEvent) => void) | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbSelectProps = {
  /** Whether the select supports multiple or not. */
  multiple?: CfpbSelect['multiple'] | undefined;
  /**  */
  disabled?: CfpbSelect['disabled'] | undefined;
  /**  */
  validation?: CfpbSelect['validation'] | undefined;
  /**  */
  label?: CfpbSelect['label'] | undefined;
  /**  */
  name?: CfpbSelect['name'] | undefined;
  /**  */
  title?: CfpbSelect['title'] | undefined;
  /**  */
  value?: CfpbSelect['value'] | undefined;
  /**  */
  maxlength?: CfpbSelect['maxlength'] | undefined;
  /**  */
  placeholder?: CfpbSelect['placeholder'] | undefined;
  /**  */
  'aria-label-input'?: CfpbSelect['ariaLabelInput'] | undefined;
  /**  */
  ariaLabelInput?: CfpbSelect['ariaLabelInput'] | undefined;
  /**  */
  'aria-label-list'?: CfpbSelect['ariaLabelList'] | undefined;
  /**  */
  ariaLabelList?: CfpbSelect['ariaLabelList'] | undefined;
  /** Whether the select is expanded or not. */
  open?: CfpbSelect['isExpanded'] | undefined;
  /** Whether the select is expanded or not. */
  isExpanded?: CfpbSelect['isExpanded'] | undefined;
  /** Text of selected options. */
  selectedtexts?: CfpbSelect['selectedTexts'] | undefined;
  /** Text of selected options. */
  selectedTexts?: CfpbSelect['selectedTexts'] | undefined;
  /**  */
  optionlist?: CfpbSelect['optionList'] | undefined;
  /**  */
  optionList?: CfpbSelect['optionList'] | undefined;
  /**  */
  options?: CfpbSelect['options'] | undefined;

  /**  */
  onexpandbegin?: ((e: CustomEvent) => void) | undefined;
};

export type CfpbSelectSolidJsProps = {
  /** Whether the select supports multiple or not. */
  'prop:multiple'?: CfpbSelect['multiple'] | undefined;
  /**  */
  'prop:disabled'?: CfpbSelect['disabled'] | undefined;
  /**  */
  'prop:validation'?: CfpbSelect['validation'] | undefined;
  /**  */
  'prop:label'?: CfpbSelect['label'] | undefined;
  /**  */
  'prop:name'?: CfpbSelect['name'] | undefined;
  /**  */
  'prop:title'?: CfpbSelect['title'] | undefined;
  /**  */
  'prop:value'?: CfpbSelect['value'] | undefined;
  /**  */
  'prop:maxlength'?: CfpbSelect['maxlength'] | undefined;
  /**  */
  'prop:placeholder'?: CfpbSelect['placeholder'] | undefined;
  /**  */
  'attr:aria-label-input'?: CfpbSelect['ariaLabelInput'] | undefined;
  /**  */
  'prop:ariaLabelInput'?: CfpbSelect['ariaLabelInput'] | undefined;
  /**  */
  'attr:aria-label-list'?: CfpbSelect['ariaLabelList'] | undefined;
  /**  */
  'prop:ariaLabelList'?: CfpbSelect['ariaLabelList'] | undefined;
  /** Whether the select is expanded or not. */
  'bool:open'?: CfpbSelect['isExpanded'] | undefined;
  /** Whether the select is expanded or not. */
  'prop:isExpanded'?: CfpbSelect['isExpanded'] | undefined;
  /** Text of selected options. */
  'attr:selectedtexts'?: CfpbSelect['selectedTexts'] | undefined;
  /** Text of selected options. */
  'prop:selectedTexts'?: CfpbSelect['selectedTexts'] | undefined;
  /**  */
  'attr:optionlist'?: CfpbSelect['optionList'] | undefined;
  /**  */
  'prop:optionList'?: CfpbSelect['optionList'] | undefined;
  /**  */
  'prop:options'?: CfpbSelect['options'] | undefined;
  /**  */
  'on:expandbegin'?: ((e: CustomEvent) => void) | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbTagFilterProps = {
  /** Associate the label with an ID elsewhere. */
  for?: CfpbTagFilter['for'] | undefined;
  /**  */
  value?: CfpbTagFilter['value'] | undefined;

  /**  */
  'onitem-click'?: ((e: CustomEvent) => void) | undefined;
};

export type CfpbTagFilterSolidJsProps = {
  /** Associate the label with an ID elsewhere. */
  'prop:for'?: CfpbTagFilter['for'] | undefined;
  /**  */
  'prop:value'?: CfpbTagFilter['value'] | undefined;
  /**  */
  'on:item-click'?: ((e: CustomEvent) => void) | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbTagTopicProps = {
  /** href attribute, if this is a topic link. */
  href?: CfpbTagTopic['href'] | undefined;
  /** Whether the preceding sibling is a jump link or not. */
  siblingofjumplink?: CfpbTagTopic['siblingOfJumpLink'] | undefined;
  /** Whether the preceding sibling is a jump link or not. */
  siblingOfJumpLink?: CfpbTagTopic['siblingOfJumpLink'] | undefined;
};

export type CfpbTagTopicSolidJsProps = {
  /** href attribute, if this is a topic link. */
  'prop:href'?: CfpbTagTopic['href'] | undefined;
  /** Whether the preceding sibling is a jump link or not. */
  'bool:siblingofjumplink'?: CfpbTagTopic['siblingOfJumpLink'] | undefined;
  /** Whether the preceding sibling is a jump link or not. */
  'prop:siblingOfJumpLink'?: CfpbTagTopic['siblingOfJumpLink'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbTaglineProps = {
  /** Whether to use the larger tagline appearance. */
  islarge?: CfpbTagline['isLarge'] | undefined;
  /** Whether to use the larger tagline appearance. */
  isLarge?: CfpbTagline['isLarge'] | undefined;
};

export type CfpbTaglineSolidJsProps = {
  /** Whether to use the larger tagline appearance. */
  'bool:islarge'?: CfpbTagline['isLarge'] | undefined;
  /** Whether to use the larger tagline appearance. */
  'prop:isLarge'?: CfpbTagline['isLarge'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CustomElements = {
  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `status`: The alert status: error, success, warning, info, loading.
   * - `message`: The message heading on an alert.
   * - `icon`: undefined (property only) (readonly)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The main content for the tagline.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-alert': Partial<CfpbAlertProps & BaseProps<CfpbAlert> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `type`: The button type: button, submit, or reset.
   * - `href`: The URL to link to (makes the button a link).
   * - `disabled`: Whether the button is disabled or not.
   * - `variant`: The button variant: primary, secondary, or warning.
   * - `icon-left`/`iconLeft`: The name of the icon on the left.
   * - `icon-right`/`iconRight`: The name of the icon on the right.
   * - `icon-left-spin`/`isIconLeftSpin`: Whether the left icon spins or not.
   * - `icon-right-spin`/`isIconRightSpin`: Whether the right icon spins or not.
   * - `full-on-mobile`/`fullOnMobile`: Whether to be width 100% on mobile.
   * - `flush-left`/`flushLeft`: Whether button is not rounded on left.
   * - `flush-right`/`flushRight`: Whether button is not rounded on right.
   * - `style-as-link`/`styleAsLink`: Style the button as a link.
   * - `dividerColorVar`: undefined (property only) (readonly)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The main content for the button.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-button': Partial<CfpbButtonProps & BaseProps<CfpbButton> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `borderless`: Whether the checkbox has a border or not.
   * - `checked`: Whether the checkbox is checked or not.
   * - `disabled`: Whether the checkbox is disabled or not.
   * - `validation`: Validation style: error, warning, success.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `mouseover() => void`: undefined
   * - `mouseleave() => void`: undefined
   * - `focus() => void`: undefined
   * - `blur() => void`: undefined
   * - `init() => void`: undefined
   */
  'cfpb-checkbox-icon': Partial<
    CfpbCheckboxIconProps & BaseProps<CfpbCheckboxIcon> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`/`isExpanded`: Whether the expandable is expanded or not.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `expandbegin`: The expandable started expanding.
   * - `expandend`: The expandable finshed expanding.
   * - `collapsebegin`: The expandables started collapsing.
   * - `collapseend`: The expandables finished collapsing.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `header`: The header content for the expandable.
   * - `content`: The content within the expandable.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-expandable': Partial<
    CfpbExpandableProps & BaseProps<CfpbExpandable> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `accept`: undefined
   * - `isDetailHidden`: undefined (property only)
   * - `fileName`: undefined (property only)
   * - `files`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `file-change`: undefined
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The main content for the upload button.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-file-upload.': Partial<
    CfpbFileUploadProps & BaseProps<CfpbFileUpload> & BaseEvents
  >;

  /**
   *
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-flag-usa': Partial<
    CfpbFlagUsaProps & BaseProps<CfpbFlagUsa> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `validation`: Validation style: error, warning, success.
   * - `icon`: undefined (property only) (readonly)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The text for the form alert.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-form-alert': Partial<
    CfpbFormAlertProps & BaseProps<CfpbFormAlert> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `checked`: Whether the choice is checked or not.
   * - `disabled`: Whether the choice is disabled or not.
   * - `large`: Whether the choice has a large target area.
   * - `validation`: Validation style: error, warning, success.
   * - `type`: Choice type: checkbox or radio.
   * - `name`: The name within a form.
   * - `value`: The value to submit within a form.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `change`: undefined
   * - `input`: undefined
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The label for the form input.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `focus() => void`: undefined
   * - `init() => void`: undefined
   */
  'cfpb-form-choice': Partial<
    CfpbFormChoiceProps & BaseProps<CfpbFormChoice> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `disabled`: Whether the input is disabled or not.
   * - `validation`: Validation style: error, warning, success.
   * - `label`: The aria-label for the input.
   * - `name`: The name within a form.
   * - `title`: undefined
   * - `value`: The value within the input.
   * - `maxlength`: The maximum characters allowed in the input.
   * - `placeholder`: The placeholder value.
   * - `aria-label-input`/`ariaLabelInput`: aria-label for input.
   * - `aria-label-button`/`ariaLabelButton`: aria-label for button.
   * - `borderless`: Whether the input has a border or not.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `enter-down`: undefined
   * - `blur`: undefined
   * - `clear`: undefined
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `focus() => void`: undefined
   * - `init() => void`: undefined
   */
  'cfpb-form-search-input': Partial<
    CfpbFormSearchInputProps & BaseProps<CfpbFormSearchInput> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `disabled`: Whether the choice is disabled or not.
   * - `validation`: Validation style: error, warning, success.
   * - `label`: The aria-label for the input.
   * - `name`: The name within a form.
   * - `title`: undefined
   * - `value`: The value within the input.
   * - `maxlength`: The maximum characters allowed in the input.
   * - `placeholder`: The placeholder value.
   * - `aria-label-input`/`ariaLabelInput`: aria-label for input.
   * - `aria-label-button`/`ariaLabelButton`: aria-label for button.
   * - `searchlist`/`searchList`: undefined
   * - `isSearchDisabled`: undefined (property only) (readonly)
   * - `isOverMaxLength`: undefined (property only) (readonly)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: Slot for list of autocomplete items.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-form-search': Partial<
    CfpbFormSearchProps & BaseProps<CfpbFormSearch> & BaseEvents
  >;

  /**
   * This component represents a piece of text accompanied by an icon,
   * which may or may not have a divider.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `disabled`: Apply disabled styles or not.
   * - `icon-left`/`iconLeft`: The name of the icon on the left.
   * - `icon-right`/`iconRight`: The name of the icon on the right.
   * - `icon-left-spin`/`isIconLeftSpin`: Whether the left icon spins or not.
   * - `icon-right-spin`/`isIconRightSpin`: Whether the right icon spins or not.
   * - `has-div`/`hasDiv`: If true, render a divider.
   * - `underline`: "all" for all screen sizes, "tablet-up", for tablet and above, "none", for only on hover on tablet and above.
   * - `mobile-icon-align-end`/`mobileIconAlignEnd`: undefined
   * - `inline`: undefined
   * - `mobileUnderline`: If true render an underline at mobile. (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The main content for the text and icon.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-icon-text': Partial<
    CfpbIconTextProps & BaseProps<CfpbIconText> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `name`: The name of the icon.
   * - `spin`: undefined
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-icon': Partial<CfpbIconProps & BaseProps<CfpbIcon> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `block`: Whether this has block or inline helper text.
   * - `for`: Associate the label with an ID elsewhere.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The content for the label text.
   * - `helper`: The content for the label helper text.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-label.': Partial<CfpbLabelProps & BaseProps<CfpbLabel> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `link-variant`/`linkVariant`: undefined
   * - `size`: undefined
   * - `color-theme`/`colorTheme`: undefined
   * - `no-underline`/`noUnderline`: undefined
   * - `no-top-border`/`noTopBorder`: undefined
   * - `inline`: undefined
   * - `linkText`: undefined (property only)
   * - `linkAttributes`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: Slot for the link text.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   * - `renderLink() => void`: undefined
   */
  'cfpb-link.': Partial<CfpbLinkProps & BaseProps<CfpbLink> & BaseEvents>;

  /**
   *
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The content for the topic tag.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-list-item.': Partial<
    CfpbListItemProps & BaseProps<CfpbListItem> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `childdata`/`childData`: Structure data to create child components.
   * - `color-theme`/`colorTheme`: The color theme of the link. Takes 'dark'.
   * - `items`: undefined (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `item-click`: An item was clicked.
   * - `item-added`: An item was added to the group.
   * - `item-removed`: An item was removed to the group.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: Slot for the list of items in the list.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `focus() => void`: undefined
   * - `addItem(item: HTMLElement, index: number = -1) => boolean`: Add a item to the light and dark DOM.
   * - `removeItem(item: HTMLElement) => void`: Remove a filter item from the light and dark DOM.
   * - `init() => void`: undefined
   */
  'cfpb-list.': Partial<CfpbListProps & BaseProps<CfpbList> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `type`: Choice type: plain, check, checkbox.
   * - `checked`: Whether the list item is checked or not.
   * - `disabled`: Whether the list item is selectable or not.
   * - `hidden`: Whether the list item is hidden or not.
   * - `href`: undefined
   * - `value`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `item-click`: undefined
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The text for the list item.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-listbox-item.': Partial<
    CfpbListboxItemProps & BaseProps<CfpbListboxItem> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `childdata`/`childData`: Structure data to create child components.
   * - `multiple`: Whether the select supports multiple or not.
   * - `type`: List item type: plain, check, or checkbox.
   * - `aria-label`/`ariaLabel`: The aria-label for the list container.
   * - `items`: undefined (property only) (readonly)
   * - `checkedItems`: undefined (property only) (readonly)
   * - `visibleItems`: undefined (property only) (readonly)
   * - `visibleCheckedItems`: undefined (property only) (readonly)
   * - `focusedIndex`: undefined (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `items-ready`: undefined
   * - `item-click`: undefined
   * - `items-filter`: undefined
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: Slot for the list of items in the list box.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `filterItems(queryList: Array) => Array`: undefined
   * - `showAllItems() => void`: undefined
   * - `focusItemAt(index: number) => undefined`: Focus a visible item by index.
   * Pass -1 to move focus to the list container (no active item).
   * - `init() => void`: undefined
   */
  'cfpb-listbox.': Partial<
    CfpbListboxProps & BaseProps<CfpbListbox> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`/`currentPage`: The currently selected page.
   * - `max`/`maxPage`: The maximum page count.
   * - `lang`: undefined
   * - `isAtMin`: undefined (property only) (readonly)
   * - `isAtMax`: undefined (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `page-change`: undefined
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: Slot for passing in i18n (internationalization) service strings via a <template>.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-pagination': Partial<
    CfpbPaginationProps & BaseProps<CfpbPagination> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `multiple`: Whether the select supports multiple or not.
   * - `disabled`: undefined
   * - `validation`: undefined
   * - `label`: undefined
   * - `name`: undefined
   * - `title`: undefined
   * - `value`: undefined
   * - `maxlength`: undefined
   * - `placeholder`: undefined
   * - `aria-label-input`/`ariaLabelInput`: undefined
   * - `aria-label-list`/`ariaLabelList`: undefined
   * - `open`/`isExpanded`: Whether the select is expanded or not.
   * - `selectedtexts`/`selectedTexts`: Text of selected options.
   * - `optionlist`/`optionList`: undefined
   * - `options`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `expandbegin`: undefined
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The main content for the select.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-select': Partial<CfpbSelectProps & BaseProps<CfpbSelect> & BaseEvents>;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `for`: Associate the label with an ID elsewhere.
   * - `value`: undefined
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `item-click`: undefined
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The content for the filter tag.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `focus() => void`: undefined
   * - `init() => void`: undefined
   */
  'cfpb-tag-filter': Partial<
    CfpbTagFilterProps & BaseProps<CfpbTagFilter> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `href`: href attribute, if this is a topic link.
   * - `siblingofjumplink`/`siblingOfJumpLink`: Whether the preceding sibling is a jump link or not.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The content for the topic tag.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `focus() => void`: undefined
   * - `init() => void`: undefined
   */
  'cfpb-tag-topic.': Partial<
    CfpbTagTopicProps & BaseProps<CfpbTagTopic> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `islarge`/`isLarge`: Whether to use the larger tagline appearance.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The main content for the tagline.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-tagline': Partial<
    CfpbTaglineProps & BaseProps<CfpbTagline> & BaseEvents
  >;
};

export type CustomElementsSolidJs = {
  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `status`: The alert status: error, success, warning, info, loading.
   * - `message`: The message heading on an alert.
   * - `icon`: undefined (property only) (readonly)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The main content for the tagline.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-alert': Partial<
    CfpbAlertProps & CfpbAlertSolidJsProps & BaseProps<CfpbAlert> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `type`: The button type: button, submit, or reset.
   * - `href`: The URL to link to (makes the button a link).
   * - `disabled`: Whether the button is disabled or not.
   * - `variant`: The button variant: primary, secondary, or warning.
   * - `icon-left`/`iconLeft`: The name of the icon on the left.
   * - `icon-right`/`iconRight`: The name of the icon on the right.
   * - `icon-left-spin`/`isIconLeftSpin`: Whether the left icon spins or not.
   * - `icon-right-spin`/`isIconRightSpin`: Whether the right icon spins or not.
   * - `full-on-mobile`/`fullOnMobile`: Whether to be width 100% on mobile.
   * - `flush-left`/`flushLeft`: Whether button is not rounded on left.
   * - `flush-right`/`flushRight`: Whether button is not rounded on right.
   * - `style-as-link`/`styleAsLink`: Style the button as a link.
   * - `dividerColorVar`: undefined (property only) (readonly)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The main content for the button.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-button': Partial<
    CfpbButtonProps &
      CfpbButtonSolidJsProps &
      BaseProps<CfpbButton> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `borderless`: Whether the checkbox has a border or not.
   * - `checked`: Whether the checkbox is checked or not.
   * - `disabled`: Whether the checkbox is disabled or not.
   * - `validation`: Validation style: error, warning, success.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `mouseover() => void`: undefined
   * - `mouseleave() => void`: undefined
   * - `focus() => void`: undefined
   * - `blur() => void`: undefined
   * - `init() => void`: undefined
   */
  'cfpb-checkbox-icon': Partial<
    CfpbCheckboxIconProps &
      CfpbCheckboxIconSolidJsProps &
      BaseProps<CfpbCheckboxIcon> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `open`/`isExpanded`: Whether the expandable is expanded or not.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `expandbegin`: The expandable started expanding.
   * - `expandend`: The expandable finshed expanding.
   * - `collapsebegin`: The expandables started collapsing.
   * - `collapseend`: The expandables finished collapsing.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `header`: The header content for the expandable.
   * - `content`: The content within the expandable.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-expandable': Partial<
    CfpbExpandableProps &
      CfpbExpandableSolidJsProps &
      BaseProps<CfpbExpandable> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `accept`: undefined
   * - `isDetailHidden`: undefined (property only)
   * - `fileName`: undefined (property only)
   * - `files`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `file-change`: undefined
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The main content for the upload button.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-file-upload.': Partial<
    CfpbFileUploadProps &
      CfpbFileUploadSolidJsProps &
      BaseProps<CfpbFileUpload> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-flag-usa': Partial<
    CfpbFlagUsaProps &
      CfpbFlagUsaSolidJsProps &
      BaseProps<CfpbFlagUsa> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `validation`: Validation style: error, warning, success.
   * - `icon`: undefined (property only) (readonly)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The text for the form alert.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-form-alert': Partial<
    CfpbFormAlertProps &
      CfpbFormAlertSolidJsProps &
      BaseProps<CfpbFormAlert> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `checked`: Whether the choice is checked or not.
   * - `disabled`: Whether the choice is disabled or not.
   * - `large`: Whether the choice has a large target area.
   * - `validation`: Validation style: error, warning, success.
   * - `type`: Choice type: checkbox or radio.
   * - `name`: The name within a form.
   * - `value`: The value to submit within a form.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `change`: undefined
   * - `input`: undefined
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The label for the form input.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `focus() => void`: undefined
   * - `init() => void`: undefined
   */
  'cfpb-form-choice': Partial<
    CfpbFormChoiceProps &
      CfpbFormChoiceSolidJsProps &
      BaseProps<CfpbFormChoice> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `disabled`: Whether the input is disabled or not.
   * - `validation`: Validation style: error, warning, success.
   * - `label`: The aria-label for the input.
   * - `name`: The name within a form.
   * - `title`: undefined
   * - `value`: The value within the input.
   * - `maxlength`: The maximum characters allowed in the input.
   * - `placeholder`: The placeholder value.
   * - `aria-label-input`/`ariaLabelInput`: aria-label for input.
   * - `aria-label-button`/`ariaLabelButton`: aria-label for button.
   * - `borderless`: Whether the input has a border or not.
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `enter-down`: undefined
   * - `blur`: undefined
   * - `clear`: undefined
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `focus() => void`: undefined
   * - `init() => void`: undefined
   */
  'cfpb-form-search-input': Partial<
    CfpbFormSearchInputProps &
      CfpbFormSearchInputSolidJsProps &
      BaseProps<CfpbFormSearchInput> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `disabled`: Whether the choice is disabled or not.
   * - `validation`: Validation style: error, warning, success.
   * - `label`: The aria-label for the input.
   * - `name`: The name within a form.
   * - `title`: undefined
   * - `value`: The value within the input.
   * - `maxlength`: The maximum characters allowed in the input.
   * - `placeholder`: The placeholder value.
   * - `aria-label-input`/`ariaLabelInput`: aria-label for input.
   * - `aria-label-button`/`ariaLabelButton`: aria-label for button.
   * - `searchlist`/`searchList`: undefined
   * - `isSearchDisabled`: undefined (property only) (readonly)
   * - `isOverMaxLength`: undefined (property only) (readonly)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: Slot for list of autocomplete items.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-form-search': Partial<
    CfpbFormSearchProps &
      CfpbFormSearchSolidJsProps &
      BaseProps<CfpbFormSearch> &
      BaseEvents
  >;

  /**
   * This component represents a piece of text accompanied by an icon,
   * which may or may not have a divider.
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `disabled`: Apply disabled styles or not.
   * - `icon-left`/`iconLeft`: The name of the icon on the left.
   * - `icon-right`/`iconRight`: The name of the icon on the right.
   * - `icon-left-spin`/`isIconLeftSpin`: Whether the left icon spins or not.
   * - `icon-right-spin`/`isIconRightSpin`: Whether the right icon spins or not.
   * - `has-div`/`hasDiv`: If true, render a divider.
   * - `underline`: "all" for all screen sizes, "tablet-up", for tablet and above, "none", for only on hover on tablet and above.
   * - `mobile-icon-align-end`/`mobileIconAlignEnd`: undefined
   * - `inline`: undefined
   * - `mobileUnderline`: If true render an underline at mobile. (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The main content for the text and icon.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-icon-text': Partial<
    CfpbIconTextProps &
      CfpbIconTextSolidJsProps &
      BaseProps<CfpbIconText> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `name`: The name of the icon.
   * - `spin`: undefined
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-icon': Partial<
    CfpbIconProps & CfpbIconSolidJsProps & BaseProps<CfpbIcon> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `block`: Whether this has block or inline helper text.
   * - `for`: Associate the label with an ID elsewhere.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `label`: The content for the label text.
   * - `helper`: The content for the label helper text.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-label.': Partial<
    CfpbLabelProps & CfpbLabelSolidJsProps & BaseProps<CfpbLabel> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `link-variant`/`linkVariant`: undefined
   * - `size`: undefined
   * - `color-theme`/`colorTheme`: undefined
   * - `no-underline`/`noUnderline`: undefined
   * - `no-top-border`/`noTopBorder`: undefined
   * - `inline`: undefined
   * - `linkText`: undefined (property only)
   * - `linkAttributes`: undefined (property only)
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: Slot for the link text.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   * - `renderLink() => void`: undefined
   */
  'cfpb-link.': Partial<
    CfpbLinkProps & CfpbLinkSolidJsProps & BaseProps<CfpbLink> & BaseEvents
  >;

  /**
   *
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The content for the topic tag.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-list-item.': Partial<
    CfpbListItemProps &
      CfpbListItemSolidJsProps &
      BaseProps<CfpbListItem> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `childdata`/`childData`: Structure data to create child components.
   * - `color-theme`/`colorTheme`: The color theme of the link. Takes 'dark'.
   * - `items`: undefined (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `item-click`: An item was clicked.
   * - `item-added`: An item was added to the group.
   * - `item-removed`: An item was removed to the group.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: Slot for the list of items in the list.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `focus() => void`: undefined
   * - `addItem(item: HTMLElement, index: number = -1) => boolean`: Add a item to the light and dark DOM.
   * - `removeItem(item: HTMLElement) => void`: Remove a filter item from the light and dark DOM.
   * - `init() => void`: undefined
   */
  'cfpb-list.': Partial<
    CfpbListProps & CfpbListSolidJsProps & BaseProps<CfpbList> & BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `type`: Choice type: plain, check, checkbox.
   * - `checked`: Whether the list item is checked or not.
   * - `disabled`: Whether the list item is selectable or not.
   * - `hidden`: Whether the list item is hidden or not.
   * - `href`: undefined
   * - `value`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `item-click`: undefined
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The text for the list item.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-listbox-item.': Partial<
    CfpbListboxItemProps &
      CfpbListboxItemSolidJsProps &
      BaseProps<CfpbListboxItem> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `childdata`/`childData`: Structure data to create child components.
   * - `multiple`: Whether the select supports multiple or not.
   * - `type`: List item type: plain, check, or checkbox.
   * - `aria-label`/`ariaLabel`: The aria-label for the list container.
   * - `items`: undefined (property only) (readonly)
   * - `checkedItems`: undefined (property only) (readonly)
   * - `visibleItems`: undefined (property only) (readonly)
   * - `visibleCheckedItems`: undefined (property only) (readonly)
   * - `focusedIndex`: undefined (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `items-ready`: undefined
   * - `item-click`: undefined
   * - `items-filter`: undefined
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: Slot for the list of items in the list box.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `filterItems(queryList: Array) => Array`: undefined
   * - `showAllItems() => void`: undefined
   * - `focusItemAt(index: number) => undefined`: Focus a visible item by index.
   * Pass -1 to move focus to the list container (no active item).
   * - `init() => void`: undefined
   */
  'cfpb-listbox.': Partial<
    CfpbListboxProps &
      CfpbListboxSolidJsProps &
      BaseProps<CfpbListbox> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `value`/`currentPage`: The currently selected page.
   * - `max`/`maxPage`: The maximum page count.
   * - `lang`: undefined
   * - `isAtMin`: undefined (property only) (readonly)
   * - `isAtMax`: undefined (property only) (readonly)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `page-change`: undefined
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: Slot for passing in i18n (internationalization) service strings via a <template>.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-pagination': Partial<
    CfpbPaginationProps &
      CfpbPaginationSolidJsProps &
      BaseProps<CfpbPagination> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `multiple`: Whether the select supports multiple or not.
   * - `disabled`: undefined
   * - `validation`: undefined
   * - `label`: undefined
   * - `name`: undefined
   * - `title`: undefined
   * - `value`: undefined
   * - `maxlength`: undefined
   * - `placeholder`: undefined
   * - `aria-label-input`/`ariaLabelInput`: undefined
   * - `aria-label-list`/`ariaLabelList`: undefined
   * - `open`/`isExpanded`: Whether the select is expanded or not.
   * - `selectedtexts`/`selectedTexts`: Text of selected options.
   * - `optionlist`/`optionList`: undefined
   * - `options`: undefined (property only)
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `expandbegin`: undefined
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The main content for the select.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-select': Partial<
    CfpbSelectProps &
      CfpbSelectSolidJsProps &
      BaseProps<CfpbSelect> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `for`: Associate the label with an ID elsewhere.
   * - `value`: undefined
   *
   * ## Events
   *
   * Events that will be emitted by the component.
   *
   * - `item-click`: undefined
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The content for the filter tag.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `focus() => void`: undefined
   * - `init() => void`: undefined
   */
  'cfpb-tag-filter': Partial<
    CfpbTagFilterProps &
      CfpbTagFilterSolidJsProps &
      BaseProps<CfpbTagFilter> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `href`: href attribute, if this is a topic link.
   * - `siblingofjumplink`/`siblingOfJumpLink`: Whether the preceding sibling is a jump link or not.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The content for the topic tag.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `focus() => void`: undefined
   * - `init() => void`: undefined
   */
  'cfpb-tag-topic.': Partial<
    CfpbTagTopicProps &
      CfpbTagTopicSolidJsProps &
      BaseProps<CfpbTagTopic> &
      BaseEvents
  >;

  /**
   *
   *
   * ## Attributes & Properties
   *
   * Component attributes and properties that can be applied to the element or by using JavaScript.
   *
   * - `islarge`/`isLarge`: Whether to use the larger tagline appearance.
   *
   * ## Slots
   *
   * Areas where markup can be added to the component.
   *
   * - `(default)`: The main content for the tagline.
   *
   * ## Methods
   *
   * Methods that can be called to access component functionality.
   *
   * - `init() => void`: undefined
   */
  'cfpb-tagline': Partial<
    CfpbTaglineProps &
      CfpbTaglineSolidJsProps &
      BaseProps<CfpbTagline> &
      BaseEvents
  >;
};

export type CustomCssProperties = {};

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module 'react/jsx-dev-runtime' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module '@builder.io/qwik' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module '@stencil/core' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module 'hono/jsx' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module 'react-native' {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements extends CustomElementsSolidJs {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends CustomElements {}
  }
  export interface CSSProperties extends CustomCssProperties {}
}
