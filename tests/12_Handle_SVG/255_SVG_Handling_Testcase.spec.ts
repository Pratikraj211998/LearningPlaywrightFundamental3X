import {test, expect, Locator} from '@playwright/test';


test.describe('SVG Elements', () => {

    const URL = "https://www.flipkart.com/search";

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Testcase!");
        await page.goto(URL);
    });

test('Verify the SVG elements', async ({ page }) => {

    await page.locator('input[name="q"]').fill('macmini');
    const svgElement: Locator = page.locator('svg');
    await svgElement.first().click();

    await page.waitForLoadState('networkidle');

    const titleResults : Locator = page.locator('//div[contains(@data-id,"MPC") or contains(@data-id,"CPU") or contains(@data-id,"COM") or contains(@data-id,"MP")]//div/a[2]');

    const count : number = await titleResults.count();
    for (let i = 0; i < count; i++) {
        const title : string | null = await titleResults.nth(i).textContent();
        console.log(title);
    
    }
    
    
    
    //div[contains(@data-id,'MPC') or contains(@data-id,'CPU') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]

    await page.pause();         
});

});