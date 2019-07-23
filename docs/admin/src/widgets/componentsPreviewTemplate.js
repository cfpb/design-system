const { AllHtmlEntities } = require( 'html-entities' );
import { ReactLiquid, liquidEngine } from 'react-liquid';
import { Tabs } from 'govuk-frontend';
import marked from 'marked';
import React, { Component } from 'react';
import template from '../../../_includes/component.html';

export default class Preview extends Component {

  componentDidMount() {
    const entities = new AllHtmlEntities();
    const tabs = document.querySelector( 'iframe' ).contentWindow.document.querySelectorAll( '[data-module="tabs"]' );

    liquidEngine.registerFilter( 'xml_escape', initial => entities.encode( initial ) );

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
    data.page.usage = marked( data.page.usage || '' );
    data.page.intro = marked( data.page.intro || '' );
    data.page.variations = data.page.variations.map( variation => {
      variation.variation_description = marked( variation.variation_description || '' );
      variation.variation_jinja_code_snippet = marked( variation.variation_jinja_code_snippet || '' );
      variation.variation_specs = marked( variation.variation_specs || '' );
      return variation;
    } );
    return (
      <div>
        <ReactLiquid template={template} data={data} html />
      </div>
    );
  }
}
