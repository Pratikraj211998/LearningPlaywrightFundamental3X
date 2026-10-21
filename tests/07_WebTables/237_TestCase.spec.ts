import { test, expect, Locator } from '@playwright/test';

test('Verify the TestCase', async ({ page }) => {
   await page.goto("https://awesomeqa.com/webtable1.html");

   const rows = page.locator('table[summary="Sample Table"] tbody tr');
   const rowCount = await rows.count();

   for(let i=0;i<rowCount;i++){
      // const colsheader = await rows.nth(1).locator('th').allInnerTexts();
      const rowsData = await rows.nth(i).locator('td').allInnerTexts();
      console.log(`Row ${i + 1}:`, rowsData);
     
   }

   await page.pause();
});