const{test , expect} = require('@playwright/test');

test('iframe switch', async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');
    // total number of frames
    const allframes = await page.frames();
    console.log('Number of frames :',allframes.length);
    
    // approach 1: using name or url
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1.fill('//input[@name="mytext1"]','hello');

    // approach 2 using frame locator
    const frame2 = await page.frameLocator('//frame[@src="frame_2.html"]').locator('//input[@name="mytext2"]')
    await frame2.fill('hai')

    
})