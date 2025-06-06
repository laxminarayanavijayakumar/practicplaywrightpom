# Test info

- Name: hidden dropdown select
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\hiddendropdown.spec.js:3:1

# Error details

```
Error: page.click: Unknown engine "class" while parsing selector class="oxd-select-text--after"
Call log:
  - waiting for locator('class="oxd-select-text--after"')

    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\hiddendropdown.spec.js:14:16
```

# Test source

```ts
   1 | const{test , expect} = require('@playwright/test');
   2 |
   3 | test('hidden dropdown select' , async ({page}) => {
   4 |
   5 |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   6 |
   7 |     await page.getByPlaceholder('Username').fill('Admin')
   8 |     await page.getByPlaceholder('Password').fill('admin123')
   9 |
  10 |     await page.waitForTimeout(3000);
  11 |     await page.click('//button[@type="submit"]')
  12 |     await page.click('//span[text()="PIM"]')
  13 |
> 14 |     await page.click('class="oxd-select-text--after"')
     |                ^ Error: page.click: Unknown engine "class" while parsing selector class="oxd-select-text--after"
  15 |     await page.waitForSelector('//div[@role="listbox"]')
  16 |
  17 |     const listofjobs = await page.$$('//div[@role="listbox"]')
  18 |     for(const list of listofjobs){
  19 |
  20 |         const jobtitles = await list.textContent();
  21 |         console.log(jobtitles);
  22 |     }
  23 |     await page.pause();
  24 |     
  25 | })
```