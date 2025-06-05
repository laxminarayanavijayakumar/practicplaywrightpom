exports.Loginpage = class Loginpage {

    constructor(page){
        this.page = page;
        this.loginlink = '//a[@data-target="#logInModal"]';
        this.usernameinput = '//input[@id="loginusername"]';
        this.passwordinput = '//input[@id="loginpassword"]';
        this.loginbutton = '//button[@onclick="logIn()"]';
    }

    async gotopage(){
        
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async logindtl(username , password) {

        await this.page.locator(this.loginlink).click();
        await this.page.fill(this.usernameinput , username);
        await this.page.fill(this.passwordinput , password);
        await this.page.locator(this.loginbutton).click();
    }
}