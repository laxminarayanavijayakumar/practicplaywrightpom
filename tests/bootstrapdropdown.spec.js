const {test , expect} = require('@playwright/test')

test('bootstrap dropdown' , async ({page}) => {

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

    await page.locator('//button[@data-toggle="dropdown"]').click();
    // 1
    const opt = await page.locator('//ul[@class="multiselect-container dropdown-menu"]//li//label//input')
    await expect(opt).toHaveCount(11);

    // 2
    const ops = await page.$$('//ul[@class="multiselect-container dropdown-menu"]//li//label//input')
    await expect(ops.length).toBe(11);

    // select multiple options
    const op = await page.$$('//ul[@class="multiselect-container dropdown-menu"]//li//label')
    for(let val of op)
    {
        const dta = await val.innerText();
        console.log('value is',dta);
        if(dta.includes('Angular') || dta.includes('Python'))
        {
            await val.click();
        }
    }
    await expect(opt).toHaveCount(11);

    // decelect
     const opp = await page.$$('//ul[@class="multiselect-container dropdown-menu"]//li//label')
    for(let vale of opp)
    {
        const dts = await vale.innerText();
        if(dts.includes('HTM') || dts.includes('CSS'))
        {
            await vale.click();
        }
    }

    await page.waitForTimeout(3000);
    
})