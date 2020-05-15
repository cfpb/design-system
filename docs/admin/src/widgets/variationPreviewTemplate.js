const { AllHtmlEntities } = require( 'html-entities' );
import React, { Component } from 'react';
import { ReactLiquid, liquidEngine } from 'react-liquid';
import { changeTab, initTabs } from '../../../assets/js/tabs.js';
import ReactDOM from 'react-dom';
import marked from 'marked';
import slugify from 'slugify';
import template from '../../../_includes/variation-content.html';
import toggleDetails from '../../../assets/js/toggle-details.js';

// react-liquid (https://github.com/aquibm/react-liquid/) isn't able to `include` other files so we
// replace instances of {% include icons/XXXXX.svg %} with the inlined SVG
const templateWithIcons = template.replace(
  /{%\s+include\s+\/?icons\/([\w-]+)\.svg\s+%}/g,
  ( match, icon ) => require( `../../../_includes/icons/${ icon }.svg` )
);

/**
 * @param {MouseEvent} event - The mouse event object from the click.
 */


export default class Preview extends Component {

  constructor( props ) {
    super( props );
    const entities = new AllHtmlEntities();

    liquidEngine.registerFilter( 'slugify', initial => slugify( initial || '', { lower: true } ) );
    liquidEngine.registerFilter( 'xml_escape', initial => entities.encode( initial ) );
    liquidEngine.registerFilter( 'markdownify', initial => marked( initial || '' ) );

    this.containerRef = React.createRef();
  }

  handleClick( event ) {
    const target = event.target;
    // Returns the preview component's native DOM element for
    // use with our non-React vanilla JS toggling and tabs functionality.
    // https://reactjs.org/docs/react-dom.html#finddomnode
    const doc = ReactDOM.findDOMNode( this );
    if ( target.matches( '[data-toggle-code]' ) ) {
      event.preventDefault();
      toggleDetails( target, doc );
    }
    if ( target.matches( '.govuk-tabs__tab' ) ) {
      event.preventDefault();
      changeTab( target, doc );
    }
  }

  componentDidMount() {
    const container = ReactDOM.findDOMNode( this.containerRef.current );
    container.addEventListener( 'click', this.handleClick );
    // The Gov UK tab styles require a parent element to have .js-enabled, see tabs.less
    container.classList.add( 'js-enabled' );
    // Initialize the Gov UK tabs once everything has finished loading
    window.addEventListener( 'load', () => {
      initTabs( container );
    } );
  }

  render() {
    const data = {
      page: this.props.entry.toJS().data
    };
    return (
      <div ref={this.containerRef}>
        <ReactLiquid template={templateWithIcons} data={data} html />
      </div>
    );
  }

}
