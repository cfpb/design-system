import CMS from 'netlify-cms-app';
import { StringTrimmedControl } from './widgets/StringTrimmed.js';
import { StringWithInstructionsControl } from './widgets/StringWithInstructions.js';
import genericPreviewTemplate from './widgets/genericPreviewTemplate.js';
import navigationPreviewTemplate from './widgets/navigationPreviewTemplate.js';
import pagePreviewTemplate from './widgets/pagePreviewTemplate.js';

// Initialize the CMS object
CMS.init();

CMS.registerWidget('string-trimmed', StringTrimmedControl);
CMS.registerWidget('string-with-instructions', StringWithInstructionsControl);

CMS.registerPreviewTemplate('special-pages', genericPreviewTemplate);
CMS.registerPreviewTemplate('pages', pagePreviewTemplate);
CMS.registerPreviewTemplate('side-navigation', navigationPreviewTemplate);
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate('my-template', MyTemplate);

CMS.registerPreviewStyle('/design-system/dist/css/main.css');
