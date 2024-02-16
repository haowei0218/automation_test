describe('fixture function', () => {
    it('獲取user.json', () => {
        cy.fixture('users').then((user) => {
            cy.log(user[0].name)
            user.firstName = "Jane"
            cy.log(user.firstName)
        })
    })
})