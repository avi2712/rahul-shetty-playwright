import { test } from '@playwright/test';

test('This is my first testcase ', async ({ page }) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/');    

 
 page.locator("#email").fill("Avinashchaugule11@gmail.com");


  await page.fill("#password","Avinashchaugule11@");

  await page.click("#login-btn");
  // THIS IS MY FIRST MY BRANCH COMMIT

  await page.waitForTimeout(2000);
})  