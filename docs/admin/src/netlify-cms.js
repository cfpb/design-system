import CMS from '@cfpb/netlify-cms';
import { Preview as componentsPreviewTemplate } from './widgets/componentsPreviewTemplate';
import { Preview as navPreview } from './widgets/navigationPreviewTemplate';

CMS.registerPreviewTemplate( 'components', componentsPreviewTemplate );
CMS.registerPreviewTemplate( 'navigation', navPreview );

CMS.registerPreviewStyle( '/design-system/dist/css/main.css' );
