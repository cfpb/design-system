import React from 'react';
import { ReactLiquid } from 'react-liquid';
import marked from 'marked';
import template from '../../../_includes/sidebar-preview-pane.html';

export const Preview = props => {
  const site = {
    data: {
      navigation: props.entry.toJS().data
    }
  };

  window.previewProps = props;
  window.previewReact = React;

  window.previewData = site;

  return (
    <div>
      <ReactLiquid template={template} site={site} html />
    </div>
  );
};
