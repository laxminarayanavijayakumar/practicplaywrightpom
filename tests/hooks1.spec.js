const{test , expect} = require('@playwright/test');
import dataArray from '../TestData/data.json';

let page;
dataArray.forEach((data)=>{

    test.beforeAll(`Login${data.username}`,async ({browser}) => {

    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/');

    // /login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill(data.username)
    await page.locator('#loginpassword').fill(data.password)
    await page.locator('//button[@onclick="logIn()"]').click()
    
})
})


test('list of product hooks concept', async () => {

    // home page
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)
    
})

test('add product hooks concept', async () => {

    // add product to the cart
    await page.locator('//a[text()="HTC One M9"]').click()

    await page.locator('//a[@onclick="addToCart(7)"]').click()
    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })

})

test.afterAll(async () => {
    // logout
    await page.locator('#logout2').click()
})