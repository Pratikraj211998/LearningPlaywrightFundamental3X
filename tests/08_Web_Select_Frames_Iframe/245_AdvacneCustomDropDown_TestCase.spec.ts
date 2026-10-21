import { test, expect, Locator } from '@playwright/test';

test('Verify Advance Custom DropDowns', async ({ page }) => {
   await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

       // ① Single — searchable

   await page.locator('#rs-single').click();
   await page.getByText("Cypress").click()

     // ②  Multi — chips with remove
   await page.locator("#rs-multi").click();
   await page.getByText("Pytest", { exact: true }).click();
   await page.getByText("JUnit", { exact: true }).click();
   await page.keyboard.press("Escape");


    // ③ Creatable multi — type and Enter
    await page.locator("#rs-creatable").click();
    await page.getByText("api-testing", { exact: true }).click();
    await page.getByText("security", { exact: true }).click();
    await page.keyboard.press("Escape");


    // ⑤ Async — fetched on type


    await page.locator("#rs-async").click();
    await page.getByTestId('rs-async-input').fill('de');
    await expect(page.getByTestId('rs-async-menu')).toContainText('Delhi');
    await page.getByRole('option',{ name: "Delhi", exact :true},).click();

   await page.pause();
});