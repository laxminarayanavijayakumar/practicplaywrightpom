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
    49 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms

    at C:\Users\HARIKATHIK V\Desktop\sdet-playwright\tests\dropdown.spec.js:14:24
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
    - row "Name Network (Mbps) CPU (%) Disk (MB/s) Memory (MB)":
      - cell "Name"
      - cell "Network (Mbps)"
      - cell "CPU (%)"
      - cell "Disk (MB/s)"
      - cell "Memory (MB)"
  - rowgroup:
    - row "Firefox 0.8 Mbps 9.4% 0.12 MB/s 81.9 MB":
      - cell "Firefox"
      - cell "0.8 Mbps"
      - cell "9.4%"
      - cell "0.12 MB/s"
      - cell "81.9 MB"
    - row "Chrome 2.7 Mbps 9.3% 0.17 MB/s 43.0 MB":
      - cell "Chrome"
      - cell "2.7 Mbps"
      - cell "9.3%"
      - cell "0.17 MB/s"
      - cell "43.0 MB"
    - row "Internet Explorer 5.0 Mbps 4.3% 0.05 MB/s 97.8 MB":
      - cell "Internet Explorer"
      - cell "5.0 Mbps"
      - cell "4.3%"
      - cell "0.05 MB/s"
      - cell "97.8 MB"
    - row "System 9.1 Mbps 3.5% 0.88 MB/s 89.8 MB":
      - cell "System"
      - cell "9.1 Mbps"
      - cell "3.5%"
      - cell "0.88 MB/s"
      - cell "89.8 MB"
- paragraph:
  - text: "CPU load of Chrome process:"
  - strong: 9.3%
- paragraph:
  - text: "Memory Size of Firefox process:"
  - strong: 81.9 MB
- paragraph:
  - text: "Network speed of Chrome process:"
  - strong: 2.7 Mbps
- paragraph:
  - text: "Disk space of Firefox process:"
  - strong: 0.12 MB/s
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
      - row "0 60":
        - cell "0"
        - cell "60"
      - row "1 46":
        - cell "1"
        - cell "46"
      - row "2 42":
        - cell "2"
        - cell "42"
      - row "3 64":
        - cell "3"
        - cell "64"
      - row "4 80":
        - cell "4"
        - cell "80"
      - row "5 87":
        - cell "5"
        - cell "87"
      - row "6 77":
        - cell "6"
        - cell "77"
      - row "7 65":
        - cell "7"
        - cell "65"
      - row "8 52":
        - cell "8"
        - cell "52"
      - row "9 49":
        - cell "9"
        - cell "49"
      - row "10 85":
        - cell "10"
        - cell "85"
      - row "11 82":
        - cell "11"
        - cell "82"
      - row "12 74":
        - cell "12"
        - cell "74"
      - row "13 71":
        - cell "13"
        - cell "71"
      - row "14 71":
        - cell "14"
        - cell "71"
      - row "15 45":
        - cell "15"
        - cell "45"
      - row "16 40":
        - cell "16"
        - cell "40"
      - row "17 82":
        - cell "17"
        - cell "82"
      - row "18 83":
        - cell "18"
        - cell "83"
      - row "19 66":
        - cell "19"
        - cell "66"
      - row "20 65":
        - cell "20"
        - cell "65"
      - row "21 84":
        - cell "21"
        - cell "84"
      - row "22 63":
        - cell "22"
        - cell "63"
      - row "23 55":
        - cell "23"
        - cell "55"
      - row "24 91":
        - cell "24"
        - cell "91"
      - row "25 100":
        - cell "25"
        - cell "100"
      - row "26 87":
        - cell "26"
        - cell "87"
      - row "27 83":
        - cell "27"
        - cell "83"
      - row "28 82":
        - cell "28"
        - cell "82"
      - row "29 14":
        - cell "29"
        - cell "14"
  - text: 3,563,415
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
   7 |     // 5) select option from dropdown using looping ststement
   8 |     const optn = await page.$$('#country option')
   9 |     for(const opi of optn)
  10 |     {
  11 |         let data = await opi.textContent();
  12 |         if(data.includes('Brazil'))
  13 |         {
> 14 |             await page.selectOption("#country", data);
     |                        ^ Error: page.selectOption: Test timeout of 30000ms exceeded.
  15 |             break;
  16 |         }
  17 |
  18 |     }
  19 |     await page.waitForTimeout(1000);
  20 |
  21 |     // Multiple ways to select option from the dropdown
  22 |     await page.locator('#country').selectOption({label:'Japan'})
  23 |
  24 |     await page.waitForTimeout(1000);
  25 |
  26 |     await page.locator('#country').selectOption({value:'india'})
  27 |
  28 |     await page.waitForTimeout(1000);
  29 |
  30 |     await page.locator('#country').selectOption('Canada')
  31 |
  32 |     await page.waitForTimeout(1000);
  33 |
  34 |     await page.locator('#country').selectOption({index: 0})
  35 |     
  36 |     await page.waitForTimeout(1000);
  37 |
  38 |     await page.selectOption('#country',{value:'germany'})
  39 |     
  40 |     await page.waitForTimeout(1000);
  41 |
  42 |     // Assertions in dropdown
  43 |     // 1) check number of options in dropdown - Aproach1
  44 |     const option = await page.locator('#country option')
  45 |     await expect(option).toHaveCount(10);
  46 |     await page.waitForTimeout(1000);
  47 |
  48 |     // 2) check number of options in dropdown - Aproach2 using list
  49 |     const allopt = await page.$$('#country option')
  50 |     await expect(allopt.length).toBe(10)
  51 |     console.log('number of options',allopt.length)
  52 |     await page.waitForTimeout(1000);
  53 |
  54 |     // 3) check presence of value in the dropdown - Approach1
  55 |     const content = await page.locator('#country').textContent()
  56 |     await expect(content.includes('France')).toBeTruthy();
  57 |     await page.waitForTimeout(1000);
  58 |
  59 |     // 4) check presence of value in the dropdown - Approach 2 - using looping
  60 |     const optin = await page.$$('#country option')
  61 |     let status = false;
  62 |     for(const op of optin)
  63 |     {
  64 |         console.log(await op.textContent())
  65 |         let values = await op.textContent()
  66 |         if(values.includes('China'))
  67 |         {
  68 |             status = true;
  69 |             break;
  70 |         }
  71 |         
  72 |     }
  73 |     expect.soft(status).toBeTruthy();
  74 |     await page.waitForTimeout(1000);
  75 |
  76 |     
  77 |     
  78 | })
```