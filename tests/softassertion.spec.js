const {test , expect} = require('@playwright/test')

test('soft assertion',async ({page}) => {

    await page.goto('https://www.demoblaze.com/')

    // Hard Assertions its terminate your execution script
    // await expect(page).toHaveTitle('STORE1');
    // await expect(page).toHaveURL('https://www.demoblaze.com/')
    // await expect(page.locator('#nava')).toBeVisible();

     // Soft Assertions
     await expect.soft(page).toHaveTitle('STORE1');
     await expect.soft(page).toHaveURL('https://www.demoblaze.com/')
     await expect.soft(page.locator('#nava')).toBeVisible();
    
})