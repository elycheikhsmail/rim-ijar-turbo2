// packages/e2e-test/cypress/e2e/anonymousUserFlow.cy.js

describe('Parcours d’un utilisateur anonyme', () => {
    it('Un utilisateur anonyme peut naviguer de la page d’accueil à une annonce et revenir', () => {
      // Étape 1: L’utilisateur ouvre la page d’accueil.
      // Nous allons visiter la page d'accueil en français (vous pouvez changer la locale si nécessaire)
      cy.visit('/fr');
  
      // Vérifier que nous sommes bien sur la page d'accueil en recherchant un élément distinctif
      cy.contains('Tous les anonnces'); // Le titre de la page d'accueil
  
      // Étape 2: Il accède à une annonce en particulier.
      // Pour accéder à une annonce, nous devons en trouver une dans la liste.
      // Nous allons cibler le premier lien d'annonce trouvé dans le composant ListAnnoncesUI.
      // Il est important que le composant AnnonceItemUI ou son parent Link ait une classe ou un attribut identifiable.
      // D'après le code de ListAnnoncesUI.tsx, chaque annonce est enveloppée dans un Link.
      // Nous allons cibler le premier élément avec la classe 'block' qui est un enfant de la div avec la classe 'grid'.
      cy.get('.grid .block').first().click();
  
      // Vérifier que nous sommes sur la page de détails de l'annonce
      cy.url().should('include', '/p/annonces/details/');
      //cy.contains('Annonce non trouvée').should('not.exist'); // S'assurer qu'il n'y a pas d'erreur de "non trouvée"
  
      // Optionnel: On pourrait vérifier un élément spécifique de la page de détails si on le connaît.
      // Par exemple, si le titre de l'annonce est affiché dans un certain élément:
      // cy.get('.annonce-title').should('be.visible');
  
      // Étape 3: Il retourne ensuite à la page d’accueil avec succès.
      // Le composant BackButton est utilisé pour revenir à la page précédente.
      // Nous allons le cibler et cliquer dessus.
      cy.wait(300); 
     // cy.get('button').first().click(); // Assurez-vous que le BackButton contient le texte 'Retour'
      cy.get('[data-cy="back-button"]').first().click();
     // cy.wait(1000); // Attendre un peu pour que la transition se termine
      // Vérifier que nous sommes de retour sur la page d'accueil
     cy.url().should('eq', 'http://localhost:3000/fr'); // Vérifier l'URL de la page d'accueil
      cy.contains('Tous les anonnces');  // Vérifier à nouveau le titre de la page d'accueil
  
      // Optionnel: On pourrait vérifier que la liste des annonces est visible à nouveau.
      cy.get('.grid .block').should('be.visible');
    });
  });