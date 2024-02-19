describe('刪除等待的代碼', () => {
    it('錯誤的做法 強制等待的範例', () => {
        cy.intercept('/commands/action/*').as('getAction')
        cy.wait(3000)
        cy.log("123")
    })

})