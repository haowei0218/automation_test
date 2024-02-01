describe('submit function', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
    })
    it('submit() function ', () => {
        cy.get('#contact').submit()
    })
})