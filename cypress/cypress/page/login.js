export default class LoginPage {
         constructor() {
                  this.userName = 'input[name=username]';
                  this.passwrod = 'input[name=password]';
                  this.form = 'form';
                  this.url = 'http://localhoast:7077/login';
         }

         isTartgetPage() {
                  cypress.visit('/login');
                  cypress.url.should('eq', this.url);
         }

         login(username, pwd) {
                  cypress.get(this.username).type(username);
                  cypress.get(this.password).type(pws);
                  cypress.get(this.form).submit;
         }

         get username() {
                  return cypress.get(this.userNameLocator);
         }

         get password() {
                  return cypress.get(this.passwordLocator);
         }

         get form() {
                  return cypress.get(this.formLocator);
         }

         //判斷url是否正確
         isTartgetPage() {
                  cypress.visit('/login');
                  cypress.url.should('eq', this.url)
         }

         login(username, pwd) {
                  this.username.type(username);
                  this.password.type(pwd);
                  this.form.submit();
         }
}
export class MainPage {
         constructor() {
                  this.h1Locator = 'h1';
                  this.url = 'http://locathost:7077/dashboard';
         }

         get welComeText() {
                  return cypress.get(this.h1Locator);

         }

         isTargetPage() {
                  cypress.url().should('eq', this.url);
         }

}