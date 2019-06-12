import CMS from 'netlify-cms';

import { Preview as introPreview } from './widgets/intro/Preview';
import { Preview as slugPreview } from './widgets/slug/Preview';
import { Preview as statusPreview } from './widgets/status/Preview';
import { Preview as accessibilityPreview } from './widgets/accessibility/Preview';
import { Preview as researchPreview } from './widgets/research/Preview';
import { Preview as usagePreview } from './widgets/usage/Preview';
import { Preview as variationNamePreview } from './widgets/variation/NamePreview';
import { Preview as variationDescriptionPreview } from './widgets/variation/DescriptionPreview';
import { Preview as variationCodeSnippetPreview } from './widgets/variation/CodeSnippetPreview';

CMS.registerWidget('introWidget', 'markdown', introPreview);
CMS.registerWidget('slugWidget', 'string', slugPreview);
CMS.registerWidget('statusWidget', 'select', statusPreview);
CMS.registerWidget('accessibilityWidget', 'markdown', accessibilityPreview);
CMS.registerWidget('researchWidget', 'markdown', researchPreview);
CMS.registerWidget('usageWidget', 'markdown', usagePreview);
CMS.registerWidget('variationNameWidget', 'string', variationNamePreview);
CMS.registerWidget('variationDescriptionWidget', 'markdown', variationDescriptionPreview);
CMS.registerWidget('variationCodeSnippetWidget', 'text', variationCodeSnippetPreview);
// CMS.registerWidget('variationsWidget', 'list', variationsPreview);

CMS.registerPreviewStyle('https://cfpb.github.io/design-manual/static/css/main.min.css');
CMS.registerPreviewStyle('/design-system/dist/design-system.css');

// CMS.registerEditorComponent({
//   // Internal id of the component
//   id: "variation_1_description",
//   // Visible label
//   label: "Variation #1 description",
//   // Fields the user need to fill out when adding an instance of the component
//   fields: [
//     {name: 'text', label: 'Variation #1 description', widget: 'text'}
//   ],
//   // Pattern to identify a block as being an instance of this component
//   pattern: /^foo_bar (\S+)$/,
//   // Function to extract data elements from the regexp match
//   fromBlock: function(match) {
//     return {
//       id: match[1]
//     };
//   },
//   // Function to create a text block from an instance of this component
//   toBlock: function(obj) {
//     return obj.text;
//   },
//   // Preview output for this component. Can either be a string or a React component
//   // (component gives better render performance)
//   toPreview: function(obj) {
//     console.log(`toPreview: ${obj}`);
//     return <p>{obj.text}</p>;
//   }
// });
