import React from 'react';
import { ReactLiquid } from 'react-liquid';
import marked from 'marked';
import template from '../../../../_includes/component/help-us.html';

export const Preview = props => {
  const data = {
    help_us: marked(props.value)
  }
  return (
    <div className="u-right">
      <ReactLiquid template={template} data={data} html />
    </div>
  );
};
