# Test info

- Name: pom login
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\pomtest.spec.js:6:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: undefined
    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\pomtest.spec.js:26:26
```

# Page snapshot

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: "#"
    - listitem
    - listitem:
      - link "Log out":
        - /url: "#"
    - listitem:
      - link "Welcome pavanol":
        - /url: "#"
    - listitem
- heading "Products" [level=2]
- table:
  - rowgroup:
    - row "Pic Title Price x":
      - cell "Pic"
      - cell "Title"
      - cell "Price"
      - cell "x"
  - rowgroup:
    - row "HTC One M9 700 Delete":
      - cell:
        - img
      - cell "HTC One M9"
      - cell "700"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
    - row "HTC One M9 700 Delete":
      - cell:
        - img
      - cell "HTC One M9"
      - cell "700"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
    - row "HTC One M9 700 Delete":
      - cell:
        - img
      - cell "HTC One M9"
      - cell "700"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
    - row "HTC One M9 700 Delete":
      - cell:
        - img
      - cell "HTC One M9"
      - cell "700"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
    - row "HTC One M9 700 Delete":
      - cell:
        - img
      - cell "HTC One M9"
      - cell "700"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
    - row "HTC One M9 700 Delete":
      - cell:
        - img
      - cell "HTC One M9"
      - cell "700"
      - cell "Delete":
        - link "Delete":
          - /url: "#"
- heading "Total" [level=2]
- heading "4200" [level=3]
- button "Place Order"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store 2017
```

# Test source

```ts
   1 | const {test , expect} = require('@playwright/test');
   2 | import { CartPage } from '../pages/Cartpage';
   3 | import { Homepage } from '../pages/Homepage';
   4 | import { Loginpage } from '../pages/Loginpage';
   5 |
   6 | test("pom login", async ({page}) => {
   7 |
   8 |     // Login
   9 |     const login = new Loginpage(page);
  10 |     // const { username, password } = datas;
  11 |     await login.gotopage();
  12 |     await login.logindtl('pavanol' , 'test@123')
  13 |     
  14 |
  15 |     // Home 
  16 |     const home = new Homepage(page);
  17 |     await page.waitForTimeout(3000);
  18 |     await home.addproducttocart('HTC One M9');
  19 |     await page.waitForTimeout(2000);
  20 |     await home.gotocart();
  21 |
  22 |     // Cart
  23 |     const cart = new CartPage(page);
  24 |     await page.waitForTimeout(3000);
  25 |     const ststus  = await cart.checkproductincart('HTC One M9');
> 26 |     expect(await ststus).toBe(true);
     |                          ^ Error: expect(received).toBe(expected) // Object.is equality
  27 |     // await page.waitForTimeout(5000);
  28 | })
```