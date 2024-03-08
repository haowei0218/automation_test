describe('使用fixtures', () => {
    it('fixture 使用範例', () => {
        cy.fixture('example').then((example) => {
            cy.log(example[1].name)
            example.name = 'gg'
            cy.log(example.name)
        })
    })
})