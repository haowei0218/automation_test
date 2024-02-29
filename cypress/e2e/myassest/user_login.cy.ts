import MyassetsFunction from "../pages/myassets_function"

describe("user_login", () => {
    beforeEach(() => {
        cy.visit('https://app.myassets.com/')
    })
    it.only("Login with correct email address and password", () => {
        const Login = new MyassetsFunction()
        Login.login('myademonumber8@gmail.com', 'Myatesting#')
    })

    it('Login with missing email suffix and correct password', () => {
        cy.get('#email').type('yuyu')
        const emailaddress = new MyassetsFunction()
        emailaddress.RandomEmail('test')
        cy.get('[data-cy="login-btn"] > .MuiButton-label').click()
        cy.get('.MuiFormHelperText-root').should('exist').contains('Username or password is incorrect. Please try again.')
    })
    it('Login with missing email prefix and correct passowrd', () => {
        cy.get('#email').type('@gmail.com')
        cy.get('#password').type('Ha900218')
        cy.get('[data-cy="login-btn"] > .MuiButton-label').click()
        cy.get('.MuiFormHelperText-root').should('exist').contains('Username or password is incorrect. Please try again.')
    })
    it('Login with correct eamil address and incorrect password', () => {
        cy.get('#email').type('myademonumber8@gmail.com')
        cy.get('#password').type('909090')
        cy.get('[data-cy="login-btn"] > .MuiButton-label').click()
        cy.get('.MuiFormHelperText-root').should('exist').contains('Username or password is incorrect. Please try again')
    })
    it('Login with correct email address and empty password', () => {
        cy.get('#email').type('myademonumber8@gmail.com')
        cy.get('[data-cy="login-btn"] > .MuiButton-label').click()
        cy.get('.MuiFormHelperText-root').should('exist').contains('Username or password is incorrect. Please try again')
    })
    it('Login with empty email address and password', () => {
        cy.get('[data-cy="login-btn"] > .MuiButton-label').click()
        cy.get('.MuiFormHelperText-root').should('not.exist')
    })
    it('Login with missing email address and correct password', () => {
        cy.get('#password').type('myademonubmer8')
        cy.get('[data-cy="login-btn"] > .MuiButton-label').click()
        cy.get('.MuiFormHelperText-root').should('exist').contains('Username or password is incorrect. Please try again')
    })

    context('Login page password display/hide button', () => {
        it('first click', () => {
            const password = "yuyuyuyuy";
            cy.get('#password').type(password)
            cy.get('.MuiInputAdornment-root > .MuiSvgIcon-root > path').click()
            cy.get('#password').invoke('val').should('exist', 'yuyuyuyuy')
        })
        it('second click', () => {
            cy.get('#password').type("yuyuyu")
            cy.get('.MuiInputAdornment-root > .MuiSvgIcon-root > path').click()
            cy.get('#password').invoke('val').should('exist', 'yuyuyu')
            cy.get('.MuiInputAdornment-root > .MuiSvgIcon-root > path').click()
            cy.get('#password').invoke('val').should('exist', '......')
        })
    })
    it('Login page Forgot password Link', () => {
        cy.get('.jss18 > .MuiButtonBase-root > .MuiButton-label').click().wait(10000)
        cy.get('.jss69').should('exist').contains('Forgot password?')
        //conditions is get forgot password page h1 text 
    })
    it('Login page "create a new account button', () => {
        cy.get('.jss25 > .MuiButtonBase-root > .MuiButton-label > span').click()
        cy.get('.jss59').should('exist').contains('Create your account in three easy steps')//conditions is get Sign up page h1 text
    })


})