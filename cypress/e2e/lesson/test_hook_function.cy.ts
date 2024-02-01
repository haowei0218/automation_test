describe("測試hook函數", () => {
    before(() => {
        cy.log("當前測試套件中“頂級套件” ,所有測試用例執行之前運行before")
    })

    beforeEach(() => {
        cy.log("當前測試套件中頂級套件 每個測試用力執行前運行beforeEach")
    })
    after(() => {
        cy.log("當前測試套件中頂級套件 所有測試用力執行結束後運行after")
    })
    afterEach(() => {
        cy.log("當前測試套件中頂級套件 每個測試用力執行結束後運行afterEach")
    })
    it("頂級測試套件 - 打印日誌１", () => {
        cy.log("頂級測試條件 - 打印日誌1111")
    })

    it("頂級測試套件 - 打印日誌2", () => {
        cy.log("頂級測試條件 - 打印日誌2222 ")
    })

    context("二級套件", () => {
        before(() => {
            cy.log("當前測試套件中二級套件 所有測試用例執行之前運行before")
        })
        after(() => {
            cy.log("當前測試套件中二級套件 所有測試用例執行結束後運行after")
        })
        it("二級測試套件 － 打印日誌３", () => {
            cy.log("二級測試套件 － 打印日誌3333")
        })

        describe("三級套件", () => {
            it("三級套件－－打印日誌４", () => {
                cy.log("三級測試套件 － 打印日誌４")
            })
        })
    })

})