import { random } from "lodash"

describe('address book', () => {
    beforeEach(() => {
        cy.visit('https://app.myassets.com/')
        cy.viewport(1980, 1080)
        cy.get('#email').type('myademonumber8@gmail.com')
        cy.get('#password').type('Myatesting#')
        cy.get('[data-cy="login-btn"] > .MuiButton-label').click('center').wait(4000)
        cy.get('.MuiAvatar-root').click('center')
        cy.get(':nth-child(5) > .jss93').click()
        cy.get('.MuiTableCell-root > .MuiToolbar-root').eq(0).find('select').select('100')

    })
    context('address book button functionanl', () => {
        it('create contacts button', () => {
            cy.get('[data-cy="add-btn"]').click('center')//create contacts
            const name = "test"
            const number = random(1000000000)
            const testName = name + number
            cy.get('#firstName').type(testName)
            cy.get('[data-cy="asset-dialog-submit-btn"]').click('center')
            cy.get('.MuiPagination-ul > :nth-child(2) > .MuiButtonBase-root').click()
            cy.get('.MuiSnackbarContent-message').should('exist')
            cy.get('.jss470 > .MuiPaper-root').should('exist').contains(testName)
        })
        it('Assets per page button', () => {
            cy.get('.MuiTableCell-root > .MuiToolbar-root').eq(0).find('select').select('10') //先獲取元素 並在該元素底下尋找select 再從select底下找文本
            cy.get('.MuiTableCell-root > .MuiToolbar-root').eq(0).find('select').select('25')
            cy.get('.MuiTableCell-root > .MuiToolbar-root').eq(0).find('select').select('50')
            cy.get('.MuiTableCell-root > .MuiToolbar-root').eq(0).find('select').select('100')
        })
        it('Fill out the contact information page', () => {
            cy.get('[data-cy="add-btn"]').click('center')
            const firstName = "test" + random(20000)
            const Num = random(100000)
            const company = 'testCompany' + random(19999)
            const email = firstName + Num + '@gamil.com'
            const PhoneNum = random(10000000000)
            const addressFirst = "testaddress" + random(100)
            const addressSecond = "testaddress" + random(100)
            cy.get('#firstName').type(String(firstName))
            cy.get('#lastName').type(String(Num))
            cy.get('#company').type(company)
            cy.get('#position').type('USA')
            cy.get('#email').type(email)
            cy.get('#phoneNumber').type(String(PhoneNum))
            cy.get('#addressSearch').type('NewYork')
            cy.get('#addressLineFirst').type(String(addressFirst))
            cy.get('#addressLineSecond').type(String(addressSecond))
            cy.get('#townCity').type(String('NewYork'))
            cy.get('#stateCountry').type('Taipei')
            cy.get('#zipCodePostcode').type(String(Num))
            cy.get('#country').type('Angola')
            cy.get('[data-cy="asset-dialog-submit-btn"] > .MuiButton-label > span').click()
            cy.get('.MuiPagination-ul > :nth-child(3) > .MuiButtonBase-root').click()
            cy.get('.jss470 > .MuiPaper-root').should('exist').contains(String(email))

        })
        it('Update contact information', () => {
            const firstName = "Update" + random(100)
            cy.get(':nth-child(14) > .jss488 > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root > .MuiIconButton-label > .MuiBox-root > .MuiSvgIcon-root').click()
            cy.get('#firstName').clear()
            cy.get('#firstName').type(String(firstName))
            cy.get('[data-cy="asset-dialog-submit-btn"] > .MuiButton-label').click()
        })
        it('keep Editing button', () => {
            cy.get('[data-cy="add-btn"]').click('center')
            cy.get('.MuiGrid-justify-xs-center > :nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click('center')
            cy.get('.MuiPaper-root > .MuiDialogActions-root').click('center')
            cy.get('.MuiGrid-container > span').should('exist')
        })
        it('Discard Change button', () => {
            cy.get('[data-cy="add-btn"]').click('center')
            cy.get('.MuiGrid-justify-xs-center > :nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click('center')
            cy.get('.MuiPaper-root > .MuiDialogActions-root').click(300, 40)
            cy.get('.MuiBreadcrumbs-li > .MuiTypography-root').should('exist')
        })

    })

    context('Contacts information ', () => {
        it('First Name', () => {
            const firstName = "test" + random(20000)
            cy.get('[data-cy="add-btn"]').click('center')
            cy.get('#firstName').type(String(firstName))
            cy.get('[data-cy="asset-dialog-submit-btn"] > .MuiButton-label').click()
            cy.get('.jss470 > .MuiPaper-root').should('exist').contains(firstName)
        })
        it.only('last Name', () => {
            const lastName = "last" + random(100)
            cy.get('[data-cy="add-btn"]').click('center')
            cy.get('#lastName').type(String(lastName))
            cy.get('[data-cy="asset-dialog-submit-btn"] > .MuiButton-label').click()
            cy.get('.jss470 > .MuiPaper-root').should('exist').contains(lastName)
        })
    })
})