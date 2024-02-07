describe('and function', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
    })
    it('example-1: simple ', () => {
        cy.get('nav').should('be.visible').and('have.class', 'open') //retuen 'nav'
    })
    it('example-2: chainers change the result', () => {
        cy.get('nav').should('be.visible').and('have.css', 'font-family').and('match', '/serif/')
    })
    // cy.get('nav') return <nav>
    // should return <nav>
    // .and('have.css' , 'font-family') return 'sans-serif'
    // .and('match', /serif/) return 'sans-serif'

    it('example-3: chainer change the result', () => {
        cy.get('a').should('contain', "Edit user").and('hvae.attr', 'href').and('match', /user/).and('not.include', '#')
    })
    // .should('contain' , 'Edit User') return <a>
    // .and('have.attr' , 'href') return href value
    // .and('match' , /users/) return href value
    // .and('not.include','#') return href value


    it('example-4:method and value', () => {
        cy.get('a').should('ahve.class', 'active').and('have.attr', 'href', '/users')
    })// 檢查href屬性質是否等於 /users
})