export default class LoginPage {
    constructor() {
        this.userName = 'input[name=username]' //定義username屬性為input[name=username]
        this.password = 'input[name=password]'
        this.form = 'form'
        this.url = 'http://localhost:7077/login'
    }
    isTargetPage() {
        cypress.visit('/login')
        cypress.url.should('eq', this.url)
    }

    login(username, pwd) {
        cypress.get(this.username).type(username) //第一個username = input[name=username]; 第二個username則是用戶自行輸入的值
        cypress.get(this.password).type(pwd)
        cypress.get(this.form).submit()
    }

    //針對元素本身進行封裝
    get username() {
        return cy.get(this.userNameLocator)
        //userNameLocator是一個變數 用於存儲一個用於定位(locat)或選擇（select)特定元素的標誌
        //在 Cypress 測試框架中，這種標誌通常是一個 CSS 選擇器，用於定位測試中需要交互的特定元素。
    }
    get password() {
        return cy.get(this.passwordLocator)
    }
    get form() {
        return cy.get(this.formLocator)
    }

    //判斷url是否正確
    isTargetPage() {
        cy.visit('/login')
        cy.url().should('eq', this.url)
    }
    login(username, pwd) {
        this.username.type(username)
        this.password.type(pwd)
        this.form.submit()
    }
}

