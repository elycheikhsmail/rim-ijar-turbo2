describe('Page d’accueil', () => {
    it('devrait afficher le titre', () => {
      cy.visit('/ar')
      cy.contains('français')
    })
  })
  