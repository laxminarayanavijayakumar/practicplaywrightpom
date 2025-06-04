const {test , expect} = require('@playwright/test')

test('input radio & check button',async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Input box - firstname
    await expect.soft(await page.locator('#name')).toBeVisible();
    await expect.soft(await page.locator('#name')).toBeEmpty();
    await expect.soft(await page.locator('#name')).toBeEditable();
    await expect.soft(await page.locator('#name')).toBeEnabled();
    await page.locator('#name').fill('john')

    await page.waitForTimeout(5000);
    
})