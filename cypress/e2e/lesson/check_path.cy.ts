context("測試環境變量的五種方法", () => {
    it("cypress.json 設置", () => {
        cy.log(`環境變量有＄{JSON.stringify(Cypress.env())}`)
        cy.log(`foor環境變量的值是＄{JSON.stringify(Cypress.env("foor"))}`)
    })
})