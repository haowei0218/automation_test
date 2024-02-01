describe("New Home Page", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("allows users to subscribe to the email list", () => {

        cy.getByData("email-input").type("gu@aol.com");
        cy.getByData("submit-button").click();
        cy.getByData("success-message").should("exist").contains("gu@aol.com");
    });


    it("does NOT allow an invalid email adddress", () => {

        cy.getByData("email-input").type("tom");
        cy.getByData("submit-button").click();
        cy.getByData("success-message").should("not.exist");
    });

})

//email-input = 獲取email 的輸入匡元素
//type = 輸入字串
//submit-button = 獲取頁面上訂閱的按紐 並點擊
// 取得成功訊息的元素
// 確保成功訊息元素“存在”在DOM中
// 該訊息該函已成功訂閱的電子郵件地址
// exisy = 存在 可理解為結果 因為輸入了正確的email 所以在頁面上的成功訊息應該要存在 


