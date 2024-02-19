describe('避免訪問多個url', () => {
    it('訪問同一超域下的不同子域', () => {
        cy.visit('https://example.cypress.io')
        cy.visit('https:/www.cypress.io/features')//cypress允許正常訪問
    })
    it('訪問不同超域 會報錯', () => {
        cy.visit('https://example.cypress.io')
        cy.visit('https://www.cnblogs.com/poloyy')
    })
})