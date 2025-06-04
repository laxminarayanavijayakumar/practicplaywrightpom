const{test , expect} = require('@playwright/test');

test('keyboard actions', async ({page}) => {

    await page.goto('https://gotranscript.com/text-compare')

    await page.locator('//textarea[@name="text1"]').type('welcome to automation')
    // ctrl A
    await page.keyboard.press('Control+A')

    // ctrl c
    await page.keyboard.press('Control+C')

    // tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    // ctrl v
    await page.keyboard.press('Control+V')
    // await page.locator('//textarea[@name="text2"]')

    await page.waitForTimeout(5000);
})