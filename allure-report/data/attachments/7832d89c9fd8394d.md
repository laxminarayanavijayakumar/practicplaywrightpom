# Test info

- Name: pom login
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\pomtest.spec.js:14:1

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#cartur')

    at Homepage.gotocart (C:\Users\HARIKATHIK V\Desktop\sdet-playwright\pages\Homepage.js:28:44)
    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\pomtest.spec.js:27:16
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
  20 |             if(dialog.message().includes('Product added.')) {
  21 |                 await dialog.accept();
  22 |             }
  23 |         })
  24 |         await this.page.locator(this.addtocartbton).click();
  25 |     }
  26 |     
  27 |     async gotocart() {
> 28 |         await this.page.locator(this.cart).click();        
     |                                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  29 |     }
  30 | }
```