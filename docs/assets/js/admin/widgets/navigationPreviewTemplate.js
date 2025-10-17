import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactLiquid from './ReactLiquid';
import template from '../../../../_includes/sidebar.html';

export default class Preview extends Component {
  render() {
    const data = {
      site: {
        data: {
          'side-navigation': this.props.entry.toJS().data,
        },
      },
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
