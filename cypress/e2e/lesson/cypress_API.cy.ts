const cypress = require('cypress')

cypress.run({
    spec: './test_click_function.cy.ts'
}).then((results) => {
    console.log(results)
}).catch((err) => {
    console.error(err)
})
