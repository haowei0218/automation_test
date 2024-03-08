
describe('getCookie commands', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/cookies')
    })

    it('cy.getCookie() i get a browasr cookie', () => {
        cy.get('#getCookie .set-a-cookie').click()

        cy.getCookie('token').should('exist').should('have.property', 'value', '123ABC').then((cookie: Subject) => {
            cy.log(cookie)
        })
    })
})

//<reference types="cypress" /R>

describe('getCookie 登錄界面', () => {
    const username = 'jane.lane';
    const password = 'password123';

    before(function () {
        cy.visit('http://localhost:7079/login')
        cy.get('input[name=username]').type(username)
        cy.get('input[name=password]').type(password)

        cy.get('form').submit()
    })

    it('獲取登陸後的cookie', function () {
        cy.getCookie('cypress-session-cookie').should('exist').should('have.porperty', 'domain', 'localhost').then((cookies) => { cy.log(cookies) })
    })
})