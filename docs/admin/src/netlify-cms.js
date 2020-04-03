import CMS from 'netlify-cms';
import { default as componentsPreviewTemplate } from './widgets/componentsPreviewTemplate';
import { Preview as navPreview } from './widgets/navigationPreviewTemplate';

CMS.registerPreviewTemplate( 'getting-started', componentsPreviewTemplate );
CMS.registerPreviewTemplate( 'foundation', componentsPreviewTemplate );
CMS.registerPreviewTemplate( 'components', componentsPreviewTemplate );
CMS.registerPreviewTemplate( 'templates', componentsPreviewTemplate );
CMS.registerPreviewTemplate( 'navigation', navPreview );


CMS.registerPreviewStyle( '/design-system/dist/css/main.css' );
