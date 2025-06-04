import { test , expect } from '@playwright/test'

test('page screenshot', async ({page}) => {

    await page.goto('https://demo.opencart.com.gr/')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'})
    
})

test('full page screenshot', async ({page}) => {

    await page.goto('https://demo.opencart.com.gr/')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'FullPage.png',fullPage:true})
    
})

test('element screenshot', async ({page}) => {

    await page.goto('https://demo.opencart.com.gr/')
    await page.locator('(//div[@class="product-thumb transition"])[2]').screenshot({path:'tests/screenshots/'+Date.now()+'Iphone.png'})
    
})