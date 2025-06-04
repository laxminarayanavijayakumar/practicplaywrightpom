# Test info

- Name: video record
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\record.spec.js:3:5

# Error details

```
Error: expect(locator).toBeVisible()

Locator: locator('#logout2')
Expected: visible
Received: hidden
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('#logout2')
    4 × locator resolved to <a href="#" id="logout2" class="nav-link" onclick="logOut()">Log out</a>
      - unexpected value "hidden"

    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\record.spec.js:13:44
```

# Test source

```ts
   1 | import{test , expect} from '@playwright/test';
   2 |
   3 | test('video record', async ({page}) => {
   4 |
   5 |     await page.goto('https://www.demoblaze.com/index.html')
   6 |
   7 |     // /login
   8 |     await page.locator('#login2').click()
   9 |     await page.locator('#loginusername').fill('pavanol')
  10 |     await page.locator('#loginpassword').fill('test@123')
  11 |     expect(await page.locator('//button[@onclick="logIn()"]')).toBeVisible()
  12 |     await page.locator('//button[@onclick="logIn()"]').click()
> 13 |     expect(await page.locator('#logout2')).toBeVisible()
     |                                            ^ Error: expect(locator).toBeVisible()
  14 |     
  15 | })
```