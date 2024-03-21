import {expect, Locator , Page }from '@playwright/test';

class IndexPage{
         readonly page: Page;
         readonly login_link: Locator;
         readonly hi_account_p:Locator;

         constructor(page:Page){
                  this.page = page;
                  this.login_link = page.getByRole('link',{name:'你好 請登陸'});
                  this.hi_account_p = page.getByRole('paragraph',{name:"Hi"});
         }

         async to_login(){
                  await this.login_link.click();
                  await expect(this.page).toHaveTitle('京東-歡迎登陸');
         }

         async is_logged_in(){
                  await expect(this.hi_account_p).toBeVisible();
         }
}

export default IndexPage;
