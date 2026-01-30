import { html } from 'lit';
import { mount } from 'cypress-lit';
import '@cfpb/design-system/button';

it('renders a button', () => {
  mount(html`<cfpb-button>Click me</cfpb-button>`);
  cy.contains('Click me').should('exist');
});
