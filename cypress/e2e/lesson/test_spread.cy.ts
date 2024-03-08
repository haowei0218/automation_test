describe('spread 命令詳解', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/connectors');
    })

    it('範例：spread回調函數的參數個數和數組長度『一致』', () => {
        const arr = ['foo', 'bar', 'baz']

        cy.wrap(arr).spread((foo, bar, baz) => {
            expect(foo).to.eq('foo')
            expect(bar).to.eq('bar')
            expect(baz).to.eq('baz')
        })
    })

    it('範例：spread回調函數的參數個數『小於』數組長度', () => {
        const arr = ['foo', 'bar', 'baz', 'test']

        cy.wrap(arr).spread((foo, bar) => {
            expect(foo).to.eq('foo')
            expect(bar).to.eq('bar')
        })
    })

    it('範例：拆分網頁的cookies,並且return一個值', () => {
        cy.getCookies().spread((c1, c2, c3) => {
            cy.log(c1['domain'], c2, c3).then(function () {
                return 11;//回調函數return一個值
            })
        }).then(function (text: object | any[] | string | number | boolean) {
            cy.log(text) //通過then()可以接住spread()的結果值
        })
    })
})