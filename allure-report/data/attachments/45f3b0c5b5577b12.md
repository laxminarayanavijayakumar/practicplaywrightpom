# Test info

- Name: Assertion test
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\assercion.spec.js:3:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeChecked()

Locator: locator('#gender-male')
Expected: checked
Received: unchecked
Call log:
  - expect.toBeChecked with timeout 5000ms
  - waiting for locator('#gender-male')
    8 × locator resolved to <input value="M" type="radio" name="Gender" id="gender-male"/>
      - unexpected value "unchecked"

    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\assercion.spec.js:23:33
```

# Page snapshot

```yaml
- status
- link "Skip navigation":
  - /url: "#main"
- combobox "Currency selector":
  - option "US Dollar" [selected]
  - option "Euro"
- list:
  - listitem:
    - link "Register":
      - /url: /register?returnUrl=%2Fregister
  - listitem:
    - link "Log in":
      - /url: /login?returnUrl=%2Fregister
  - listitem:
    - link "Wishlist (0)":
      - /url: /wishlist
  - listitem:
    - link "Shopping cart (0)":
      - /url: /cart
- link "nopCommerce demo store":
  - /url: /
  - img "nopCommerce demo store"
- textbox "Search store"
- button "Search"
- list:
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel":
      - /url: /apparel
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- main:
  - heading "Register" [level=1]
  - strong: Your Personal Details
  - text: "Gender:"
  - radio "Male"
  - text: Male
  - radio "Female"
  - text: "Female First name:"
  - textbox "First name:"
  - text: "* Last name:"
  - textbox "Last name:"
  - text: "* Email:"
  - textbox "Email:"
  - text: "*"
  - strong: Company Details
  - text: "Company name:"
  - textbox "Company name:"
  - strong: Options
  - text: "Newsletter:"
  - checkbox "Newsletter:" [checked]
  - strong: Your Password
  - text: "Password:"
  - textbox "Password:"
  - text: "* Confirm password:"
  - textbox "Confirm password:"
  - text: "*"
  - button "Register"
- strong: Information
- list:
  - listitem:
    - link "Sitemap":
      - /url: /sitemap
  - listitem:
    - link "Shipping & returns":
      - /url: /shipping-returns
  - listitem:
    - link "Privacy notice":
      - /url: /privacy-notice
  - listitem:
    - link "Conditions of Use":
      - /url: /conditions-of-use
  - listitem:
    - link "About us":
      - /url: /about-us
  - listitem:
    - link "Contact us":
      - /url: /contactus
- strong: Customer service
- list:
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "News":
      - /url: /news
  - listitem:
    - link "Blog":
      - /url: /blog
  - listitem:
    - link "Recently viewed products":
      - /url: /recentlyviewedproducts
  - listitem:
    - link "Compare products list":
      - /url: /compareproducts
  - listitem:
    - link "New products":
      - /url: /newproducts
- strong: My account
- list:
  - listitem:
    - link "My account":
      - /url: /customer/info
  - listitem:
    - link "Orders":
      - /url: /order/history
  - listitem:
    - link "Addresses":
      - /url: /customer/addresses
  - listitem:
    - link "Shopping cart":
      - /url: /cart
  - listitem:
    - link "Wishlist":
      - /url: /wishlist
  - listitem:
    - link "Apply for vendor account":
      - /url: /vendor/apply
- strong: Follow us
- list:
  - listitem:
    - link "Facebook":
      - /url: https://www.facebook.com/nopCommerce
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/nopCommerce
  - listitem:
    - link "RSS":
      - /url: /news/rss/1
  - listitem:
    - link "YouTube":
      - /url: https://www.youtube.com/user/nopCommerce
  - listitem:
    - link "Instagram":
      - /url: https://www.instagram.com/nopcommerce_official
- strong: Newsletter
- textbox "Sign up for our newsletter"
- button "Subscribe"
- text: Copyright © 2025 nopCommerce demo store. All rights reserved. Powered by
- link "nopCommerce":
  - /url: https://www.nopcommerce.com/
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
   8 |     await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
   9 |
  10 |     // expect(page).toHaveTitle()  page has title
  11 |     await expect(page).toHaveTitle('nopCommerce demo store. Register')
  12 |
  13 |     // expect(locator).toBe visible()  element is visible or not
  14 |     const logoelement = await page.locator('.header-logo')
  15 |     await expect(logoelement).toBeVisible();
  16 |
  17 |     // expect(locator).toBeEnable()   element controal is enable or not
  18 |     const searchbox = await page.locator('//input[@id="small-searchterms"]')
  19 |     await expect(searchbox).toBeEnabled();
  20 |
  21 |     // expect(locator).toBeChecked()    Radio / Checkbox is Clicked or not
  22 |     const maleradbutton = await page.locator('#gender-male')
> 23 |     await expect(maleradbutton).toBeChecked();
     |                                 ^ Error: Timed out 5000ms waiting for expect(locator).toBeChecked()
  24 |
  25 |     await page.waitForTimeout(3000)
  26 |     
  27 |     await maleradbutton.click()
  28 |     await expect(maleradbutton).toBeChecked();
  29 |     
  30 | })
```