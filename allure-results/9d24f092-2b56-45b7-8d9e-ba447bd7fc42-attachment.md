# Test info

- Name: test
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\mytest.spec.js:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Log in' })

    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\mytest.spec.js:10:54
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('test', async ({ page }) => {
   4 |   await page.goto('https://www.demoblaze.com/');
   5 |   await page.getByRole('link', { name: 'Log in' }).click();
   6 |   
   7 |   await page.locator('#loginusername').fill('pavanol');
   8 |  
   9 |   await page.locator('#loginpassword').fill('test@123');
> 10 |   await page.getByRole('button', { name: 'Log in' }).click();
     |                                                      ^ Error: locator.click: Target page, context or browser has been closed
  11 |   await page.getByRole('link', { name: 'Log out' }).click();
  12 | });
```