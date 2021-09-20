/// <reference types="cypress" />

context('Visit localhost', () => {

    it('should contain hello world', () => {
        cy.visit('http://localhost:8081/')
        cy.get('.text-center').should('contain', 'Hello world!')
    })
})