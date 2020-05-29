import CMS from 'netlify-cms';
import StringTrimmedControl from './widgets/StringTrimmed';
import genericPreviewTemplate from './widgets/genericPreviewTemplate';
import variationPreviewTemplate from './widgets/variationPreviewTemplate';

CMS.registerWidget( 'string-trimmed', StringTrimmedControl, 'string' );

CMS.registerPreviewTemplate( 'getting-started', variationPreviewTemplate );
CMS.registerPreviewTemplate( 'foundation', variationPreviewTemplate );
CMS.registerPreviewTemplate( 'components', variationPreviewTemplate );
CMS.registerPreviewTemplate( 'templates', variationPreviewTemplate );
CMS.registerPreviewTemplate( 'home', genericPreviewTemplate );

CMS.registerPreviewStyle( '/design-system/dist/css/main.css' );
