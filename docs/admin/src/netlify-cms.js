import CMS from 'netlify-cms';

import { Preview as introPreview } from './widgets/intro/Preview';
import { Preview as slugPreview } from './widgets/slug/Preview';
import { Preview as statusPreview } from './widgets/status/Preview';
import { Preview as accessibilityPreview } from './widgets/accessibility/Preview';
import { Preview as researchPreview } from './widgets/research/Preview';
import { Preview as usagePreview } from './widgets/usage/Preview';
import { Preview as variationNamePreview } from './widgets/variation/NamePreview';
import { Preview as variationDescriptionPreview } from './widgets/variation/DescriptionPreview';
import { Preview as variationCodeSnippetPreview } from './widgets/variation/CodeSnippetPreview';

CMS.registerWidget('introWidget', 'markdown', introPreview);
CMS.registerWidget('slugWidget', 'string', slugPreview);
CMS.registerWidget('statusWidget', 'select', statusPreview);
CMS.registerWidget('accessibilityWidget', 'markdown', accessibilityPreview);
CMS.registerWidget('researchWidget', 'markdown', researchPreview);
CMS.registerWidget('usageWidget', 'markdown', usagePreview);
CMS.registerWidget('variationNameWidget', 'string', variationNamePreview);
CMS.registerWidget('variationDescriptionWidget', 'markdown', variationDescriptionPreview);
CMS.registerWidget('variationCodeSnippetWidget', 'text', variationCodeSnippetPreview);

CMS.registerPreviewStyle('/design-system/dist/css/design-system.css');
