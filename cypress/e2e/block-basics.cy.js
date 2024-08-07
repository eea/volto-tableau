import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Blocks Tests', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('Add Block: Empty', () => {
    // Change page title
    cy.clearSlateTitle();
    cy.getSlateTitle().type('My Add-on Page');

    cy.get('.documentFirstHeading').contains('My Add-on Page');

    cy.getSlate().click({ force: true });

    // Add block
    cy.get('.ui.basic.icon.button.block-add-button')
      .first()
      .click({ force: true });
    cy.get('.blocks-chooser .title').contains('Media').click({ force: true });
    cy.get('.content.active.media .button.image')
      .contains('Image')
      .click({ force: true });

    // Save
    cy.get('#toolbar-save').click({ force: true });
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    // then the page view should contain our changes
    cy.contains('My Add-on Page');
    cy.get('.block.image');
  });
});
