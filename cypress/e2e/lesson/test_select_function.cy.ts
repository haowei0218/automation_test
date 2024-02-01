context('select function', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/automation_test/cypress-realworld-testing-course-app/cypress/index.html')
    })
    it('.select(value)', () => {
        cy.get('select').eq(0).select("1").should('contain.text', "red")
        cy.get('select').eq(0).select("orange").should('contain.value', "3")
    })
    it('.select(values)', () => {
        cy.get('select').eq(0).select(['1', '2']).invoke("val").should("deep.equal", ["1", "2"])
    })
    it('.select(value,options)', () => {
        cy.get('select').eq(1).select('bg', { force: true }).should('contain.text', "北京")
    })
})