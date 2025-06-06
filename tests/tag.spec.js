import {test , expect} from '@playwright/test';

test('test1',{ tag: '@sanity'}, async ({page}) => {
    await page.goto('https://www.google.com/')
    console.log(await page.title());
    await expect(page).toHaveTitle('Google')
    console.log('this is my test1...')

})

test('test2 @sanity', async ({page}) => {
    await page.goto('https://www.google.com/')
    console.log(await page.title());
    await expect(page).toHaveTitle('Google')
    console.log('this is my test2...')
    
})

test('test3 @reg', async ({page}) => {
    await page.goto('https://www.google.com/')
    console.log(await page.title());
    await expect(page).toHaveTitle('Google')
    console.log('this is my test3...')
})

test('test4 @reg', async ({page}) => {
    await page.goto('https://www.google.com/')
    console.log(await page.title());
    await expect(page).toHaveTitle('Google')
    console.log('this is my test4...')
})

test('test5 @reg', async ({page}) => {
    await page.goto('https://www.google.com/')
    console.log(await page.title());
    await expect(page).toHaveTitle('Google')
    console.log('this is my test5...')
})

test('test5 @sanity ', async ({page}) => {
    await page.goto('https://www.google.com/')
    console.log(await page.title());
    await expect(page).toHaveTitle('Google')
    console.log('this is my test5...')
})