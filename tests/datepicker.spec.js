const{test , expect} = require('@playwright/test');

test.skip('date picker 1', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.locator('#datepicker').fill('09/21/2025');

    // date picker
    const year = '2022'
    const month = 'July'
    const date = '21'

    await page.click('#datepicker')
    while (true) {
        const currentyear = await page.locator('//span[@class="ui-datepicker-year"]').textContent();
        const currentmonth = await page.locator('//span[@class="ui-datepicker-month"]').textContent();
        
        if (currentyear == year && currentmonth == month) {
            break;
        }
        await page.click('//a[@title="Prev"]')
        // await page.locator('//a[@title="Next"]').click();
    }

    // date selection using loops
    // const dates = await page.$$('//table[@class="ui-datepicker-calendar"]//tr//td//a')
    // for(const dt of dates){
    //     if (await dt.textContent() == date){
    //         await dt.click();
    //         break;
    //     }
    // }

    // not using loop and condition
    await page.locator(`//table[@class="ui-datepicker-calendar"]//td//a[text()="${date}"]`).click();

    await page.waitForTimeout(10000);

})

test.skip('date picker 2', async ({page}) => {

     await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.locator('#datepicker').fill('09/21/2025');

    // date picker
    const date = '21'

    await page.click('#txtDate');

    await page.locator('//select[@class="ui-datepicker-month"]').selectOption({index:9})

    await page.locator('//select[@class="ui-datepicker-year"]').selectOption({value:"2026"})

    await page.locator(`//table[@class="ui-datepicker-calendar"]//td//a[text()="${date}"]`).click();

    await page.waitForTimeout(5000);
    
})

test.skip('date picker 3', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.getByPlaceholder('Start Date').type('21-09-1996')
    await page.getByPlaceholder('End Date').type('21-09-2026')
    await page.click('//button[@onclick="calculateRange()"]')

    const result = await page.locator('#result').textContent()
    console.log('range date picket:',result)

    await page.waitForTimeout(5000);

    
})

test('date picker print in terminal', async ({page}) => {

    await page.goto('https://www.globalsqa.com/demo-site/datepicker/')
    await page.waitForTimeout(2000);

    const frame = await page.frameLocator('.class="demo-frame lazyloaded"')
    
    await frame.locator('#datepicker').click()

    const date = new Date();
    console.log(date);

    const currentdate = date.getDate();
    console.log(currentdate);
    
    await frame.locator(`text()="${currentdate}"`)

    await page.waitForTimeout(5000);
})