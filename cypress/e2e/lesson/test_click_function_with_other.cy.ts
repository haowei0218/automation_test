context('click other function', () => {
    beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/cypress/index.html")
    })
    it('.click({force:true})', () => {
        cy.get('#main1').click({ force: true })
    })
    it('.click(positon,{force:true})', () => {
        cy.get('#main2').click("topRight", { force: true })
    })

    it('.click(x,y{force:true}', () => {
        cy.get('#main1').click(15, 15, { force: true })
    })
    it('.click({multiple:true', () => {
        cy.get('ul>li').click({ multiple: true })
    })
    it("組合鍵", () => {
        cy.get('body').type('{shift}', { release: false })
        cy.get('li:first').dblclick()
    })
    it('dbclick', () => {
        cy.get('#main1').dblclick()
        cy.get('#main1').dblclick("top")
        cy.get('#main1').dblclick({ force: true })
    })
    it('rightclick', () => {
        cy.get('#li1').rightclick("topRight")
        cy.get('#li1').rightclick("bottom")
        cy.get('#li1').rightclick({ force: true })
    })

})