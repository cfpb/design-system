const { AllHtmlEntities } = require( 'html-entities' );
import React, { Component } from 'react';
import { ReactLiquid, liquidEngine } from 'react-liquid';
import { Tabs } from 'govuk-frontend';
import marked from 'marked';
import template from '../../../_includes/component.html';

export default class Preview extends Component {

  componentDidMount() {
    const entities = new AllHtmlEntities();
    const tabs = document.querySelector( 'iframe' ).contentWindow.document.querySelectorAll( '[data-module="tabs"]' );

    liquidEngine.registerFilter( 'xml_escape', initial => entities.encode( initial ) );
    liquidEngine.registerFilter( 'markdownify', initial => marked( initial || '' ) );

    if ( tabs ) {
      document.querySelector( 'iframe' ).contentWindow.document.body.classList.add( 'js-enabled' );
      for ( let i = 0; i < tabs.length; i++ ) {
        const tab = tabs[i];
        new Tabs( tab ).init( );
      }
    }
  }

  render() {
    const data = {
      page: this.props.entry.toJS().data
    };
    return (
      <div>
        <ReactLiquid template={template} data={data} html />
      </div>
    );
  }

}
