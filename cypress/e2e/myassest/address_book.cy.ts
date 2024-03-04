import { countBy, random } from "lodash"
import MyassetsLoginPage from "../pages/myassets_function"

describe('address book', () => {
    beforeEach(() => {
        const Login = new MyassetsLoginPage()
        Login.login('myademonumber8@gmail.com', 'Myatesting#')
        cy.viewport(1980, 1080)
        cy.get('.MuiAvatar-root').click()
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
            let SelectLast = ['10', '25', '50', '100']
            for (let i = 0; i < SelectLast.length; i++) {
                cy.get('.MuiTableCell-root > .MuiToolbar-root').eq(0).find('select').select(SelectLast[i])
            }
        })
        it.only('Fill out the contact information page', () => {
            cy.get('[data-cy="add-btn"]').click('center')
            const createContact = new MyassetsLoginPage()
            createContact.ContactInfoPage()

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
        it('last Name', () => {
            const lastName = "last" + random(100)
            cy.get('[data-cy="add-btn"]').click('center')
            cy.get('#lastName').type(String(lastName))
            cy.get('[data-cy="asset-dialog-submit-btn"] > .MuiButton-label').click()
            cy.get('.jss470 > .MuiPaper-root').should('exist').contains(lastName)
        })
        it('contact type', () => {
            cy.get('[data-cy="add-btn"]').click('center')
            cy.get('#contactType').click()
            cy.get('#contactType-option-0').click()
        })
        it('contact company', () => {
            const CompanyName = String('test' + random(100000))
            cy.get('[data-cy="add-btn"]').click()
            cy.get('#company').type(CompanyName)
        })
        it('Position', () => {
            cy.get('[data-cy="add-btn"]').click()
            cy.get('#position').type('USA')
        })
        it('email', () => {
            const prefix = 'test'
            const emailNum = String(random(1000))
            const suffix = '@gmail.com'
            cy.get('[data-cy="add-btn"]').click()
            cy.get('#email').type(prefix + emailNum + suffix)
        })
        it('phoneNumber', () => {
            const PhoneNumber = random(100000000000)
            cy.get('[data-cy="add-btn"]').click()
            cy.get('#phoneNumber').type(String(PhoneNumber))
        })
        it('#address', () => {
            cy.get('[data-cy="add-btn"]').click()
            cy.get('#addressSearch').type('NewYork')
            if (cy.get('.jss741 > :nth-child(1) > .MuiList-root > [tabindex="0"]').should('exist').contains('New York')) {
                console.log('pass')
            } else {
                console.log('file')
            }
        })
        it('address Line first', () => {
            const addressFirst = "testaddress" + random(100)
            cy.get('[data-cy="add-btn"]').click()
            cy.get('#addressLineFirst').type(String(addressFirst))
        })
        it('address Line second', () => {
            const addressSecond = "testaddress2" + random(1000)
            cy.get('[data-cy="add-btn"]').click()
            cy.get('#addressLineSecond').type(String(addressSecond))
        })
        it('Town or City', () => {
            cy.get('[data-cy="add-btn"]').click()
            cy.get('#townCity').type('NewYork')
        })
        it('stateCountry', () => {
            cy.get('[data-cy="add-btn"]').click()
            cy.get('#stateCountry').type('taipei')
        })
        it('Zip Code/Postcode', () => {
            const zipCode = random(1000)
            cy.get('[data-cy="add-btn"]').click()
            cy.get('#zipCodePostcode').type(String(zipCode))
        })
        it('Country', () => {
            cy.get('[data-cy="add-btn"]').click()
            cy.get('.jss749 > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.get('#country-option-0').click()
        })
        it.only('assets per page button', () => {
            const assetsPerPage = new MyassetsLoginPage()
            assetsPerPage.perpage
        })
        it.only('delete button', () => {
            cy.get(':nth-child(1) > .jss488 > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .MuiBox-root').click()
            cy.get('[data-cy="asset-dialog-submit-btn"]').click()
            cy.get('contentContainer').should('exist')
        })
    })
})