describe('within 命令詳解', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/querying')
    })

    it('範例１', () => {
        cy.get('.query-form').within(() => {
            //回調函數裡的cy.get() 只會從form表單裡面找元素 而不是整個頁面
            cy.get('input:first').should('have.attr', 'placeholder', 'Email');
            cy.get('input:last').should('have.attr', 'placeholder', 'Password')

            //get() and within()命令的返回結果都是form表單
        })
    })
})