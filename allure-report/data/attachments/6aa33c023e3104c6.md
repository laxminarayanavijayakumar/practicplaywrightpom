# Test info

- Name: pom login
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\pomtest.spec.js:6:1

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('#cartur')

    at Homepage.gotocart (C:\Users\HARIKATHIK V\Desktop\sdet-playwright\pages\Homepage.js:30:44)
    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\pomtest.spec.js:18:16
```

# Test source

```ts
   1 | exports.Homepage = class Homepage{
   2 |
   3 |     constructor(page){
   4 |         this.page = page;
   5 |         this.productlist = '//a[@class="hrefch"]';
   6 |         this.addtocartbton = '//a[@class="btn btn-success btn-lg"]';
   7 |         this.cart = '#cartur';
   8 |     }
   9 |
  10 |     async addproducttocart(productnames) {
  11 |         const productlists = await this.page.$$(this.productlist);
  12 |         for(const products of productlists){
  13 |             console.log(await products.textContent());
  14 |             if(productnames === await products.textContent()) {
  15 |                 await products.click()
  16 |                 break;
  17 |             }
  18 |         }
  19 |         await this.page.on('dialog', async dialog=>{
  20 |             expect(dialog.type()).toContain('alert')
  21 |             expect(dialog.message()).toContain('I am an alert box!')
  22 |             if (dialog.message().inclides('Product added.')) {
  23 |                 await dialog.accept();
  24 |             }
  25 |         })
  26 |         await this.page.locator(this.addtocartbton).click();
  27 |     }
  28 |
  29 |     async gotocart() {
> 30 |         await this.page.locator(this.cart).click();        
     |                                            ^ Error: locator.click: Test ended.
  31 |     }
  32 | }
```