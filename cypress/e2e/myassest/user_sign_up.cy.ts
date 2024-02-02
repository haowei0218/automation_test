describe('user Sign up', () => {
    beforeEach(() =>
        cy.visit('https://app.myassets.com/')
    )
    it('Sign up success', () => {
        cy.get('.jss25 > .MuiButtonBase-root > .MuiButton-label > span').click()
        cy.get('#userName').type('2345')
        cy.get('#email').type('haoweizhou@gmail.com')
        cy.get('#password').type('123456798@@FGg')
        cy.get('.jss79').check()
        cy.get('.jss62 > .MuiButtonBase-root > .MuiButton-label').click()
    })
    it('Sign up with google', () => {
        cy.get('.jss25 > .MuiButtonBase-root > .MuiButton-label > span').click()
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiButton-label').click()
    })
    it('Sign up with apple', () => {
        cy.get('.jss25 > .MuiButtonBase-root > .MuiButton-label > span').click()
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiButton-label > span').click('center')
    })

    it.only('Sign up with correct name', () => {
        cy.get('.jss25 > .MuiButtonBase-root > .MuiButton-label > span').click()
        cy.get('#userName').type('yuyuyu')
        cy.get('#email').type('haoweizhou@gmail.com')
        cy.get('#password').type('Ha89-@')
        cy.get('.jss62 > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('#userName').type('123456789').clear()
        cy.get('#userName').type('rururu12456').clear()
    })

})