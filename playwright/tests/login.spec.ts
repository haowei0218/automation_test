import {test} from '@playwright/test';
import IndexPage from "../page/login.spec";
import LoginPage from "../page/login.page";

test('login with account',async({page})=>{
         await page.goto('https://www.jd.com');
         const indexPage = new IndexPage(page);
         await indexPage.to_login();
         const loginPage = new LoginPage(page);
         await loginPage.do_login_with_account('user','pass');
         await indexPage.is_logged_in();

})