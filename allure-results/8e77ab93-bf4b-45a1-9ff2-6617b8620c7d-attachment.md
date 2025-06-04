# Test info

- Name: dialogs conformation alert
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\alerts.spec.js:17:1

# Error details

```
Error: expect(locator).toHaveText(expected)

Locator: locator('#demo')
Expected string: "You pressed OK!"
Received string: "You pressed Cancel!"
Call log:
  - expect.toHaveText with timeout 5000ms
  - waiting for locator('#demo')
    2 × locator resolved to <p id="demo">You pressed Cancel!</p>
      - unexpected value "You pressed Cancel!"

    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\alerts.spec.js:38:41
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
    - row "Name Disk (MB/s) Network (Mbps) Memory (MB) CPU (%)":
      - cell "Name"
      - cell "Disk (MB/s)"
      - cell "Network (Mbps)"
      - cell "Memory (MB)"
      - cell "CPU (%)"
  - rowgroup:
    - row "Firefox 0.41 MB/s 4.8 Mbps 80.1 MB 2.8%":
      - cell "Firefox"
      - cell "0.41 MB/s"
      - cell "4.8 Mbps"
      - cell "80.1 MB"
      - cell "2.8%"
    - row "Internet Explorer 0.71 MB/s 3.8 Mbps 89.2 MB 6.0%":
      - cell "Internet Explorer"
      - cell "0.71 MB/s"
      - cell "3.8 Mbps"
      - cell "89.2 MB"
      - cell "6.0%"
    - row "System 0.67 MB/s 8.1 Mbps 95.3 MB 1.4%":
      - cell "System"
      - cell "0.67 MB/s"
      - cell "8.1 Mbps"
      - cell "95.3 MB"
      - cell "1.4%"
    - row "Chrome 0.30 MB/s 8.1 Mbps 34.3 MB 1.0%":
      - cell "Chrome"
      - cell "0.30 MB/s"
      - cell "8.1 Mbps"
      - cell "34.3 MB"
      - cell "1.0%"
- paragraph:
  - text: "CPU load of Chrome process:"
  - strong: 1.0%
- paragraph:
  - text: "Memory Size of Firefox process:"
  - strong: 80.1 MB
- paragraph:
  - text: "Network speed of Chrome process:"
  - strong: 8.1 Mbps
- paragraph:
  - text: "Disk space of Firefox process:"
  - strong: 0.41 MB/s
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
  - paragraph: You pressed Cancel!
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
  - img "A chart."
  - table:
    - rowgroup:
      - row:
        - cell
        - cell
    - rowgroup:
      - row "0 65":
        - cell "0"
        - cell "65"
      - row "1 65":
        - cell "1"
        - cell "65"
      - row "2 83":
        - cell "2"
        - cell "83"
      - row "3 62":
        - cell "3"
        - cell "62"
      - row "4 55":
        - cell "4"
        - cell "55"
      - row "5 90":
        - cell "5"
        - cell "90"
      - row "6 99":
        - cell "6"
        - cell "99"
      - row "7 86":
        - cell "7"
        - cell "86"
      - row "8 82":
        - cell "8"
        - cell "82"
      - row "9 82":
        - cell "9"
        - cell "82"
      - row "10 64":
        - cell "10"
        - cell "64"
      - row "11 67":
        - cell "11"
        - cell "67"
      - row "12 95":
        - cell "12"
        - cell "95"
      - row "13 82":
        - cell "13"
        - cell "82"
      - row "14 87":
        - cell "14"
        - cell "87"
      - row "15 85":
        - cell "15"
        - cell "85"
      - row "16 80":
        - cell "16"
        - cell "80"
      - row "17 61":
        - cell "17"
        - cell "61"
      - row "18 58":
        - cell "18"
        - cell "58"
      - row "19 83":
        - cell "19"
        - cell "83"
      - row "20 98":
        - cell "20"
        - cell "98"
      - row "21 84":
        - cell "21"
        - cell "84"
      - row "22 96":
        - cell "22"
        - cell "96"
      - row "23 84":
        - cell "23"
        - cell "84"
      - row "24 64":
        - cell "24"
        - cell "64"
      - row "25 63":
        - cell "25"
        - cell "63"
      - row "26 86":
        - cell "26"
        - cell "86"
      - row "27 96":
        - cell "27"
        - cell "96"
      - row "28 100":
        - cell "28"
        - cell "100"
      - row "29 66":
        - cell "29"
        - cell "66"
  - text: 3,727,996
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
   3 | test('dialogs alert', async ({page}) => {
   4 |
   5 |     await page.goto('https://testautomationpractice.blogspot.com/');
   6 |
   7 |     page.on('dialog', async dialog => {
   8 |         expect(dialog.type()).toContain('alert')
   9 |         expect(dialog.message()).toContain('I am an alert box!')
  10 |         await dialog.accept();
  11 |     })
  12 |     await page.click('//button[@onclick="myFunctionAlert()"]');
  13 |     await page.waitForTimeout(2000);
  14 |
  15 | })
  16 |
  17 | test('dialogs conformation alert', async ({page}) => {
  18 |
  19 |     await page.goto('https://testautomationpractice.blogspot.com/');
  20 |
  21 |     page.on('dialog', async dialog => {
  22 |         expect(dialog.type()).toContain('confirm')
  23 |         expect(dialog.message()).toContain('Press a button!')
  24 |         await dialog.dismiss();
  25 |     })
  26 |     await page.click('//button[@onclick="myFunctionConfirm()"]');
  27 |     await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');
  28 |
  29 |     await page.pause();
  30 |
  31 |     page.on('dialog', async dialog => {
  32 |         expect(dialog.type()).toContain('confirm')
  33 |         expect(dialog.message()).toContain('Press a button!')
  34 |         await dialog.accept();
  35 |     })
  36 |     await page.waitForTimeout(10000);
  37 |     await page.click('//button[@onclick="myFunctionConfirm()"]');
> 38 |     await expect(page.locator('#demo')).toHaveText('You pressed OK!');
     |                                         ^ Error: expect(locator).toHaveText(expected)
  39 |
  40 | })
```