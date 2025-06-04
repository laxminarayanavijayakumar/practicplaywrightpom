const{test , expect} = require('@playwright/test');

test('Assertion test', async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/register')

    // 1)expect(page).toHaveURL()  page has Url
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // 2)expect(page).toHaveTitle()  page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // 3)expect(locator).toBe visible()  element is visible or not
    const logoelement = await page.locator('.header-logo')
    await expect(logoelement).toBeVisible();

    // 4)expect(locator).toBeEnable()   element controal is enable or not
    const searchbox = await page.locator('//input[@id="small-searchterms"]')
    await expect(searchbox).toBeEnabled();

    // 5)expect(locator).toBeChecked()    Radio / Checkbox is Clicked or not
    // check box
    const lettercheckbox = await page.locator('//input[@id="Newsletter"]')
    await expect(lettercheckbox).toBeChecked();

    // radio button
    const maleradbutton = await page.locator('#gender-male')
    await maleradbutton.click()
    await expect(maleradbutton).toBeChecked();

    // 6)expect(locator).toHaveAttribute()   Element has attribute
    const registerbutton = await page.locator('#register-button')
    await expect(registerbutton).toHaveAttribute('type','submit')

    // 7)expect(locator).toHaveText()     Element matches text
    await expect(await page.locator('.ico-register')).toHaveText('Register')

    const h1text = await page.locator('.page-title h1')
    await expect(h1text).toHaveText('Register')

    // 8)expect(locator).toContainText()     Element contains text
    await expect(await page.locator('(//ul[@class="top-menu notmobile"]/li/a)[1]')).toContainText('Compu')

    const h2titles =  await page.locator('(//div[@class="title"]/strong)[1]')
    await expect(h2titles).toContainText('Your Perso')

    // 9)expect(locator).toHavevalue(value)      input has a value
    const emailinput = await page.locator('#Email')
    emailinput.fill('test@demo.com');
    await expect(emailinput).toHaveValue('test@demo.com')

    // 10)expect(locator).toHaveCount()     List of elements has given lenght
    const options = await page.locator('#customerCurrency option')
    await expect(options).toHaveCount(2)
})