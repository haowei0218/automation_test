describe('then function', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
    })

    //有箭頭功能的函數來記錄所選元素的文字內容
    it('回調函數：箭頭函數', () => {
        cy.get('#li1').then(($text: JQuery<HTMLElement>) => {
            cy.log($text.text())
        })
    })

    //具有常規函數聲明的函數來記錄所選元素的文字內容
    it('回調函數：普通聲明函數', () => {
        cy.get('#li1').then(function ($li: JQuery<HTMLElement>) {
            cy.log($li.text())
        })
    })
    it('then 比較', () => {
        cy.get('#li1').then(($li1: JQuery<HTMLElement>) => {

            const txt = $li1.text()

            cy.get('#li1').should(($li2: JQuery<HTMLWebViewElement>) => {
                expect($li2.text()).to.be.eq(txt)
            })
        })
    })
})