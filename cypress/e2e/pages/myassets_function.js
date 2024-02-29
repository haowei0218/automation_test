import { random } from "lodash"
export default class MyassetsFunction {
    constructor() {
        this.email = '#email'
        this.password = '#password'
        this.signin = '[data-cy="login-btn"] > .MuiButton-label'
        this.url = 'https://app.myassets.com/'
        this.SignUpEmail = '#email'
        this.SignUpUserName = '#userName'
        this.SignUpPassword = '#password'
        this.SignUpButton = '.jss25 > .MuiButtonBase-root > .MuiButton-label > span'
        this.CreateButton = '.jss62 > .MuiButtonBase-root > .MuiButton-label'
        this.firstname = '#firstName'
        this.lastname = '#lastName'
        this.company = '#company'
        this.position = '#position'
        this.addressBookEmail = '#email'
        this.phone = '#phoneNumber'
        this.addressSearch = '#addressSearch'
        this.addresslinefirst = '#addressLineFirst'
        this.addresslinesecond = '#addressLineSecond'
        this.townCity = '#townCity'
        this.stateCountry = '#stateCountry'
        this.zipCodePostcode = '#zipCodePostcode'
        this.country = '#country'
        this.submitButton = '[data-cy="asset-dialog-submit-btn"] > .MuiButton-label > span'
        this.pageButton = '.MuiPagination-ul > :nth-child(3) > .MuiButtonBase-root'
        this.check = '.jss470 > .MuiPaper-root'
        this.perpage = '.MuiTableCell-root > .MuiToolbar-root'
    }
    login(email, pwd) {
        cy.visit(this.url)
        cy.get(this.email).type(email)
        cy.get(this.password).type(pwd)
        cy.get(this.signin).click('center').wait(5000)
    }
    signup() {
        const UserName = String('test' + random(10000))
        const Email = String('test' + random(10000) + '@gmail.com')
        const Password = String('testpassword' + random(10000))
        cy.get(this.SignUpButton).click()
        cy.get(this.SignUpUserName).type(UserName)
        cy.get(this.SignUpEmail).type(Email)
        cy.get(this.SignUpPassword).type(Password)
        cy.get(this.CreateButton).click()
    }
    ContactInfoPage() {
        const firstName = "test" + random(20000)
        const Num = random(100000)
        const company = 'testCompany' + random(19999)
        const email = firstName + Num + '@gamil.com'
        const PhoneNum = random(10000000000)
        const addressFirst = "testaddress" + random(100)
        const addressSecond = "testaddress" + random(100)
        cy.get(this.firstname).type(String(firstName))
        cy.get(this.lastname).type(String(Num))
        cy.get(this.company).type(String(company))
        cy.get(this.position).type('USA')
        cy.get(this.addressBookEmail).type(String(email))
        cy.get(this.phone).type(String(PhoneNum))
        cy.get(this.addresslinefirst).type(String(addressFirst))
        cy.get(this.addresslinesecond).type(String(addressSecond))
        cy.get(this.townCity).type('NewYork')
        cy.get(this.stateCountry).type("taipei")
        cy.get(this.zipCodePostcode).type(String(Num))
        cy.get(this.country).type('Angola')
        cy.get(this.submitButton).click()
        cy.get(this.pageButton).click()
        cy.get(this.check).should('exist').contains(String(email))
    }

    AssetsPerPage(perpageElement) {
        const PerpageList = ['10', '25', '50', '100']
        for (let i = 0; i < PerpageList.length; i++) {
            cy.get(perpageElement).eq(0).find('select').select(PerpageList[i])
        }

    }
    CloseButton() {

    }
    DiscardButton() {

    }
    KeepEditing() {

    }
    RandomEmail(name) {
        const effectiveEmail = String(name + random(1000) + "@gmail.com")
        cy.get(this.email).type(effectiveEmail)
    }
    RandomPassword(number) {
        const effectivePassword = String(random(number))
        cy.get(this.password).type(effectivePassword)
    }


}