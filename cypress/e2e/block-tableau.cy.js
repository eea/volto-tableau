import { slateAfterEach } from '../support/e2e';

describe('Blocks Tests', () => {
  beforeEach((contentType = 'Document') => {
    cy.intercept('GET', `/**/*?expand*`).as('content');
    cy.intercept('GET', '/**/Document').as('schema');
    cy.autologin();
    cy.createContent({
      contentType: 'Document',
      contentId: 'cypress',
      contentTitle: 'Cypress',
    });
    cy.createContent({
      contentType: contentType,
      contentId: 'my-page',
      contentTitle: 'My Page',
      path: 'cypress',
    });
    cy.visit('/cypress/my-page');
    // cy.waitForResourceToLoad('@navigation');
    // cy.waitForResourceToLoad('@breadcrumbs');
    // cy.waitForResourceToLoad('@actions');
    // cy.waitForResourceToLoad('@types');
    cy.waitForResourceToLoad('my-page');
    cy.navigate('/cypress/my-page/edit');
  });
  afterEach(slateAfterEach);

  it('Add Tableau block', () => {
    // when I add a maps block
    cy.addNewBlock('tableau');

    cy.get(
      `.sidebar-container .field-wrapper-tableau_vis_url #field-tableau_vis_url`,
    ).type('/path/to/dashboard', { force: true });
    cy.get('#toolbar-save').click({ force: true });
    cy.wait('@content');
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');
  });
});
