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
  /**  */
  status?: CfpbAlert['status'] | undefined;
  /**  */
  message?: CfpbAlert['message'] | undefined;
};

export type CfpbAlertSolidJsProps = {
  /**  */
  'prop:status'?: CfpbAlert['status'] | undefined;
  /**  */
  'prop:message'?: CfpbAlert['message'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbButtonProps = {
  /**  */
  type?: CfpbButton['type'] | undefined;
  /**  */
  href?: CfpbButton['href'] | undefined;
  /**  */
  disabled?: CfpbButton['disabled'] | undefined;
  /**  */
  variant?: CfpbButton['variant'] | undefined;
  /**  */
  'icon-left'?: CfpbButton['iconLeft'] | undefined;
  /**  */
  iconLeft?: CfpbButton['iconLeft'] | undefined;
  /**  */
  'icon-right'?: CfpbButton['iconRight'] | undefined;
  /**  */
  iconRight?: CfpbButton['iconRight'] | undefined;
  /**  */
  'icon-left-spin'?: CfpbButton['isIconLeftSpin'] | undefined;
  /**  */
  isIconLeftSpin?: CfpbButton['isIconLeftSpin'] | undefined;
  /**  */
  'icon-right-spin'?: CfpbButton['isIconRightSpin'] | undefined;
  /**  */
  isIconRightSpin?: CfpbButton['isIconRightSpin'] | undefined;
  /**  */
  'full-on-mobile'?: CfpbButton['fullOnMobile'] | undefined;
  /**  */
  fullOnMobile?: CfpbButton['fullOnMobile'] | undefined;
  /**  */
  'flush-left'?: CfpbButton['flushLeft'] | undefined;
  /**  */
  flushLeft?: CfpbButton['flushLeft'] | undefined;
  /**  */
  'flush-right'?: CfpbButton['flushRight'] | undefined;
  /**  */
  flushRight?: CfpbButton['flushRight'] | undefined;
  /**  */
  'style-as-link'?: CfpbButton['styleAsLink'] | undefined;
  /**  */
  styleAsLink?: CfpbButton['styleAsLink'] | undefined;
};

export type CfpbButtonSolidJsProps = {
  /**  */
  'prop:type'?: CfpbButton['type'] | undefined;
  /**  */
  'prop:href'?: CfpbButton['href'] | undefined;
  /**  */
  'prop:disabled'?: CfpbButton['disabled'] | undefined;
  /**  */
  'prop:variant'?: CfpbButton['variant'] | undefined;
  /**  */
  'attr:icon-left'?: CfpbButton['iconLeft'] | undefined;
  /**  */
  'prop:iconLeft'?: CfpbButton['iconLeft'] | undefined;
  /**  */
  'attr:icon-right'?: CfpbButton['iconRight'] | undefined;
  /**  */
  'prop:iconRight'?: CfpbButton['iconRight'] | undefined;
  /**  */
  'bool:icon-left-spin'?: CfpbButton['isIconLeftSpin'] | undefined;
  /**  */
  'prop:isIconLeftSpin'?: CfpbButton['isIconLeftSpin'] | undefined;
  /**  */
  'bool:icon-right-spin'?: CfpbButton['isIconRightSpin'] | undefined;
  /**  */
  'prop:isIconRightSpin'?: CfpbButton['isIconRightSpin'] | undefined;
  /**  */
  'bool:full-on-mobile'?: CfpbButton['fullOnMobile'] | undefined;
  /**  */
  'prop:fullOnMobile'?: CfpbButton['fullOnMobile'] | undefined;
  /**  */
  'bool:flush-left'?: CfpbButton['flushLeft'] | undefined;
  /**  */
  'prop:flushLeft'?: CfpbButton['flushLeft'] | undefined;
  /**  */
  'bool:flush-right'?: CfpbButton['flushRight'] | undefined;
  /**  */
  'prop:flushRight'?: CfpbButton['flushRight'] | undefined;
  /**  */
  'bool:style-as-link'?: CfpbButton['styleAsLink'] | undefined;
  /**  */
  'prop:styleAsLink'?: CfpbButton['styleAsLink'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbCheckboxIconProps = {
  /**  */
  borderless?: CfpbCheckboxIcon['borderless'] | undefined;
  /**  */
  checked?: CfpbCheckboxIcon['checked'] | undefined;
  /**  */
  disabled?: CfpbCheckboxIcon['disabled'] | undefined;
  /**  */
  validation?: CfpbCheckboxIcon['validation'] | undefined;
};

export type CfpbCheckboxIconSolidJsProps = {
  /**  */
  'prop:borderless'?: CfpbCheckboxIcon['borderless'] | undefined;
  /**  */
  'prop:checked'?: CfpbCheckboxIcon['checked'] | undefined;
  /**  */
  'prop:disabled'?: CfpbCheckboxIcon['disabled'] | undefined;
  /**  */
  'prop:validation'?: CfpbCheckboxIcon['validation'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbExpandableProps = {
  /**  */
  open?: CfpbExpandable['isExpanded'] | undefined;
  /**  */
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
  /**  */
  'bool:open'?: CfpbExpandable['isExpanded'] | undefined;
  /**  */
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
  /**  */
  validation?: CfpbFormAlert['validation'] | undefined;
};

export type CfpbFormAlertSolidJsProps = {
  /**  */
  'prop:validation'?: CfpbFormAlert['validation'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbFormChoiceProps = {
  /**  */
  checked?: CfpbFormChoice['checked'] | undefined;
  /**  */
  disabled?: CfpbFormChoice['disabled'] | undefined;
  /**  */
  large?: CfpbFormChoice['large'] | undefined;
  /**  */
  validation?: CfpbFormChoice['validation'] | undefined;
  /**  */
  type?: CfpbFormChoice['type'] | undefined;
  /**  */
  name?: CfpbFormChoice['name'] | undefined;
  /**  */
  value?: CfpbFormChoice['value'] | undefined;

  /**  */
  onchange?: ((e: Event) => void) | undefined;
  /**  */
  oninput?: ((e: Event) => void) | undefined;
};

export type CfpbFormChoiceSolidJsProps = {
  /**  */
  'prop:checked'?: CfpbFormChoice['checked'] | undefined;
  /**  */
  'prop:disabled'?: CfpbFormChoice['disabled'] | undefined;
  /**  */
  'prop:large'?: CfpbFormChoice['large'] | undefined;
  /**  */
  'prop:validation'?: CfpbFormChoice['validation'] | undefined;
  /**  */
  'prop:type'?: CfpbFormChoice['type'] | undefined;
  /**  */
  'prop:name'?: CfpbFormChoice['name'] | undefined;
  /**  */
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
  /**  */
  disabled?: CfpbFormSearchInput['disabled'] | undefined;
  /**  */
  validation?: CfpbFormSearchInput['validation'] | undefined;
  /**  */
  label?: CfpbFormSearchInput['label'] | undefined;
  /**  */
  name?: CfpbFormSearchInput['name'] | undefined;
  /**  */
  title?: CfpbFormSearchInput['title'] | undefined;
  /**  */
  value?: CfpbFormSearchInput['value'] | undefined;
  /**  */
  maxlength?: CfpbFormSearchInput['maxlength'] | undefined;
  /**  */
  placeholder?: CfpbFormSearchInput['placeholder'] | undefined;
  /**  */
  'aria-label-input'?: CfpbFormSearchInput['ariaLabelInput'] | undefined;
  /**  */
  ariaLabelInput?: CfpbFormSearchInput['ariaLabelInput'] | undefined;
  /**  */
  'aria-label-button'?: CfpbFormSearchInput['ariaLabelButton'] | undefined;
  /**  */
  ariaLabelButton?: CfpbFormSearchInput['ariaLabelButton'] | undefined;
  /**  */
  borderless?: CfpbFormSearchInput['borderless'] | undefined;

  /**  */
  'onenter-down'?: ((e: CustomEvent) => void) | undefined;
  /**  */
  onblur?: ((e: Event) => void) | undefined;
  /**  */
  onclear?: ((e: CustomEvent) => void) | undefined;
};

export type CfpbFormSearchInputSolidJsProps = {
  /**  */
  'prop:disabled'?: CfpbFormSearchInput['disabled'] | undefined;
  /**  */
  'prop:validation'?: CfpbFormSearchInput['validation'] | undefined;
  /**  */
  'prop:label'?: CfpbFormSearchInput['label'] | undefined;
  /**  */
  'prop:name'?: CfpbFormSearchInput['name'] | undefined;
  /**  */
  'prop:title'?: CfpbFormSearchInput['title'] | undefined;
  /**  */
  'prop:value'?: CfpbFormSearchInput['value'] | undefined;
  /**  */
  'prop:maxlength'?: CfpbFormSearchInput['maxlength'] | undefined;
  /**  */
  'prop:placeholder'?: CfpbFormSearchInput['placeholder'] | undefined;
  /**  */
  'attr:aria-label-input'?: CfpbFormSearchInput['ariaLabelInput'] | undefined;
  /**  */
  'prop:ariaLabelInput'?: CfpbFormSearchInput['ariaLabelInput'] | undefined;
  /**  */
  'attr:aria-label-button'?: CfpbFormSearchInput['ariaLabelButton'] | undefined;
  /**  */
  'prop:ariaLabelButton'?: CfpbFormSearchInput['ariaLabelButton'] | undefined;
  /**  */
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
  /**  */
  disabled?: CfpbFormSearch['disabled'] | undefined;
  /**  */
  validation?: CfpbFormSearch['validation'] | undefined;
  /**  */
  label?: CfpbFormSearch['label'] | undefined;
  /**  */
  name?: CfpbFormSearch['name'] | undefined;
  /**  */
  title?: CfpbFormSearch['title'] | undefined;
  /**  */
  value?: CfpbFormSearch['value'] | undefined;
  /**  */
  maxlength?: CfpbFormSearch['maxlength'] | undefined;
  /**  */
  placeholder?: CfpbFormSearch['placeholder'] | undefined;
  /**  */
  'aria-label-input'?: CfpbFormSearch['ariaLabelInput'] | undefined;
  /**  */
  ariaLabelInput?: CfpbFormSearch['ariaLabelInput'] | undefined;
  /**  */
  'aria-label-button'?: CfpbFormSearch['ariaLabelButton'] | undefined;
  /**  */
  ariaLabelButton?: CfpbFormSearch['ariaLabelButton'] | undefined;
  /**  */
  searchlist?: CfpbFormSearch['searchList'] | undefined;
  /**  */
  searchList?: CfpbFormSearch['searchList'] | undefined;
};

export type CfpbFormSearchSolidJsProps = {
  /**  */
  'prop:disabled'?: CfpbFormSearch['disabled'] | undefined;
  /**  */
  'prop:validation'?: CfpbFormSearch['validation'] | undefined;
  /**  */
  'prop:label'?: CfpbFormSearch['label'] | undefined;
  /**  */
  'prop:name'?: CfpbFormSearch['name'] | undefined;
  /**  */
  'prop:title'?: CfpbFormSearch['title'] | undefined;
  /**  */
  'prop:value'?: CfpbFormSearch['value'] | undefined;
  /**  */
  'prop:maxlength'?: CfpbFormSearch['maxlength'] | undefined;
  /**  */
  'prop:placeholder'?: CfpbFormSearch['placeholder'] | undefined;
  /**  */
  'attr:aria-label-input'?: CfpbFormSearch['ariaLabelInput'] | undefined;
  /**  */
  'prop:ariaLabelInput'?: CfpbFormSearch['ariaLabelInput'] | undefined;
  /**  */
  'attr:aria-label-button'?: CfpbFormSearch['ariaLabelButton'] | undefined;
  /**  */
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
  /**  */
  disabled?: CfpbIconText['disabled'] | undefined;
  /**  */
  'icon-left'?: CfpbIconText['iconLeft'] | undefined;
  /**  */
  iconLeft?: CfpbIconText['iconLeft'] | undefined;
  /**  */
  'icon-right'?: CfpbIconText['iconRight'] | undefined;
  /**  */
  iconRight?: CfpbIconText['iconRight'] | undefined;
  /**  */
  'icon-left-spin'?: CfpbIconText['isIconLeftSpin'] | undefined;
  /**  */
  isIconLeftSpin?: CfpbIconText['isIconLeftSpin'] | undefined;
  /**  */
  'icon-right-spin'?: CfpbIconText['isIconRightSpin'] | undefined;
  /**  */
  isIconRightSpin?: CfpbIconText['isIconRightSpin'] | undefined;
  /**  */
  'has-div'?: CfpbIconText['hasDiv'] | undefined;
  /**  */
  hasDiv?: CfpbIconText['hasDiv'] | undefined;
  /**  */
  underline?: CfpbIconText['underline'] | undefined;
  /**  */
  'mobile-icon-align-end'?: CfpbIconText['mobileIconAlignEnd'] | undefined;
  /**  */
  mobileIconAlignEnd?: CfpbIconText['mobileIconAlignEnd'] | undefined;
  /**  */
  inline?: CfpbIconText['inline'] | undefined;
};

export type CfpbIconTextSolidJsProps = {
  /**  */
  'prop:disabled'?: CfpbIconText['disabled'] | undefined;
  /**  */
  'attr:icon-left'?: CfpbIconText['iconLeft'] | undefined;
  /**  */
  'prop:iconLeft'?: CfpbIconText['iconLeft'] | undefined;
  /**  */
  'attr:icon-right'?: CfpbIconText['iconRight'] | undefined;
  /**  */
  'prop:iconRight'?: CfpbIconText['iconRight'] | undefined;
  /**  */
  'bool:icon-left-spin'?: CfpbIconText['isIconLeftSpin'] | undefined;
  /**  */
  'prop:isIconLeftSpin'?: CfpbIconText['isIconLeftSpin'] | undefined;
  /**  */
  'bool:icon-right-spin'?: CfpbIconText['isIconRightSpin'] | undefined;
  /**  */
  'prop:isIconRightSpin'?: CfpbIconText['isIconRightSpin'] | undefined;
  /**  */
  'bool:has-div'?: CfpbIconText['hasDiv'] | undefined;
  /**  */
  'prop:hasDiv'?: CfpbIconText['hasDiv'] | undefined;
  /**  */
  'prop:underline'?: CfpbIconText['underline'] | undefined;
  /**  */
  'bool:mobile-icon-align-end'?: CfpbIconText['mobileIconAlignEnd'] | undefined;
  /**  */
  'prop:mobileIconAlignEnd'?: CfpbIconText['mobileIconAlignEnd'] | undefined;
  /**  */
  'prop:inline'?: CfpbIconText['inline'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbIconProps = {
  /**  */
  name?: CfpbIcon['name'] | undefined;
  /**  */
  spin?: CfpbIcon['spin'] | undefined;
};

export type CfpbIconSolidJsProps = {
  /**  */
  'prop:name'?: CfpbIcon['name'] | undefined;
  /**  */
  'prop:spin'?: CfpbIcon['spin'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbLabelProps = {
  /**  */
  block?: CfpbLabel['block'] | undefined;
  /**  */
  for?: CfpbLabel['for'] | undefined;
};

export type CfpbLabelSolidJsProps = {
  /**  */
  'prop:block'?: CfpbLabel['block'] | undefined;
  /**  */
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
  /**  */
  childdata?: CfpbList['childData'] | undefined;
  /**  */
  childData?: CfpbList['childData'] | undefined;
  /**  */
  'color-theme'?: CfpbList['colorTheme'] | undefined;
  /**  */
  colorTheme?: CfpbList['colorTheme'] | undefined;

  /** An item was clicked. */
  'onitem-click'?: ((e: CustomEvent) => void) | undefined;
  /** An item was added to the group. */
  'onitem-added'?: ((e: CustomEvent) => void) | undefined;
  /** An item was removed to the group. */
  'onitem-removed'?: ((e: CustomEvent) => void) | undefined;
};

export type CfpbListSolidJsProps = {
  /**  */
  'attr:childdata'?: CfpbList['childData'] | undefined;
  /**  */
  'prop:childData'?: CfpbList['childData'] | undefined;
  /**  */
  'attr:color-theme'?: CfpbList['colorTheme'] | undefined;
  /**  */
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
  /**  */
  type?: CfpbListboxItem['type'] | undefined;
  /**  */
  checked?: CfpbListboxItem['checked'] | undefined;
  /**  */
  disabled?: CfpbListboxItem['disabled'] | undefined;
  /**  */
  hidden?: CfpbListboxItem['hidden'] | undefined;
  /**  */
  href?: CfpbListboxItem['href'] | undefined;
  /**  */
  value?: CfpbListboxItem['value'] | undefined;

  /**  */
  'onitem-click'?: ((e: CustomEvent) => void) | undefined;
};

export type CfpbListboxItemSolidJsProps = {
  /**  */
  'prop:type'?: CfpbListboxItem['type'] | undefined;
  /**  */
  'prop:checked'?: CfpbListboxItem['checked'] | undefined;
  /**  */
  'prop:disabled'?: CfpbListboxItem['disabled'] | undefined;
  /**  */
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
  /**  */
  childdata?: CfpbListbox['childData'] | undefined;
  /**  */
  childData?: CfpbListbox['childData'] | undefined;
  /**  */
  multiple?: CfpbListbox['multiple'] | undefined;
  /**  */
  type?: CfpbListbox['type'] | undefined;
  /**  */
  'aria-label'?: CfpbListbox['ariaLabel'] | undefined;
  /**  */
  ariaLabel?: CfpbListbox['ariaLabel'] | undefined;

  /**  */
  'onitems-ready'?: ((e: CustomEvent) => void) | undefined;
  /**  */
  'onitem-click'?: ((e: CustomEvent) => void) | undefined;
  /**  */
  'onitems-filter'?: ((e: CustomEvent) => void) | undefined;
};

export type CfpbListboxSolidJsProps = {
  /**  */
  'attr:childdata'?: CfpbListbox['childData'] | undefined;
  /**  */
  'prop:childData'?: CfpbListbox['childData'] | undefined;
  /**  */
  'prop:multiple'?: CfpbListbox['multiple'] | undefined;
  /**  */
  'prop:type'?: CfpbListbox['type'] | undefined;
  /**  */
  'attr:aria-label'?: CfpbListbox['ariaLabel'] | undefined;
  /**  */
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
  /**  */
  value?: CfpbPagination['currentPage'] | undefined;
  /**  */
  currentPage?: CfpbPagination['currentPage'] | undefined;
  /**  */
  max?: CfpbPagination['maxPage'] | undefined;
  /**  */
  maxPage?: CfpbPagination['maxPage'] | undefined;
  /**  */
  lang?: CfpbPagination['lang'] | undefined;

  /**  */
  'onpage-change'?: ((e: CustomEvent) => void) | undefined;
};

export type CfpbPaginationSolidJsProps = {
  /**  */
  'attr:value'?: CfpbPagination['currentPage'] | undefined;
  /**  */
  'prop:currentPage'?: CfpbPagination['currentPage'] | undefined;
  /**  */
  'attr:max'?: CfpbPagination['maxPage'] | undefined;
  /**  */
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
  /**  */
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
  /**  */
  open?: CfpbSelect['isExpanded'] | undefined;
  /**  */
  isExpanded?: CfpbSelect['isExpanded'] | undefined;
  /**  */
  selectedtexts?: CfpbSelect['selectedTexts'] | undefined;
  /**  */
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
  /**  */
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
  /**  */
  'bool:open'?: CfpbSelect['isExpanded'] | undefined;
  /**  */
  'prop:isExpanded'?: CfpbSelect['isExpanded'] | undefined;
  /**  */
  'attr:selectedtexts'?: CfpbSelect['selectedTexts'] | undefined;
  /**  */
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
  /**  */
  for?: CfpbTagFilter['for'] | undefined;
  /**  */
  value?: CfpbTagFilter['value'] | undefined;

  /**  */
  'onitem-click'?: ((e: CustomEvent) => void) | undefined;
};

export type CfpbTagFilterSolidJsProps = {
  /**  */
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
  /**  */
  href?: CfpbTagTopic['href'] | undefined;
  /**  */
  siblingofjumplink?: CfpbTagTopic['siblingOfJumpLink'] | undefined;
  /**  */
  siblingOfJumpLink?: CfpbTagTopic['siblingOfJumpLink'] | undefined;
};

export type CfpbTagTopicSolidJsProps = {
  /**  */
  'prop:href'?: CfpbTagTopic['href'] | undefined;
  /**  */
  'bool:siblingofjumplink'?: CfpbTagTopic['siblingOfJumpLink'] | undefined;
  /**  */
  'prop:siblingOfJumpLink'?: CfpbTagTopic['siblingOfJumpLink'] | undefined;

  /** Set the innerHTML of the element */
  innerHTML?: string | undefined;
  /** Set the textContent of the element */
  textContent?: string | number | undefined;
};

export type CfpbTaglineProps = {
  /**  */
  islarge?: CfpbTagline['isLarge'] | undefined;
  /**  */
  isLarge?: CfpbTagline['isLarge'] | undefined;
};

export type CfpbTaglineSolidJsProps = {
  /**  */
  'bool:islarge'?: CfpbTagline['isLarge'] | undefined;
  /**  */
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
   * - `status`: undefined
   * - `message`: undefined
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
   * - `type`: undefined
   * - `href`: undefined
   * - `disabled`: undefined
   * - `variant`: undefined
   * - `icon-left`/`iconLeft`: undefined
   * - `icon-right`/`iconRight`: undefined
   * - `icon-left-spin`/`isIconLeftSpin`: undefined
   * - `icon-right-spin`/`isIconRightSpin`: undefined
   * - `full-on-mobile`/`fullOnMobile`: undefined
   * - `flush-left`/`flushLeft`: undefined
   * - `flush-right`/`flushRight`: undefined
   * - `style-as-link`/`styleAsLink`: undefined
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
   * - `borderless`: undefined
   * - `checked`: undefined
   * - `disabled`: undefined
   * - `validation`: undefined
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
   * - `open`/`isExpanded`: undefined
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
   * - `validation`: undefined
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
   * - `checked`: undefined
   * - `disabled`: undefined
   * - `large`: undefined
   * - `validation`: undefined
   * - `type`: undefined
   * - `name`: undefined
   * - `value`: undefined
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
   * - `disabled`: undefined
   * - `validation`: undefined
   * - `label`: undefined
   * - `name`: undefined
   * - `title`: undefined
   * - `value`: undefined
   * - `maxlength`: undefined
   * - `placeholder`: undefined
   * - `aria-label-input`/`ariaLabelInput`: undefined
   * - `aria-label-button`/`ariaLabelButton`: undefined
   * - `borderless`: undefined
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
   * - `disabled`: undefined
   * - `validation`: undefined
   * - `label`: undefined
   * - `name`: undefined
   * - `title`: undefined
   * - `value`: undefined
   * - `maxlength`: undefined
   * - `placeholder`: undefined
   * - `aria-label-input`/`ariaLabelInput`: undefined
   * - `aria-label-button`/`ariaLabelButton`: undefined
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
   * - `disabled`: undefined
   * - `icon-left`/`iconLeft`: undefined
   * - `icon-right`/`iconRight`: undefined
   * - `icon-left-spin`/`isIconLeftSpin`: undefined
   * - `icon-right-spin`/`isIconRightSpin`: undefined
   * - `has-div`/`hasDiv`: undefined
   * - `underline`: undefined
   * - `mobile-icon-align-end`/`mobileIconAlignEnd`: undefined
   * - `inline`: undefined
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
   * - `name`: undefined
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
   * - `block`: undefined
   * - `for`: undefined
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
   * - `childdata`/`childData`: undefined
   * - `color-theme`/`colorTheme`: undefined
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
   * - `type`: undefined
   * - `checked`: undefined
   * - `disabled`: undefined
   * - `hidden`: undefined
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
   * - `childdata`/`childData`: undefined
   * - `multiple`: undefined
   * - `type`: undefined
   * - `aria-label`/`ariaLabel`: undefined
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
   * - `value`/`currentPage`: undefined
   * - `max`/`maxPage`: undefined
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
   * - `multiple`: undefined
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
   * - `open`/`isExpanded`: undefined
   * - `selectedtexts`/`selectedTexts`: undefined
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
   * - `for`: undefined
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
   * - `href`: undefined
   * - `siblingofjumplink`/`siblingOfJumpLink`: undefined
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
   * - `islarge`/`isLarge`: undefined
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
   * - `status`: undefined
   * - `message`: undefined
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
   * - `type`: undefined
   * - `href`: undefined
   * - `disabled`: undefined
   * - `variant`: undefined
   * - `icon-left`/`iconLeft`: undefined
   * - `icon-right`/`iconRight`: undefined
   * - `icon-left-spin`/`isIconLeftSpin`: undefined
   * - `icon-right-spin`/`isIconRightSpin`: undefined
   * - `full-on-mobile`/`fullOnMobile`: undefined
   * - `flush-left`/`flushLeft`: undefined
   * - `flush-right`/`flushRight`: undefined
   * - `style-as-link`/`styleAsLink`: undefined
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
   * - `borderless`: undefined
   * - `checked`: undefined
   * - `disabled`: undefined
   * - `validation`: undefined
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
   * - `open`/`isExpanded`: undefined
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
   * - `validation`: undefined
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
   * - `checked`: undefined
   * - `disabled`: undefined
   * - `large`: undefined
   * - `validation`: undefined
   * - `type`: undefined
   * - `name`: undefined
   * - `value`: undefined
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
   * - `disabled`: undefined
   * - `validation`: undefined
   * - `label`: undefined
   * - `name`: undefined
   * - `title`: undefined
   * - `value`: undefined
   * - `maxlength`: undefined
   * - `placeholder`: undefined
   * - `aria-label-input`/`ariaLabelInput`: undefined
   * - `aria-label-button`/`ariaLabelButton`: undefined
   * - `borderless`: undefined
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
   * - `disabled`: undefined
   * - `validation`: undefined
   * - `label`: undefined
   * - `name`: undefined
   * - `title`: undefined
   * - `value`: undefined
   * - `maxlength`: undefined
   * - `placeholder`: undefined
   * - `aria-label-input`/`ariaLabelInput`: undefined
   * - `aria-label-button`/`ariaLabelButton`: undefined
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
   * - `disabled`: undefined
   * - `icon-left`/`iconLeft`: undefined
   * - `icon-right`/`iconRight`: undefined
   * - `icon-left-spin`/`isIconLeftSpin`: undefined
   * - `icon-right-spin`/`isIconRightSpin`: undefined
   * - `has-div`/`hasDiv`: undefined
   * - `underline`: undefined
   * - `mobile-icon-align-end`/`mobileIconAlignEnd`: undefined
   * - `inline`: undefined
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
   * - `name`: undefined
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
   * - `block`: undefined
   * - `for`: undefined
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
   * - `childdata`/`childData`: undefined
   * - `color-theme`/`colorTheme`: undefined
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
   * - `type`: undefined
   * - `checked`: undefined
   * - `disabled`: undefined
   * - `hidden`: undefined
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
   * - `childdata`/`childData`: undefined
   * - `multiple`: undefined
   * - `type`: undefined
   * - `aria-label`/`ariaLabel`: undefined
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
   * - `value`/`currentPage`: undefined
   * - `max`/`maxPage`: undefined
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
   * - `multiple`: undefined
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
   * - `open`/`isExpanded`: undefined
   * - `selectedtexts`/`selectedTexts`: undefined
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
   * - `for`: undefined
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
   * - `href`: undefined
   * - `siblingofjumplink`/`siblingOfJumpLink`: undefined
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
   * - `islarge`/`isLarge`: undefined
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
