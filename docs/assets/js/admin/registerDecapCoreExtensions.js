import { DecapCmsCore as CMS } from 'decap-cms-core';
import { GitHubBackend } from 'decap-cms-backend-github';
import { ProxyBackend } from 'decap-cms-backend-proxy';
import BooleanWidgetModule from 'decap-cms-widget-boolean';
import CodeWidgetModule from 'decap-cms-widget-code';
import DateTimeWidgetModule from 'decap-cms-widget-datetime';
import FileWidgetModule from 'decap-cms-widget-file';
import ImageWidgetModule from 'decap-cms-widget-image';
import ListWidgetModule from 'decap-cms-widget-list';
import ObjectWidgetModule from 'decap-cms-widget-object';
import RelationWidgetModule from 'decap-cms-widget-relation';
import SelectWidgetModule from 'decap-cms-widget-select';
import StringWidgetModule from 'decap-cms-widget-string';
import TextWidgetModule from 'decap-cms-widget-text';
import MarkdownWidgetModule from 'decap-cms-widget-markdown';
import imageEditorComponennt from 'decap-cms-editor-component-image';
import enLocale from 'decap-cms-locales/dist/esm/en';

let hasRegisteredCoreExtensions = false;

/**
 * Register the subset of Decap backends, widgets, and locale data this repo uses for the local admin app.
 * @returns {typeof CMS} The shared Decap singleton after registration.
 */
export function registerDecapCoreExtensions() {
  if (hasRegisteredCoreExtensions) {
    return CMS;
  }

  // Register only the core pieces this repo actually uses instead of importing
  // decap-cms-app, which bundles every default extension and makes
  // the Storybook preview build harder to control.

  CMS.registerBackend('github', GitHubBackend);
  CMS.registerBackend('proxy', ProxyBackend);

  CMS.registerWidget([
    StringWidgetModule.Widget(),
    TextWidgetModule.Widget(),
    ImageWidgetModule.Widget(),
    FileWidgetModule.Widget(),
    SelectWidgetModule.Widget(),
    MarkdownWidgetModule.Widget(),
    ListWidgetModule.Widget(),
    ObjectWidgetModule.Widget(),
    RelationWidgetModule.Widget(),
    BooleanWidgetModule.Widget(),
    CodeWidgetModule.Widget(),
    DateTimeWidgetModule.Widget(),
  ]);

  CMS.registerEditorComponent(imageEditorComponennt);
  CMS.registerEditorComponent({
    id: 'code-block',
    label: 'Code Block',
    widget: 'code',
    type: 'code-block',
  });
  CMS.registerLocale('en', enLocale);

  // Decap stores registrations on a shared singleton. Gruarding this keeps the
  // local admin app stable when Vite or Storybook reloads modules in place.
  hasRegisteredCoreExtensions = true;

  return CMS;
}
