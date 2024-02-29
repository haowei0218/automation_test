import MyassetsFunction from "../pages/myassets_function"
describe('MyFinances page', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        const Login = new MyassetsFunction()
        Login.login("myademonumber8@gmail.com", "Myatesting#")
    })
    it('assets sorting', () => {
        cy.get('[href="/finances"]').click()
        cy.get(':nth-child(1) > .MuiBox-root > .jss392').should('exist')
        cy.get(':nth-child(2) > .MuiBox-root > .jss392').should('exist')
        cy.get(':nth-child(3) > .MuiBox-root > .jss392').should('exist')

    })
    it('assets per page', () => {
        cy.get('[href="/finances"]').click()
        cy.get('.jss57').trigger('mousedown', { button: 1 }).scrollTo('bottom')
        const Perpage = new MyassetsFunction()
        Perpage.AssetsPerPage('#mui-12154')
    })




})