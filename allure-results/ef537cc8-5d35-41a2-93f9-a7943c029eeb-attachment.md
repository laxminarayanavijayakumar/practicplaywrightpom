# Test info

- Name: add product hooks concept
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\hooks1.spec.js:27:1

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Product added."
Received string:    "Product added"
    at Page.<anonymous> (C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\hooks1.spec.js:34:34)
```

# Test source

```ts
   1 | const{test , expect} = require('@playwright/test');
   2 | import data from '../TestData/data.json';
   3 |
   4 | let page;
   5 |
   6 | test.beforeAll(async ({browser}) => {
   7 |
   8 |     page = await browser.newPage();
   9 |     await page.goto('https://www.demoblaze.com/');
  10 |
  11 |     // /login
  12 |     await page.locator('#login2').click()
  13 |     await page.locator('#loginusername').fill(data.username)
  14 |     await page.locator('#loginpassword').fill(data.password)
  15 |     await page.locator('//button[@onclick="logIn()"]').click()
  16 |     
  17 | })
  18 |
  19 | test('list of product hooks concept', async () => {
  20 |
  21 |     // home page
  22 |     const products = await page.$$('.hrefch')
  23 |     expect(products).toHaveLength(9)
  24 |     
  25 | })
  26 |
  27 | test('add product hooks concept', async () => {
  28 |
  29 |     // add product to the cart
  30 |     await page.locator('//a[text()="HTC One M9"]').click()
  31 |
  32 |     await page.locator('//a[@onclick="addToCart(7)"]').click()
  33 |     page.on('dialog', async dialog=>{
> 34 |         expect(dialog.message()).toContain('Product added.')
     |                                  ^ Error: expect(received).toContain(expected) // indexOf
  35 |         await dialog.accept()
  36 |     })
  37 |
  38 | })
  39 |
  40 | test.afterAll(async () => {
  41 |     // logout
  42 |     await page.locator('#logout2').click()
  43 | })
```