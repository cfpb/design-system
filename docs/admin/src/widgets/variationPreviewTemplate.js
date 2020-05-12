const { AllHtmlEntities } = require( 'html-entities' );
import React, { Component } from 'react';
import { ReactLiquid, liquidEngine } from 'react-liquid';
import { Tabs } from 'govuk-frontend';
import marked from 'marked';
import template from '../../../_includes/variation-content.html';

// react-liquid (https://github.com/aquibm/react-liquid/) isn't able to `include` other files so we
// replace instances of {% include icons/XXXXX.svg %} with the inlined SVG
const templateWithIcons = template.replace(
  /{%\s+include\s+\/?icons\/([\w-]+)\.svg\s+%}/g,
  ( match, icon ) => require( `../../../_includes/icons/${ icon }.svg` )
);

export default class Preview extends Component {

  componentDidMount() {
    const entities = new AllHtmlEntities();
    const tabs = document.querySelector( 'iframe' ).contentWindow.document.querySelectorAll( '[data-module="tabs"]' );

    liquidEngine.registerFilter( 'xml_escape', initial => entities.encode( initial ) );
    liquidEngine.registerFilter( 'markdownify', initial => marked( initial || '' ) );

    if ( tabs && tabs.length > 0 ) {
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
        <ReactLiquid template={templateWithIcons} data={data} html />
      </div>
    );
  }

}
