describe('route example', () => {
    const username = 'jane.lane';
    const password = 'password123';

    before(function () {
        cy.visit('http://localhost:7079/')
    })
    it('正常登錄 修改登陸請求的status,response', function () {
        cy.intercept({
            url: '**/login',
            method: 'POST',
            status: 503,
            delay: 1000,
            response: {
                success: false,
                data: 'Nor success'
            }
        }).as('login')
        cy.get('input[name=username]').type(username)
        cy.get('input[name=password]').type(`${password}{enter}`)
        cy.wait('@login').then((res) => {
            cy.log(res)
            expect(res.status).to.eq(503)
            expect(res.responseBody.data).to.eq('Not success')
        })
    })
})