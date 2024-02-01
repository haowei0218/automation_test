context('type function', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/automation_test/cypress-realworld-testing-course-app/cypress/index.html')
    })
    it('type input ', () => {
        cy.get(".single_option").type("12345%%89")
    })
    it('特殊字符{del}', () => {
        cy.get('.single_option').type('{del}')
    })
    it('帶有單個參數的傳遞', () => {
        cy.get('.single_option').type('selectall', { parseSpecialCharSequences: false })
    })
    it('帶有多個參數的傳遞', () => {
        cy.get('.single_option').type('1234', { log: false, parseSpecialCharSequences: false })
    })
    it('<textarea>標籤的例子', () => {
        cy.get('textarea').type('hello')
    })
    it('<option>標籤的例子', () => {
        cy.get(`[list=fruit]`).type('apple')
    })
    it('<input type="date">', () => {
        cy.get(`[type="date"]`).type('1992-12-31')
    })
    it('<input type="month">', () => {
        cy.get(`[type="month"]`).type('1992-12')
    })
    it('<input type="week">', () => {
        cy.get('[type="week"]').type('1999-W23')
    })
    it('<input type="time">', () => {
        cy.get(`[type="time"]`).type('23:15')
    })
})
