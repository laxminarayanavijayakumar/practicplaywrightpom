const {test , expect} = require('@playwright/test')

test ('launch store' , async({page})=>{

    await page.goto('https://www.demoblaze.com/')

    const pageTitle =await page.title()
    console.log('page title is :',pageTitle)

    await expect(page).toHaveTitle('STORE')

    const pageUrl = page.url()
    console.log('page url :',pageUrl)

    await expect(page).toHaveURL('https://www.demoblaze.com/')
    
    await page.close()

})