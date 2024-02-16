describe('address book', () => {
    beforeEach(() => {
        cy.visit('https://app.myassets.com/')
        cy.get('#email').type('myademonumber8@gmail.com')
        cy.get('#password').type('Myatesting#')
        cy.get('[data-cy="login-btn"] > .MuiButton-label').click('center').wait(4000)
        cy.get('.MuiAvatar-root').click('center')
        cy.get(':nth-child(5) > .jss93').click()
        cy.get('[data-cy="add-btn"]').click('center')//create contacts
    })
    context('address book button functionanl', () => {
        it('address book button', () => {
            cy.get('#firstName').type('yuyuyuyu')
            cy.get('.jss544').scrollTo('bottom') //create contact page scrollTO bottom 
            cy.get('.MuiDialogActions-root').click('bottomLeft')
        })
    })
})