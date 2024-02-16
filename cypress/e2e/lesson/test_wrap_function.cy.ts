describe('wrap function', () => {
    it('簡單的範例', () => {
        cy.wrap({ num: 123 }).should('have.property', 'num').and('eq', 123)
    })
    it('對象屬性質是函數的範例', () => {
        const getName = () => {
            return "小波蘿測試筆記"
        }
        cy.wrap({ getname: getName }).invoke('getname').should('eq', '小波羅測試筆記')
    })
    it('頁面元素element的範例', () => {
        cy.get('form').then(($form: JQuery<HTMLFormElement>) => {
            cy.wrap($form).should('have.class', 'open')
        })
    })
})