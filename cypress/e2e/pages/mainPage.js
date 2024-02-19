export default class MainPage {
    constructor() {
        this.h1Locator = 'h1'
        this.url = 'http://locathost:7077/dashboard'
    }

    get welComeText() {
        return cypress.get(this.h1Locator)
    }

    isTargetPage() {
        cypress.url().should('eq', this.url)
    }
}