# Test info

- Name: dialogs alert
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\alerts.spec.js:3:1

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Simple Alert"
Received string:    "alert"
    at Page.<anonymous> (C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\alerts.spec.js:8:31)
```

# Test source

```ts
   1 | const{test , expect} = require('@playwright/test');
   2 |
   3 | test('dialogs alert', async ({page}) => {
   4 |
   5 |     await page.goto('https://testautomationpractice.blogspot.com/');
   6 |
   7 |     page.on('dialog', async dialog => {
>  8 |         expect(dialog.type()).toContain('Simple Alert')
     |                               ^ Error: expect(received).toContain(expected) // indexOf
   9 |         expect(dialog.message()).toContain('I am an alert box!')
  10 |         await dialog.accept();
  11 |     })
  12 |     await page.click('//button[@onclick="myFunctionAlert()"]');
  13 |     page.waitForTimeout(5000);
  14 |
  15 |     
  16 | })
```