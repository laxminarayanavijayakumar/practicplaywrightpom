# Test info

- Name: date picker 3
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\datepicker.spec.js:61:1

# Error details

```
Error: locator.fill: Error: Malformed value
Call log:
  - waiting for getByPlaceholder('Start Date')
    - locator resolved to <input type="date" id="start-date" placeholder="Start Date"/>
    - fill("21091996")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\datepicker.spec.js:67:47
```

# Page snapshot

```yaml
- banner:
  - heading "Automation Testing Practice" [level=1]
  - paragraph: For Selenium, Cypress & Playwright
- list:
  - listitem:
    - link "Home":
      - /url: http://testautomationpractice.blogspot.com/
  - listitem:
    - link "Udemy Courses":
      - /url: https://www.pavanonlinetrainings.com/p/udemy-courses.html
  - listitem:
    - link "Online Trainings":
      - /url: https://www.pavanonlinetrainings.com/
  - listitem:
    - link "Blog":
      - /url: https://www.pavantestingtools.com/
  - listitem:
    - link "PlaywrightPractice":
      - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
- heading "GUI Elements" [level=3]:
  - link "GUI Elements":
    - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
- text: "Name:"
- textbox "Enter Name"
- text: "Email:"
- textbox "Enter EMail"
- text: "Phone:"
- textbox "Enter Phone"
- text: "Address:"
- textbox "Address:"
- text: "Gender:"
- radio "Male"
- text: Male
- radio "Female"
- text: "Female Days:"
- checkbox "Sunday"
- text: Sunday
- checkbox "Monday"
- text: Monday
- checkbox "Tuesday"
- text: Tuesday
- checkbox "Wednesday"
- text: Wednesday
- checkbox "Thursday"
- text: Thursday
- checkbox "Friday"
- text: Friday
- checkbox "Saturday"
- text: "Saturday Country:"
- combobox "Country:":
  - option "United States" [selected]
  - option "Canada"
  - option "United Kingdom"
  - option "Germany"
  - option "France"
  - option "Australia"
  - option "Japan"
  - option "China"
  - option "Brazil"
  - option "India"
- text: "Colors:"
- listbox "Colors:":
  - option "Red"
  - option "Blue"
  - option "Green"
  - option "Yellow"
  - option "Red"
  - option "White"
  - option "Green"
- text: "Sorted List:"
- listbox "Sorted List:":
  - option "Cat"
  - option "Cheetah"
  - option "Deer"
  - option "Dog"
  - option "Elephant"
  - option "Fox"
  - option "Giraffe"
  - option "Lion"
  - option "Rabbit"
  - option "Zebra"
- paragraph:
  - text: "Date Picker 1 (mm/dd/yyyy):"
  - textbox
- paragraph:
  - text: "Date Picker 2 (dd/mm/yyyy) :"
  - textbox
- text: "Date Picker 3: (Select a Date Range)"
- textbox
- text: to
- textbox
- button "Submit"
- link "Home":
  - /url: https://testautomationpractice.blogspot.com/
- text: "Subscribe to:"
- link "Posts (Atom)":
  - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
- heading "Upload Files" [level=2]
- button "Choose File"
- button "Upload Single File"
- paragraph
- button "Choose File"
- button "Upload Multiple Files"
- paragraph
- heading "Static Web Table" [level=2]
- table:
  - rowgroup:
    - row "BookName Author Subject Price":
      - cell "BookName"
      - cell "Author"
      - cell "Subject"
      - cell "Price"
    - row "Learn Selenium Amit Selenium 300":
      - cell "Learn Selenium"
      - cell "Amit"
      - cell "Selenium"
      - cell "300"
    - row "Learn Java Mukesh Java 500":
      - cell "Learn Java"
      - cell "Mukesh"
      - cell "Java"
      - cell "500"
    - row "Learn JS Animesh Javascript 300":
      - cell "Learn JS"
      - cell "Animesh"
      - cell "Javascript"
      - cell "300"
    - row "Master In Selenium Mukesh Selenium 3000":
      - cell "Master In Selenium"
      - cell "Mukesh"
      - cell "Selenium"
      - cell "3000"
    - row "Master In Java Amod JAVA 2000":
      - cell "Master In Java"
      - cell "Amod"
      - cell "JAVA"
      - cell "2000"
    - row "Master In JS Amit Javascript 1000":
      - cell "Master In JS"
      - cell "Amit"
      - cell "Javascript"
      - cell "1000"
- heading "Dynamic Web Table" [level=2]
- table:
  - rowgroup:
    - row "Name Memory (MB) Disk (MB/s) CPU (%) Network (Mbps)":
      - cell "Name"
      - cell "Memory (MB)"
      - cell "Disk (MB/s)"
      - cell "CPU (%)"
      - cell "Network (Mbps)"
  - rowgroup:
    - row "Internet Explorer 97.6 MB 0.61 MB/s 4.9% 5.2 Mbps":
      - cell "Internet Explorer"
      - cell "97.6 MB"
      - cell "0.61 MB/s"
      - cell "4.9%"
      - cell "5.2 Mbps"
    - row "Chrome 77.8 MB 0.89 MB/s 0.8% 8.2 Mbps":
      - cell "Chrome"
      - cell "77.8 MB"
      - cell "0.89 MB/s"
      - cell "0.8%"
      - cell "8.2 Mbps"
    - row "System 93.2 MB 0.99 MB/s 3.7% 1.2 Mbps":
      - cell "System"
      - cell "93.2 MB"
      - cell "0.99 MB/s"
      - cell "3.7%"
      - cell "1.2 Mbps"
    - row "Firefox 46.4 MB 0.55 MB/s 8.6% 7.1 Mbps":
      - cell "Firefox"
      - cell "46.4 MB"
      - cell "0.55 MB/s"
      - cell "8.6%"
      - cell "7.1 Mbps"
- paragraph:
  - text: "CPU load of Chrome process:"
  - strong: 0.8%
- paragraph:
  - text: "Memory Size of Firefox process:"
  - strong: 46.4 MB
- paragraph:
  - text: "Network speed of Chrome process:"
  - strong: 8.2 Mbps
- paragraph:
  - text: "Disk space of Firefox process:"
  - strong: 0.55 MB/s
- heading "Pagination Web Table" [level=2]
- table:
  - rowgroup:
    - row "ID Name Price Select":
      - cell "ID"
      - cell "Name"
      - cell "Price"
      - cell "Select"
  - rowgroup:
    - row "1 Smartphone $10.99":
      - cell "1"
      - cell "Smartphone"
      - cell "$10.99"
      - cell:
        - checkbox
    - row "2 Laptop $19.99":
      - cell "2"
      - cell "Laptop"
      - cell "$19.99"
      - cell:
        - checkbox
    - row "3 Tablet $5.99":
      - cell "3"
      - cell "Tablet"
      - cell "$5.99"
      - cell:
        - checkbox
    - row "4 Smartwatch $7.99":
      - cell "4"
      - cell "Smartwatch"
      - cell "$7.99"
      - cell:
        - checkbox
    - row "5 Wireless Earbuds $8.99":
      - cell "5"
      - cell "Wireless Earbuds"
      - cell "$8.99"
      - cell:
        - checkbox
- list:
  - listitem:
    - link "1":
      - /url: "#"
  - listitem:
    - link "2":
      - /url: "#"
  - listitem:
    - link "3":
      - /url: "#"
  - listitem:
    - link "4":
      - /url: "#"
- complementary
- complementary:
  - heading "Tabs" [level=2]
  - link:
    - /url: https://wikipedia.org/wiki/
    - img
  - textbox
  - button "Submit"
  - heading "Dynamic Button" [level=2]
  - button "START"
  - heading "Alerts & Popups" [level=2]
  - button "Simple Alert"
  - button "Confirmation Alert"
  - button "Prompt Alert"
  - paragraph
  - button "New Tab"
  - button "Popup Windows"
  - heading "Mouse Hover" [level=2]
  - paragraph: Move the mouse over the button to open the dropdown menu.
  - button "Point Me"
  - heading "Double Click" [level=2]
  - text: "Field1:"
  - textbox: Hello World!
  - text: "Field2:"
  - textbox
  - button "Copy Text"
  - paragraph: Double click on button, the text from Field1 will be copied into Field2.
  - heading "Drag and Drop" [level=2]
  - paragraph: Drag me to my target
  - paragraph: Drop here
  - heading "Slider" [level=2]
  - paragraph:
    - text: "Price range:"
    - textbox "Price range:": $75 - $300
  - heading "SVG Elements" [level=2]
  - img
  - img
  - img
  - heading "Scrolling DropDown" [level=2]
  - textbox "Select an item"
  - heading "Labels And Links" [level=2]
  - heading "Mobile Labels" [level=4]
  - text: Samsung Real Me Moto
  - heading "Laptop Links" [level=4]
  - link "Apple":
    - /url: https://www.apple.com/
  - link "Lenovo":
    - /url: https://www.lenovo.com/
  - link "Dell":
    - /url: https://www.dell.com/
  - heading "Broken Links" [level=4]
  - link "Errorcode 400":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=400
  - link "Errorcode 401":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=401
  - link "Errorcode 403":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=403
  - link "Errorcode 404":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=404
  - link "Errorcode 408":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=408
  - link "Errorcode 500":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=500
  - link "Errorcode 502":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=502
  - link "Errorcode 503":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=503
  - heading "Visitors" [level=2]
- contentinfo:
  - table:
    - rowgroup:
      - row "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files ShadowDOM Mobiles Laptops Blog Choose File Youtube":
        - cell "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files":
          - heading "Form" [level=2]
          - heading "Section 1" [level=4]
          - paragraph: This is a paragraph in Section 1.
          - textbox
          - button "Submit"
          - heading "Section 2" [level=4]
          - paragraph: This is a paragraph in Section 2.
          - textbox
          - button "Submit"
          - heading "Section 3" [level=4]
          - paragraph: This is a paragraph in Section 3.
          - textbox
          - button "Submit"
          - heading "Footer Links" [level=2]
          - list:
            - listitem:
              - link "Home":
                - /url: http://testautomationpractice.blogspot.com/
            - listitem:
              - link "Hidden Elements & AJAX":
                - /url: https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html
            - listitem:
              - link "Download Files":
                - /url: https://testautomationpractice.blogspot.com/p/download-files_25.html
        - cell "ShadowDOM Mobiles Laptops Blog Choose File Youtube":
          - heading "ShadowDOM" [level=2]
          - text: Mobiles Laptops
          - link "Blog":
            - /url: https://www.pavantestingtools.com/
          - textbox
          - checkbox
          - button "Choose File"
          - link "Youtube":
            - /url: https://www.youtube.com/@sdetpavan/videos
  - text: Theme images by
  - link "merrymoonmary":
    - /url: http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger
  - text: . Powered by
  - link "Blogger":
    - /url: https://www.blogger.com
  - text: .
```

# Test source

```ts
   1 | const{test , expect} = require('@playwright/test');
   2 |
   3 | test.skip('date picker 1', async ({page}) => {
   4 |
   5 |     await page.goto('https://testautomationpractice.blogspot.com/');
   6 |     // await page.locator('#datepicker').fill('09/21/2025');
   7 |
   8 |     // date picker
   9 |     const year = '2022'
  10 |     const month = 'July'
  11 |     const date = '21'
  12 |
  13 |     await page.click('#datepicker')
  14 |     while (true) {
  15 |         const currentyear = await page.locator('//span[@class="ui-datepicker-year"]').textContent();
  16 |         const currentmonth = await page.locator('//span[@class="ui-datepicker-month"]').textContent();
  17 |         
  18 |         if (currentyear == year && currentmonth == month) {
  19 |             break;
  20 |         }
  21 |         await page.click('//a[@title="Prev"]')
  22 |         // await page.locator('//a[@title="Next"]').click();
  23 |     }
  24 |
  25 |     // date selection using loops
  26 |     // const dates = await page.$$('//table[@class="ui-datepicker-calendar"]//tr//td//a')
  27 |     // for(const dt of dates){
  28 |     //     if (await dt.textContent() == date){
  29 |     //         await dt.click();
  30 |     //         break;
  31 |     //     }
  32 |     // }
  33 |
  34 |     // not using loop and condition
  35 |     await page.locator(`//table[@class="ui-datepicker-calendar"]//td//a[text()="${date}"]`).click();
  36 |
  37 |     await page.waitForTimeout(10000);
  38 |
  39 | })
  40 |
  41 | test.skip('date picker 2', async ({page}) => {
  42 |
  43 |      await page.goto('https://testautomationpractice.blogspot.com/');
  44 |     // await page.locator('#datepicker').fill('09/21/2025');
  45 |
  46 |     // date picker
  47 |     const date = '21'
  48 |
  49 |     await page.click('#txtDate');
  50 |
  51 |     await page.locator('//select[@class="ui-datepicker-month"]').selectOption({index:9})
  52 |
  53 |     await page.locator('//select[@class="ui-datepicker-year"]').selectOption({value:"2026"})
  54 |
  55 |     await page.locator(`//table[@class="ui-datepicker-calendar"]//td//a[text()="${date}"]`).click();
  56 |
  57 |     await page.waitForTimeout(5000);
  58 |     
  59 | })
  60 |
  61 | test('date picker 3', async ({page}) => {
  62 |
  63 |     await page.goto('https://testautomationpractice.blogspot.com/');
  64 |
  65 |     await page.click('#start-date')
  66 |
> 67 |     await page.getByPlaceholder('Start Date').fill('21091996')
     |                                               ^ Error: locator.fill: Error: Malformed value
  68 |
  69 |     await page.waitForTimeout(5000);
  70 |
  71 |     
  72 | })
```