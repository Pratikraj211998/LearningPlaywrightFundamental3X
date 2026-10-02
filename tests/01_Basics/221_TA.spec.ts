import { test, expect } from '@playwright/test';
//import{ test ,expect} from '@playwright/test';

test("Navigating to the tta website", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/");
});

test("Navigating to the sdet.live website", async ({ page }) => {
    await page.goto("https://sdet.live");
});

test("navigate to scroltest.com",async ({page}) =>{
    await page.goto("https://scrolltest.com");
});

test("BCP - in app.vwo.com two roles", async ({ browser }) => {

    let adminContext = await browser.newContext();
    let userContext = await browser.newContext();
    let guestConetxt = await browser.newContext();

    let adminPage = await adminContext.newPage();
    //let adminPage1 = await adminContext.newPage();
    await adminPage.goto("https://app.thetestingacademy.com/playwright/");
   // await adminPage1.goto("https://scrolltest.com");


    let userPage = await userContext.newPage();
    await userPage.goto("https://sdet.live");

   let guestPage = await guestConetxt.newPage();
   await guestPage.goto("https://scrolltest.com");


   await adminPage.close();
   await userPage.close();
   await guestPage.close();
    

});