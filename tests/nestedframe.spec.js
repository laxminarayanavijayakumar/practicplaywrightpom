const{test , expect} = require('@playwright/test');

test('nested iframes', async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame3.fill('//input[@name="mytext3"]','welcome')
    // nested frame
    const childframe = await frame3.childFrames()
    await childframe[0].locator('(//div[@class="AB7Lab Id5V1"])[1]').check();
    await page.waitForTimeout(5000);
})