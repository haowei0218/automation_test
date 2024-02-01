describe('focus and blur function', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
    })
    it('focus function', () => {
        cy.get('[list="fruit"]').first().focus()
    })
    it('blur function', () => {
        cy.get('textarea').type('happy day').blur()
    })

})