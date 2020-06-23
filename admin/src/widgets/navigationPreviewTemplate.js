import React, { Component } from 'react';
import { ReactLiquid, liquidEngine } from 'react-liquid';
import template from '../../../_includes/sidebar.html';

export default class Preview extends Component {

  render() {
    const data = {
      site: {
        data: {
          'side-navigation': this.props.entry.toJS().data
        }
      }
    };
    return (
      <div>
        <ReactLiquid template={ template } data={ data } html />
      </div>
    );
  }

}
