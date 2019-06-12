import React from 'react';
import { ReactLiquid } from 'react-liquid';
import marked from 'marked';
import template from '../../../../_includes/variation/name.html';

export const Preview = props => {
  const data = {
    name: marked(props.value)
  }
  return <ReactLiquid template={template} data={data} html />;
};
