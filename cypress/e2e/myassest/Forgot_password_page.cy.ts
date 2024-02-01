describe('forgot password page ', () => {
    beforeEach(() => {
        cy.visit('https://app.myassets.com/')

    })
    it('Forgot password page with missing email prefix', () => {
        cy.get('.jss18 > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('#resetEmail').type('@gmail.com')
        cy.get(':nth:child(4) > .MuiButtonBase-root').click()

    })
})