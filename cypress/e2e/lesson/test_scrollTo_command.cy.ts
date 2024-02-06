describe('scroll command', () => {
    beforeEach('go to html', () => {
        cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
    })
    context('scroll example', () => {
        it('position example', () => {
            cy.scrollTo('bottom') // 滑動頁面到底部
            cy.get('.scroll-both').scrollTo('center', { duration: 1000 })
        })
        it('x,y example', () => {
            cy.scrollTo(0, 0, { duration: 1000 }) // 向右滑動0px 向下滑動0px
            cy.scrollTo('0%', '50%', { duration: 1000 }) // 向右滑動0% 向下滑動50%
            cy.get('.scroll-both').scrollTo('50px', '50px', { duration: 1000 })
        })
    })
})