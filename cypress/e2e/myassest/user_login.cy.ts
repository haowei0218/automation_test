describe("user_login", () => {
    it("user login success", () => {
        cy.visit("https://www.google.com/")
        cy.get('.gb_za').click()
        //cy.visit("https://app.myassets.dev/auth/login/");
        //cy.get('#idp1').click();
    })
})