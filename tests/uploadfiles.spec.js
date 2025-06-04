const {test , expect} = require ('@playwright/test');

test('single file upload', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.waitForSelector('//input[@id="singleFileInput"]')
    await page.click('//input[@id="singleFileInput"]')
    await page.waitForTimeout(5000);

    await page.locator('#singleFileInput').setInputFiles('tests/uploadfiles/testfile1.pdf')

    await page.locator('(//button[@type="submit"])[1]').click()

    await page.waitForTimeout(10000);
    
})

test.only('multiple files upload', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.click('//input[@id="multipleFilesInput"]')

    await page.locator('#multipleFilesInput').setInputFiles(['tests/uploadfiles/testfile1.pdf','tests/uploadfiles/testfile2.pdf'])

    await page.waitForTimeout(5000);

    await page.locator('#multipleFilesInput').setInputFiles([])

    await page.waitForTimeout(5000);
})