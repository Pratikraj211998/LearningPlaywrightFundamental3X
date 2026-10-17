import { test, expect} from '@playwright/test'

test('tc#1 - Verify that the vwo page is laoded', async({page})=>{

    await page.goto("https://katalon-demo-cura.herokuapp.com",{
        waitUntil: 'domcontentloaded',
        timeout:3000,
        referer:"https://sdet.live"
    });


    let makapp = page.locator("#btn-make-appointment");
    let username = page.locator("#txt-username");
    let password = page.locator("#txt-password");
    let loginbutton = page.locator("#btn-login");
    let verifyText= page.locator("//h2[text()='Make Appointment']")
    await makapp.click();
    await username.fill("John Doe");
    await password.fill("ThisIsNotAPassword");
    await loginbutton.click();
    await expect(verifyText).toContainText("Make Appointment");
    
    // let error_message = page.locator('#js-notification-box-msg');

    // await expect(error_message).toContainText("Your email, password, IP address or location did not match");
     await page.pause();



});