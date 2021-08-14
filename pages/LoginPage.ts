import { Page } from "playwright"

export default class loginPage  {

    private page : Page;

    constructor(page: Page){
        this.page = page;
    }

    //Page locators 
    emailTextField = async() => await this.page.$("input[name='email']");
    passwordField = async() => await this.page.$("input[name='password']");
    loginBtn = async() => await this.page.$("//div[@class='login_container']//button[@type='submit']");

    //Actions 
    private async enterUserName(name : string){
        const ele = await this.emailTextField();
        ele?.fill(name);
    }

    private async enterPassword(password : string){
         const passField = await this.passwordField();
         passField?.fill(password)
    }

    private async clickLogin(){
        const loginBtn = await this.loginBtn();
        loginBtn?.click();
    }

    public async Dologin(username: string, pass: string) {
        await this.enterUserName(username);
        await this.enterPassword(pass);
        await this.clickLogin();
    }

}