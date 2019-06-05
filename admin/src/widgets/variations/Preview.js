import React from 'react';
import { ReactLiquid } from 'react-liquid'
import template from '../../../../_includes/variations.html';

export const Preview = props => {
  const data = {
      page: {
        variations: props.value
      }
  }
  return (
    <div>
      <ReactLiquid template={template} data={data} html />
    </div>
  );
};
