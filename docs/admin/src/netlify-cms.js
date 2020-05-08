import CMS from 'netlify-cms';
import { default as componentsPreviewTemplate } from './widgets/componentsPreviewTemplate';
import { default as genericPreviewTemplate } from './widgets/genericPreviewTemplate';

CMS.registerPreviewTemplate( 'getting-started', componentsPreviewTemplate );
CMS.registerPreviewTemplate( 'foundation', componentsPreviewTemplate );
CMS.registerPreviewTemplate( 'components', componentsPreviewTemplate );
CMS.registerPreviewTemplate( 'templates', componentsPreviewTemplate );
CMS.registerPreviewTemplate( 'home', genericPreviewTemplate );

CMS.registerPreviewStyle( '/design-system/dist/css/main.css' );
