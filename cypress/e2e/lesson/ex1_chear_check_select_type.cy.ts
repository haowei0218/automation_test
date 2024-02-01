import { curry } from "cypress/types/lodash"

describe('綜合練習', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
    })
    it('type function', () => {
        cy.get('textarea').type('this is nice day')
    })
    it('clear function', () => {
        cy.get('textarea').clear()
    })
    it("select function", () => {
        cy.get('select').eq(0).select('1').should('contain.text', 'red')
        cy.get('select').eq(0).select('2').should('contain.text', 'yellow')
        cy.get('select').eq(0).select('3').should('contain.text', 'orange')
    })
    it('check function', () => {
        cy.get('[type="radio"]').check()
        cy.get('[type="checkbox"]').check(['money', 'house'])
        cy.get('[type="radio"]').check({ force: true }).should('be.checked')
    })

})