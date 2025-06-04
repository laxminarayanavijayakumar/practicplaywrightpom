const{test , expect} = require('@playwright/test');
const { table } = require('console');

test('handiling web table', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const paginatable = await page.locator('#productTable')

    // total numbers of rows and columens
    const columns = await paginatable.locator('thead tr th')
    console.log('number of columns:',await columns.count())
    expect(await columns.count()).toBe(4)

    const rows = await paginatable.locator('tbody tr')
    console.log('number of rows:',await rows.count())
    expect(await rows.count()).toBe(5)

    // to select perticular check box
    const clickproduct = rows.filter({
        has: page.locator('td'),
        hasText: 'Tablet '
    })
    await clickproduct.locator('//input[@type="checkbox"]').check()

    await selectproduct(rows, page, 'Wireless Earbuds')
    await selectproduct(rows, page, 'Smartphone')

    // print all product detials in the table
    for (let i = 0; i < await rows.count(); i++) {
        const rw = rows.nth(i);
        const tds = rw.locator('td')

        for (let j = 0; j < await tds.count()-1; j++) {

            console.log(await tds.nth(j).textContent());
        }
        
    }
    console.log('----------------------------------------------------------------------------------------')

    // read the data form all pages in webtable
    const pages = await page.locator('//ul[@class="pagination"]//li//a')
    const pgcount = await pages.count()
    console.log('number of pages in the web table:',pgcount);

    for(let p = 0; p < await pages.count(); p++) {
        if (p>0) {
            await pages.nth(p).click();
        }
        for (let i = 0; i < await rows.count(); i++) {
        const rw = rows.nth(i);
        const tds = rw.locator('td')

        for (let j = 0; j < await tds.count()-1; j++) {

            console.log(await tds.nth(j).textContent());
        }
        
    }
     await page.waitForTimeout(3000);   
    }
    await page.waitForTimeout(5000);
})

// select multiple product by re-usable function
    async function selectproduct(rows, page, name){
        const clkprduct = rows.filter({
            has: page.locator('td'),
            hasText: name
        })
        await clkprduct.locator('//input[@type="checkbox"]').check()
    }