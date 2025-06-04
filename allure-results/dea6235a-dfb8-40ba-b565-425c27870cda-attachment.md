# Test info

- Name: allcitylist dropdown
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\autosugessdropdown.spec.js:20:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//div[text()="From"]')

    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\autosugessdropdown.spec.js:24:48
```

# Test source

```ts
   1 | const{ test , expect} = require('@playwright/test')
   2 |
   3 | test.skip('autosugession dropdown' , async ({page}) => {
   4 |
   5 |     await page.goto('https://www.redbus.in/')
   6 |
   7 |     await page.locator('//div[text()="From"]').click();
   8 |     await page.waitForTimeout(3000);
   9 |     await page.locator('//div[text()="From"]').type('Delhi');
  10 |     
  11 |     const sugesslist1 = await page.$$('//div[@class="searchCategory___a6b68d"]//ancestor::div[@class="listItem___14c6c2 hoverHighlight___7a1f0c "]//div[@class="leftContent___712019"]');
  12 |     for(const li1 of sugesslist1){
  13 |
  14 |         await page.waitForTimeout(2000);
  15 |         console.log(await li1.textContent());
  16 |
  17 |     }    
  18 | })
  19 |
  20 | test('allcitylist dropdown' , async ({page}) => {
  21 |
  22 |     await page.goto('https://www.redbus.in/')
  23 |     
> 24 |     await page.locator('//div[text()="From"]').click();
     |                                                ^ Error: locator.click: Target page, context or browser has been closed
  25 |     await page.waitForTimeout(3000);
  26 |     await page.locator('//div[text()="From"]').type('Delhi');
  27 |     
  28 |     const sugesslist = await page.$$('//div[@class="searchCategory___fa2759"]//ancestor::div[@class="listItem___351e95 hoverHighlight___cfcd8a "]');
  29 |     for(const li of sugesslist){
  30 |
  31 |        const citylist =  await li.textContent();
  32 |        await expect(citylist).toHavecount(20);
  33 |        console.log(citylist);
  34 |        
  35 |     }
  36 |     await page.pause();
  37 |
  38 | })
```