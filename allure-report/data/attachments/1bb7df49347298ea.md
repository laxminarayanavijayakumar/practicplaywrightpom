# Test info

- Name: test5
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\annotation.spec.js:30:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 2
Received: 3
    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\annotation.spec.js:34:15
```

# Test source

```ts
   1 | const {test , expect} = require('@playwright/test');
   2 |
   3 | // test.skip('test1', async ({page}) => {
   4 | //     console.log('this is test1..')
   5 | // })
   6 |
   7 | // test.only('test2', async ({page}) => {
   8 | //     console.log('this is test2..')
   9 | // })
  10 |
  11 | // test('test3', async ({page,browserName}) => {
  12 |
  13 | //     console.log('this is test3..')
  14 |
  15 | //     if(browserName == 'firefox'){
  16 | //         test.skip();
  17 | //     }
  18 |     
  19 | // })
  20 |
  21 | // Fixme
  22 | test('test4', async ({page}) => {
  23 |
  24 |     test.fixme()
  25 |     console.log('this is test4..')
  26 |     
  27 | })
  28 |
  29 |
  30 | test('test5', async ({page}) => {
  31 |
  32 |     test.fail()
  33 |     console.log('this is test5..')
> 34 |     expect(3).toBe(2);
     |               ^ Error: expect(received).toBe(expected) // Object.is equality
  35 | })
```