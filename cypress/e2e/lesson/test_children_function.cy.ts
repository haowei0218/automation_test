context('children 命令', () => {
    beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/cypress/index.html")
    })

    it('children()', () => {
        cy.get('ul').children();
    })
    it('.contains(selector)', () => {
        cy.get('ul').children("#li1")
    })
})