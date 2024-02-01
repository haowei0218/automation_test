describe("skip this test", () => {
    describe.skip("跳過執行該測試套件", () => {
        it("測試用例", () => {
            cy.log("跳過了？")
        })
    })

    context("執行該測試套件", () => {
        it("測試１", () => {
            expect(1).to.equal(1)
        });
        describe.skip("再次跳過執行該測試套件", () => {
            it("測試1!=２", () => {
                expect(1).to.equal(2);

            })
        })
    })
})