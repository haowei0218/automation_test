context('click function', () => {
    before(() => {
        cy.visit("http://127.0.0.1:5500/cypress/index.html")
    })
    it('.click()', () => {
        cy.get('#main1').click()
    })
})