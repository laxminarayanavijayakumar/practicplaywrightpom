const{ test , expect} = require('@playwright/test');

test('autosugession dropdown' , async ({page}) => {

    await page.waitForTimeout(3000);
    await page.goto('https://www.redbus.in/')
    
    await page.waitForTimeout(3000);
    await page.locator('//div[text()="From"]').click();
    
    await page.locator('//div[text()="From"]').type('Delhi');
    await page.waitForTimeout(3000);
    await page.waitForSelector('//div[@class="searchCategory___fa2759"]//ancestor::div[@class="listHeader___f8b2c6"]');
    
    const sugesslist1 = await page.$$('//div[@class="searchCategory___fa2759"]//ancestor::div[@class="listHeader___f8b2c6"]');
    for(const li1 of sugesslist1){

        const cityname = await li1.textContent();
        console.log(cityname);
        if(cityname.includes('Dhaula Kuan, Delhi'))
        {
            await li1.click();
            break;
        }

    }    await page.pause();
})

test('allcitylist dropdown' , async ({page}) => {

    await page.goto('https://www.redbus.in/')
    await page.waitForTimeout(2000);
    
    await page.locator('//div[text() = "From"]').click();
    await page.waitForTimeout(2000);
    await page.locator('//div[text() = "From"]').type('Delhi');
    await page.waitForTimeout(2000);
    
    const sugesslist = await page.$$('//div[@class="searchCategory___fa2759"]//ancestor::div[@class="listItem___351e95 hoverHighlight___cfcd8a "]');
    for(const li of sugesslist){

       const citylist =  await li.textContent();
       console.log(citylist);
       if(citylist.includes('ISBT Kashmiri Gate, Delhi')){

        await li.click();
        break;
        
       }
       
    }
    await page.pause();

})