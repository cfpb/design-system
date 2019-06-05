import React from 'react';
import { ReactLiquid } from 'react-liquid'
import template from '../../../../_includes/usage.html';

export const Preview = props => {
  const data = {
      page: {
        usage: props.value
      }
  }
  return (
    <div>
      <ReactLiquid template={template} data={data} html />
    </div>
  );
};
