import {test, expect} from '@playwright/test';

test("Task 17th Sep", async({page})=>{
    const url:string = "https://app.thetestingacademy.com/playwright/multiple_element_filter"; 
    await page.goto(url);
    await page.locator("#email").fill("Hello@abc.com");
    await page.getByLabel('password').fill("NotAPassword");
    await page.getByRole('checkbox',{name:"Remember me"}).click();
    await page.getByTestId('login-button').click();

    await expect(page.url).not.toEqual(url);
    await page.pause();
})