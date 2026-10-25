import { test, expect, Locator } from '@playwright/test';

test('Verify Drag and Drop', async ({ page }) => {
     await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    const columnA = page.locator('#column-a');
    const columnB = page.locator('#column-b');

    await columnA.dragTo(columnB);
    await page.pause();

   await page.pause();
});