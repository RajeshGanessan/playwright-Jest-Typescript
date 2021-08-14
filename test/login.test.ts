import { Browser, BrowserContext, chromium, Page } from "playwright";
import Env from "../Utils/Configs/Environments";
import LoginPage from "../pages/LoginPage";
import * as creds from "../Utils/TestData/UserCreds.json";

declare const page : Page;

describe('LoginPage Tests' ,() => {

    //pages
    let loginpage : LoginPage;

    beforeAll(async () => {
        await page.goto(Env.staging2);
        loginpage = new LoginPage(page);
    })

    test('Logging in as Admin',async () => {
    
    await loginpage.Dologin(creds.email,creds.password);
    await page.waitForSelector('text=ESOP Management');
    expect(page.url()).toBe('https://staging2.mystartupequity.com/esop/dashboard');
    
    })

    // test('logging with incorrect creds',async() => {
    //    await loginpage.Dologin(creds.email,creds.password);
    // })

    afterAll(async() => {
        page.close();
        browser.close();
    })

}) 