import CMS from 'netlify-cms';

import Control from './test-widget/Control';
import Preview from './test-widget/Preview';

CMS.registerWidget('test', Control, Preview);
