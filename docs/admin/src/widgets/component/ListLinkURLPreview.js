import React from 'react';
import { ReactLiquid } from 'react-liquid';
import marked from 'marked';
import template from '../../../../_includes/component/list-link-url.html';

export const Preview = props => {
  const data = {
    url: marked(props.value)
  }
  return <ReactLiquid template={template} data={data} html />;
};
