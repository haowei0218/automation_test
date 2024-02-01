describe("測試跳過執行測試套件", () => {
    beforeEach(() => {
        cy.log("==每個測試用例前都執行＝＝")
    })
    it("測試1=1", () => {
        expect(1).to.equal(1)
    })

    it.skip("打印日誌", () => {
        cy.log("日誌ｌｏｇ")
    })

    it("測試2=2", () => {
        expect(2).to.equal(2);
    })
})