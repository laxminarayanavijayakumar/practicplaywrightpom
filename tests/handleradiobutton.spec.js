const{test , expect} = require('@playwright/test')

test('handle radio buttons',async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#male').check();
    const checkbox = await page.locator('#male')
    await expect(checkbox).toBeChecked();
    await expect(checkbox.isChecked()).toBeTruthy();
    
    await page.waitForTimeout(5000);

    await expect(await page.locator('#female').isChecked()).toBeFalsy();
    
})