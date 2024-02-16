describe('personal account menu', () => {
    beforeEach(() => {
        cy.visit('https://app.myassets.com/')
        cy.get('#email').type('myademonumber8@gmail.com')
        cy.get('#password').type('Myatesting#')
        cy.get('[data-cy="login-btn"] > .MuiButton-label').click('center').wait(5000)
        cy.get('.MuiAvatar-root').click('center')
        cy.get(':nth-child(3) > .jss93').click()//access control button

    })
    context('access control', () => {
        it('access control button', () => {
            cy.get('.MuiButton-startIcon').click('center')// create contact button
            cy.get('.jss147').should('exist').contains('Delegates')
        })
        it('create contact button', () => {
            cy.get('.MuiButton-startIcon').click('center')
            cy.get('.MuiDialogContent-root').should('exist')
        })
        it('use Effective email', () => {
            const EffectiveEmail = 'yuyu04@gmail.com'
            cy.get('.MuiButton-startIcon').click('center')
            cy.get('#email').type(EffectiveEmail)
            cy.get('.MuiDialogContent-root').scrollTo('bottom')// 滑動頁面
            cy.get('[data-cy="asset-dialog-submit-btn"]').click('center').wait(6000)// create button and wait 5s delegate was created display 
            cy.get('.MuiSnackbar-root > .MuiPaper-root').should('exist').contains('Delegate was created')

        })
        it('New Role button', () => {
            cy.get('.MuiButton-startIcon').click('center')
            cy.get('.MuiIconButton-label > .MuiTypography-root').click('center') // New Role button
        })
    })

    context('Permissions corresponding to the role', () => {
        it('MyFinance view', () => {
            cy.get('.MuiButton-startIcon').click('center')
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').should('exist').contains('MyFinance view')
            cy.get('.jss596').should('exist').contains('my_finance.view')
        })
        it('MyFinance edit', () => {
            cy.get('.MuiButton-startIcon').click('center')
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]').should('exist').contains('MyFinance edit').click('center').wait(4000)
            // 確保獲取的元素文本是否正確 再進行點擊
            // 點擊後因為需要反應時間 要放wait()
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                // then() 將獲取的元素包裝在jquery 內然後存取
                const text = $element.text();
                expect(text).to.contains('my_finance.view');
                expect(text).to.contains('my_finance.edit');
                expect(text).to.contains('contacts.view');
            })
        })

        it('MyFinance edit/add', () => {
            cy.get('.MuiButton-startIcon').click('center')
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('#menu- > .MuiPaper-root > .MuiList-root > :nth-child(2)').should('exist').contains('MyFinance edit/add').click().wait(4000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text();
                expect(text).to.contains('my_finance.view');
                expect(text).to.contains('my_finance.edit');
                expect(text).to.contains('my_finance.add');
                expect(text).to.contains('contacts.view')
            })
        })
        it('MyFinance edit/delete', () => {
            cy.get('.MuiButton-startIcon').click()
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('#menu- > .MuiPaper-root > .MuiList-root > :nth-child(3)').should('exist').contains('MyFinance edit/delete').click().wait(4000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text();
                expect(text).to.contains('my_finance.view');
                expect(text).to.contains('my_finance.edit');
                expect(text).to.contains('my_finance.delete');
                expect(text).to.contains('contacts.view');
            })
        })

        it('MyFinance full with property ', () => {
            cy.get('.MuiButton-startIcon').click()
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('#menu- > .MuiPaper-root > .MuiList-root > :nth-child(4)').should('exist').contains('MyFinance full with property').click().wait(4000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text();
                expect(text).to.contains('my_finance.view')
                expect(text).to.contains('my_finance.edit')
                expect(text).to.contains('my_finance.delete')
                expect(text).to.contains('contacts.view')
                expect(text).to.contains('my_finance.add')
                expect(text).to.contains('property.view')

            })
        })

        it('Property view', () => {
            cy.get('.MuiButton-startIcon').click()
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('#menu- > .MuiPaper-root > .MuiList-root > :nth-child(5)').should('exist').contains('Property view').click().wait(4000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text()
                expect(text).to.contains('property.view');
            })
        })
        it('Property edit', () => {
            cy.get('.MuiButton-startIcon').click()
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('#menu- > .MuiPaper-root > .MuiList-root > :nth-child(6)').should('exist').contains('Property edit').click().wait(4000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text()
                expect(text).to.contains('property.view')
                expect(text).to.contains('property.edit')
                expect(text).to.contains('contacts.view')
            })
        })
        it('Property edit/add', () => {
            cy.get('.MuiButton-startIcon').click()
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('#menu- > .MuiPaper-root > .MuiList-root > :nth-child(7)').should('exist').contains('Property edit/add').click().wait(4000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text()
                expect(text).to.contains('property.view')
                expect(text).to.contains('property.edit')
                expect(text).to.contains('property.add')
                expect(text).to.contains('contacts.view')
            })
        })
        it('Property edit/delete', () => {
            cy.get('.MuiButton-startIcon').click()
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('.MuiList-root > :nth-child(8)').should('exist').contains('Property edit/delete').click().wait(3000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text()
                expect(text).to.contains('property.view')
                expect(text).to.contains('property.edit')
                expect(text).to.contains('property.delete')
                expect(text).to.contains('contacts.view')

            })
        })
        it('Property full', () => {
            cy.get('.MuiButton-startIcon').click()
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('.MuiList-root > :nth-child(9)').should('exist').contains('Property full').click().wait(3000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text()
                expect(text).to.contains('property.add')
                expect(text).to.contains('property.delete')
                expect(text).to.contains('property.edit')
                expect(text).to.contains('property.view')
                expect(text).to.contains('contacts.view')
            })
        })
        it('MyCollectables view', () => {
            cy.get('.MuiButton-startIcon').click()
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('.MuiList-root > :nth-child(10)').should('exist').contains('MyCollectables view').click().wait(3000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text()
                expect(text).to.contains('my_collectables.view')
            })
        })
        it('MyCollectables edit', () => {
            cy.get('.MuiButton-startIcon').click()
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('.MuiList-root > :nth-child(11)').should('exist').contains('MyCollectables edit').click().wait(3000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text()
                expect(text).to.contains('my_collectables.view')
                expect(text).to.contains('my_collectables.edit')
                expect(text).to.contains('contacts.view')
            })
        })
        it('MyCollectables edit/add', () => {
            cy.get('.MuiButton-startIcon').click()
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('.MuiList-root > :nth-child(12)').should('exist').contains('MyCollectables edit/add').click().wait(2000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text()
                expect(text).to.contains('my_collectables.view')
                expect(text).to.contains('my_collectables.edit')
                expect(text).to.contains('my_collectables.add')
                expect(text).to.contains('contacts.view')
            })
        })
        it('Mycollectables edit/delete', () => {
            cy.get('.MuiButton-startIcon').click()
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('.MuiList-root > :nth-child(13)').should('exist').contains('MyCollectables edit/delete').click().wait(1000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text()
                expect(text).to.contains('my_collectables.view')
                expect(text).to.contains('my_collectables.edit')
                expect(text).to.contains('my_collectables.delete')
                expect(text).to.contains('contacts.view')
            })
        })

        it('MyCollectables full with property', () => {
            cy.get('.MuiButton-startIcon').click()
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('.MuiList-root > :nth-child(14)').should('exist').contains('MyCollectables full with property').click().wait(1000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text()
                expect(text).to.contains('my_collectables.add')
                expect(text).to.contains('my_collectables.delete')
                expect(text).to.contains('my_collectables.edit')
                expect(text).to.contains('my_collectables.view')
                expect(text).to.contains('contacts.view')
                expect(text).to.contains('property.view')
            })

        })
        it('MyBelongings view', () => {
            cy.get('.MuiButton-startIcon').click()
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('.MuiList-root > :nth-child(15)').should('exist').contains('MyBelongings view').click().wait(1000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text()
                expect(text).to.contains('belongings.view')
            })
        })
        it('MyBelongings edit', () => {
            cy.get('.MuiButton-startIcon').click()
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('.MuiList-root > :nth-child(16)').should('exist').contains('MyBelongings edit').click().wait(1000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text()
                expect(text).to.contains('belongings.view')
                expect(text).to.contains('belongings.edit')
                expect(text).to.contains('contacts.view')
            })
        })
        it('MyBelongings edit/add', () => {
            cy.get('.MuiButton-startIcon').click()
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('.MuiList-root > :nth-child(17)').should('exist').contains('MyBelongings edit/add').click().wait(1000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text()
                expect(text).to.contains('belongings.view')
                expect(text).to.contains('belongings.edit')
                expect(text).to.contains('belongings.add')
                expect(text).to.contains('contacts.view')
            })
        })
        it('MyBelongings edit/delete', () => {
            cy.get('.MuiButton-startIcon').click()
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('.MuiList-root > :nth-child(18)').should('exist').contains('MyBelongings edit/delete').click().wait(1000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text()
                expect(text).to.contains('belongings.view')
                expect(text).to.contains('belongings.edit')
                expect(text).to.contains('belongings.delete')
                expect(text).to.contains('contacts.view')
            })

        })
        it('Viewer', () => {
            cy.get('.MuiButton-startIcon').click()
            cy.get('.MuiDialogContent-root').scrollTo('bottom')
            cy.get('.MuiSelect-root').click()
            cy.get('.MuiList-root > :nth-child(19)').should('exist').contains('Viewer').click().wait(1000)
            cy.get('.MuiDialogContent-root').should('exist').then(($element) => {
                const text = $element.text()
                expect(text).to.contains('portfolio.view')
                expect(text).to.contains('cash_account.view')
                expect(text).to.contains('insurance.view')
                expect(text).to.contains('crypto.view')
                expect(text).to.contains('other_investments.view')
                expect(text).to.contains('belongings.view')
                expect(text).to.contains('groups.view')
                expect(text).to.contains('vault.view')
                expect(text).to.contains('delegates.view')
            })
        })
    })

})
