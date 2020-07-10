import "core-js/stable";
import "regenerator-runtime/runtime";
import CMS from 'netlify-cms';
import StringTrimmedControl from './widgets/StringTrimmed';
import genericPreviewTemplate from './widgets/genericPreviewTemplate';
import navigationPreviewTemplate from './widgets/navigationPreviewTemplate';
import pagePreviewTemplate from './widgets/pagePreviewTemplate';

CMS.registerWidget( 'string-trimmed', StringTrimmedControl, 'string' );

CMS.registerPreviewTemplate( 'special-pages', genericPreviewTemplate );
CMS.registerPreviewTemplate( 'pages', pagePreviewTemplate );
CMS.registerPreviewTemplate( 'side-navigation', navigationPreviewTemplate );

CMS.registerPreviewStyle( '/design-system/dist/css/main.css' );
