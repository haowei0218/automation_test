describe("home page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    context("hero section", () => {
        it('the h1 contains the corret text', () => {
            cy.getByData("hero-heading").contains("Testing Next.js Applications with Cypress")

        })
        it("the features on the homepage are correct", () => {
            cy.get("dt").eq(0).contains("4 Courses")
            cy.get("dt").eq(1).contains("25+ Lessons")
            cy.get("dt").eq(2).contains("Free and Open Source")
        })
    })

    context("courses section", () => {
        it("Course: Testing Fundamentals", () => {
            cy.getByData("course-2").find("a").contains("started").click();
            cy.location("pathname").should("equal", "/cypress-fundamentals");
        })
    })

})