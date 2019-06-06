import CMS from 'netlify-cms';

import { Preview as statusPreview } from './widgets/status/Preview';
import { Preview as accessibilityPreview } from './widgets/accessibility/Preview';
import { Preview as researchPreview } from './widgets/research/Preview';
import { Preview as usagePreview } from './widgets/usage/Preview';
import variationsPreview from './widgets/variations/Preview';

CMS.registerWidget('statusWidget', 'select', statusPreview);
CMS.registerWidget('accessibilityWidget', 'markdown', accessibilityPreview);
CMS.registerWidget('researchWidget', 'markdown', researchPreview);
CMS.registerWidget('usageWidget', 'markdown', usagePreview);
CMS.registerWidget('variationsWidget', 'markdown', variationsPreview);
