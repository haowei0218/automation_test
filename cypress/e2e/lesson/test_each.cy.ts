describe('each 命令詳解', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/connectors')
    })

    it('範例1', () => {
        cy.get('.connectors-each-ul>li').each((item: JQuery<HTMLElement>, index: number, $list: HTMLElement[]) => {
            cy.log(item, index, $list)
        })
    })

    it('範例2', () => {
        cy.wrap([1, 2, 3, 4]).each((item: JQuery<HTMLElement>, index: number, $list: HTMLElement[]) => {
            cy.log(item, index, $list)
            if (item == 2) {
                return false; //提前退出遍歷
            }
        }).then(($list: JQuery<HTMLElement>) => {
            cy.log($list) //可以繼續操作原始的數組
        })
    })
})