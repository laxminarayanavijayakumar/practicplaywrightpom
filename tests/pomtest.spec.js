const {test , expect} = require('@playwright/test');
import { CartPage } from '../pages/Cartpage';
import { Homepage } from '../pages/Homepage';
import { Loginpage } from '../pages/Loginpage';

test("pom login", async ({page}) => {

    // Login
    const login = new Loginpage(page);
    // const { username, password } = datas;
    await login.gotopage();
    await login.logindtl('pavanol' , 'test@123')
    

    // Home 
    const home = new Homepage(page);
    await page.waitForTimeout(3000);
    await home.addproducttocart('HTC One M9');
    await page.waitForTimeout(2000);
    await home.gotocart();

    // Cart
    const cart = new CartPage(page);
    await page.waitForTimeout(3000);
    const ststus  = await cart.checkproductincart('HTC One M9');
    expect(await ststus).toBe(true);
    // await page.waitForTimeout(5000);
})