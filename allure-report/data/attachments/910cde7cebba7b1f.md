# Test info

- Name: iframe switch
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\frames.spec.js:3:1

# Error details

```
Error: frame.fill: Test ended.
Call log:
  - waiting for locator('//input[@name="mytext1"]')

    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\frames.spec.js:12:12
```

# Test source

```ts
   1 | const{test , expect} = require('@playwright/test');
   2 |
   3 | test('iframe switch', async ({page}) => {
   4 |
   5 |     await page.goto('https://ui.vision/demo/webtest/frames/');
   6 |     // total number of frames
   7 |     const allframes = await page.frames();
   8 |     console.log('Number of frames :',allframes.length);
   9 |     
  10 |     // approach 1: using name or url
  11 |     const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
> 12 |     frame1.fill('//input[@name="mytext1"]','hello');
     |            ^ Error: frame.fill: Test ended.
  13 | })
```