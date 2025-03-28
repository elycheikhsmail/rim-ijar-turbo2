// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'http://localhost:3000', // À adapter selon l'URL de votre application
//     specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
//     supportFile: 'cypress/support/e2e.{js,ts}',
//     setupNodeEvents(on, config) {
//       // Ici, vous pouvez ajouter des écouteurs d'événements si nécessaire
//       return config
//     }
//   }
// })
// packages/e2e-test/cypress.config.ts
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // À adapter selon l'URL de votre application
    // Mise à jour des patterns pour inclure .ts
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    // Mise à jour du fichier de support pour utiliser .ts
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents(on, config) {
      // Ici, vous pouvez ajouter des écouteurs d'événements si nécessaire
      // Nous ajouterons des tâches Prisma ici plus tard

      // Il est important de retourner l'objet config modifié
      return config;
    },
  },
});
