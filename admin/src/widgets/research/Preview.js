import React from 'react';
import { ReactLiquid } from 'react-liquid'
import template from '../../../../_includes/research.html';

export const Preview = props => {
  const data = {
      page: {
        research: props.value
      }
  }
  return (
    <div>
      <ReactLiquid template={template} data={data} html />
    </div>
  );
};
