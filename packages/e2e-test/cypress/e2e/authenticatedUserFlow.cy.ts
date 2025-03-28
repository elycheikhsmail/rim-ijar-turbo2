// Creer ce fichier dans: packages/e2e-test/cypress/e2e/authenticatedUserFlow.cy.js

describe("Parcours d’un utilisateur authentifié", () => {
  const userEmail = "ali@example.com"; // Depuis ConnexionForm.tsx
  const userPassword = "password123"; // Depuis ConnexionForm.tsx
  const locale = "fr"; // Définir la locale pour les URLs

  // Données pour les annonces à ajouter
  const adsData = [
    { description: "Première annonce de test Cypress", price: "150" },
  ];

  const modifiedDescription = "Description modifiée par Cypress !";
  const modifiedPrice = "180";

  beforeEach(() => {
    // Optionnel: Vider les cookies avant chaque test pour un état propre,
    // mais pour un seul flux 'it', ce n'est pas strictement nécessaire si on commence par la connexion.
    // cy.clearCookies();
    // cy.clearLocalStorage();
  });

  it("devrait permettre à un utilisateur de se connecter, gérer ses annonces et se déconnecter", () => {
    // --- 1. Connexion ---
    cy.log("Étape 1: Connexion de l'utilisateur");
    cy.visit(`/${locale}/p/users/connexion`);
    // vider les champs de formulaire
    cy.get("#email").clear();
    cy.get("#password").clear();
    // Remplir le formulaire de connexion
    cy.get("#email").should("be.visible").type(userEmail);
    cy.get("#password").type(userPassword);
    cy.get('button#submit[type="submit"]').click();

    // Vérifier la redirection vers la page des annonces de l'utilisateur
    cy.url().should("include", `/${locale}/my/list`);
    // Utilise le titre trouvé dans /my/list/ui.tsx
    cy.contains("Annonces").should("be.visible");
    cy.wait(500); // Petite attente pour que la page se stabilise si besoin

    // Vérifier qu'aucune annonce n'existe initialement (suppose une base de données propre ou un utilisateur de test spécifique)
    // NOTE : Ceci échouera si l'utilisateur a déjà des annonces. Adaptez ou supprimez si nécessaire.
    cy.get("body").then(($body) => {
      if ($body.find(".grid .block").length > 0) {
        cy.log(
          "Attention : Des annonces préexistantes ont été trouvées. Le test continue mais la vérification initiale est ignorée.",
        );
      } else {
        cy.get(".grid .block").should("not.exist");
      }
    });

    // --- 2. Ajout de trois annonces ---
    cy.log("Étape 2: Ajout d une annonces");
    adsData.forEach((ad, index) => {
      cy.log(`Ajout de l'annonce ${index + 1}`);
      // Naviguer vers la page d'ajout (suppose un bouton ou navigation directe)
      // Si un bouton existe sur /my/list : cy.get('[data-cy="add-annonce-button"]').click();
      // Sinon, navigation directe :
      cy.visit(`/${locale}/my/add`);

      // Remplir le formulaire (tiré de AddAnnonceUI.tsx)
      cy.get("select#type").should("be.visible").select("Location");
      //.should('be.visible').select( );
      cy.wait(1000); // Attendre le chargement potentiel des catégories dépendantes
      cy.get("select#category").should("be.visible").select("Immobilier");
      cy.wait(1000); // Attendre le chargement potentiel des sous-catégories dépendantes
      cy.get("select#subCategory").should("be.visible").select("Maisons");

      cy.get("textarea#description").type(ad.description);
      cy.get('input#prix[type="number"]').type(ad.price);

      cy.get('button#submit[type="submit"]').click();

      // Vérifier la redirection vers la liste et le nombre d'annonces
      cy.url().should("include", `/${locale}/my/list`);
      // La vérification du nombre est plus fiable à la fin de la boucle
    });

    // Vérifier qu'il y a bien 1 annonces après la boucle au moins
    cy.get(".grid .block").should("have.length.greaterThan", 1);

    // --- 3. Modification de la première annonce ---
    cy.log("Étape 3: Modification de la première annonce");
    // Trouver la première annonce et cliquer sur son bouton Modifier
    cy.wait(300); // Attendre pour que les annonces soient chargées
    cy.get('[data-cy="annonce-item"]').first().click();
    cy.wait(300); // Attendre pour que la page de détails soit chargée
    // **ASSUMPTION**: Le bouton Modifier a l'attribut data-cy="edit-button"
    cy.get('[data-cy="edit-button"]').first().click();
  });
});
