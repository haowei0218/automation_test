describe("Pressonal account settings", () => {
    beforeEach(() => {
        cy.visit('https://app.myassets.com/')
        cy.get('#email').type('myademonumber8@gmail.com')
        cy.get('#password').type('Myatesting#')
        cy.get('[data-cy="login-btn"] > .MuiButton-label').click().wait(10000)//等待頁面完全加載完畢
    })

    it.only('Sorting of Account setting', () => {
        cy.get('.MuiAvatar-root').click('center')
        cy.get(':nth-child(1) > .jss93').click().wait('5000')
        cy.get('.jss934 > .MuiBox-root > .MuiButtonBase-root > .MuiIconButton-label').click('center')

    })
})