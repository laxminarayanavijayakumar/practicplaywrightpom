# Test info

- Name: soft assertion
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\softassertion.spec.js:3:1

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.demoblaze.com/", waiting until "load"

    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\softassertion.spec.js:5:16
```

# Test source

```ts
   1 | const {test , expect} = require('@playwright/test')
   2 |
   3 | test('soft assertion',async ({page}) => {
   4 |
>  5 |     await page.goto('https://www.demoblaze.com/')
     |                ^ Error: page.goto: Target page, context or browser has been closed
   6 |
   7 |     // Hard Assertions its terminate your execution script
   8 |     // await expect(page).toHaveTitle('STORE1');
   9 |     // await expect(page).toHaveURL('https://www.demoblaze.com/')
  10 |     // await expect(page.locator('#nava')).toBeVisible();
  11 |
  12 |      // Soft Assertions
  13 |      await expect.soft(page).toHaveTitle('STORE1');
  14 |      await expect.soft(page).toHaveURL('https://www.demoblaze.com/')
  15 |      await expect.soft(page.locator('#nava')).toBeVisible();
  16 |     
  17 | })
```