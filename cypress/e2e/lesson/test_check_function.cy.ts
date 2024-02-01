context('.check() function test', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/automation_test/cypress-realworld-testing-course-app/cypress/index.html')
    })
    it('.check()', () => {
        cy.get(`[type="radio"]`).check()
        cy.get(`[type="checkbox"]`).check()
        cy.get("#house").check()
    })
    it('.check(values)', () => {
        cy.get(`[type="checkbox"]`).check(["money", "house"])
    })
    it('.check(options)', () => {
        cy.get(`[type="radio"]`).check({ force: true }).should('be.checked')
    })
})