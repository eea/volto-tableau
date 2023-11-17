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

    cy.get(`.sidebar-container .field-wrapper-url #field-url`).type(
      'https://tableau-public.discomap.eea.europa.eu/views/GHGProjections/Dashboard1&:jsdebug=n',
    );
    cy.get('#toolbar-save').click();
    cy.wait('@content');
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    // then the page view should contain the maps block
    cy.get('#page-document iframe')
      .should('have.attr', 'src')
      .and('match', /\/\/tableau-public.discomap.eea.europa.eu\//);
  });
});
