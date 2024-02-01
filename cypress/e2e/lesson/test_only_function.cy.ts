describe("測試指定套件", () => {
    context.only("只測試這個套件", () => {
        it("test-1", () => {
            expect(1).to.equal(1)
        })
        it.skip("跳過這個套件的測試", () => {
            cy.log("test")
        })
    })

    describe("不會運行該測試套件", () => {
        context.only("指定運行該測試套件", () => {
            it("test-2", () => {
                expect(2).to.equal(2)
            })
        })
    })


})