describe('CMS interstitial page with editing instructions', () => {
  describe('Editing a component page', () => {
    beforeEach(() => {
      cy.visit('/components/banner-notification');
      const editButton = cy.get('#edit-page').then(() => {
        editButton.should('be.visible');
        editButton.click();
      });
    });

    it("should show the interstitial if the user hasn't seen it before", () => {
      cy.title().should('eq', 'Updating this website - CFPB Design System');
    });

    it('should not show the interstitial if the user has already seen it', () => {
      cy.visit('/components/banner-notification');
      const editButton = cy.get('#edit-page').then(() => {
        editButton.should('be.visible');
        editButton.click();
        cy.title().should('eq', 'Content Manager');
      });
    });
  });
});
