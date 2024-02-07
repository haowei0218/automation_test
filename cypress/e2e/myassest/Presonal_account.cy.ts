describe('Presonal_account', () => {
    // login
    before(() => {
        cy.visit('https://app.myassets.com/')
    })
    it('login and goto Presonal action', () => {
        cy.get('#email').type('myademonumber8@gmail.com')
        cy.get('#password').type('Myatesting#')
        cy.get('[data-cy="login-btn"] > .MuiButton-label').click('center').wait(6000)
        cy.get('.MuiAvatar-root').click('center') // account button
        cy.get(':nth-child(1) > .jss93').click() // click account setting option
        cy.get('.jss489 > .MuiBox-root > .MuiButtonBase-root').should('exist').click('center')// click pencil icon
        // edit button 是動態生成class 每次登入都會改變
        // 用invoke() 可以精準獲取元素的屬性

    })
})