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
  children?: any;
  /** Used for declaratively styling one or more elements using CSS (Cascading Stylesheets) */
  class?: string;
  /** Used for declaratively styling one or more elements using CSS (Cascading Stylesheets) */
  className?: string;
  /** Takes an object where the key is the class name(s) and the value is a boolean expression. When true, the class is applied, and when false, it is removed. */
  classList?: Record<string, boolean | undefined>;
  /** Specifies the text direction of the element. */
  dir?: 'ltr' | 'rtl';
  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;
  /** For <label> and <output>, lets you associate the label with some control. */
  htmlFor?: string;
  /** Specifies whether the element should be hidden. */
  hidden?: boolean | string;
  /** A unique identifier for the element. */
  id?: string;
  /** Keys tell React which array item each component corresponds to */
  key?: string | number;
  /** Specifies the language of the element. */
  lang?: string;
  /** Defines the element's semantic role for accessibility APIs. */
  role?: string;
  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;
  /** Use the ref attribute with a variable to assign a DOM element to the variable once the element is rendered. */
  ref?: T | ((e: T) => void);
  /** Adds a reference for a custom element slot */
  slot?: string;
  /** Prop for setting inline styles */
  style?: Record<string, string | number>;
  /** Overrides the default Tab button behavior. Avoid using values other than -1 and 0. */
  tabIndex?: number;
  /** Specifies the tooltip text for the element. */
  title?: string;
  /** Passing 'no' excludes the element content from being translated. */
  translate?: 'yes' | 'no';
  /** The popover global attribute is used to designate an element as a popover element. */
  popover?: 'auto' | 'hint' | 'manual';
  /** Turns an element element into a popover control button; takes the ID of the popover element to control as its value. */
  popovertarget?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  /** Specifies the action to be performed on a popover element being controlled by a control element. */
  popovertargetaction?: 'show' | 'hide' | 'toggle';
};

type BaseEvents = {};

export type CfpbAlertProps = {
  /**  */
  status?: CfpbAlert['status'];
  /**  */
  message?: CfpbAlert['message'];
};

export type CfpbAlertSolidJsProps = {
  /**  */
  'prop:status'?: CfpbAlert['status'];
  /**  */
  'prop:message'?: CfpbAlert['message'];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbButtonProps = {
  /**  */
  type?: CfpbButton['type'];
  /**  */
  href?: CfpbButton['href'];
  /**  */
  disabled?: CfpbButton['disabled'];
  /**  */
  variant?: CfpbButton['variant'];
  /**  */
  'icon-left'?: CfpbButton['iconLeft'];
  /**  */
  iconLeft?: CfpbButton['iconLeft'];
  /**  */
  'icon-right'?: CfpbButton['iconRight'];
  /**  */
  iconRight?: CfpbButton['iconRight'];
  /**  */
  'icon-left-spin'?: CfpbButton['isIconLeftSpin'];
  /**  */
  isIconLeftSpin?: CfpbButton['isIconLeftSpin'];
  /**  */
  'icon-right-spin'?: CfpbButton['isIconRightSpin'];
  /**  */
  isIconRightSpin?: CfpbButton['isIconRightSpin'];
  /**  */
  'full-on-mobile'?: CfpbButton['fullOnMobile'];
  /**  */
  fullOnMobile?: CfpbButton['fullOnMobile'];
  /**  */
  'flush-left'?: CfpbButton['flushLeft'];
  /**  */
  flushLeft?: CfpbButton['flushLeft'];
  /**  */
  'flush-right'?: CfpbButton['flushRight'];
  /**  */
  flushRight?: CfpbButton['flushRight'];
  /**  */
  'style-as-link'?: CfpbButton['styleAsLink'];
  /**  */
  styleAsLink?: CfpbButton['styleAsLink'];
};

export type CfpbButtonSolidJsProps = {
  /**  */
  'prop:type'?: CfpbButton['type'];
  /**  */
  'prop:href'?: CfpbButton['href'];
  /**  */
  'prop:disabled'?: CfpbButton['disabled'];
  /**  */
  'prop:variant'?: CfpbButton['variant'];
  /**  */
  'attr:icon-left'?: CfpbButton['iconLeft'];
  /**  */
  'prop:iconLeft'?: CfpbButton['iconLeft'];
  /**  */
  'attr:icon-right'?: CfpbButton['iconRight'];
  /**  */
  'prop:iconRight'?: CfpbButton['iconRight'];
  /**  */
  'bool:icon-left-spin'?: CfpbButton['isIconLeftSpin'];
  /**  */
  'prop:isIconLeftSpin'?: CfpbButton['isIconLeftSpin'];
  /**  */
  'bool:icon-right-spin'?: CfpbButton['isIconRightSpin'];
  /**  */
  'prop:isIconRightSpin'?: CfpbButton['isIconRightSpin'];
  /**  */
  'bool:full-on-mobile'?: CfpbButton['fullOnMobile'];
  /**  */
  'prop:fullOnMobile'?: CfpbButton['fullOnMobile'];
  /**  */
  'bool:flush-left'?: CfpbButton['flushLeft'];
  /**  */
  'prop:flushLeft'?: CfpbButton['flushLeft'];
  /**  */
  'bool:flush-right'?: CfpbButton['flushRight'];
  /**  */
  'prop:flushRight'?: CfpbButton['flushRight'];
  /**  */
  'bool:style-as-link'?: CfpbButton['styleAsLink'];
  /**  */
  'prop:styleAsLink'?: CfpbButton['styleAsLink'];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbCheckboxIconProps = {
  /**  */
  borderless?: CfpbCheckboxIcon['borderless'];
  /**  */
  checked?: CfpbCheckboxIcon['checked'];
  /**  */
  disabled?: CfpbCheckboxIcon['disabled'];
  /**  */
  validation?: CfpbCheckboxIcon['validation'];
};

export type CfpbCheckboxIconSolidJsProps = {
  /**  */
  'prop:borderless'?: CfpbCheckboxIcon['borderless'];
  /**  */
  'prop:checked'?: CfpbCheckboxIcon['checked'];
  /**  */
  'prop:disabled'?: CfpbCheckboxIcon['disabled'];
  /**  */
  'prop:validation'?: CfpbCheckboxIcon['validation'];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbExpandableProps = {
  /**  */
  open?: CfpbExpandable['isExpanded'];
  /**  */
  isExpanded?: CfpbExpandable['isExpanded'];

  /** The expandable started expanding. */
  onexpandbegin?: (e: CustomEvent) => void;
  /** The expandable finshed expanding. */
  onexpandend?: (e: CustomEvent) => void;
  /** The expandables started collapsing. */
  oncollapsebegin?: (e: CustomEvent) => void;
  /** The expandables finished collapsing. */
  oncollapseend?: (e: CustomEvent) => void;
};

export type CfpbExpandableSolidJsProps = {
  /**  */
  'bool:open'?: CfpbExpandable['isExpanded'];
  /**  */
  'prop:isExpanded'?: CfpbExpandable['isExpanded'];
  /** The expandable started expanding. */
  'on:expandbegin'?: (e: CustomEvent) => void;
  /** The expandable finshed expanding. */
  'on:expandend'?: (e: CustomEvent) => void;
  /** The expandables started collapsing. */
  'on:collapsebegin'?: (e: CustomEvent) => void;
  /** The expandables finished collapsing. */
  'on:collapseend'?: (e: CustomEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbFileUploadProps = {
  /**  */
  accept?: CfpbFileUpload['accept'];
  /**  */
  isDetailHidden?: CfpbFileUpload['isDetailHidden'];
  /**  */
  fileName?: CfpbFileUpload['fileName'];
  /**  */
  files?: CfpbFileUpload['files'];

  /**  */
  'onfile-change'?: (e: CustomEvent) => void;
};

export type CfpbFileUploadSolidJsProps = {
  /**  */
  'prop:accept'?: CfpbFileUpload['accept'];
  /**  */
  'prop:isDetailHidden'?: CfpbFileUpload['isDetailHidden'];
  /**  */
  'prop:fileName'?: CfpbFileUpload['fileName'];
  /**  */
  'prop:files'?: CfpbFileUpload['files'];
  /**  */
  'on:file-change'?: (e: CustomEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbFlagUsaProps = {};

export type CfpbFlagUsaSolidJsProps = {
  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbFormAlertProps = {
  /**  */
  validation?: CfpbFormAlert['validation'];
};

export type CfpbFormAlertSolidJsProps = {
  /**  */
  'prop:validation'?: CfpbFormAlert['validation'];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbFormChoiceProps = {
  /**  */
  checked?: CfpbFormChoice['checked'];
  /**  */
  disabled?: CfpbFormChoice['disabled'];
  /**  */
  large?: CfpbFormChoice['large'];
  /**  */
  validation?: CfpbFormChoice['validation'];
  /**  */
  type?: CfpbFormChoice['type'];
  /**  */
  name?: CfpbFormChoice['name'];
  /**  */
  value?: CfpbFormChoice['value'];

  /**  */
  onchange?: (e: Event) => void;
  /**  */
  oninput?: (e: Event) => void;
};

export type CfpbFormChoiceSolidJsProps = {
  /**  */
  'prop:checked'?: CfpbFormChoice['checked'];
  /**  */
  'prop:disabled'?: CfpbFormChoice['disabled'];
  /**  */
  'prop:large'?: CfpbFormChoice['large'];
  /**  */
  'prop:validation'?: CfpbFormChoice['validation'];
  /**  */
  'prop:type'?: CfpbFormChoice['type'];
  /**  */
  'prop:name'?: CfpbFormChoice['name'];
  /**  */
  'prop:value'?: CfpbFormChoice['value'];
  /**  */
  'on:change'?: (e: Event) => void;
  /**  */
  'on:input'?: (e: Event) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbFormSearchInputProps = {
  /**  */
  disabled?: CfpbFormSearchInput['disabled'];
  /**  */
  validation?: CfpbFormSearchInput['validation'];
  /**  */
  label?: CfpbFormSearchInput['label'];
  /**  */
  name?: CfpbFormSearchInput['name'];
  /**  */
  title?: CfpbFormSearchInput['title'];
  /**  */
  value?: CfpbFormSearchInput['value'];
  /**  */
  maxlength?: CfpbFormSearchInput['maxlength'];
  /**  */
  placeholder?: CfpbFormSearchInput['placeholder'];
  /**  */
  'aria-label-input'?: CfpbFormSearchInput['ariaLabelInput'];
  /**  */
  ariaLabelInput?: CfpbFormSearchInput['ariaLabelInput'];
  /**  */
  'aria-label-button'?: CfpbFormSearchInput['ariaLabelButton'];
  /**  */
  ariaLabelButton?: CfpbFormSearchInput['ariaLabelButton'];
  /**  */
  borderless?: CfpbFormSearchInput['borderless'];

  /**  */
  'onenter-down'?: (e: CustomEvent) => void;
  /**  */
  onblur?: (e: Event) => void;
  /**  */
  onclear?: (e: CustomEvent) => void;
};

export type CfpbFormSearchInputSolidJsProps = {
  /**  */
  'prop:disabled'?: CfpbFormSearchInput['disabled'];
  /**  */
  'prop:validation'?: CfpbFormSearchInput['validation'];
  /**  */
  'prop:label'?: CfpbFormSearchInput['label'];
  /**  */
  'prop:name'?: CfpbFormSearchInput['name'];
  /**  */
  'prop:title'?: CfpbFormSearchInput['title'];
  /**  */
  'prop:value'?: CfpbFormSearchInput['value'];
  /**  */
  'prop:maxlength'?: CfpbFormSearchInput['maxlength'];
  /**  */
  'prop:placeholder'?: CfpbFormSearchInput['placeholder'];
  /**  */
  'attr:aria-label-input'?: CfpbFormSearchInput['ariaLabelInput'];
  /**  */
  'prop:ariaLabelInput'?: CfpbFormSearchInput['ariaLabelInput'];
  /**  */
  'attr:aria-label-button'?: CfpbFormSearchInput['ariaLabelButton'];
  /**  */
  'prop:ariaLabelButton'?: CfpbFormSearchInput['ariaLabelButton'];
  /**  */
  'prop:borderless'?: CfpbFormSearchInput['borderless'];
  /**  */
  'on:enter-down'?: (e: CustomEvent) => void;
  /**  */
  'on:blur'?: (e: Event) => void;
  /**  */
  'on:clear'?: (e: CustomEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbFormSearchProps = {
  /**  */
  disabled?: CfpbFormSearch['disabled'];
  /**  */
  validation?: CfpbFormSearch['validation'];
  /**  */
  label?: CfpbFormSearch['label'];
  /**  */
  name?: CfpbFormSearch['name'];
  /**  */
  title?: CfpbFormSearch['title'];
  /**  */
  value?: CfpbFormSearch['value'];
  /**  */
  maxlength?: CfpbFormSearch['maxlength'];
  /**  */
  placeholder?: CfpbFormSearch['placeholder'];
  /**  */
  'aria-label-input'?: CfpbFormSearch['ariaLabelInput'];
  /**  */
  ariaLabelInput?: CfpbFormSearch['ariaLabelInput'];
  /**  */
  'aria-label-button'?: CfpbFormSearch['ariaLabelButton'];
  /**  */
  ariaLabelButton?: CfpbFormSearch['ariaLabelButton'];
  /**  */
  searchList?: CfpbFormSearch['searchList'];
};

export type CfpbFormSearchSolidJsProps = {
  /**  */
  'prop:disabled'?: CfpbFormSearch['disabled'];
  /**  */
  'prop:validation'?: CfpbFormSearch['validation'];
  /**  */
  'prop:label'?: CfpbFormSearch['label'];
  /**  */
  'prop:name'?: CfpbFormSearch['name'];
  /**  */
  'prop:title'?: CfpbFormSearch['title'];
  /**  */
  'prop:value'?: CfpbFormSearch['value'];
  /**  */
  'prop:maxlength'?: CfpbFormSearch['maxlength'];
  /**  */
  'prop:placeholder'?: CfpbFormSearch['placeholder'];
  /**  */
  'attr:aria-label-input'?: CfpbFormSearch['ariaLabelInput'];
  /**  */
  'prop:ariaLabelInput'?: CfpbFormSearch['ariaLabelInput'];
  /**  */
  'attr:aria-label-button'?: CfpbFormSearch['ariaLabelButton'];
  /**  */
  'prop:ariaLabelButton'?: CfpbFormSearch['ariaLabelButton'];
  /**  */
  'prop:searchList'?: CfpbFormSearch['searchList'];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbIconTextProps = {
  /**  */
  disabled?: CfpbIconText['disabled'];
  /**  */
  'icon-left'?: CfpbIconText['iconLeft'];
  /**  */
  iconLeft?: CfpbIconText['iconLeft'];
  /**  */
  'icon-right'?: CfpbIconText['iconRight'];
  /**  */
  iconRight?: CfpbIconText['iconRight'];
  /**  */
  'icon-left-spin'?: CfpbIconText['isIconLeftSpin'];
  /**  */
  isIconLeftSpin?: CfpbIconText['isIconLeftSpin'];
  /**  */
  'icon-right-spin'?: CfpbIconText['isIconRightSpin'];
  /**  */
  isIconRightSpin?: CfpbIconText['isIconRightSpin'];
  /**  */
  'has-div'?: CfpbIconText['hasDiv'];
  /**  */
  hasDiv?: CfpbIconText['hasDiv'];
  /**  */
  underline?: CfpbIconText['underline'];
  /**  */
  'mobile-icon-align-end'?: CfpbIconText['mobileIconAlignEnd'];
  /**  */
  mobileIconAlignEnd?: CfpbIconText['mobileIconAlignEnd'];
  /**  */
  inline?: CfpbIconText['inline'];
};

export type CfpbIconTextSolidJsProps = {
  /**  */
  'prop:disabled'?: CfpbIconText['disabled'];
  /**  */
  'attr:icon-left'?: CfpbIconText['iconLeft'];
  /**  */
  'prop:iconLeft'?: CfpbIconText['iconLeft'];
  /**  */
  'attr:icon-right'?: CfpbIconText['iconRight'];
  /**  */
  'prop:iconRight'?: CfpbIconText['iconRight'];
  /**  */
  'bool:icon-left-spin'?: CfpbIconText['isIconLeftSpin'];
  /**  */
  'prop:isIconLeftSpin'?: CfpbIconText['isIconLeftSpin'];
  /**  */
  'bool:icon-right-spin'?: CfpbIconText['isIconRightSpin'];
  /**  */
  'prop:isIconRightSpin'?: CfpbIconText['isIconRightSpin'];
  /**  */
  'bool:has-div'?: CfpbIconText['hasDiv'];
  /**  */
  'prop:hasDiv'?: CfpbIconText['hasDiv'];
  /**  */
  'prop:underline'?: CfpbIconText['underline'];
  /**  */
  'bool:mobile-icon-align-end'?: CfpbIconText['mobileIconAlignEnd'];
  /**  */
  'prop:mobileIconAlignEnd'?: CfpbIconText['mobileIconAlignEnd'];
  /**  */
  'prop:inline'?: CfpbIconText['inline'];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbIconProps = {
  /**  */
  name?: CfpbIcon['name'];
  /**  */
  spin?: CfpbIcon['spin'];
};

export type CfpbIconSolidJsProps = {
  /**  */
  'prop:name'?: CfpbIcon['name'];
  /**  */
  'prop:spin'?: CfpbIcon['spin'];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbLabelProps = {
  /**  */
  block?: CfpbLabel['block'];
  /**  */
  for?: CfpbLabel['for'];
};

export type CfpbLabelSolidJsProps = {
  /**  */
  'prop:block'?: CfpbLabel['block'];
  /**  */
  'prop:for'?: CfpbLabel['for'];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbLinkProps = {
  /**  */
  linkText?: CfpbLink['linkText'];
  /**  */
  linkAttributes?: CfpbLink['linkAttributes'];
  /**  */
  'link-variant'?: CfpbLink['linkVariant'];
  /**  */
  linkVariant?: CfpbLink['linkVariant'];
  /**  */
  size?: CfpbLink['size'];
  /**  */
  'color-theme'?: CfpbLink['colorTheme'];
  /**  */
  colorTheme?: CfpbLink['colorTheme'];
  /**  */
  'no-underline'?: CfpbLink['noUnderline'];
  /**  */
  noUnderline?: CfpbLink['noUnderline'];
  /**  */
  'no-top-border'?: CfpbLink['noTopBorder'];
  /**  */
  noTopBorder?: CfpbLink['noTopBorder'];
  /**  */
  inline?: CfpbLink['inline'];
};

export type CfpbLinkSolidJsProps = {
  /**  */
  'prop:linkText'?: CfpbLink['linkText'];
  /**  */
  'prop:linkAttributes'?: CfpbLink['linkAttributes'];
  /**  */
  'attr:link-variant'?: CfpbLink['linkVariant'];
  /**  */
  'prop:linkVariant'?: CfpbLink['linkVariant'];
  /**  */
  'prop:size'?: CfpbLink['size'];
  /**  */
  'attr:color-theme'?: CfpbLink['colorTheme'];
  /**  */
  'prop:colorTheme'?: CfpbLink['colorTheme'];
  /**  */
  'bool:no-underline'?: CfpbLink['noUnderline'];
  /**  */
  'prop:noUnderline'?: CfpbLink['noUnderline'];
  /**  */
  'bool:no-top-border'?: CfpbLink['noTopBorder'];
  /**  */
  'prop:noTopBorder'?: CfpbLink['noTopBorder'];
  /**  */
  'prop:inline'?: CfpbLink['inline'];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbListItemProps = {};

export type CfpbListItemSolidJsProps = {
  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbListProps = {
  /**  */
  childdata?: CfpbList['childData'];
  /**  */
  childData?: CfpbList['childData'];
  /**  */
  'color-theme'?: CfpbList['colorTheme'];
  /**  */
  colorTheme?: CfpbList['colorTheme'];

  /** An item was clicked. */
  'onitem-click'?: (e: CustomEvent) => void;
  /** An item was added to the group. */
  'onitem-added'?: (e: CustomEvent) => void;
  /** An item was removed to the group. */
  'onitem-removed'?: (e: CustomEvent) => void;
};

export type CfpbListSolidJsProps = {
  /**  */
  'attr:childdata'?: CfpbList['childData'];
  /**  */
  'prop:childData'?: CfpbList['childData'];
  /**  */
  'attr:color-theme'?: CfpbList['colorTheme'];
  /**  */
  'prop:colorTheme'?: CfpbList['colorTheme'];
  /** An item was clicked. */
  'on:item-click'?: (e: CustomEvent) => void;
  /** An item was added to the group. */
  'on:item-added'?: (e: CustomEvent) => void;
  /** An item was removed to the group. */
  'on:item-removed'?: (e: CustomEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbListboxItemProps = {
  /**  */
  type?: CfpbListboxItem['type'];
  /**  */
  checked?: CfpbListboxItem['checked'];
  /**  */
  disabled?: CfpbListboxItem['disabled'];
  /**  */
  hidden?: CfpbListboxItem['hidden'];
  /**  */
  href?: CfpbListboxItem['href'];
  /**  */
  value?: CfpbListboxItem['value'];

  /**  */
  'onitem-click'?: (e: CustomEvent) => void;
};

export type CfpbListboxItemSolidJsProps = {
  /**  */
  'prop:type'?: CfpbListboxItem['type'];
  /**  */
  'prop:checked'?: CfpbListboxItem['checked'];
  /**  */
  'prop:disabled'?: CfpbListboxItem['disabled'];
  /**  */
  'prop:hidden'?: CfpbListboxItem['hidden'];
  /**  */
  'prop:href'?: CfpbListboxItem['href'];
  /**  */
  'prop:value'?: CfpbListboxItem['value'];
  /**  */
  'on:item-click'?: (e: CustomEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbListboxProps = {
  /**  */
  childdata?: CfpbListbox['childData'];
  /**  */
  childData?: CfpbListbox['childData'];
  /**  */
  multiple?: CfpbListbox['multiple'];
  /**  */
  type?: CfpbListbox['type'];
  /**  */
  'aria-label'?: CfpbListbox['ariaLabel'];
  /**  */
  ariaLabel?: CfpbListbox['ariaLabel'];

  /**  */
  'onitems-ready'?: (e: CustomEvent) => void;
  /**  */
  'onitem-click'?: (e: CustomEvent) => void;
  /**  */
  'onitems-filter'?: (e: CustomEvent) => void;
};

export type CfpbListboxSolidJsProps = {
  /**  */
  'attr:childdata'?: CfpbListbox['childData'];
  /**  */
  'prop:childData'?: CfpbListbox['childData'];
  /**  */
  'prop:multiple'?: CfpbListbox['multiple'];
  /**  */
  'prop:type'?: CfpbListbox['type'];
  /**  */
  'attr:aria-label'?: CfpbListbox['ariaLabel'];
  /**  */
  'prop:ariaLabel'?: CfpbListbox['ariaLabel'];
  /**  */
  'on:items-ready'?: (e: CustomEvent) => void;
  /**  */
  'on:item-click'?: (e: CustomEvent) => void;
  /**  */
  'on:items-filter'?: (e: CustomEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbPaginationProps = {
  /**  */
  value?: CfpbPagination['currentPage'];
  /**  */
  currentPage?: CfpbPagination['currentPage'];
  /**  */
  max?: CfpbPagination['maxPage'];
  /**  */
  maxPage?: CfpbPagination['maxPage'];
  /**  */
  lang?: CfpbPagination['lang'];

  /**  */
  'onpage-change'?: (e: CustomEvent) => void;
};

export type CfpbPaginationSolidJsProps = {
  /**  */
  'attr:value'?: CfpbPagination['currentPage'];
  /**  */
  'prop:currentPage'?: CfpbPagination['currentPage'];
  /**  */
  'attr:max'?: CfpbPagination['maxPage'];
  /**  */
  'prop:maxPage'?: CfpbPagination['maxPage'];
  /**  */
  'prop:lang'?: CfpbPagination['lang'];
  /**  */
  'on:page-change'?: (e: CustomEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbSelectProps = {
  /**  */
  multiple?: CfpbSelect['multiple'];
  /**  */
  disabled?: CfpbSelect['disabled'];
  /**  */
  validation?: CfpbSelect['validation'];
  /**  */
  label?: CfpbSelect['label'];
  /**  */
  name?: CfpbSelect['name'];
  /**  */
  title?: CfpbSelect['title'];
  /**  */
  value?: CfpbSelect['value'];
  /**  */
  maxlength?: CfpbSelect['maxlength'];
  /**  */
  placeholder?: CfpbSelect['placeholder'];
  /**  */
  'aria-label-input'?: CfpbSelect['ariaLabelInput'];
  /**  */
  ariaLabelInput?: CfpbSelect['ariaLabelInput'];
  /**  */
  'aria-label-list'?: CfpbSelect['ariaLabelList'];
  /**  */
  ariaLabelList?: CfpbSelect['ariaLabelList'];
  /**  */
  open?: CfpbSelect['isExpanded'];
  /**  */
  isExpanded?: CfpbSelect['isExpanded'];
  /**  */
  selectedTexts?: CfpbSelect['selectedTexts'];
  /**  */
  optionList?: CfpbSelect['optionList'];
  /**  */
  options?: CfpbSelect['options'];

  /**  */
  onexpandbegin?: (e: CustomEvent) => void;
};

export type CfpbSelectSolidJsProps = {
  /**  */
  'prop:multiple'?: CfpbSelect['multiple'];
  /**  */
  'prop:disabled'?: CfpbSelect['disabled'];
  /**  */
  'prop:validation'?: CfpbSelect['validation'];
  /**  */
  'prop:label'?: CfpbSelect['label'];
  /**  */
  'prop:name'?: CfpbSelect['name'];
  /**  */
  'prop:title'?: CfpbSelect['title'];
  /**  */
  'prop:value'?: CfpbSelect['value'];
  /**  */
  'prop:maxlength'?: CfpbSelect['maxlength'];
  /**  */
  'prop:placeholder'?: CfpbSelect['placeholder'];
  /**  */
  'attr:aria-label-input'?: CfpbSelect['ariaLabelInput'];
  /**  */
  'prop:ariaLabelInput'?: CfpbSelect['ariaLabelInput'];
  /**  */
  'attr:aria-label-list'?: CfpbSelect['ariaLabelList'];
  /**  */
  'prop:ariaLabelList'?: CfpbSelect['ariaLabelList'];
  /**  */
  'bool:open'?: CfpbSelect['isExpanded'];
  /**  */
  'prop:isExpanded'?: CfpbSelect['isExpanded'];
  /**  */
  'prop:selectedTexts'?: CfpbSelect['selectedTexts'];
  /**  */
  'prop:optionList'?: CfpbSelect['optionList'];
  /**  */
  'prop:options'?: CfpbSelect['options'];
  /**  */
  'on:expandbegin'?: (e: CustomEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbTagFilterProps = {
  /**  */
  for?: CfpbTagFilter['for'];
  /**  */
  value?: CfpbTagFilter['value'];

  /**  */
  'onitem-click'?: (e: CustomEvent) => void;
};

export type CfpbTagFilterSolidJsProps = {
  /**  */
  'prop:for'?: CfpbTagFilter['for'];
  /**  */
  'prop:value'?: CfpbTagFilter['value'];
  /**  */
  'on:item-click'?: (e: CustomEvent) => void;

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbTagTopicProps = {
  /**  */
  href?: CfpbTagTopic['href'];
  /**  */
  siblingOfJumpLink?: CfpbTagTopic['siblingOfJumpLink'];
};

export type CfpbTagTopicSolidJsProps = {
  /**  */
  'prop:href'?: CfpbTagTopic['href'];
  /**  */
  'prop:siblingOfJumpLink'?: CfpbTagTopic['siblingOfJumpLink'];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
};

export type CfpbTaglineProps = {
  /**  */
  isLarge?: CfpbTagline['isLarge'];
};

export type CfpbTaglineSolidJsProps = {
  /**  */
  'prop:isLarge'?: CfpbTagline['isLarge'];

  /** Set the innerHTML of the element */
  innerHTML?: string;
  /** Set the textContent of the element */
  textContent?: string | number;
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
   * - `isDetailHidden`: undefined
   * - `fileName`: undefined
   * - `files`: undefined
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
   * - `searchList`: undefined
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
   * - `linkText`: undefined
   * - `linkAttributes`: undefined
   * - `link-variant`/`linkVariant`: undefined
   * - `size`: undefined
   * - `color-theme`/`colorTheme`: undefined
   * - `no-underline`/`noUnderline`: undefined
   * - `no-top-border`/`noTopBorder`: undefined
   * - `inline`: undefined
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
   * - `selectedTexts`: undefined
   * - `optionList`: undefined
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
   * - `siblingOfJumpLink`: undefined
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
   * - `isLarge`: undefined
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
   * - `isDetailHidden`: undefined
   * - `fileName`: undefined
   * - `files`: undefined
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
   * - `searchList`: undefined
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
   * - `linkText`: undefined
   * - `linkAttributes`: undefined
   * - `link-variant`/`linkVariant`: undefined
   * - `size`: undefined
   * - `color-theme`/`colorTheme`: undefined
   * - `no-underline`/`noUnderline`: undefined
   * - `no-top-border`/`noTopBorder`: undefined
   * - `inline`: undefined
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
   * - `selectedTexts`: undefined
   * - `optionList`: undefined
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
   * - `siblingOfJumpLink`: undefined
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
   * - `isLarge`: undefined
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
