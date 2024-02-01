describe("invalid email address", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });
    it("輸入已經訂閱的email 不顯示成功訊息", () => {
        cy.getByData("email-input").type("john@example.com");
        cy.getByData("submit-button").click();
        cy.getByData("success-message").should("not.exist");
        cy.pause();//暫停測試
    });
    it("輸入已訂閱的email 顯示伺服器錯誤訊息 ", () => {
        cy.getByData("email-input").type("john@example.com");
        cy.getByData("submit-button").click();
        cy.getByData("server-error-message").should("exist").contains("Error: john@example.com already exists. Please use a different email address.");
    });




    it("輸入已訂閱的email 不顯示錯誤訊息", () => {
        cy.getByData("email-input").type("john@example.comm");
        cy.getByData("submit-button").click();
        cy.getByData("error-message").should("not.exist");
    });
    it("輸入空白鍵 顯示錯誤訊息", () => {
        cy.getByData("email-input").type("  ");
        cy.getByData("submit-button").click();
        cy.getByData("error-message").should("exist").contains("Email is required");

    });
    it("輸入空白鍵 不顯示成功訊息", () => {
        cy.getByData("email-input").type("  ");
        cy.getByData("submit-button").click();
        cy.getByData("success-message").should("not.exist");
    });

    it("輸入空白鍵 不顯示伺服器錯誤訊息", () => {
        cy.getByData("email-input").type("  ");
        cy.getByData("submit-button").click();
        cy.getByData("server-error-message").should("not.exist");
    });
    it.only("輸入正確的email 顯示成功訊息", () => {
        cy.getByData("email-input").type("hao@gmail.com");
        cy.getByData("submit-button").click();
        cy.getByData("success-message").should("exist").contains("Success: hao@gmail.com has been successfully subscribed");
    });
    it("輸入正確的email 不顯示錯誤訊息", () => {
        cy.getByData("email-input").type("yu@gmail.com");
        cy.getByData("submit-button").click();
        cy.getByData("error-message").should("not.exist");
    });
    it("輸入正確的email 不顯示伺服器錯誤訊息", () => {
        cy.getByData("email-input").type("ea@gmail.com");
        cy.getByData("submit-button").click();
        cy.getByData("server-error-message").should("not.exist");
    })
    it("輸入不正確的email 不顯示成功訊息", () => {
        cy.getByData("email-input").type("yuyu");
        cy.getByData("submit-button").click();
        cy.getByData("success-message").should("not.exist");
    });

}
)