import MyassetsFunction from "../pages/myassets_function"
describe('MyFinances page', () => {
    beforeEach(() => {
        cy.viewport(2560, 1440)
        const Login = new MyassetsFunction()
        Login.login("myademonumber8@gmail.com", "Myatesting#")
        cy.get('[href="/finances"] > .MuiListItemIcon-root').click()
    })
    it('assets sorting', () => {
        cy.get(':nth-child(1) > .MuiBox-root > .jss392').should('exist')
        cy.get(':nth-child(2) > .MuiBox-root > .jss392').should('exist')
        cy.get(':nth-child(3) > .MuiBox-root > .jss392').should('exist')

    })
    it('cash & banking page', () => {
        cy.get('[href="/finances/accounts"]').click({ force: true })
    })
    it('create asset button', () => {
        cy.get('[href="/finances/accounts"]').click({ force: true })
        cy.get('[data-cy="add-btn"]').click({ force: true })
        cy.get('.jss794 > :nth-child(1) > .MuiTypography-root').should('exist').contains('Select the approach of account creation')
        cy.get('.jss794 > :nth-child(2) > .MuiTypography-root').should('exist').contains('Select the type of financial account')

    })
    it('create asset - cash', () => {
        cy.get('[href="/finances/accounts"]').click({ force: true })
        cy.get('[data-cy="add-btn"]').click({ force: true })
        cy.get('.jss793 > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').click('right')
        cy.get('#menu- > .MuiPaper-root > .MuiList-root > .Mui-selected').should('exist').contains('Add account manually').click()
        cy.get('.jss746 > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').click('right') //點擊下拉式選單
        cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()//在下拉式選單中選取“cash"
        cy.get('.jss1552 > .MuiButton-label > span').click() //next button

    })
    it.only('statistic chart search range', () => {
        cy.get('[href="/finances/accounts').click({ force: true })
        cy.get('#mui-component-select-selectedChartView').eq(0).select('1 month').should('exist')
    })


})