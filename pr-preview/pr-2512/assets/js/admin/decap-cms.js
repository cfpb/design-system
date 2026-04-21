import CMS from 'decap-cms-app';
import { StringTrimmedControl } from './widgets/StringTrimmed';
import { StringWithInstructionsControl } from './widgets/StringWithInstructions';
import genericPreviewTemplate from './widgets/genericPreviewTemplate';
import navigationPreviewTemplate from './widgets/navigationPreviewTemplate';
import pagePreviewTemplate from './widgets/pagePreviewTemplate';

CMS.init();

CMS.registerWidget('string-trimmed', StringTrimmedControl);
CMS.registerWidget('string-with-instructions', StringWithInstructionsControl);

CMS.registerPreviewTemplate('special-pages', genericPreviewTemplate);
CMS.registerPreviewTemplate('pages', pagePreviewTemplate);
CMS.registerPreviewTemplate('side-navigation', navigationPreviewTemplate);

CMS.registerPreviewStyle('/design-system/dist/index.css');
