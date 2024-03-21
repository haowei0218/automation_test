import {Locator, Page} from '@playwright/test';

class LoginPage{
         readonly page: Page;
         readonly account_login_link:Locator;
         readonly username_input:Locator;
         readonly password_input:Locator;
         readonly login_link:Locator;

         constructor(page:Page){
                  this.page = page;
                  this.account_login_link = page.getByRole('link',{name:"帳戶登錄"});
                  this.username_input = page.getByPlaceholder('郵箱/帳號名/登陸手機');
                  this.password_input = page.getByPlaceholder('密碼');
                  this.login_link = page.getByRole('link',{name:/登.+錄/});
         }

         async do_login_with_account(username:string,password:string){
                  await this.page.waitForLoadState('networkidle');
                  await this.account_login_link.click();
                  await this.username_input.fill(username);
                  await this.password_input.type(password);
                  await this.login_link.click();
         }
}
export default LoginPage;