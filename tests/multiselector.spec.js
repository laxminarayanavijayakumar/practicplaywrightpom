const {test , expect} = require('@playwright/test')

test('multiple selection',async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // select multiple options from multi select dropdown
    await page.selectOption('#colors' , ['Red' , 'Yellow' , 'Green'])

    // Assertion
    // check number of options in dropdown
    const seletopt = await page.locator('#colors option')
    await expect(seletopt).toHaveCount(7);

    // 2) check number of options in dropdown using js array
    const opts = await page.$$('#colors option')
    console.log('Number of Opetions' , opts.length);
    await expect(opts.length).toBe(7);

    // 3) check presence of value in the dropdown
    const contin  = await page.locator('#colors').textContent()
    await expect(contin.includes('Blue')).toBeTruthy();
    await expect(contin.includes('Black')).toBeFalsy();

    
    await page.waitForTimeout(3000);


    
})