import { StringTrimmedControl } from './widgets/StringTrimmed';
import { StringWithInstructionsControl } from './widgets/StringWithInstructions';

/**
 * Register the repo specific widgets layered on top of Decap's core widget set.
 * @param {import('decap-cms-core').DecapCmsCore} CMS - Decap CMS singleton
 */
export function registerCmsWidgets(CMS) {
  CMS.registerWidget('string-trimmed', StringTrimmedControl);
  CMS.registerWidget('string-with-instructions', StringWithInstructionsControl);
}
