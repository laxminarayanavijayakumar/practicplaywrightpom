const{test , expect} = require('@playwright/test');

let page;

test.beforeAll(async ({browser}) => {

    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/');

    // /login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[@onclick="logIn()"]').click()
    
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