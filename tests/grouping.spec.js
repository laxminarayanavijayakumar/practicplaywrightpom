import {test , expect} from '@playwright/test'

test.beforeAll(async () => {
    console.log('this is before all hooks...')
})

test.afterAll(async () => {
    console.log('this is afterall hooks...')
})

test.beforeEach(async () => {
    console.log('this is beforeeach hooks...')
})

test.afterEach(async () => {
    console.log('this is aftereach hook..')
})

test.describe('group1',()=>{

    test('test1', async ({page}) => {

    console.log('this is test1...')
    
})

test('test2', async ({page}) => {

    console.log('this is test2...')
    
})

});

test.describe('group2',()=>{

    test('test3', async ({page}) => {

    console.log('this is test3...')
    
})

test('test4', async ({page}) => {

    console.log('this is test4...')
    
})

});
