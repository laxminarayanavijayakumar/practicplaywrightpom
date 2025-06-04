const{test , expect} = require('@playwright/test')

test('list to select',async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // 5) select option from dropdown using looping ststement
    const optn = await page.$$('#country option')
    for(const opi of optn)
    {
        let data = await opi.textContent();
        if(data.includes('Brazil'))
        {
            await page.selectOption("#country", opi);
            // await page.waitForTimeout(3000);
            break;
        }

    }
    await page.waitForTimeout(1000);
    
})

test('handle dropdown' , async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Multiple ways to select option from the dropdown
    await page.locator('#country').selectOption({label:'Japan'})

    await page.waitForTimeout(1000);

    await page.locator('#country').selectOption({value:'india'})

    await page.waitForTimeout(1000);

    await page.locator('#country').selectOption('Canada')

    await page.waitForTimeout(1000);

    await page.locator('#country').selectOption({index: 0})
    
    await page.waitForTimeout(1000);

    await page.selectOption('#country',{value:'germany'})
    
    await page.waitForTimeout(1000);

    // Assertions in dropdown
    // 1) check number of options in dropdown - Aproach1
    const option = await page.locator('#country option')
    await expect(option).toHaveCount(10);
    await page.waitForTimeout(1000);

    // 2) check number of options in dropdown - Aproach2 using list
    const allopt = await page.$$('#country option')
    await expect(allopt.length).toBe(10)
    console.log('number of options',allopt.length)
    await page.waitForTimeout(1000);

    // 3) check presence of value in the dropdown - Approach1
    const content = await page.locator('#country').textContent()
    await expect(content.includes('France')).toBeTruthy();
    await page.waitForTimeout(1000);

    // 4) check presence of value in the dropdown - Approach 2 - using looping
    const optin = await page.$$('#country option')
    let status = false;
    for(const op of optin)
    {
        console.log(await op.textContent())
        let values = await op.textContent()
        if(values.includes('China'))
        {
            status = true;
            break;
        }
        
    }
    expect.soft(status).toBeTruthy();
    await page.waitForTimeout(1000);

    
    
})