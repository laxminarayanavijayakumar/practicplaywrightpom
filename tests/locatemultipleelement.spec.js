const {test , expect} = require ('@playwright/test')

test.skip('multipleelement', async({page})=>{

    await page.goto('https://www.demoblaze.com/')

    const list = await page.$$('a')   //'//div[@id="tbodyid"]//child::div'

    for(const link of list)
    {
        const links = await link.textContent();
        console.log(links);
    }
})

test('multiple', async({page})=>{

    await page.goto('https://www.demoblaze.com/')

    await page.waitForSelector('//div[@id="tbodyid"]//div//h4/a')

    const products = await page.$$('//div[@id="tbodyid"]//div//h4/a')   //'//div[@id="tbodyid"]//child::div'

    for(const product of products)
    {
        const productname = await product.textContent();
        console.log(productname);
    }
})