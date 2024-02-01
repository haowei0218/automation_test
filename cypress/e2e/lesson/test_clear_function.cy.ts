context('clear function', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/automation_test/cypress-realworld-testing-course-app/cypress/index.html')
    })
    it('correct use clear function', () => {
        cy.get('.single_option').type('123').clear()
        cy.get('textarea').type('hi').clear()
        cy.focused().clear()
    })
    it('incorrect use clear function', () => {
        cy.clear()
        cy.get('nav').clear()
        cy.url().clear()
    })
})