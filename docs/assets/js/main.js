import { TOGGLE_ATTRIBUTE, toggleDetails } from './toggle-details.js';
import { Tabs } from 'govuk-frontend';
import AnchorJS from 'anchor-js';
import Expandable from '@cfpb/cfpb-expandables/src/Expandable';
import Table from '@cfpb/cfpb-tables/src/Table';

const anchors = new AnchorJS();
// Add anchors to all headings (except page title headings)
anchors.add( 'h2:not(.title), h3, h4, h5' );
// Ensure there are no anchors in inconvenient places
anchors.remove( `
  .live-code-example h2,
  .live-code-example h3,
  .live-code-example h4,
  .live-code-example h5,
  .o-expandable_label,
  #search-results h3
` );

Expandable.init();
Table.init();

const main = document.querySelector( 'main.content' );
const tabs = document.querySelectorAll( '[data-module="tabs"]' );

if ( tabs && tabs.length > 0 ) {
  main.classList.add( 'js-enabled' );
  for ( let i = 0; i < tabs.length; i++ ) {
    const tab = tabs[i];
    new Tabs( tab ).init();
  }
}

/**
 * @param {MouseEvent} event - The mouse event object from the click.
 */
function handleDocumentClick( event ) {
  const target = event.target;
  if ( target.matches( `[${ TOGGLE_ATTRIBUTE }]` ) ) {
    toggleDetails( target );
  }
}

document.addEventListener( 'click', handleDocumentClick, false );

// Show redirect banner if we're coming from the now-deprecated Capital
// Framework or Design Manual websites.
if ( window.location.search.match( /[?&]utm_medium=redirect([&#]|$)/ ) ) {
    const match = window.location.search.match( /[?&]utm_source=([^&#]*)/ );

    if ( match ) {
        const redirectSources = {
            capitalframework: {
                name: 'Capital Framework',
                url: 'https://cfpb.github.io/capital-framework-archive/'
            },
            designmanual: {
                name: 'the CFPB Design Manual',
                url: 'https://cfpb.github.io/design-manual-archive/'
            }
        };

        const source = redirectSources[ match[ 1 ] ];

        if ( source ) {
            const banner = document.querySelector( '#redirect-banner' );
            const sourceNames = banner.querySelectorAll( 'span[data-redirect=source-name]' );
            const links = banner.querySelectorAll( 'a[data-redirect=archive-website]' );

            for ( let i = 0, len = sourceNames.length; i < len; i++ ) {
                sourceNames[i].textContent = source.name;
            }

            for ( let i = 0, len = links.length; i < len; i++ ) {
                links[i].textContent = source.url;
                links[i].href = source.url;
            }

            banner.classList.remove( 'u-hidden' );
        }
    }
}
