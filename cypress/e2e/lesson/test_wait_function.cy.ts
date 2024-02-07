// describe('wait function', () => {
//     it.skip('example 1', () => {
//         cy.server()
//         cy.route({
//             url: '**/login',
//             status: 503,
//             response: {
//                 success: false,
//                 data: 'Not success'
//             },

//         }).as('login')
//         cy.get('input[name=username]').type('username')
//         cy.get('input[name=password]').type(`${password}{enter}`)
//         cy.wait('@login').then((res) => {
//             expect(res.status).to.eq(503)
//             expect(res.responseBody.data).to.eq('Not success')
//             expect(res.reponseHeaders).to.have.property('x-token', 'abc-123-foo-bar')
//         })
//     })
// })