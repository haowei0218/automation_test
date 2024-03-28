import random from "lodash";
import { PermissionsData, test, option } from "./data.js";

const Data = PermissionsData;
const testData = test;
const PermissionsOptions = option;
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

  //驗證權限在頁面上有正確顯示
  CheckContent(Element) {
    if (Element === Data.permission[Element]) {
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
            expect(text).to.contains(expect_text4);
            expect(text).to.contains(expect_text5);
            expect(text).to.contains(expect_text6);
            expect(text).to.contains(expect_text7);
            expect(text).to.contains(expect_text8);
            expect(text).to.contains(expect_text9);
          });
      });
    }

    /*cy.get(this.DelegatePage)
      .should("exist")
      .then((value) => {
        const text = value.text();
        expect(text).to.contains();
      });*/
  }
  PopUpAccessControlPage() {
    return cy.get(this.DelegatePage);
  }
  UploadAccessControlButton() {
    return cy.get('[data-cy="asset-dialog-submit-btn]');
  }

  CheckSuccessMessage() {
    return cy
      .get(this.SuccessMessage)
      .should("have.value", "Delegate was created");
  }
  //驗證點擊一個按鈕 跳轉到正確的頁面 並驗證該頁面的某些元素的文本
  verifyCorrectPage(PageElement, Content) {
    let Value = PageElement;
    cy.get(String(Value)).should("exist").contains(Content);
  }

  //將每個權限分開執行

  MyFinancesView(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).should("exist").contains(value);
  }
  MyFinancesEdit(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).click().wait(4000);
    cy.get(testData[0]).should("exist").contains(value);
    this.CheckContent();
  }
  MyFinancesEditAdd(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).click().wait(4000);
    cy.get(testData[1]).should("exist").contains(value).click();
    this.CheckContent();
  }
  MyFinancesEditDelete(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).click().wait(4000);
    cy.get(testData[2]).should("exist").contains(value).click();
    this.CheckContent();
  }
  MyFinancesFullWithProperty(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).click().wait(4000);
    cy.get(testData[3]).should("exist").contains(value).click();
    this.CheckContent();
  }
  PropertyView(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).click().wait(4000);
    cy.get(testData[4]).should("exist").contains(value).click();
    this.CheckContent();
  }
  PropertyEdit(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).click().wait(4000);
    cy.get(testData[5]).should("exist").contains(value).click();
    this.CheckContent();
  }
  PropertyEditAdd(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).click().wait(4000);
    cy.get(testData[6]).should("exist").contains(value).click();
    this.CheckContent();
  }
  PropertyEditDelete(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).click().wait(4000);
    cy.get(testData[7]).should("exist").contains(value).click();
    this.CheckContent();
  }
  PropertyFull(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).click().wait(4000);
    cy.get(testData[8]).should("exist").contains(value).click();
    this.CheckContent();
  }
  MyCollectablesView(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).click().wait(4000);
    cy.get(testData[9]).should("exist").contains(value).click();
    this.CheckContent();
  }
  MyCollectablesEdit(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).click().wait(4000);
    cy.get(testData[10]).should("exist").contains(value).click();
    this.CheckContent();
  }
  MyCollectablesEditAdd(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).click().wait(4000);
    cy.get(testData[11]).should("exist").contains(value).click();
    this.CheckContent();
  }
  MyCollectablesEditDelete(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).click().wait(4000);
    cy.get(testData[12]).should("exist").contains(value).click();
    this.CheckContent();
  }
  MyCollectablesFullWithProperty(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).click().wait(4000);
    cy.get(testData[13]).should("exist").contains(value).click();
    this.CheckContent();
  }
  MyBelongingsView(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).should("exist").contains(value).click();
    cy.get(testData[14]).should("exist").contains(value).click();
    this.CheckContent();
  }
  MyBelongingsEdit(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).should("exist").contains(value).click();
    cy.get(testData[15]).should("exist").contains(value).click();
    this.CheckContent();
  }
  MyBelongingsEditAdd(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).should("exist").contains(value).click();
    cy.get(testData[16]).should("exist").contains(value).click();
    this.CheckContent();
  }
  MyBelongingsEditDelete(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).should("exist").contains(value).click();
    ct.get(testData[17]).should("exist").contains(value).click();
    this.CheckContent();
  }
  Viewer(value) {
    if (typeof value !== "string") {
      throw new Error("Invalid parameter: value must be a string");
    }
    cy.get(this.optionButton).should("exist").contains(value).click();
    cy.get(testData[18]).should("exist").contains(value).click();
    this.CheckContent();
  }
  //如果函數內的值為陣列內的某個值 執行該值對應的權限
  ImplementPermissionsOptions(value) {
    Data.forEach((item) => {
      if (typeof value !== "string") {
        throw new Error("Invalid parameter: value must be a string");
      }
      if (value === item.permission) {
        cy.get(this.optionButton).should("exist").contains(value).click();
        cy.get(item.element).should("exist").contains(item.element).click();
      }
    });
    switch (value) {
      case "MyFinance view":
        this.MyFinancesView(value); //因為第一個是默認顯示的 所以只需要檢查文本就好
        break;
      case "MyFinane edit":
        this.MyFinancesEdit(value);
        break;
      case "MyFinance edit/add":
        this.MyFinancesEditAdd(value);
        break;
      case "MyFinance edit/delete":
        this.MyFinancesEditDelete(value);
        break;
      case "MyFinance full with property":
        this.MyFinancesFullWithProperty(value);
        break;
      case "Property view":
        this.PropertyView(value);
        break;
      case "Property edit":
        this.PropertyEdit(value);
        break;
      case "Property edit/add":
        this.PropertyEditAdd(value);
        break;
      case "Property edit/delete":
        this.PropertyEditDelete(value);
        break;
      case "Property full":
        this.PropertyFull(value);
        break;
      case "MyCollectables view":
        this.MyCollectablesView(value);
        break;
      case "MyCollectables edit":
        this.MyCollectablesEdit(value);
        break;
      case "MyCollectalbes edit/add":
        this.MyCollectablesEditAdd(value);
        break;
      case "MyCollectables edit/delete":
        this.MyCollectablesEditDelete(value);
        break;
      case "MyCollectables full with property":
        this.MyCollectablesFullWithProperty(value);
        break;
      case "MyBelongings view":
        this.MyBelongingsView(value);
        break;
      case "MyBelongings edit":
        this.MyBelongingsEdit(value);
        break;
      case "MyBelongings edit/add":
        this.MyBelongingsEditAdd(value);
        break;
      case "MyBelongings edit/delete":
        this.MyBelongingsEditDelete(value);
        break;
      case "Viewer":
        this.Viewer(value);
        break;
    }
  }
}
