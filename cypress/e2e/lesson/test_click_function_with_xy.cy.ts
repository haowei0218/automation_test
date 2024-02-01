context('click 命令實際案例', () => {
    before(() => {
        cy.visit('http://127.0.0.1:5500/cypress/index.html')
    })
    it('click(x,y)', () => {
        cy.get('#main2').click(15, 15);
    })
})