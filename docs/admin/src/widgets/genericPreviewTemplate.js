import React, { Component } from 'react';
import { ReactLiquid, liquidEngine } from 'react-liquid';
import marked from 'marked';
import template from '../../../_includes/generic-content.html';

export default class Preview extends Component {

  componentDidMount() {
    liquidEngine.registerFilter( 'markdownify', initial => marked( initial || '' ) );
  }

  render() {
    const data = {
      page: this.props.entry.toJS().data
    };
    return (
      <div>
        <ReactLiquid template={ template } data={ data } html />
      </div>
    );
  }

}
