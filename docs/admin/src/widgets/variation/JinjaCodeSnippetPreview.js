import React from 'react';
import { ReactLiquid } from 'react-liquid';
import escape from 'escape-html';
import marked from 'marked';
import template from '../../../../_includes/variation/jinja-code-snippet.html';

export const Preview = props => {
  const data = {
    jinja_code_snippet: marked(props.value),
  }
  return <ReactLiquid template={template} data={data} html />;
};
