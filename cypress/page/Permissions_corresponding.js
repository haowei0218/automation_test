import random from "lodash";
import PermissionsData from "./data.js";

const Data = PermissionsData;

export default class Permissions_corresponding {
  constructor() {
    this.DelegatePage = ".MuiDailogContent-root";
    this.OptionsButton = ".MuiSelect-root";
    this.SuccessMessage = ".MuiSnackbar-root > .MuiPaper-root";
  }
  CreateDelegateButton() {
    return cy.get(".MuiButton-startIcon");
  }

  AccessControlButton() {
    return cy.get(":nth-child(3) > .jss93");
  }
  CheckContent() {
    Data.forEach((value) => {
      const {
        element,
        expect_text1,
        expect_text2,
        expect_text3,
        expect_text4,
        expect_text5,
        expect_text6,
        expect_text7,
        expect_text8,
        expect_text9,
      } = value;
      cy.get(element)
        .should("exist")
        .then((results) => {
          const text = results.text();
          expect(text).to.contains(expect_text1);
          expect(text).to.contains(expect_text2);
          expect(text).to.contains(expect_text3);
          expect(text).to.contains(expect.text4);
          expect(text).to.contains(expect_text5);
          expect(text).to.contains(expect_text6);
          expect(text).to.contains(expect_text7);
          expect(text).to.contains(expect_text8);
          expect(text).to.contains(expect_text9);
        });
    });
    cy.get(this.DelegatePage)
      .should("exist")
      .then((value) => {
        const text = value.text();
        expect(text).to.contains();
      });
  }
  PopUpAccessControlPage() {
    return cy.get(this.DelegatePage);
  }
  UploadAccessControlButton() {
    return cy.get('[data-cy="asset-dialog-submit-btn]');
  }
  Permissions_options() {
    cy.get(this.OptionsButton).click("center", { timeout: 50000 });
    Data.forEach((value) => {
      const { permission, element, content } = value;
      cy.get(element).should("exist").contains(content).click().wait(1000);
    });
  }

  CheckSuccessMessage() {
    return cy
      .get(this.SuccessMessage)
      .should("have.value", "Delegate was created");
  }
  verifyCorrectPage(PageElement, Content) {
    let Value = PageElement;
    cy.get(String(Value)).should("exist").contains(Content);
  }
}
