import React from 'react';
import { ReactLiquid } from 'react-liquid';
import marked from 'marked';
import template from '../../../../_includes/variation.html';

export const Preview = props => {
  // console.log(props);
  console.log(props.entry.map((e)=> console.log(e)));
  console.log(props.field.map((e)=> console.log(e)));
  console.log(props.fieldsMetaData.map((e)=> console.log(e)));
  const data = {
    variation: marked(props.value)
  }
  return (
    <div>
      <ReactLiquid template={template} data={data} html />
    </div>
  );
};
