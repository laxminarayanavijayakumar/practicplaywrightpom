# Test info

- Name: handle dropdown
- Location: C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\dropdown.spec.js:3:1

# Error details

```
Error: page.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#country')
    - locator resolved to <select id="country" class="form-control">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    32 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms

    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\dropdown.spec.js:69:24
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
  - option "United States"
  - option "Canada"
  - option "United Kingdom"
  - option "Germany" [selected]
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
    - row "Name CPU (%) Network (Mbps) Memory (MB) Disk (MB/s)":
      - cell "Name"
      - cell "CPU (%)"
      - cell "Network (Mbps)"
      - cell "Memory (MB)"
      - cell "Disk (MB/s)"
  - rowgroup:
    - row "Chrome 7.5% 3.4 Mbps 33.5 MB 0.13 MB/s":
      - cell "Chrome"
      - cell "7.5%"
      - cell "3.4 Mbps"
      - cell "33.5 MB"
      - cell "0.13 MB/s"
    - row "Firefox 6.2% 3.6 Mbps 55.8 MB 0.60 MB/s":
      - cell "Firefox"
      - cell "6.2%"
      - cell "3.6 Mbps"
      - cell "55.8 MB"
      - cell "0.60 MB/s"
    - row "Internet Explorer 2.1% 7.6 Mbps 51.5 MB 0.43 MB/s":
      - cell "Internet Explorer"
      - cell "2.1%"
      - cell "7.6 Mbps"
      - cell "51.5 MB"
      - cell "0.43 MB/s"
    - row "System 4.3% 0.3 Mbps 45.9 MB 0.93 MB/s":
      - cell "System"
      - cell "4.3%"
      - cell "0.3 Mbps"
      - cell "45.9 MB"
      - cell "0.93 MB/s"
- paragraph:
  - text: "CPU load of Chrome process:"
  - strong: 7.5%
- paragraph:
  - text: "Memory Size of Firefox process:"
  - strong: 55.8 MB
- paragraph:
  - text: "Network speed of Chrome process:"
  - strong: 3.4 Mbps
- paragraph:
  - text: "Disk space of Firefox process:"
  - strong: 0.60 MB/s
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
  - img "A chart."
  - table:
    - rowgroup:
      - row:
        - cell
        - cell
    - rowgroup:
      - row "0 77":
        - cell "0"
        - cell "77"
      - row "1 60":
        - cell "1"
        - cell "60"
      - row "2 46":
        - cell "2"
        - cell "46"
      - row "3 42":
        - cell "3"
        - cell "42"
      - row "4 64":
        - cell "4"
        - cell "64"
      - row "5 80":
        - cell "5"
        - cell "80"
      - row "6 87":
        - cell "6"
        - cell "87"
      - row "7 77":
        - cell "7"
        - cell "77"
      - row "8 65":
        - cell "8"
        - cell "65"
      - row "9 52":
        - cell "9"
        - cell "52"
      - row "10 49":
        - cell "10"
        - cell "49"
      - row "11 85":
        - cell "11"
        - cell "85"
      - row "12 82":
        - cell "12"
        - cell "82"
      - row "13 74":
        - cell "13"
        - cell "74"
      - row "14 71":
        - cell "14"
        - cell "71"
      - row "15 71":
        - cell "15"
        - cell "71"
      - row "16 45":
        - cell "16"
        - cell "45"
      - row "17 40":
        - cell "17"
        - cell "40"
      - row "18 82":
        - cell "18"
        - cell "82"
      - row "19 83":
        - cell "19"
        - cell "83"
      - row "20 66":
        - cell "20"
        - cell "66"
      - row "21 65":
        - cell "21"
        - cell "65"
      - row "22 84":
        - cell "22"
        - cell "84"
      - row "23 63":
        - cell "23"
        - cell "63"
      - row "24 55":
        - cell "24"
        - cell "55"
      - row "25 91":
        - cell "25"
        - cell "91"
      - row "26 100":
        - cell "26"
        - cell "100"
      - row "27 87":
        - cell "27"
        - cell "87"
      - row "28 83":
        - cell "28"
        - cell "83"
      - row "29 59":
        - cell "29"
        - cell "59"
  - text: 3,559,592
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
   1 | const{test , expect} = require('@playwright/test')
   2 |
   3 | test('handle dropdown' , async ({page}) => {
   4 |
   5 |     await page.goto('https://testautomationpractice.blogspot.com/')
   6 |
   7 |     // Multiple ways to select option from the dropdown
   8 |     await page.locator('#country').selectOption({label:'Japan'})
   9 |
  10 |     await page.waitForTimeout(1000);
  11 |
  12 |     await page.locator('#country').selectOption({value:'india'})
  13 |
  14 |     await page.waitForTimeout(1000);
  15 |
  16 |     await page.locator('#country').selectOption('Canada')
  17 |
  18 |     await page.waitForTimeout(1000);
  19 |
  20 |     await page.locator('#country').selectOption({index: 0})
  21 |     
  22 |     await page.waitForTimeout(1000);
  23 |
  24 |     await page.selectOption('#country',{value:'germany'})
  25 |     
  26 |     await page.waitForTimeout(1000);
  27 |
  28 |     // Assertions in dropdown
  29 |     // 1) check number of options in dropdown - Aproach1
  30 |     const option = await page.locator('#country option')
  31 |     await expect(option).toHaveCount(10);
  32 |     await page.waitForTimeout(1000);
  33 |
  34 |     // 2) check number of options in dropdown - Aproach2 using list
  35 |     const allopt = await page.$$('#country option')
  36 |     await expect(allopt.length).toBe(10)
  37 |     console.log('number of options',allopt.length)
  38 |     await page.waitForTimeout(1000);
  39 |
  40 |     // 3) check presence of value in the dropdown - Approach1
  41 |     const content = await page.locator('#country').textContent()
  42 |     await expect(content.includes('France')).toBeTruthy();
  43 |     await page.waitForTimeout(1000);
  44 |
  45 |     // 4) check presence of value in the dropdown - Approach 2 - using looping
  46 |     const optin = await page.$$('#country option')
  47 |     let status = false;
  48 |     for(const op of optin)
  49 |     {
  50 |         console.log(await op.textContent())
  51 |         let values = await op.textContent()
  52 |         if(values.includes('France'))
  53 |         {
  54 |             status = true;
  55 |             break;
  56 |         }
  57 |         
  58 |     }
  59 |     expect.soft(status).toBeTruthy();
  60 |     await page.waitForTimeout(1000);
  61 |
  62 |     // 5) select option from dropdown using looping ststement
  63 |     const opt = await page.$$('#country option')
  64 |     for(const ops of opt)
  65 |     {
  66 |         let val = await ops.textContent()
  67 |         if(val.includes('France'))
  68 |         {
> 69 |             await page.selectOption('#country', val);
     |                        ^ Error: page.selectOption: Test timeout of 30000ms exceeded.
  70 |             break;
  71 |         }
  72 |         
  73 |     }
  74 |     await page.waitForTimeout(1000);
  75 |     
  76 | })
```