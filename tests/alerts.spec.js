const{test , expect} = require('@playwright/test');

test('dialogs alert', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept();
    })
    await page.click('//button[@onclick="myFunctionAlert()"]');
    await page.waitForTimeout(5000);

})

test('dialogs conformation alert dismiss', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.dismiss();
    })
    await page.click('//button[@onclick="myFunctionConfirm()"]');
    await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');
    await page.waitForTimeout(5000);

})

test('dialogs conformation alert accepted', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();
    })
    await page.click('//button[@onclick="myFunctionConfirm()"]');
    await expect(page.locator('#demo')).toHaveText('You pressed OK!');
    await page.waitForTimeout(5000);

})

test('dialogs prompt alert dismiss', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.dismiss();
    })
    await page.click('//button[@onclick="myFunctionPrompt()"]');
    await expect(page.locator('#demo')).toHaveText('User cancelled the prompt.');
    await page.waitForTimeout(5000);

})

test('dialogs prompt alert accepted', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('laxminarayana');
    })
    await page.click('//button[@onclick="myFunctionPrompt()"]');
    await expect(page.locator('#demo')).toHaveText('Hello laxminarayana! How are you today?');
    await page.waitForTimeout(5000);

})