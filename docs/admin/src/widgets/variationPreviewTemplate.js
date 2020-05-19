const { AllHtmlEntities } = require( 'html-entities' );
import React, { Component } from 'react';
import { ReactLiquid, liquidEngine } from 'react-liquid';
import { changeTab, init as initTabs } from '../../../assets/js/tabs.js';
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

export default class Preview extends Component {

  constructor( props ) {
    super( props );
    const entities = new AllHtmlEntities();

    liquidEngine.registerFilter( 'slugify', initial => slugify( initial || '', { lower: true } ) );
    liquidEngine.registerFilter( 'xml_escape', initial => entities.encode( initial ) );
    liquidEngine.registerFilter( 'markdownify', initial => marked( initial || '' ) );

    this.containerRef = React.createRef();
  }

  /**
   * @param {MouseEvent} event - The mouse event object from the click.
   */
  handleClick( event ) {
    const target = event.target;
    if ( target.matches( '[data-toggle-code]' ) ) {
      event.preventDefault();
      toggleDetails( target, this.containerRef.current );
    }
    if ( target.matches( '.govuk-tabs__tab' ) ) {
      event.preventDefault();
      changeTab( target, this.containerRef.current );
    }
  }

  componentDidMount() {
    const container = this.containerRef.current;
    // The Gov UK tab styles require a parent element to have .js-enabled, see tabs.less
    container.classList.add( 'js-enabled' );
    initTabs( container );
  }

  render() {
    const data = {
      page: this.props.entry.toJS().data
    };
    return (
      <div ref={this.containerRef} onClick={event => this.handleClick( event )}>
        <ReactLiquid template={templateWithIcons} data={data} html />
      </div>
    );
  }

}
