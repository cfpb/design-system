import {
  CfpbButton,
  CfpbExpandable,
  CfpbFileUpload,
  CfpbFormAlert,
  CfpbFormChoice,
  CfpbFormSearch,
  CfpbFormSearchInput,
  CfpbLabel,
  CfpbList,
  CfpbListItem,
  CfpbTagline,
  CfpbTagFilter,
  CfpbTagTopic,
  CfpbTagGroup,
  CfpbPagination,
  CfpbSelect,
  Expandable,
  ExpandableGroup,
  Summary,
  SummaryMinimal,
  Multiselect,
} from '@cfpb/cfpb-design-system';
import { Tooltip } from '@cfpb/cfpb-design-system/src/components/cfpb-tooltips/index.js';

const CUTSTOM_ELEMENTS = [
  CfpbButton,
  CfpbExpandable,
  CfpbFileUpload,
  CfpbFormAlert,
  CfpbFormChoice,
  CfpbFormSearch,
  CfpbFormSearchInput,
  CfpbLabel,
  CfpbList,
  CfpbListItem,
  CfpbTagline,
  CfpbTagFilter,
  CfpbTagTopic,
  CfpbTagGroup,
  CfpbPagination,
  CfpbSelect,
];

const SCROPED_BEHAVIORS = [
  Expandable,
  ExpandableGroup,
  Summary,
  SummaryMinimal,
  Multiselect,
  Tooltip,
];

/**
 * Mirror The Jekyll for Storybook rendered content by initializing all custom elements and scoped behaviors.
 * This is necessary for Storybook to properly render the web components and their associated behaviors.
 * @param { Element|Document|DocumentFragment } scope - Container whose contents need behavior init
 */
export function initStorybookDesignSystem(scope = document) {
  CUTSTOM_ELEMENTS.forEach((component) => component.init());
  SCROPED_BEHAVIORS.forEach((behavior) => behavior.init(scope));

  // Multiselect.init does not accept a scope arg
  Multiselect.init();
}
