import React from 'react';
import { ReactLiquid } from 'react-liquid';
import marked from 'marked';
import template from '../../../_includes/component.html';
import { Tabs } from 'govuk-frontend';

export const Preview = props => {
  const data = {
    page: props.entry.toJS().data
  };

  data.page.usage = marked( data.page.usage || '' );
  data.page.intro = marked( data.page.intro || '' );
  data.page.variations = data.page.variations.map( variation => {
    variation.variation_description = marked( variation.variation_description || '' );
    variation.variation_jinja_code_snippet = marked( variation.variation_jinja_code_snippet || '' );
    variation.variation_specs = marked( variation.variation_specs || '' );
    return variation;
  } );
  window.previewProps = props;
  window.previewReact = React;

  return (
    <div>
      <ReactLiquid template={template} data={data} html />
    </div>
  );
};
