import React from 'react';
import { ReactLiquid } from 'react-liquid';
import escape from 'escape-html';
import marked from 'marked';
import template from '../../../../_includes/variation/code-snippet.html';

export const Preview = props => {
  const data = {
    code_snippet: marked(props.value),
    code_snippet_raw: escape(props.value)
  }
  return <ReactLiquid template={template} data={data} html />;
};
