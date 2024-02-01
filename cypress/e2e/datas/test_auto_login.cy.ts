import { testLoginUser } from "./test_login_data.cy.js";

context("login", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    for (const user of testLoginUser)
        it(user.summary, () => {
            cy.get("input[name=username]").type(user.username);
            cy.get("input[name=password]").type(user.password);
            cy.get("from").submit();
            cy.url().should('include', "/dashboard");
            cy.get("h1").should('contain', user.username);

        })
})