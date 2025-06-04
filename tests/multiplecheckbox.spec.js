const {test , expect} = require('@playwright/test')

test('handle checkbox',async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#sunday').click();
    await expect(await page.locator('#sunday')).toBeChecked();
    await expect(await page.locator('#sunday').isChecked()).toBeTruthy();
    await expect(await page.locator('#tuesday').isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);

    await page.locator('#sunday').uncheck();

    await page.waitForTimeout(5000);

    // Multiple checkbox
    const chboxelocator = ['#monday','#wednesday','#friday'];

    for(const locators of chboxelocator)
    {
        await page.locator(locators).check();
    }

    await page.waitForTimeout(5000);

    // Multiple uncheckbox
      for(const locators of chboxelocator)
    {
        if(await page.locator(locators).isChecked())
        {
            await page.locator(locators).uncheck();
        }
        
    }
    
    await page.waitForTimeout(5000);
})