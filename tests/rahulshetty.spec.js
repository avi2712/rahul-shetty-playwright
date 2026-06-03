import { test } from '@playwright/test';

test('this is my test avinash ', async ({ page }) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/');    

    await page.waitForTimeout(2000);
})  