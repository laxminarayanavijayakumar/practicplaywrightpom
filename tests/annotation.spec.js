const {test , expect} = require('@playwright/test');

// test.skip('test1', async ({page}) => {
//     console.log('this is test1..')
// })

// test.only('test2', async ({page}) => {
//     console.log('this is test2..')
// })

// test('test3', async ({page,browserName}) => {

//     console.log('this is test3..')

//     if(browserName == 'firefox'){
//         test.skip();
//     }
    
// })

// Fixme
test('test4', async ({page}) => {

    test.fixme()
    console.log('this is test4..')
    
})


test('test5', async ({page}) => {

    test.fail()
    console.log('this is test5..')
    expect(3).toBe(2);
})