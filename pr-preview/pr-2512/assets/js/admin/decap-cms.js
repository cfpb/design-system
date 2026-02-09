import CMS from 'decap-cms-app';
import { StringTrimmedControl } from './widgets/StringTrimmed.js';
import { StringWithInstructionsControl } from './widgets/StringWithInstructions.js';
import genericPreviewTemplate from './widgets/genericPreviewTemplate.js';
import navigationPreviewTemplate from './widgets/navigationPreviewTemplate.js';
import pagePreviewTemplate from './widgets/pagePreviewTemplate.js';

CMS.init();

CMS.registerWidget('string-trimmed', StringTrimmedControl);
CMS.registerWidget('string-with-instructions', StringWithInstructionsControl);

CMS.registerPreviewTemplate('special-pages', genericPreviewTemplate);
CMS.registerPreviewTemplate('pages', pagePreviewTemplate);
CMS.registerPreviewTemplate('side-navigation', navigationPreviewTemplate);

CMS.registerPreviewStyle('/design-system/dist/main.css');
