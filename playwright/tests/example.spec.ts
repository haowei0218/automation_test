import { test, expect } from '@playwright/test';


test.beforeEach(async({context})=>{
  await context.grantPermissions((['notifications']),{origin:'https://skype.com'})
})

test('has title', async ({ page }) => { 
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/); // "/playwright/" 兩個斜槓是ＪＳ中的正則表達式  只要匹配有playwright字符串就判定為true
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click(); //name 代表可選的文本

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('heading',async({page})=>{
  await page.goto('http://127.0.0.1:5500/automation_test/playwright/index.html');
  await expect(page.getByRole('heading',{name:'Sign Up'})).toBeVisible();
  await page.getByRole('checkbox',{name:'Subscribe'}).check();
  await page.getByRole('button',{name:/submit/i}).click();
})

test('getByLabel',async({page})=>{
  await page.goto('http://127.0.0.1:5500/automation_test/playwright/index.html')
  await page.getByLabel('Subscribe').fill('secret');
})

test('text selector',async({page})=>{
  await page.goto('http://127.0.0.1:5500/automation_test/playwright/index.html');
  await expect(page.getByText('Welcome, John')).toBeVisible();//匹配文字
  await expect(page.getByText('Welcome, John',{exact:true})).toBeVisible();//精準匹配
  await expect(page.getByText(/welcome, [A-Za-z]+$/i)).toBeVisible();//正則表達式匹配

})
test('getByTitle',async({page})=>{
  await page.goto('http://127.0.0.1:5500/automation_test/playwright/index.html');
  await expect(page.getByTitle('Issues count')).toHaveText('25 issues');
})

test('用文本篩選 使用字符串時 對大小寫不敏感',async({page})=>{
  await page.goto('http://127.0.0.1:5500/automation_test/playwright/index.html');
  await page.getByRole('listitem').filter({hasText:'product 2'}).getByRole('button',{name:'Add ot card 1'}).click();

});

test('用正則表達式 對大小寫敏感',async({page})=>{
  await page.goto('http://127.0.0.1:5500/automation_test/playwright/index.html');
  await page.getByRole('listitem').filter({hasText:/Product2/}).getByRole('button',{name:'Add to card'});
  await page.getByRole('listitem').filter({has:page.getByRole('heading',{name:'Product 2'})}).getByRole('button',{name:'Add to card'}).click();
})
test('嚴格的定位要求',async({page})=>{
  await page.goto('http://127.0.0.1:5500/automation_test/playwright/index.html');
  await page.getByRole('button').click();//假設現在頁面有多個button 那麼下面這個操作就會拋出一個異常
  await page.getByRole('button').nth(1).click();//可以通過選擇第幾個按鈕來操作
  await page.getByRole('button').count();//假如本身是多元素操作 比如計數 那就不會拋錯
})
test('文本輸入',async({page})=>{
  await page.goto('http://127.0.0.1:5500/automation_test/playwright/index.html');
  await page.getByRole('textbox').fill('Peter');
  await expect(page.getByRole('textbox',{name:'example textarea'}))
  await page.getByLabel('i agree to the terms above').check();
  expect(await page.getByLabel('i agree to the terms above').isChecked()).toBeTruthy();
  await page.getByLabel('XL').setChecked(false);
})
test('label 定位器',async({page})=>{
  await page.goto('http://127.0.0.1:5500/automation_test/playwright/index.html')
  await page.getByLabel('Password').fill('secret');//這個就是普通的label標籤定義的文字 通常用於form表單的那些字段
})

test('click 動作',async({page})=>{
  await page.goto('http://127.0.0.1:5500/automation_test/playwright/index.html');
  await page.getByRole('button',{name:'Submit'}).click({button:'right'});//鼠標右鍵點擊
  await page.getByRole('button',{name:'Submit'}).click();//鼠標點擊
  await page.getByRole('button',{name:'Submit'}).dblclick();//鼠標雙擊
  await page.getByRole('button',{name:'Add to card 1'}).click({modifiers:['Shift']});//shift鍵組合鼠標點擊
  await page.getByRole('button',{name:'Add to card 2'}).hover();//鼠標懸停
  await page.getByRole('button',{name:'Add to card 2'}).click({position:{x:0, y:0}})//點擊元素的指定位置
  await page.getByRole('button',{name:'button 1'}).click({force:true})//強制點擊
  await page.getByRole('button',{name:'button 2'}).dispatchEvent('click')//用事件觸發實現click
})

test('字符輸入',async({page})=>{
  await page.goto('http://127.0.0.1:5500/automation_test/playwright/index.html');
  await page.getByPlaceholder('testarea').fill('test')
  
})
test('特殊按鍵',async({page})=>{
  await page.goto('http://127.0.0.1:5500/automation_test/playwright/index.html');
  await page.getByPlaceholder('testarea').press('$');//鍵盤上的$鍵
})

test('文件上傳',async({page})=>{
  await page.goto('http://127.0.0.1:5500/automation_test/playwright/index.html');
  await page.getByLabel('Upload file').setInputFiles('myfile.pdf');//設置當前目錄下的myfile.pdf文件作為上傳文件
  await page.getByLabel('Upload files').setInputFiles(['file1.txt','file2.txt'])//設置多個文件準備上傳
  await page.getByLabel('Upload file').setInputFiles([])//移除上傳文件列表
})//locator.setInputFiles()操作的控件 必須是<input type='file'>元素

test('聚焦元素',async({page})=>{
  await page.goto('http://127.0.0.1:5500/automation_test/playwright/index.html');
  await page.getByLabel('Password').focus();
})

test('拖曳',async({page})=>{
  await page.goto('http://127.0.0.1:5500/automation_test/playwright/index.html');
  await page.locator('#test').dragTo(page.locator('#test'));
  await page.locator('#test').hover();
  await page.mouse.down();
  await page.locator('#test').hover();
  await page.mouse.up();
})
test('處理對話筐',async({page})=>{
  await page.goto('http://127.0.0.1:5500/autmation_test/playwright/index.html');
  page.on('dialog',dialog => dialog.accept());
  await page.getByRole('button').click();
})//默認情況下,playwright會自動取消對話筐 包括：alert , confirm , prompt
test('處理新的彈出頁面',async({page})=>{
  await page.goto('http://127.0.0.1:5500/automation_test/playwright/index.html');
  page.on('popup',async popup =>{
    await popup.waitForLoadState();
    console.log(await popup.title());
  })
})

//async(參數)＝> {函數身體部分}
//async關鍵字表示這個函數是一個異步函數
//page.goto方法：跳轉到對應的網頁 page.goto是一個異步方法 如果不加await 那麼在頁面還沒發生跳轉就會執行後面的語句
//page.getByRole()：頁面元素的定位方法 返回一個頁面元素

//在測試報告中的結果會顯示六個是因為在playwright.config.ts配置了
/*
  project:[
    {
      name:'chromium',
      use:{
        ...devices['Desktop Chorme'],
      }
    },
    {
      name:'firefox',
      use:{
        ...devices['Desktop firefox'],
      }
    },
    {
      name:'webkit',
      use:{
        ...devices['Desktop safair'],
      }
    },
  ]
每個項目都會獨立運行example的兩個測試案例
*/
