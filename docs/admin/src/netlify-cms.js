import CMS from 'netlify-cms';
import { default as genericPreviewTemplate } from './widgets/genericPreviewTemplate';
import { default as variationPreviewTemplate } from './widgets/variationPreviewTemplate';

CMS.registerPreviewTemplate( 'getting-started', variationPreviewTemplate );
CMS.registerPreviewTemplate( 'foundation', variationPreviewTemplate );
CMS.registerPreviewTemplate( 'components', variationPreviewTemplate );
CMS.registerPreviewTemplate( 'templates', variationPreviewTemplate );
CMS.registerPreviewTemplate( 'home', genericPreviewTemplate );

CMS.registerPreviewStyle( '/design-system/dist/css/main.css' );
