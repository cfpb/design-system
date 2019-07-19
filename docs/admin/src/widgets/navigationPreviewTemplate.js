import React from 'react';
import { ReactLiquid } from 'react-liquid';
import marked from 'marked';
import template from '../../../_includes/sidebar.html';

export const Preview = props => {
  const data = {
    page: {
      section: 'all'
    },
    site: {
      baseurl: 'https://cfpb.github.io/design-system',
      data: {
        navigation: props.entry.toJS().data
      }
    }
  };

  window.previewProps = props;
  window.previewReact = React;
  window.previewData = data;

  return (
    <div>
      <ReactLiquid template={template} data={data} html />
    </div>
  );
};
