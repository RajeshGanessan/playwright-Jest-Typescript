import { Page } from "playwright";

export default class CommonFunctions{

    private page : Page;
    constructor(page : Page){
        this.page = page;
    }

   isElementVisible = async () => await this.page.$("//div[contains(text(),'Granted successfully')]")
}