const{test ,expect} = require('@playwright/test');

test('drag and drop', async ({page}) => {

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette');

    // approach 1
    const oslo = await page.locator('#box1')
    const norway = await page.locator('#box101')

    await oslo.hover()
    await page.mouse.down()

    await norway.hover()
    await page.mouse.up()

    await page.waitForTimeout(5000);

    // approach 2
    const Washington = await page.locator('#box3')
    const UnitedStates = await page.locator('#box103')
    await Washington.dragTo(UnitedStates);
    
    const Stockholm = await page.locator('#box2')
    const Sweden = await page.locator('#box102')
    await Stockholm.dragTo(Sweden);

    const Copenhagen = await page.locator('#box4')
    const Denmark = await page.locator('#box104')
    await Copenhagen.dragTo(Denmark);

    const Seoul = await page.locator('#box5')
    const SouthKorea = await page.locator('#box105')
    await Seoul.dragTo(SouthKorea);

    const Rome = await page.locator('#box6')
    const Italy = await page.locator('#box106')
    await Rome.dragTo(Italy);

    const Madrid = await page.locator('#box7')
    const Spain = await page.locator('#box107')
    await Madrid.dragTo(Spain);

    await page.waitForTimeout(5000);
})