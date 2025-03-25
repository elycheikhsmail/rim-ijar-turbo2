const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // À adapter selon l'URL de votre application
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.{js,ts}',
    setupNodeEvents(on, config) {
      // Ici, vous pouvez ajouter des écouteurs d'événements si nécessaire
      return config
    }
  }
})
