import { random } from "lodash";
import MyassetsMainPage from "../../page/Myasset.js";
const LoginMainPage = new MyassetsMainPage();
describe("Pressonal account settings", () => {
  beforeEach(() => {
    LoginMainPage.login("myademonumber8@gmail.com", "Myatesting#");
    cy.get(".MuiAvatar-root").click("center");
    cy.get(":nth-child(1) > .jss93").click();
  });
  context("Edit Profile", () => {
    it("Sorting of Account setting", () => {
      cy.get(".jss937 > .MuiBox-root > .MuiButtonBase-root").click("center");
      cy.get("#userName").should("exist");
      cy.get("#email").should("exist");
      cy.get("#phoneNumber").should("exist");
    });

    it("Edit Profile button", () => {
      cy.get(".jss937 > .MuiBox-root > .MuiButtonBase-root").click("center");
      cy.get(".MuiTypography-root > :nth-child(1) > .MuiGrid-container").should(
        "exist"
      );
    });
    it("Edit Profile - Name", () => {
      const name = random; // 隨機產生一個名字
      cy.get(".jss937 > .MuiBox-root > .MuiButtonBase-root").click("center");
      cy.get("#userName").clear();
      cy.get("#userName").type("name");
      cy.get(".jss1060").click("center");
      cy.reload();
      cy.get(".jss80 > :nth-child(1) > .MuiTypography-root")
        .should("exist")
        .contains("name");
    });
    it("Edit profile - Phone Number", () => {
      cy.get(".jss937 > .MuiBox-root > .MuiButtonBase-root").click("center");
      cy.get("#phoneNumber").clear();
      cy.get("#phoneNumber").type("0909090000");
      cy.get(".jss1060").click("center");
      cy.reload();
      cy.get(":nth-child(3) > .MuiBox-root > .jss83")
        .should("exist")
        .contains("0909090000");
    });
  });
  context("Edit Perferemces", () => {
    it("Base currency inputbox", () => {
      cy.get(".jss952 > .MuiBox-root > .MuiButtonBase-root").click("center");
      cy.get(".jss1007 > .MuiInputBase-root > .MuiSelect-root").click("center");
      cy.get('[data-value="AED"]').should("exist").contains("AED");
      cy.get("#menu- > .MuiPaper-root").scrollTo("bottom"); // 先獲取select menu的element再進行scrollTo
      cy.get('[data-value="ZAR"]').should("exist").contains("ZAR");
    });
    it("Base Currency update", () => {
      cy.get(".jss952 > .MuiBox-root > .MuiButtonBase-root").click("center");
      cy.get(".jss1007 > .MuiInputBase-root > .MuiSelect-root").click("center");
      cy.get('[data-value="BMD"]').click();
      cy.get(".jss1069").click("center");
      cy.get(":nth-child(2) > :nth-child(1) > .MuiBox-root > .jss957")
        .should("exist")
        .contains("BMD");
    });
    it("Base language inputbox", () => {
      cy.get(".jss952 > .MuiBox-root > .MuiButtonBase-root").click("center");
      cy.get(":nth-child(2) > .MuiInputBase-root > .MuiSelect-root").click(
        "center"
      );
      cy.get('.MuiList-root > [tabindex="-1"]').should("exist").contains("JP");
    });
    it("Base Language", () => {
      cy.get(".jss952 > .MuiBox-root > .MuiButtonBase-root").click("center");
      cy.get(":nth-child(2) > .MuiInputBase-root > .MuiSelect-root").click(
        "center"
      );
      cy.get('.MuiList-root > [tabindex="-1').click();
      cy.get(".jss1064").click("center");
      cy.get(":nth-child(3) > :nth-child(1) > .MuiBox-root > .jss1398")
        .should("exist")
        .contains("JP");
    });
  });
});
