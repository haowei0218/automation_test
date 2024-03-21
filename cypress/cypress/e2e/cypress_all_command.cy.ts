import { Subject } from "react-hook-form/dist/utils/createSubject"

import { LoginPage } from '../page/login.js'
import { MainPage } from '../page/login.js'
import { CurrencyYenIcon } from "@heroicons/react/solid"

describe('cypress all commands', () => {
         context('and() commands', () => {

                  beforeEach(() => {
                           cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
                  })
                  it('範例：simple', () => {
                           cy.get('nav').should('be.visible').and('have.class', 'open') //return 'nav'
                  })

                  it('範例：chainers change the result', () => [
                           cy.get('nav').should('be.visible').and('have.css', 'font-family').and('match', '/serif/')
                           //cy.get('nav') return <nav>
                           //should return <nav>
                           //.and('have.css', 'font-family') return 'sans-serif'
                           //.and('match','/serif/') return 'sans-serif'
                  ])

                  it('範例：chainer change the result', () => {
                           cy.get('a').should('contain', 'Edit user').and('have.attr', 'href').and('match', /user/).and('not.include', '#')

                           //.should('contain','edit user') , return <a>
                           //.and('have.attr','href')return href value
                           //.and('match' , /users/) return href value
                           //.and('not.include',"#") return href value
                  })
                  it('範例：method and value', () => {
                           cy.get('a').should('have.class', 'active').and('have.attr', '/users') //檢查href屬性是否等於/users
                  })
         })

         context('.check() commands', () => {
                  beforeEach(() => {
                           cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
                  })
                  it('範例1: check()', () => {
                           cy.get(`[type="radio"]`).check()
                           cy.get(`[type="checkbox"]`).check()
                           cy.get("#house").check()
                  })
                  it('範例2: check(value)', () => {
                           cy.get(`[type="checkbox"]`).check(["money", "house"])
                  })
                  it('範例3：check(options)', () => {
                           cy.get(`[type="radio"]`).check({ force: true }).should('be.checked')
                  })

         })

         context('children commands', () => {
                  beforeEach(() => {
                           cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
                  })
                  it('範例：children()', () => {
                           cy.get('ul').children()
                  })
                  it('範例：.contains(selector)', () => {
                           cy.get('ul').children()
                  })
         })

         context('clear commands', () => {
                  beforeEach(() => {
                           cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
                  })
                  it('correct use clear function', () => {
                           cy.get('.single_options').type('123').clear()
                           cy.get('textarea').type('h1').clear()
                           cy.focused().clear()
                  })
                  it('incorrect use clear function', () => {
                           cy.clear()
                           cy.get('nav').clear()
                           cy.url().clear()
                  })
         })

         context('click commands', () => {
                  beforeEach(() => {
                           cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
                  })
                  it('範例：.click({force:true})', () => {
                           cy.get('#main1').click({ force: true })
                  })
                  it('範例：.click(position,{force:true})', () => {
                           cy.get('#main2').click('topRight', { force: true })
                  })
                  it('範例：.click(x,y{force:true})', () => {
                           cy.get('#main1').click(15, 15, { force: true })
                  })
                  it('.click({multiple:true})', () => {
                           cy.get('ul>li').click({ multiple: true })
                  })
                  it("組合鍵", () => {
                           cy.get('body').type('{shift}', { release: false })
                           cy.get('li:first').dblclick()
                  })
                  it('dbclick', () => {
                           cy.get('#main1').dblclick()
                           cy.get('#main1').dblclick("top")
                           cy.get('#main1').dblclick({ force: true })
                  })
                  it('rightclick', () => {
                           cy.get('#li1').rightclick("topRight")
                           cy.get('#li1').rightclick("bottom")
                           cy.get('#li1').rightclick({ force: true })
                  })
                  it('click with position', () => {
                           cy.get('#main2').click("top");
                           cy.get('#main2').click('topLeft')
                           cy.get('#main2').click('topRight')
                           cy.get('#main2').click('left')
                           cy.get('#main2').click('right')
                           cy.get('#main2').click('bottom')
                           cy.get('#main2').click('bottomLeft')
                           cy.get('#main2').click('bottomRight')
                           cy.get('#main2').click('center')
                  })

                  it('click(x,y)', () => {
                           cy.get('#main2').click(15, 15);
                  })
         })

         context('刪除等待的代碼', () => {
                  it('錯誤的做法 強制等待的範例', () => {
                           cy.intercept('/commands/action/*').as('getAction')
                           cy.wait(3000)
                           cy.log("123")
                  })
         })

         context("測試get and find 方法", () => {
                  context("get 命令例子", () => {
                           before(() => {
                                    cy.visit("http://127.0.0.1:5500/automation_test/cypress/index.html")
                           })
                           it("get", () => {
                                    cy.get('#main1')
                                    cy.get('.btn')
                                    cy.get('li')
                                    cy.get('ul>[data-testid=li4]')
                           })
                  })

                  context('測試find方法', () => {
                           before(() => {
                                    cy.visit("http://127.0.0.1:5500/automation_test/cypress/index.html")
                           })
                           it("正確寫法", () => {
                                    cy.get('ul').find("#li1")
                           })
                           it("錯誤寫法", () => {
                                    cy.find('#li')
                           })
                  })

                  context('contains 命令實際例子', () => {
                           before(() => {
                                    cy.visit("http://127.0.0.1:5500/automation_test/cypress/index.html")
                           })

                           it('.contains(content)', () => {
                                    cy.contains('submit')
                           })
                           it('.contains(selector,content)', () => {
                                    cy.contains("ul>li", "test1")
                           })
                           it('.contains(content)正則', () => {
                                    cy.contains("/1$/")
                           })
                  })
         })

         context('fixture commands', () => {
                  it('獲取user.json', () => {
                           cy.fixture('users').then((user) => {
                                    cy.log(user[0].name)
                                    user.firstName = "Jane"
                                    cy.log(user.firstName)
                           })
                  })
         })

         context('focus and blur blue commands', () => {
                  beforeEach(() => {
                           cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
                  })
                  it('focus commands', () => {
                           cy.get('[list="fruit"]').first().focus()
                  })
                  it('blur commands', () => {
                           cy.get('textarea').type('happy day').blur()
                  })

         })

         context("hook commands", () => {
                  before(() => {
                           cy.log("當前測試套件中“頂級套件” ,所有測試用例執行之前運行before")
                  })

                  beforeEach(() => {
                           cy.log("當前測試套件中頂級套件 每個測試用力執行前運行beforeEach")
                  })
                  after(() => {
                           cy.log("當前測試套件中頂級套件 所有測試用力執行結束後運行after")
                  })
                  afterEach(() => {
                           cy.log("當前測試套件中頂級套件 每個測試用力執行結束後運行afterEach")
                  })
                  it("頂級測試套件 - 打印日誌１", () => {
                           cy.log("頂級測試條件 - 打印日誌1111")
                  })

                  it("頂級測試套件 - 打印日誌2", () => {
                           cy.log("頂級測試條件 - 打印日誌2222 ")
                  })

                  context("二級套件", () => {
                           before(() => {
                                    cy.log("當前測試套件中二級套件 所有測試用例執行之前運行before")
                           })
                           after(() => {
                                    cy.log("當前測試套件中二級套件 所有測試用例執行結束後運行after")
                           })
                           it("二級測試套件 － 打印日誌３", () => {
                                    cy.log("二級測試套件 － 打印日誌3333")
                           })

                           describe("三級套件", () => {
                                    it("三級套件－－打印日誌４", () => {
                                             cy.log("三級測試套件 － 打印日誌４")
                                    })
                           })
                  })

         })

         context('invoke commands', () => {
                  it('斷言函數返回值', () => {
                           const fn = () => {
                                    return "bar"
                           }
                           cy.wrap({ foo: fn }).invoke('foo').and('eq', 'bar')
                  })
                  it('調用函數並傳遞參數', () => {
                           const fn = function (a, b, c) {
                                    return a + b + c
                           }
                           cy.wrap({ sum: fn }).invoke('sum', 1, 2, 3).should('be.eq', 6).and('be.lt', 10)
                  })
                  it('作為函數的屬性被調用', () => {
                           cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
                           cy.get('#contact').should('be.hidden').invoke('show').should('ve.visible').find('input[name=email]').type('test cypress')
                  }
                  )
         })

         context("測試指定套件", () => {
                  context.only("只測試這個套件", () => {
                           it("test-1", () => {
                                    expect(1).to.equal(1)
                           })
                           it.skip("跳過這個套件的測試", () => {
                                    cy.log("test")
                           })
                  })

                  context("不會運行該測試套件", () => {
                           context.only("指定運行該測試套件", () => {
                                    it("test-2", () => {
                                             expect(2).to.equal(2)
                                    })
                           })
                  })


         })
         context('scroll commands', () => {
                  beforeEach(() => {
                           cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
                  })
                  it('橫向滾動', () => {
                           cy.get('.scroll-horizontal button').should('not.be.visible')
                           cy.get('.scroll-horizontal button').scrollIntoView({ duration: 2000 }).should('be.visible')
                  })
                  it('縱向滾動', () => {
                           cy.get('.scroll-vertical button').should('not.be.visible')
                           cy.get('.scroll-vertical button').scrollIntoView({ duration: 2000 }).should('be.visible')
                  })
                  it('縱向 橫向滾動', () => {
                           cy.get('.scroll-both button').should('not.be.visible')
                           cy.get('.scroll-both button').scrollIntoView({ duration: 2000 }).should('be.visible')
                  })

                  context('scroll example', () => {
                           it('position example', () => {
                                    cy.scrollTo('bottom') // 滑動頁面到底部
                                    cy.get('.scroll-both').scrollTo('center', { duration: 1000 })
                           })
                           it('x,y example', () => {
                                    cy.scrollTo(0, 0, { duration: 1000 }) // 向右滑動0px 向下滑動0px
                                    cy.scrollTo('0%', '50%', { duration: 1000 }) // 向右滑動0% 向下滑動50%
                                    cy.get('.scroll-both').scrollTo('50px', '50px', { duration: 1000 })
                           })
                  })

         })

         context('select function', () => {
                  beforeEach(() => {
                           cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
                  })
                  it('.select(value)', () => {
                           cy.get('select').eq(0).select("1").should('contain.text', "red")
                           cy.get('select').eq(0).select("orange").should('contain.value', "3")
                  })
                  it('.select(values)', () => {
                           cy.get('select').eq(0).select(['1', '2']).invoke("val").should("deep.equal", ["1", "2"])
                  })
                  it('.select(value,options)', () => {
                           cy.get('select').eq(1).select('bg', { force: true }).should('contain.text', "北京")
                  })
         })

         context("測試跳過執行測試套件", () => {
                  beforeEach(() => {
                           cy.log("==每個測試用例前都執行＝＝")
                  })
                  it("測試1=1", () => {
                           expect(1).to.equal(1)
                  })

                  it.skip("打印日誌", () => {
                           cy.log("日誌ｌｏｇ")
                  })

                  it("測試2=2", () => {
                           expect(2).to.equal(2);
                  })
         })

         context("skip commands", () => {
                  describe.skip("跳過執行該測試套件", () => {
                           it("測試用例", () => {
                                    cy.log("跳過了？")
                           })
                  })

                  context("執行該測試套件", () => {
                           it("測試１", () => {
                                    expect(1).to.equal(1)
                           });
                           describe.skip("再次跳過執行該測試套件", () => {
                                    it("測試1!=２", () => {
                                             expect(1).to.equal(2);

                                    })
                           })
                  })
         })

         context('submit commands', () => {
                  beforeEach(() => {
                           cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
                  })
                  it('submit() function ', () => {
                           cy.get('#contact').submit()
                  })
         })
         context('then commands', () => {
                  beforeEach(() => {
                           cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
                  })

                  //有箭頭功能的函數來記錄所選元素的文字內容
                  it('回調函數：箭頭函數', () => {
                           cy.get('#li1').then(($text: JQuery<HTMLElement>) => {
                                    cy.log($text.text())
                           })
                  })

                  //具有常規函數聲明的函數來記錄所選元素的文字內容
                  it('回調函數：普通聲明函數', () => {
                           cy.get('#li1').then(function ($li: JQuery<HTMLElement>) {
                                    cy.log($li.text())
                           })
                  })
                  it('then 比較', () => {
                           cy.get('#li1').then(($li1: JQuery<HTMLElement>) => {

                                    const txt = $li1.text()

                                    cy.get('#li1').should(($li2: JQuery<HTMLWebViewElement>) => {
                                             expect($li2.text()).to.be.eq(txt)
                                    })
                           })
                  })
         })

         context('獲取全局變量', () => {
                  // beforeEach(() => {
                  //     cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
                  // })
                  it("get website title", () => {
                           cy.title()
                           cy.title().should('contain', 'Title')
                  })
                  it('get website url', () => {
                           cy.url()
                           cy.location('href').should('include', 'automation_test')//斷言檢查url是否包含了automation_test
                           cy.location().its('href').should('include', 'automation_test') //斷言檢查url是否包含了automation_test
                  })
                  it('get website url hash ', () => {
                           cy.hash()
                           cy.get('#users li').find('a').click()
                           cy.hash().should('match', /users\/.+$/)
                  })
                  it('get window', () => {
                           cy.visit('https://www.baidu.com/')
                           cy.window().its('bdCid').should('equal', '0')
                  })
                  it('root function', () => {
                           cy.root()
                           cy.get('#contact').within(($form: JQuery<HTMLFormElement>) => {
                                    cy.get('[name="email"]').type('john.doe@email.com')
                                    cy.get('[name="password"]').type('password') // Corrected typo here
                                    cy.root().submit()
                           })
                  })
                  it('document example', () => {
                           cy.visit('https://www.baidu.com/')
                           cy.document()
                           cy.document().its('contentType').should('eq', 'text/html')
                  })
                  it('location example', () => {
                           cy.visit('https://www.baidu.com/')
                           cy.location()
                           cy.location('host')
                           cy.location().should(function (loc: Location) {
                                    expect(loc.host).to.eq('www.baidu.com')
                                    expect(loc.hostname).to.eq('www.baidu.com')
                                    expect(loc.href).to.contain('https://www.baidu.com')
                                    expect(loc.origin).to.eq('https://www.baidu.com')
                                    expect(loc.pathname).to.contain('/')
                                    expect(loc.protocol).to.contain('https')
                                    expect(loc.search).to.eq('?ie=UTF-8&wd=123')
                           })
                  })
                  it('go function example', () => {
                           cy.visit('https:///www.imooc.com/')
                           cy.get('a[href=\"/course/list\"]').click()
                           cy.go('back')
                           cy.go('forward')
                           cy.go(-1)
                           cy.go(1)
                  })
                  it.only('reload example', () => {
                           cy.visit('https://www.imooc.com/')
                           cy.get('#logo > a >img')
                           cy.reload()
                           cy.get('.nav-item > :nth-child(6) > :nth-child(1)').click().should('exist')
                           cy.reload(true)
                  })

         })

         context('trigger commands', () => {
                  beforeEach(() => {
                           cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
                  })
                  it('hover', () => {
                           cy.get('#main1').trigger('mouseover')
                  })
                  it('鼠標 左鍵 長按', () => {
                           cy.get('#main2').trigger('mousedown', { force: true, button: 0 }).wait(1000).trigger('mouseleave', { force: true })
                  })
                  it('鼠標 左鍵 滾輪鍵 右鍵 點擊', () => {
                           cy.get('#main').trigger('mousedown', { button: 0 })
                           cy.get('#main2').trigger('mousedown', { button: 1 })
                           cy.get('#main1').trigger('mousedown', { button: 2 })
                  })
                  it('添加 Options ', () => {
                           cy.get('#main1').trigger('mousedown', { bubbles: false })
                  })
                  it('seting clientX and clientY', () => {
                           cy.get('button').trigger('mousemove', { clientX: 200, clientY: 200 })
                  })
         })

         context('type function', () => {
                  beforeEach(() => {
                           cy.visit('http://127.0.0.1:5500/automation_test/cypress/index.html')
                  })
                  it('type input ', () => {
                           cy.get(".single_option").type("12345%%89")
                  })
                  it('特殊字符{del}', () => {
                           cy.get('.single_option').type('{del}')
                  })
                  it('帶有單個參數的傳遞', () => {
                           cy.get('.single_option').type('selectall', { parseSpecialCharSequences: false })
                  })
                  it('帶有多個參數的傳遞', () => {
                           cy.get('.single_option').type('1234', { log: false, parseSpecialCharSequences: false })
                  })
                  it('<textarea>標籤的例子', () => {
                           cy.get('textarea').type('hello')
                  })
                  it('<option>標籤的例子', () => {
                           cy.get(`[list=fruit]`).type('apple')
                  })
                  it('<input type="date">', () => {
                           cy.get(`[type="date"]`).type('1992-12-31')
                  })
                  it('<input type="month">', () => {
                           cy.get(`[type="month"]`).type('1992-12')
                  })
                  it('<input type="week">', () => {
                           cy.get('[type="week"]').type('1999-W23')
                  })
                  it('<input type="time">', () => {
                           cy.get(`[type="time"]`).type('23:15')
                  })
         })

         context('避免訪問多個url', () => {
                  it('訪問同一超域下的不同子域', () => {
                           cy.visit('https://example.cypress.io')
                           cy.visit('https:/www.cypress.io/features')//cypress允許正常訪問
                  })
                  it('訪問不同超域 會報錯', () => {
                           cy.visit('https://example.cypress.io')
                           cy.visit('https://www.cnblogs.com/poloyy')
                  })
         })

         context('visit commands', () => {
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

         context('wrap commands', () => {
                  it('簡單的範例', () => {
                           cy.wrap({ num: 123 }).should('have.property', 'num').and('eq', 123)
                  })
                  it('對象屬性質是函數的範例', () => {
                           const getName = () => {
                                    return "小波蘿測試筆記"
                           }
                           cy.wrap({ getname: getName }).invoke('getname').should('eq', '小波羅測試筆記')
                  })
                  it('頁面元素element的範例', () => {
                           cy.get('form').then(($form: JQuery<HTMLFormElement>) => {
                                    cy.wrap($form).should('have.class', 'open')
                           })
                  })

                  context('getCookie() commands', () => {
                           it.only('cy.getCookie() - get a browser cookie', () => {
                                    cy.visit('https://example.cypress.io/commands/cookies');
                                    cy.get('#getCookie .set-a-cookie').click();
                                    cy.getCookie('token').should('exist').should('have.property', 'value', '123ABC').then(function (cookie: Subject) {
                                             cy.log(cookie);
                                    })

                                    //用.should(exist)判斷cookie對象是否存在
                                    //用.should('have.property)判斷這個cookie對象的某個屬性是否包含指定的值
                                    //用.then()暫存cookie對象 以便後續擴展使用
                           })



                  })

         })
         context('login test', () => {
                  const username = 'jane.lane';
                  const pwd = 'password';

                  it('login success', () => {
                           const loginInstance = new LoginPage();
                           loginInstance.isTargetPage();
                           loginInstance.login(username, pwd);
                           cy.url().should('include', 'dashboard');

                           const manInstance = new MainPage();
                           manInstance.isTargetPage();
                           manInstance.welComeText.should('contain', 'jane.lane');

                  })
         })

         context('get 請求方法', () => {
                  it('默認請求方式', () => {
                           cy.request({
                                    method: 'get',
                                    url: 'http://www.helloqa.com'
                           })
                  })
                  it('use options', () => {
                           cy.request({
                                    method: 'get',
                                    url: "http://www.helloqa.com"
                           })
                  })

                  it('real test', () => {
                           cy.request({
                                    method: 'get',
                                    url: 'https://www.helloqa.com'
                           }).as('comments')
                           cy.get('@comment').then((response) => {
                                    expect(response.status).to.be.eq(200);
                           })
                  })
                  it('request 替代 visit', () => {
                           cy.request('http://localhost://7077/login').its('body').should('include', '<p>in this recipe we:</P>')
                           //表單格式的請求方式
                           cy.request({
                                    method: 'post',
                                    url: '/login',
                                    form: true,
                                    body: {
                                             username: 'jane.lane',
                                             password: 'password123',
                                    }
                           })
                           cy.request('/dashboard').its('body').should('include', 'jane.lane')
                  })
         })
         function requestUrl() {
                  cy.request('/').then((resp) => {
                           if (resp.status === 200) {
                                    return
                           }
                  })
                  requestUrl();
         }
         it('輪詢requset:默認訪問方式', () => {
                  cy.visit('http://localhost:3000');
                  cy.get('form').click().then(() => { requestUrl() })

         })

         context('getCookie commands', () => {
                  beforeEach(() => {
                           cy.visit('https://example.cypress.io/commands/cookies')
                  })
                  it('cy.getCookie() i get a browasr cookie', () => {
                           cy.get('#getCookie .set-a-cookie').click();
                           cy.getCookie('token').should('exist').should('have.property', 'value', '123ABC').then((cookie: Subject) => {
                                    cy.log(cookie)
                           })
                  })

                  it('login page', () => {
                           const username = 'jane.lane';
                           const password = 'password123';

                           before(function () {
                                    cy.visit('http://localhost:7079/login');
                                    cy.get('input[name=username]');
                                    cy.get('input[name=password]');

                                    cy.get('form').submit()
                           })
                           it('get login cookie after', () => {
                                    cy.getCookie('cypress-session-cookie').should('exist').should('have.property', 'domain', 'localhost').then((cookies) => {
                                             cy.log(cookies)
                                    })
                           })
                  })
         })

         context('route example', () => {
                  const username = 'jane.lane';
                  const password = 'password';

                  before(function () {
                           cy.visit('http://localhost:7079/')
                  })
                  it('正常登陸 修改登陸請求的status ,response', function () {
                           cy.intercept({
                                    url: '**/login',
                                    method: 'POST',
                                    status: '503',
                                    delay: 1000,
                                    response: {
                                             success: false,
                                             data: 'Nor success'
                                    }

                           }).as('login');
                  })
                  cy.get('input[name=username]').type(username);
                  cy.get('input[name=password]').type(`${password}{enter}`);
                  cy.wait('@login').then((res) => {
                           cy.log(res);
                           expect(res.status).to.eq(503);
                           expect(res.responseBody.data).to.eq('Not success')
                  })
         })
         context('spread commands', () => {
                  beforeEach(() => {
                           cy.visit('https://example.cypress.io/commands/connectors');
                  })

                  it('範例：spread回調函數的參數個數和數組長度一致', () => {
                           const arr = ['foo', 'bar', 'baz'];

                           cy.wrap(arr).spread((foo, bar, baz) => {
                                    expect(foo).to.eq('foo');
                                    expect(bar).to.eq('bar');
                                    expect(baz).to.eq('baz');
                           })
                  })

                  it('範例：spread回調函數的參數個數小於數組長度', () => {
                           const arr = ['foo', 'bar', 'baz', 'test'];

                           cy.wrap(arr).spread((foo, bar) => {
                                    expect(foo).to.eq('foo');
                                    expect(bar).to.eq('bar');
                           })
                  })
                  it('範例：拆分網頁的cookies 並且return一個值', () => {
                           cy.getCookies().spread((c1, c2, c3) => {
                                    cy.log(c1['domain'], c2, c3).then(function () {
                                             return 11;
                                    })
                           }).then(function (text: object | any[] | string | number | boolean) {
                                    cy.log(text)
                           })
                  })
         })
         context('within 命令詳解', () => {
                  beforeEach(() => {
                           cy.visit('https://example.cypress.io/commands/querying')
                  })

                  it('範例１', () => {
                           cy.get('.query-form').within(() => {
                                    //回調函數裡的cy.get() 只會從form表單裡面找元素 而不是整個頁面
                                    cy.get('input:first').should('have.attr', 'placeholder', 'Email');
                                    cy.get('input:last').should('have.attr', 'placeholder', 'Password')

                                    //get() and within()命令的返回結果都是form表單
                           })
                  })
         })
         context('.closest()命令詳解', () => {
                  beforeEach(() => {
                           cy.visit('https://example.cypress.io/commands/traversal')
                  })

                  it('範例1', () => {
                           //cy.get()找到的是一個span標籤
                           cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group')
                  })
         })
         context('each 命令詳解', () => {
                  beforeEach(() => {
                           cy.visit('https://example.cypress.io/commands/connectors')
                  })

                  it('範例1', () => {
                           cy.get('.connectors-each-ul>li').each((item: JQuery<HTMLElement>, index: number, $list: HTMLElement[]) => {
                                    cy.log(item, index, $list)
                           })
                  })

                  it('範例2', () => {
                           cy.wrap([1, 2, 3, 4]).each((item: JQuery<HTMLElement>, index: number, $list: HTMLElement[]) => {
                                    cy.log(item, index, $list)
                                    if (item == 2) {
                                             return false; //提前退出遍歷
                                    }
                           }).then(($list: JQuery<HTMLElement>) => {
                                    cy.log($list) //可以繼續操作原始的數組
                           })
                  })
         })
})


