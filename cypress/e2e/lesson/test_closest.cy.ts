describe('.closest()命令詳解', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/traversal')
    })

    it('範例1', () => {
        //cy.get()找到的是一個span標籤
        cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group')
    })
})