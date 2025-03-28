// packages/e2e-test/cypress/e2e/anonymousUserFlow.cy.js

describe('Parcours d’un utilisateur anonyme', () => {
    it('Un utilisateur anonyme peut naviguer de la page d’accueil à une annonce et revenir', () => {
      // Étape 1: L’utilisateur ouvre la page d’accueil.
      // Nous allons visiter la page d'accueil en français (vous pouvez changer la locale si nécessaire)
      cy.visit('/fr');
      // Vérifier que nous sommes bien sur la page d'accueil en recherchant un élément distinctif
      cy.contains('Tous les anonnces'); // Le titre de la page d'accueil
  
      // Étape 2: Il accède à une annonce en particulier.
      cy.get('[data-cy="annonce-item"]').first().click();
      cy.wait(100); 
      cy.url().should('include', '/fr/p/annonces/details/'); 
      cy.wait(100); 
      cy.get('[data-cy="back-button"]').first().click(); 
      cy.wait(100);  
     cy.url().should('eq', 'http://localhost:3000/fr'); // Vérifier l'URL de la page d'accueil
      cy.contains('Tous les anonnces');  // Vérifier à nouveau le titre de la page d'accueil
  
      // Optionnel: On pourrait vérifier que la liste des annonces est visible à nouveau.
      cy.get('.grid .block').should('be.visible');
    });
  });