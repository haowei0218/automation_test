describe('home page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  context("hero section", () => {
    it('the h1 contains the corret text', () => {

      cy.getByData("hero-heading").contains("Testing Next.js Applications with Cypress")
    })

    it("the features on the homepage are correct", () => {

      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })

  })


})

// describe('empty spec' , ()=>) 描述區塊 單引號內為對該測試的描述 接下來則為回呼函數
// it內為實際測試區塊
// visit = 導向網頁
// get = 取得元素 contains = 內容
// 僅運行特定的測試 
// 每次測試都要執行 cy.visit("http://localhost:3000") 因此把這段放在beforeEach 
// beforeEach = 執行每個測試前調用的函數
// eq : 傳回一個”數組“
// 使用context 將相關的測試連結在一起