import {test , expect, chromium} from '@playwright/test';

test('handle pages', async () => {

    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    const page2 = await context.newPage()

    const allpages = context.pages()
    console.log('no of pages created:',allpages.length)

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page1.waitForTimeout(3000);
    await expect(page1).toHaveTitle('OrangeHRM')

    await page2.goto('https://www.orangehrm.com/')
    await page1.waitForTimeout(3000);
   await expect(page2 ).toHaveTitle('Human Resources Management Software | OrangeHRM HR Software ')
    
})


test.only('multiple handle pages', async () => {

    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page1.waitForTimeout(3000);
    await expect(page1).toHaveTitle('OrangeHRM')

    const performpage = context.waitForEvent('page')
    await page1.locator('//a[text()="OrangeHRM, Inc"]').click();

    const newpage = await performpage
    await expect(newpage).toHaveTitle('Human Resources Management Software | OrangeHRM HR Software ')
    
})