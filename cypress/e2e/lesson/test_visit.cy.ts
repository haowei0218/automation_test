describe('visit function', () => {
    it('url', () => {
        cy.visit('https://www.cnblogs.com/poloyy/')
    })
    it('visit,timeout', () => {
        cy.visit('https://www.cnblogs.com/poloyy/', {
            timeout: 3000,
        })
    })
    it('visit , auth ', () => {
        cy.visit('https://www.cnblogs.com/poloyy/', {
            auth: {
                "username": "yy",
                "password": "yy"
            }
        })
    })
    it('visit ,onBeforeLoad', () => {
        cy.visit('https://www.cnblogs.com/poloyy/', {
            onBeforeLoad: (contentWindow) => {
                //contentEindow is the remote page's window object
            }
        })
    })

    it('visit,onload', () => {
        cy.visit('https://www.cnblogs.com/poloyy/'), {
            onLoad: (contentWindow) => {
                if (contentWindow.angular) {
                    // do something
                }
            }
        }
    })
    it('visit , qs', () => {
        cy.visit('https://www.cnblogs.com/poloyy/', {
            qs: {
                page: '1',
                role: 'admin'
            }
        })
    })
    it('visit , method , body ', () => {
        cy.visit({
            url: 'http"//localhost:3000/cgi-bin/newsletterSignup',
            method: 'POST',
            body: {
                name: "Yom",
                email: 'yoou@gmail.com'

            }
        })
    })

})