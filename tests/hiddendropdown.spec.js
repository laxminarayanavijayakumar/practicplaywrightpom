const{test , expect} = require('@playwright/test');

test('hidden dropdown select' , async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    await page.click('//button[@type="submit"]')
    await page.click('//span[text()="PIM"]')

    await page.click('(//div[@class="oxd-select-text--after"])[3]')
    // await page.waitForTimeout(3000);
    await page.waitForSelector('//div[@role="listbox"]//span')

    const listofjobs = await page.$$('//div[@role="listbox"]//span')
    for(const list of listofjobs){

        const jobtitles = await list.textContent();
        console.log(jobtitles);
        if(jobtitles.includes('Test')){
            await list.click();
            break;
        }
    }
    await page.pause();
    
})