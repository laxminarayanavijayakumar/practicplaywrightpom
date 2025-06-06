# Test info

- Name: pom login
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\pomtest.spec.js:6:1

# Error details

```
Error: browserType.launch: Executable doesn't exist at C:\WINDOWS\system32\config\systemprofile\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | const {test , expect} = require('@playwright/test');
   2 | import { CartPage } from '../pages/Cartpage';
   3 | import { Homepage } from '../pages/Homepage';
   4 | import { Loginpage } from '../pages/Loginpage';
   5 |
>  6 | test("pom login", async ({page}) => {
     | ^ Error: browserType.launch: Executable doesn't exist at C:\WINDOWS\system32\config\systemprofile\AppData\Local\ms-playwright\chromium_headless_shell-1169\chrome-win\headless_shell.exe
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
  26 |     expect(await ststus).toBe(true);
  27 |     // await page.waitForTimeout(5000);
  28 | })
```