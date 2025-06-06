# Test info

- Name: handle dropdown
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\dropdown.spec.js:3:1

# Error details

```
Error: page.selectOption: Target page, context or browser has been closed
Call log:
  - waiting for locator('#country')
    - locator resolved to <select id="country" class="form-control">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    29 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms

    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\dropdown.spec.js:17:24
```

# Test source

```ts
   1 | const{test , expect} = require('@playwright/test')
   2 |
   3 | test('handle dropdown' , async ({page}) => {
   4 |
   5 |     await page.goto('https://testautomationpractice.blogspot.com/')
   6 |
   7 |     // 5) select option from dropdown using looping ststement
   8 |     await page.waitForTimeout(5000);
   9 |     const opt = await page.$$('#country option')
  10 |     // await page.waitForTimeout(5000);
  11 |     for(const ops of opt)
  12 |     {
  13 |         let val = await ops.textContent()
  14 |         
  15 |         if(val.includes('Brazil'))
  16 |         {
> 17 |             await page.selectOption('#country' , val);
     |                        ^ Error: page.selectOption: Target page, context or browser has been closed
  18 |             break;
  19 |         }
  20 |         
  21 |     }
  22 |     await page.waitForTimeout(1000);
  23 |
  24 |     // Multiple ways to select option from the dropdown
  25 |     await page.locator('#country').selectOption({label:'Japan'})
  26 |
  27 |     await page.waitForTimeout(1000);
  28 |
  29 |     await page.locator('#country').selectOption({value:'india'})
  30 |
  31 |     await page.waitForTimeout(1000);
  32 |
  33 |     await page.locator('#country').selectOption('Canada')
  34 |
  35 |     await page.waitForTimeout(1000);
  36 |
  37 |     await page.locator('#country').selectOption({index: 0})
  38 |     
  39 |     await page.waitForTimeout(1000);
  40 |
  41 |     await page.selectOption('#country',{value:'germany'})
  42 |     
  43 |     await page.waitForTimeout(1000);
  44 |
  45 |     // Assertions in dropdown
  46 |     // 1) check number of options in dropdown - Aproach1
  47 |     const option = await page.locator('#country option')
  48 |     await expect(option).toHaveCount(10);
  49 |     await page.waitForTimeout(1000);
  50 |
  51 |     // 2) check number of options in dropdown - Aproach2 using list
  52 |     const allopt = await page.$$('#country option')
  53 |     await expect(allopt.length).toBe(10)
  54 |     console.log('number of options',allopt.length)
  55 |     await page.waitForTimeout(1000);
  56 |
  57 |     // 3) check presence of value in the dropdown - Approach1
  58 |     const content = await page.locator('#country').textContent()
  59 |     await expect(content.includes('France')).toBeTruthy();
  60 |     await page.waitForTimeout(1000);
  61 |
  62 |     // 4) check presence of value in the dropdown - Approach 2 - using looping
  63 |     const optin = await page.$$('#country option')
  64 |     let status = false;
  65 |     for(const op of optin)
  66 |     {
  67 |         console.log(await op.textContent())
  68 |         let values = await op.textContent()
  69 |         if(values.includes('China'))
  70 |         {
  71 |             status = true;
  72 |             break;
  73 |         }
  74 |         
  75 |     }
  76 |     expect.soft(status).toBeTruthy();
  77 |     await page.waitForTimeout(1000);
  78 |
  79 |     
  80 |     
  81 | })
```