import {test , expect} from '@playwright/test';

test('test login', async ({page}) => {
    
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.waitForTimeout(2000);

    await page.locator('//input[@name="username"]').type('student');
    await page.locator('//input[@name="password"]').type('Password123');
    expect(await page.locator('//button[@class="btn"]')).toBeVisible()
    await page.click('//button[@class="btn"]')
    expect(await page.locator('//p[@class="has-text-align-center"]//strong')).toHaveText('Congratulations student. You successfully logged in!')
    expect(await page.locator('//h1[@class="post-title"]')).toContainText('Logged In Successfully')
    expect(await page.locator('//a[contains(@class,"has-very-dark-gray-background-color")]')).toBeVisible()
    await page.click('//a[contains(@class,"gray-background-color")]')
    await page.waitForTimeout(3000);
})