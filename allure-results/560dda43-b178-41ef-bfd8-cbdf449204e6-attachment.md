# Test info

- Name: multiple selection
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\multiselector.spec.js:3:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 5
Received: 7
    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\multiselector.spec.js:18:31
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
  - option "Red" [selected]
  - option "Blue"
  - option "Green" [selected]
  - option "Yellow" [selected]
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
    - row "Name CPU (%) Network (Mbps) Memory (MB) Disk (MB/s)":
      - cell "Name"
      - cell "CPU (%)"
      - cell "Network (Mbps)"
      - cell "Memory (MB)"
      - cell "Disk (MB/s)"
  - rowgroup:
    - row "Chrome 9.2% 6.3 Mbps 65.9 MB 0.14 MB/s":
      - cell "Chrome"
      - cell "9.2%"
      - cell "6.3 Mbps"
      - cell "65.9 MB"
      - cell "0.14 MB/s"
    - row "Internet Explorer 2.2% 2.8 Mbps 44.1 MB 0.97 MB/s":
      - cell "Internet Explorer"
      - cell "2.2%"
      - cell "2.8 Mbps"
      - cell "44.1 MB"
      - cell "0.97 MB/s"
    - row "Firefox 0.9% 5.6 Mbps 45.9 MB 0.30 MB/s":
      - cell "Firefox"
      - cell "0.9%"
      - cell "5.6 Mbps"
      - cell "45.9 MB"
      - cell "0.30 MB/s"
    - row "System 8.1% 5.6 Mbps 74.6 MB 0.63 MB/s":
      - cell "System"
      - cell "8.1%"
      - cell "5.6 Mbps"
      - cell "74.6 MB"
      - cell "0.63 MB/s"
- paragraph:
  - text: "CPU load of Chrome process:"
  - strong: 9.2%
- paragraph:
  - text: "Memory Size of Firefox process:"
  - strong: 45.9 MB
- paragraph:
  - text: "Network speed of Chrome process:"
  - strong: 6.3 Mbps
- paragraph:
  - text: "Disk space of Firefox process:"
  - strong: 0.30 MB/s
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
   1 | const {test , expect} = require('@playwright/test')
   2 |
   3 | test('multiple selection',async ({page}) => {
   4 |
   5 |     await page.goto('https://testautomationpractice.blogspot.com/')
   6 |
   7 |     // select multiple options from multi select dropdown
   8 |     await page.selectOption('#colors' , ['Red' , 'Yellow' , 'Green'])
   9 |
  10 |     // Assertion
  11 |     // check number of options in dropdown
  12 |     const seletopt = await page.locator('#colors option')
  13 |     await expect(seletopt).toHaveCount(7);
  14 |
  15 |     // 2) check number of options in dropdown using js array
  16 |     const opts = await page.$$('#colors option')
  17 |     console.log('Number of Opetions' , opts.length);
> 18 |     await expect(opts.length).toBe(5)
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  19 |     await page.waitForTimeout(3000);
  20 |
  21 |
  22 |     
  23 | })
```