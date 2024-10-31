import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ReactLiquid, liquidEngine } from 'react-liquid';
import template from '../../../../_includes/generic-content.html';

import { marked } from '../../../../../node_modules/marked/lib/marked.esm.js';

export default class Preview extends Component {
  componentDidMount() {
    liquidEngine.registerFilter('markdownify', (initial) =>
      marked.parse(initial || ''),
    );
  }

  render() {
    const data = {
      page: this.props.entry.toJS().data,
    };
    return (
      <div>
        <ReactLiquid template={template} data={data} html />
      </div>
    );
  }
}

Preview.propTypes = {
  entry: PropTypes.object,
};
