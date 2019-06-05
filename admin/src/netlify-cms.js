import CMS from 'netlify-cms';

import accessibilityControl from './widgets/accessibility/Control';
import { Preview as accessibilityPreview } from './widgets/accessibility/Preview';
import researchControl from './widgets/research/Control';
import { Preview as researchPreview } from './widgets/research/Preview';
import usageControl from './widgets/usage/Control';
import { Preview as usagePreview } from './widgets/usage/Preview';
import variationsControl from './widgets/variations/Control';
import { Preview as variationsPreview } from './widgets/variations/Preview';

CMS.registerWidget('accessibilityWidget', accessibilityControl, accessibilityPreview);
CMS.registerWidget('researchWidget', researchControl, researchPreview);
CMS.registerWidget('usageWidget', usageControl, usagePreview);
CMS.registerWidget('variationsWidget', variationsControl, variationsPreview);
