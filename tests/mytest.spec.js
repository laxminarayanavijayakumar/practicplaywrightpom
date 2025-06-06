import { test, expect } from '@playwright/test';
// import fs from 'fs';
// import { parse } from 'csv-parse/sync';

// const records = parse(fs.readFileSync("./TestData/userdata.csv"),{

//   columns:true,
//   skip_empty_lines:true,
// })

test('test', async ({ page }) => {
  // console.log(records);

  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');

  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});