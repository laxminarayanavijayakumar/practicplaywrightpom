# Test info

- Name: location builtin
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\locator_builtin.spec.js:3:1

# Error details

```
Error: expect(locator).toBeVisible()

Locator: getByText('manda user')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByText('manda user')

    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\locator_builtin.spec.js:15:54
```

# Test source

```ts
   1 | const {test , expect} = require('@playwright/test')
   2 |
   3 | test('location builtin',async({page})=>{
   4 |
   5 |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   6 |
   7 |     const logo = await page.getByAltText('company-branding')
   8 |     await expect(logo).toBeVisible();
   9 |
  10 |     await page.locator('//input[@name="username"]').type('Admin')
  11 |     await page.locator('//input[@name="password"]').type('admin123')
  12 |
  13 |     await page.getByRole('button', {type: 'submit'}).click();
  14 |
> 15 |     await expect(await page.getByText('manda user')).toBeVisible();
     |                                                      ^ Error: expect(locator).toBeVisible()
  16 |
  17 |     // await page.click('//button[@type="submit"]')
  18 |
  19 |
  20 | })
```