context('trigger function', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
    })
    it('hover', () => {
        cy.get('#main1').trigger('mouseover')
    })
    it('鼠標 左鍵 長按', () => {
        cy.get('#main2').trigger('mousedown', { force: true, button: 0 }).wait(1000).trigger('mouseleave', { force: true })
    })
    it('鼠標 左鍵 滾輪鍵 右鍵 點擊', () => {
        cy.get('#main').trigger('mousedown', { button: 0 })
        cy.get('#main2').trigger('mousedown', { button: 1 })
        cy.get('#main1').trigger('mousedown', { button: 2 })
    })
    it('添加 Options ', () => {
        cy.get('#main1').trigger('mousedown', { bubbles: false })
    })
    it('seting clientX and clientY', () => {
        cy.get('button').trigger('mousemove', { clientX: 200, clientY: 200 })
    })
})