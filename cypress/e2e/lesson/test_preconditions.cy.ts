describe('前置條件的構造過程', () => {
    it('確定a操作會發生', () => {
        cy.get('.A_Selector').should('exist')
    })
    it('確定a操作不會發生', () => {
        cy.get('.A_Selector').should('not.exist')
    })
})