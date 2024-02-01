describe("測試get and find 方法", () => {
    context("get 命令例子", () => {
        before(() => {
            cy.visit("http://127.0.0.1:5500/cypress/index.html")
        })
        it("get", () => {
            cy.get('#main1')
            cy.get('.btn')
            cy.get('li')
            cy.get('ul>[data-testid=li4]')
        })
    })

    context('測試find方法', () => {
        before(() => {
            cy.visit("http://127.0.0.1:5500/cypress/index.html")
        })
        it("正確寫法", () => {
            cy.get('ul').find("#li1")
        })
        it("錯誤寫法", () => {
            cy.find('#li')
        })
    })

    context('contains 命令實際例子', () => {
        before(() => {
            cy.visit("http://127.0.0.1:5500/cypress/index.html")
        })

        it('.contains(content)', () => {
            cy.contains('submit')
        })
        it('.contains(selector,content)', () => {
            cy.contains("ul>li", "test1")
        })
        it('.contains(content)正則', () => {
            cy.contains("/1$/")
        })
    })
})