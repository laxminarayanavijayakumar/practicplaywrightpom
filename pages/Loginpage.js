exports.Loginpage = class Loginpage {

    constructor(page){
        this.page = page;
        this.loginlink = '#login2';
        this.usernameinput = '#loginusername';
        this.passwordinput = '#loginpassword';
        this.loginbutton = '//button[@onclick="logIn()"]';
    }

    async gotopage(){
        
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async logindtl(username , password) {

        await this.page.locator(this.loginlink).click();
        await this.page.type(this.usernameinput , username);
        await this.page.type(this.passwordinput , password);
        await this.page.locator(this.loginbutton).click();
    }
}