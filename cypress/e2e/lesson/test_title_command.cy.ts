describe('獲取全局變量', () => {
    // beforeEach(() => {
    //     cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
    // })
    it("get website title", () => {
        cy.title()
        cy.title().should('contain', 'Title')
    })
    it('get website url', () => {
        cy.url()
        cy.location('href').should('include', 'automation_test')//斷言檢查url是否包含了automation_test
        cy.location().its('href').should('include', 'automation_test') //斷言檢查url是否包含了automation_test
    })
    it('get website url hash ', () => {
        cy.hash()
        cy.get('#users li').find('a').click()
        cy.hash().should('match', /users\/.+$/)
    })
    it('get window', () => {
        cy.visit('https://www.baidu.com/')
        cy.window().its('bdCid').should('equal', '0')
    })
    it('root function', () => {
        cy.root()
        cy.get('#contact').within(($form: JQuery<HTMLFormElement>) => {
            cy.get('[name="email"]').type('john.doe@email.com')
            cy.get('[name="password"]').type('password') // Corrected typo here
            cy.root().submit()
        })
    })
    it('document example', () => {
        cy.visit('https://www.baidu.com/')
        cy.document()
        cy.document().its('contentType').should('eq', 'text/html')
    })
    it('location example', () => {
        cy.visit('https://www.baidu.com/')
        cy.location()
        cy.location('host')
        cy.location().should(function (loc: Location) {
            expect(loc.host).to.eq('www.baidu.com')
            expect(loc.hostname).to.eq('www.baidu.com')
            expect(loc.href).to.contain('https://www.baidu.com')
            expect(loc.origin).to.eq('https://www.baidu.com')
            expect(loc.pathname).to.contain('/')
            expect(loc.protocol).to.contain('https')
            expect(loc.search).to.eq('?ie=UTF-8&wd=123')
        })
    })
    it('go function example', () => {
        cy.visit('https:///www.imooc.com/')
        cy.get('a[href=\"/course/list\"]').click()
        cy.go('back')
        cy.go('forward')
        cy.go(-1)
        cy.go(1)
    })
    it.only('reload example', () => {
        cy.visit('https://www.imooc.com/')
        cy.get('#logo > a >img')
        cy.reload()
        cy.get('.nav-item > :nth-child(6) > :nth-child(1)').click().should('exist')
        cy.reload(true)
    })

})