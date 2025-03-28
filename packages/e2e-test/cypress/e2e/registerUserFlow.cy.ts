
const userEmail = 'ali3@example.com'; // Depuis ConnexionForm.tsx
const userPassword = 'password123'; // Depuis ConnexionForm.tsx
describe("inscription d'un utilisateur", () => {
    it('devrait s inscrire', () => {
      cy.visit('/fr') 
      cy.wait(100);    
       cy.get('#connexion').first().click();

       cy.wait(100);    
       cy.get('#register').first().click();
       cy.wait(200);  
       // remplir le formulaire d'inscription
      cy.wait(200);   
      // Remplir le formulaire de connexion
      cy.get('#email').should('be.visible').type(userEmail);
      cy.wait(200);   
      cy.get('#password').type(userPassword); 
      cy.wait(200);   
      cy.get('#confirmPassword').type(userPassword);
      cy.get('#submit').first().click();
      cy.wait(100); 
      cy.url().should('include', '/fr/p/users/connexion'); 
      cy.wait(200); 
      // se connecter
      cy.get('#email').should('be.visible').type(userEmail);
      cy.wait(200);   
      cy.get('#password').type(userPassword); 
      cy.wait(200);   
      cy.get('#submit').first().click();
      cy.url().should('include', 'fr/my/list');

    })
  })
  //  data-cy="connexion-link"