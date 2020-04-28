import CMS from 'netlify-cms';
import { default as componentsPreviewTemplate } from './widgets/componentsPreviewTemplate';
import { default as genericPreviewTemplate } from './widgets/genericPreviewTemplate';
import { Preview as navPreview } from './widgets/navigationPreviewTemplate';

CMS.registerPreviewTemplate( 'getting-started', componentsPreviewTemplate );
CMS.registerPreviewTemplate( 'foundation', componentsPreviewTemplate );
CMS.registerPreviewTemplate( 'components', componentsPreviewTemplate );
CMS.registerPreviewTemplate( 'templates', componentsPreviewTemplate );
CMS.registerPreviewTemplate( 'navigation', navPreview );
CMS.registerPreviewTemplate( 'home', genericPreviewTemplate );

CMS.registerPreviewStyle( '/design-system/dist/css/main.css' );
