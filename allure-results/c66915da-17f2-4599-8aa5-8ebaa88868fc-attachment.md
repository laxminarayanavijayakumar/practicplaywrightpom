# Test info

- Name: nested iframes
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\nestedframe.spec.js:3:1

# Error details

```
Error: locator.check: Error: strict mode violation: locator('//div[@class="AB7Lab Id5V1"]') resolved to 3 elements:
    1) <div class="AB7Lab Id5V1">…</div> aka getByRole('radio', { name: 'Hi, I am the UI.Vision IDE' })
    2) <div class="AB7Lab Id5V1">…</div> aka getByRole('radio', { name: 'I am a human' })
    3) <div class="AB7Lab Id5V1">…</div> aka locator('label').filter({ hasText: 'Other:' }).getByRole('radio')

Call log:
  - waiting for locator('//div[@class="AB7Lab Id5V1"]')

    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\nestedframe.spec.js:11:65
```

# Test source

```ts
   1 | const{test , expect} = require('@playwright/test');
   2 |
   3 | test('nested iframes', async ({page}) => {
   4 |
   5 |     await page.goto('https://ui.vision/demo/webtest/frames/')
   6 |
   7 |     const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
   8 |     await frame3.fill('//input[@name="mytext3"]','welcome')
   9 |     // nested frame
  10 |     const childframe = await frame3.childFrames()
> 11 |     await childframe[0].locator('//div[@class="AB7Lab Id5V1"]').check();
     |                                                                 ^ Error: locator.check: Error: strict mode violation: locator('//div[@class="AB7Lab Id5V1"]') resolved to 3 elements:
  12 |     await page.waitForTimeout(5000);
  13 | })
```