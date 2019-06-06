import CMS from 'netlify-cms';

import accessibilityControl from './widgets/accessibility/Control';
import { Preview as accessibilityPreview } from './widgets/accessibility/Preview';
import researchControl from './widgets/research/Control';
import { Preview as researchPreview } from './widgets/research/Preview';
import usageControl from './widgets/usage/Control';
import { Preview as usagePreview } from './widgets/usage/Preview';
import variationsControl from './widgets/variations/Control';
import variationsPreview from './widgets/variations/Preview';

CMS.registerWidget('accessibilityWidget', 'markdown', accessibilityPreview);
CMS.registerWidget('researchWidget', 'markdown', researchPreview);
CMS.registerWidget('usageWidget', 'markdown', usagePreview);
CMS.registerWidget('variationsWidget', 'markdown', variationsPreview);
