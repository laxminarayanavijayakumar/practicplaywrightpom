const {test , expect} = require('@playwright/test')

test('location builtin',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();

    await page.locator('//input[@name="username"]').type('Admin')
    await page.locator('//input[@name="password"]').type('admin123')

    await page.getByRole('button', {type: 'submit'}).click();

    await expect(await page.getByText('manda user')).toBeVisible();

    // await page.click('//button[@type="submit"]')


})