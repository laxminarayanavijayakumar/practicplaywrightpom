const{test , expect} = require('@playwright/test')

test.skip('hover the mouse curser', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const pointer = await page.locator('//button[@class="dropbtn"]')
    const product = await page.locator('//a[text()="Laptops"]')

    // mouse over
    await pointer.hover()
    await page.waitForTimeout(3000);
    await product.hover()

    await page.waitForTimeout(3000);
})

test.skip('mouse right click', async ({page}) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const buttons = await page.locator('//span[text()="right click me"]')

    // mouse over right click
    await buttons.click({button:'right'});
    await page.waitForTimeout(3000);
    
})

test('mouse double click', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const buttons = await page.locator('//button[@ondblclick="myFunction1()"]')
    await buttons.dblclick()

    const field2 = await page.locator('#field2')
    await expect(field2).toHaveValue('Hello World!')

    await page.waitForTimeout(5000);

})