import { test , expect } from '@playwright/test';

test('config screenshot', async ({page}) => {

    await page.goto('https://www.demoblaze.com/index.html')

    // /login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[@onclick="logIn()"]').click()

    const productlists = await page.$$('//a[@class="hrefch"]');

        for(const products of productlists){
            
            console.log(await products.textContent());
            await page.waitForTimeout(5000);
            if ('Iphone 6 32gb' === await products.textContent()) {
                await products.click();
                break;
                
            }
        }

        await page.on('dialog', async dialog=>{
            expect(dialog.type()).toContain('alert')
            expect(dialog.message()).toContain('I am an alert box!')
            if (dialog.message().inclides('Product added.')) {
                await dialog.accept();
            }
        })

        await page.locator('//a[@class="btn btn-success btn-lg"]').click();
})