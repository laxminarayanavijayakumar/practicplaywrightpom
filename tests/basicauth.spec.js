import {test , expect} from '@playwright/test';
import { buffer } from 'stream/consumers';

test('basic auth tech', async ({page}) => {
// defined the basic auth credentials
    const usernsme = 'admin';
    const password = 'admin';
// encode the credentials as base64 string
const base64Credentials = Buffer.from(`${usernsme}:${password}`).toString('base64');

// set up the require interceptor to handle the basic auth

await page.route('**/*',(route)=>{
    const headers = {
        'Authorization' :`Basic ${base64Credentials}`,
    };
    route.continue({headers});
});

    await page.goto('https://the-internet.herokuapp.com/basic_auth')
    const text = await page.locator('//div[@class="example"]//p').textContent()
    expect(text).toContain('Congratulations')
    await page.waitForTimeout(3000);
    
})

test.only('another way to basic auth', async ({page}) => {

    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    const text = await page.locator('//div[@class="example"]//p').textContent()
    expect(text).toContain('Congratulations')
    await page.waitForTimeout(3000);
    
})