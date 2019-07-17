import CMS from '@cfpb/netlify-cms';
import { Preview as componentsPreviewTemplate } from './widgets/componentsPreviewTemplate';

CMS.registerPreviewTemplate( 'components', componentsPreviewTemplate );

CMS.registerPreviewStyle( '/design-system/dist/css/main.css' );
