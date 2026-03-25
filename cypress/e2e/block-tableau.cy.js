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
    cy.on('uncaught:exception', (err) => {
      if (err.message?.includes('Not Found')) {
        return false;
      }
    });

    cy.intercept('GET', `/**/*?expand*`).as('content');
    // when I add a maps block
    cy.addNewBlock('tableau', true);

    cy.get(
      `.sidebar-container .field-wrapper-tableau_vis_url #field-tableau_vis_url`,
    ).clear({ force: true });
    cy.get(
      `.sidebar-container .field-wrapper-tableau_vis_url #field-tableau_vis_url`,
    ).type('/cypress/my-page', { force: true });
    cy.wait('@content');
    cy.get('#toolbar-save').click({ force: true });
    cy.intercept('GET', `/**/*?expand*`).as('content');
    cy.wait('@content');
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');
  });
});
