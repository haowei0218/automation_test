context('click 實際命令', () => {
    before(() => {
        cy.visit('http://127.0.0.1:5500/cypress/index.html')
    })
    it('click with position', () => {
        cy.get('#main2').click("top");
        cy.get('#main2').click('topLeft')
        cy.get('#main2').click('topRight')
        cy.get('#main2').click('left')
        cy.get('#main2').click('right')
        cy.get('#main2').click('bottom')
        cy.get('#main2').click('bottomLeft')
        cy.get('#main2').click('bottomRight')
        cy.get('#main2').click('center')
    })
})