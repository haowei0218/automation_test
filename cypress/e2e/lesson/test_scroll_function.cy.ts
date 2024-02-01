describe('scroll function', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
    })
    it('橫向滾動', () => {
        cy.get('.scroll-horizontal button').should('not.be.visible')
        cy.get('.scroll-horizontal button').scrollIntoView({ duration: 2000 }).should('be.visible')
    })
    it('縱向滾動', () => {
        cy.get('.scroll-vertical button').should('not.be.visible')
        cy.get('.scroll-vertical button').scrollIntoView({ duration: 2000 }).should('be.visible')
    })
    it('縱向 橫向滾動', () => {
        cy.get('.scroll-both button').should('not.be.visible')
        cy.get('.scroll-both button').scrollIntoView({ duration: 2000 }).should('be.visible')
    })
})