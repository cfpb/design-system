import React from 'react';
import { ReactLiquid } from 'react-liquid';
import marked from 'marked';
import template from '../../../../_includes/variation/description.html';

export const Preview = props => {
  const data = {
    description: marked(props.value)
  }
  return <ReactLiquid template={template} data={data} html />;
};
