const {test , expect} = require('@playwright/test');
import { CartPage } from '../pages/Cartpage';
import { Homepage } from '../pages/Homepage';
import { Loginpage } from '../pages/Loginpage';

test("pom login", async ({page}) => {

    // Login
    const login = new Loginpage(page);
    // const { username, password } = datas;
    await login.gotopage();
    await login.logindtl('pavanol','test@123');
    await page.waitForTimeout(2000);

    // Home 
    const home = new Homepage(page);
    await home.addproducttocart('Sony xperia z5');
    await page.waitForTimeout(3000);
    await home.gotocart();

    // Cart
    const cart = new CartPage(page);
    await page.waitForTimeout(3000);
    const ststus  = await cart.checkproductincart('Sony xperia z5');
    expect(await ststus).toBe(true);
    // await page.waitForTimeout(5000);
})