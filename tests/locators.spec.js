import {test , expect} from '@playwright/test';

test('locator', async ({page})=>{

    await page.goto('https://www.demoblaze.com/')

    await page.click('//a[@id="login2"]')

    await page.fill('//input[@id="loginusername"]',"pavanol")
    await page.fill('//input[@id="loginpassword"]',"test@123")

    await page.click('//button[@onclick="logIn()"]')

    const logoutbutton = await page.locator('//a[@onclick="logOut()"]')
    await expect(logoutbutton).toBeVisible();

    await page.clock()

})