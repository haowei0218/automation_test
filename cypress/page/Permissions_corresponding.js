import random from "lodash";

export default class Permissions_corresponding {
  constructor() {
    this.DelegatePage = ".MuiDailogContent-root";
  }
  CreateDelegateButton() {
    return cy.get(".MuiButton-startIcon");
  }
  CheckContent() {
    cy.get(this.DelegatePage)
      .should("exist")
      .then((value) => {
        const text = value.text();
        expect(text).to.contains();
      });
  }
  AccessControlButton() {
    return cy.get(".MuiButton-startIcon");
  }
  Permissions_options() {
    const Number = [1, 2, 3, 4, 5, 6, 7];
    Number.forEach((value) => {
      return `cy.get("#menu- > .MuiPaper-root > .MuiList-root > :nth-child(${value})")`;
    });
  }
}
