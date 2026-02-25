import { html } from 'lit';
import {CfpbButton} from '@cfpb/cfpb-design-system/src/elements/cfpb-button';

describe('<cfpb-button />', () => {
  before(() => {
    CfpbButton.init();
  });

  it('renders a button', () => {
    cy.mount(html`<cfpb-button>Click me</cfpb-button>`);
    cy.contains('Click me').should('exist');

    cy.get('cfpb-button').shadow().find('button').should('have.class', 'a-btn');
  });
});
