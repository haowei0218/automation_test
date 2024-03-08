describe('get 請求方法', () => {
    it('默認訪問方式', () => {
        cy.request({
            method: 'get',
            url: 'http://www.helloqa.com'
        })
    })
    it('使用options', () => {
        cy.request({
            method: 'get',
            url: 'http://www.helloqa.com'
        })
    })

    //request() 常常和別名 .as()一起使用 用來進行接口返回值
    it('真實測試', () => {
        cy.request({
            method: 'get',
            url: 'https://www.helloqa.com'
        }).as('comments')
        cy.get('@comments').then((response) => {
            expect(response.status).to.be.eq(200)
        })
    })

    it('request代替visit', () => {
        //通過接口層面去訪問頁面
        cy.request('http://localhost:7077/login').its('body').should('include', '<p>in this recipe we:</p>')//請求頁面

        cy.request({
            method: 'post',
            url: '/login',
            //表單格式的請求
            form: true,
            body: {
                username: 'jane.lane',
                password: 'password123'
            }
        })
        //訪問需要登陸之後才能訪問的頁面
        cy.request('/dashboard').its('body').should('include', 'jane.lane')

    })

})

function req() {
    cy.request('/').then((resp) => {
        if (resp.status === 200) {
            return
        }
        req()//遞歸
    })
}
describe('輪詢request', () => {
    it('默認訪問方式', () => {
        cy.visit('http://localhost:3000')
        cy.get('form').click().then(() => { req() })
    })
})