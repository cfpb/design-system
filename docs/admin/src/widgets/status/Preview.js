import React from 'react';
import { ReactLiquid } from 'react-liquid';
import template from '../../../../_includes/status.html';

export const Preview = props => {
  const data = {
      page: {
        status: props.value,
        updated: 'Today'
      }
  }
  return (
    <div>
      <ReactLiquid template={template} data={data} html />
    </div>
  );
};
