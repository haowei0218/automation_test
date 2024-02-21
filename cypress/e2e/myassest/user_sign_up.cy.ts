import MyassetsLoginPage from "../pages/myassets_function"
describe('user Sign up', () => {
    beforeEach(() =>
        cy.visit('https://app.myassets.com/')
    )
    it.only('Sign up success', () => {
        const SignUp = new MyassetsLoginPage()
        SignUp.signup()
    })
    it('Sign up with google', () => {
        cy.get('.jss25 > .MuiButtonBase-root > .MuiButton-label > span').click()
        cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiButton-label').click()
    })
    it('Sign up with apple', () => {
        cy.get('.jss25 > .MuiButtonBase-root > .MuiButton-label > span').click()
        cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiButton-label > span').click('center')
    })

    it('Sign up with correct name', () => {
        cy.get('.jss25 > .MuiButtonBase-root > .MuiButton-label > span').click()
        cy.get('#userName').type('yuyuyu')
        cy.get('#email').type('haoweizhou@gmail.com')
        cy.get('#password').type('Ha89-@')
        cy.get('.jss62 > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('#userName').type('123456789').clear()
        cy.get('#userName').type('rururu12456').clear()
    })
    it('Sign up with missing email address', () => {
        cy.get('.jss25 > .MuiButtonBase-root > .MuiButton-label > span').click()
        cy.get('#userName').type('red')
        cy.get('#password').type("Ha##$#0612")
        cy.get('.jss62 > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiSvgIcon-root > path').should('exist')

    })

    context('password display/hide button', () => {
        it('first click', () => {
            cy.get('.jss25 > .MuiButtonBase-root > .MuiButton-label > span').click()
            cy.get('#password').type('Ha####900218')
            cy.get('.MuiInputAdornment-root > .MuiSvgIcon-root > path').click()
            cy.get('#password').invoke('val').should('exist', 'Ha####900218')
        })
        it('second click', () => {
            cy.get('.jss25 > .MuiButtonBase-root > .MuiButton-label > span').click()
            cy.get('#password').type('#90%%reY')
            cy.get('.MuiInputAdornment-root > .MuiSvgIcon-root > path').click()
            cy.get('.MuiInputAdornment-root > .MuiSvgIcon-root > path').click()
            cy.get('#password').invoke('val').should('exist', "......")
        })

    })
    context.only('Sign up page Various links', () => {
        it('Sign up page Various links', () => {
            cy.get('.jss25 > .MuiButtonBase-root > .MuiButton-label > span').click()
            cy.get('[href="https://myassets.com/terms-and-conditions/"]').click('center')
            cy.get('/html/body/div[1]/section/div/div[2]/div/div[2]/div/div/a')
        })
    })


})