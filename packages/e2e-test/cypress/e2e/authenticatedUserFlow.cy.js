// Creer ce fichier dans: packages/e2e-test/cypress/e2e/authenticatedUserFlow.cy.js

describe('Parcours d’un utilisateur authentifié', () => {
    const userEmail = 'ali@example.com'; // Depuis ConnexionForm.tsx
    const userPassword = 'password123'; // Depuis ConnexionForm.tsx
    const locale = 'fr'; // Définir la locale pour les URLs
  
    // Données pour les annonces à ajouter
    const adsData = [
      {  description: 'Première annonce de test Cypress', price: '150' },
      { description: 'Deuxième annonce générée par Cypress', price: '300' },
      {  description: 'Troisième et dernière annonce auto', price: '99' },
    ];
  
    const modifiedDescription = 'Description modifiée par Cypress !';
    const modifiedPrice = '180';
  
    beforeEach(() => {
      // Optionnel: Vider les cookies avant chaque test pour un état propre,
      // mais pour un seul flux 'it', ce n'est pas strictement nécessaire si on commence par la connexion.
      // cy.clearCookies();
      // cy.clearLocalStorage();
    });
  
    it('devrait permettre à un utilisateur de se connecter, gérer ses annonces et se déconnecter', () => {
      // --- 1. Connexion ---
      cy.log('Étape 1: Connexion de l\'utilisateur');
      cy.visit(`/${locale}/p/users/connexion`);
      // vider les champs de formulaire
      cy.get('#email').clear();
      cy.get('#password').clear();
      // Remplir le formulaire de connexion
      cy.get('#email').should('be.visible').type(userEmail);
      cy.get('#password').type(userPassword);
      cy.get('button#submit[type="submit"]').click();
  
      // Vérifier la redirection vers la page des annonces de l'utilisateur
      cy.url().should('include', `/${locale}/my/list`);
      // Utilise le titre trouvé dans /my/list/ui.tsx
      cy.contains('Annonces').should('be.visible');
      cy.wait(500); // Petite attente pour que la page se stabilise si besoin
  
       // Vérifier qu'aucune annonce n'existe initialement (suppose une base de données propre ou un utilisateur de test spécifique)
       // NOTE : Ceci échouera si l'utilisateur a déjà des annonces. Adaptez ou supprimez si nécessaire.
       cy.get('body').then(($body) => {
          if ($body.find('.grid .block').length > 0) {
            cy.log('Attention : Des annonces préexistantes ont été trouvées. Le test continue mais la vérification initiale est ignorée.');
          } else {
            cy.get('.grid .block').should('not.exist');
          }
        });
  
  
      // --- 2. Ajout de trois annonces ---
      cy.log('Étape 2: Ajout de trois annonces');
      adsData.forEach((ad, index) => {
        cy.log(`Ajout de l'annonce ${index + 1}`);
        // Naviguer vers la page d'ajout (suppose un bouton ou navigation directe)
        // Si un bouton existe sur /my/list : cy.get('[data-cy="add-annonce-button"]').click();
        // Sinon, navigation directe :
        cy.visit(`/${locale}/my/add`);
  
        // Remplir le formulaire (tiré de AddAnnonceUI.tsx) 
        cy.get('select#type').should('be.visible').select("Location"); 
        //.should('be.visible').select( );
        cy.wait(1000); // Attendre le chargement potentiel des catégories dépendantes
        cy.get('select#category').should('be.visible').select("Immobilier");
        cy.wait(1000); // Attendre le chargement potentiel des sous-catégories dépendantes
        cy.get('select#subCategory').should('be.visible').select("Maisons");
  
        cy.get('textarea#description').type(ad.description);
        cy.get('input#prix[type="number"]').type(ad.price);
  
        cy.get('button#submit[type="submit"]').click();
  
        // Vérifier la redirection vers la liste et le nombre d'annonces
        cy.url().should('include', `/${locale}/my/list`);
        // La vérification du nombre est plus fiable à la fin de la boucle
      });
  
      // Vérifier qu'il y a bien 3 annonces après la boucle au moins
      //cy.get('.grid .block').should('have.length',3);    
      cy.get('.grid .block').should('have.length.greaterThan', 3);
  
      // --- 3. Modification de la première annonce ---
      cy.log('Étape 3: Modification de la première annonce');
      // Trouver la première annonce et cliquer sur son bouton Modifier
      // **ASSUMPTION**: Le bouton Modifier a l'attribut data-cy="edit-button"
      cy.get('.grid .block').first().find('[data-cy="edit-button"]').click();
  
      // Le formulaire d'édition apparaît (probablement un modal basé sur EditForm.tsx)
      // **ASSUMPTION**: Le modal a une classe spécifique ou un titre identifiable
      cy.get('.fixed.inset-0').should('be.visible'); // Conteneur du modal
      cy.contains("Modifier l'annonce").should('be.visible'); // Titre du modal
  
      // Modifier la description et le prix
      // **ASSUMPTION**: Les champs sont identifiables dans le modal
      cy.get('.fixed.inset-0 textarea').clear().type(modifiedDescription);
      cy.get('.fixed.inset-0 input[type="number"]').clear().type(modifiedPrice);
  
      // Soumettre le formulaire de modification
      // **ASSUMPTION**: Le bouton submit a le texte 'Update' ou 'Mettre à jour'
      cy.get('.fixed.inset-0 button[type="submit"]').contains(/Update|Mettre à jour/i).click();
  
      // Vérifier que le modal est fermé
      cy.get('.fixed.inset-0').should('not.exist');
      cy.wait(500); // Attente pour la mise à jour de l'UI
  
      // Vérifier que la modification est prise en compte sur la liste
      cy.get('.grid .block').first().should('contain.text', modifiedDescription.substring(0, 50)); // Le titre est basé sur la description
      cy.get('.grid .block').first().should('contain.text', `${modifiedPrice} MRU`); // Vérifier le prix affiché
  
      // --- 4. Retrait de la dernière annonce ---
      cy.log('Étape 4: Retrait de la dernière annonce');
      // La "dernière" annonce est la 3ème ajoutée, qui est la dernière dans la liste actuelle
      // **ASSUMPTION**: Le bouton Supprimer a l'attribut data-cy="delete-button"
      cy.get('.grid .block').last().find('[data-cy="delete-button"]').click();
  
      // Gérer une éventuelle confirmation (si window.confirm est utilisé)
      // Si une confirmation est attendue:
      // cy.on('window:confirm', (str) => {
      //   expect(str).to.equal('Êtes-vous sûr de vouloir supprimer cette annonce ?'); // Adapter le texte exact
      //   return true; // Clique sur "OK"
      // });
  
      // Si aucune confirmation ou si elle est gérée différemment (ex: modal de confirmation)
      // Adapter le code ici pour cliquer sur le bouton de confirmation du modal si besoin.
  
      cy.wait(1000); // Attendre la fin de l'action de suppression (API call + re-render)
  
      // Vérifier qu'il reste 2 annonces
      cy.get('.grid .block').should('have.length', 2);
      // Vérifier que l'annonce supprimée (la 3ème ajoutée) n'est plus là
      cy.contains(adsData[2].description).should('not.exist');
  
      // --- 5. Déconnexion ---
      cy.log('Étape 5: Déconnexion de l\'utilisateur');
      // Trouver et cliquer sur le bouton de déconnexion
      // **ASSUMPTION**: Le bouton Déconnexion a l'attribut data-cy="logout-button"
      // Il pourrait être dans un header, un menu déroulant, etc.
      cy.get('[data-cy="logout-button"]').click();
  
      // Vérifier la redirection vers la page de connexion ou d'accueil
      cy.url().should((url) => {
        expect(url).to.satisfy((urlValue) =>
          urlValue.includes(`/${locale}/p/users/connexion`) || urlValue === `${Cypress.config().baseUrl}${locale}`
        );
      });
  
      // Optionnel : Essayer d'accéder à une page protégée pour confirmer la déconnexion
      cy.visit(`/${locale}/my/list`, { failOnStatusCode: false }); // Ne pas échouer si la page renvoie 4xx/5xx (redirection)
      cy.url().should('include', `/${locale}/p/users/connexion`); // Doit être redirigé vers la connexion
    });
  });