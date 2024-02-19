import LoginPage from "../pages/login"
import MainPage from "../pages/mainPage"

context('登陸測試', function () {

    const username = 'jane.lane'
    const pwd = 'password123'

    it('登錄成功', () => {
        const loginInstance = new LoginPage()
        loginInstance.isTargetPage()
        loginInstance.login(username, pwd)
        cy.url().should('include', '/dashboard')

        const manInstance = new MainPage()
        manInstance.isTargetPage()
        manInstance.welComeText.should('contain', 'jane.lane')
    })

})