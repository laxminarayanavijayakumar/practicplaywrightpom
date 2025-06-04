# Test info

- Name: Assertion test
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\assercion.spec.js:3:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)

Locator: locator(':root')
Expected string: "nopCommerce demo store. Register"
Received string: "Just a moment..."
Call log:
  - expect.toHaveTitle with timeout 5000ms
  - waiting for locator(':root')
    9 × locator resolved to <html dir="ltr" lang="en-US">…</html>
      - unexpected value "Just a moment..."

    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\assercion.spec.js:13:24
```

# Page snapshot

```yaml
- main:
  - heading "Icon for demo.nopcommerce.comdemo.nopcommerce.com" [level=1]:
    - img "Icon for demo.nopcommerce.com"
    - text: demo.nopcommerce.com
  - paragraph: Verify you are human by completing the action below.
  - text: demo.nopcommerce.com needs to review the security of your connection before proceeding.
- contentinfo:
  - text: "Ray ID:"
  - code: 93c24f238c3ffd7c
  - text: Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
```

# Test source

```ts
   1 | const{test , expect} = require('@playwright/test');
   2 |
   3 | test('Assertion test', async ({page}) => {
   4 |
   5 |     await page.goto('https://demo.nopcommerce.com/register')
   6 |
   7 |     // expect(page).toHaveURL()  page has Url
   8 |
   9 |     await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
  10 |
  11 |     // expect(page).toHaveTitle()  page has title
  12 |     await page.waitForTimeout(3000)
> 13 |     await expect(page).toHaveTitle('nopCommerce demo store. Register')
     |                        ^ Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)
  14 |
  15 |
  16 |     
  17 | })
```