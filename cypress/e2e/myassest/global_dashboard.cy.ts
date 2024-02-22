import MyassetsLoginPage from "../pages/myassets_function";

describe('global dashboard ', () => {
    beforeEach(() => {
        cy.viewport(1980, 1080)
        const login = new MyassetsLoginPage()
        login.login('myademonumber8@gmail.com', 'Myatesting#')

    })
    it('global assets - sorting', () => {
        cy.get(':nth-child(1) > .MuiBox-root > .jss153').should('exist')
        cy.get(':nth-child(2) > .MuiBox-root > .jss153').should('exist')
        cy.get(':nth-child(3) > .MuiBox-root > .jss153').should('exist')
    })

})  