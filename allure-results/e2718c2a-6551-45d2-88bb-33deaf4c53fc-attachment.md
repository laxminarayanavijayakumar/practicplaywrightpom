# Test info

- Name: login
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\record.spec.js:3:1

# Error details

```
Error: expect(locator).toHaveText(expected)

Locator: locator('//p[@class="has-text-align-center"]//strong')
Expected string: "Your password is invalid!"
Received: <element(s) not found>
Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for locator('//p[@class="has-text-align-center"]//strong')

    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\record.spec.js:12:79
```

# Test source

```ts
   1 | const{test , expect} = require('@playwright/test');
   2 |
   3 | test("login", async ({page}) => {
   4 |
   5 |     await page.goto('https://practicetestautomation.com/practice-test-login/')
   6 |     await page.waitForTimeout(2000);
   7 |
   8 |     await page.locator('//input[@name="username"]').type('student');
   9 |     await page.locator('//input[@name="password"]').type('Password1234');
  10 |     expect(await page.locator('//button[@class="btn"]')).toBeVisible()
  11 |     await page.locator('//button[@class="btn"]').click();
> 12 |     expect(await page.locator('//p[@class="has-text-align-center"]//strong')).toHaveText('Your password is invalid!')
     |                                                                               ^ Error: expect(locator).toHaveText(expected)
  13 |     await page.waitForTimeout(3000);
  14 |     
  15 | })
```