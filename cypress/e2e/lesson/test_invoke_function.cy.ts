describe('invoke function', () => {
    it('斷言函數返回值', () => {
        const fn = () => {
            return "bar"
        }
        cy.wrap({ foo: fn }).invoke('foo').and('eq', 'bar')
    })
    it('調用函數並傳遞參數', () => {
        const fn = function (a, b, c) {
            return a + b + c
        }
        cy.wrap({ sum: fn }).invoke('sum', 1, 2, 3).should('be.eq', 6).and('be.lt', 10)
    })
    it('作為函數的屬性被調用', () => {
        cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
        cy.get('#contact').should('be.hidden').invoke('show').should('ve.visible').find('input[name=email]').type('test cypress')
    }
    )
})