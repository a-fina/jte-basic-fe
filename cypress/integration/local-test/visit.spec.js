/// <reference types="cypress" />

context('Visit', () => {

    it('should visit', () => {
        cy.visit('https://example.cypress.io')
    })
})