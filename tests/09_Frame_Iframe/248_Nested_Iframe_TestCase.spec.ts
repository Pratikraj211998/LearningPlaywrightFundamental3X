import { test, expect, Locator, FrameLocator } from '@playwright/test';

test('Verify Advance Custom DropDowns', async ({ page }) => {
  await page.goto('https://selectorshub.com/iframe-scenario/');
  let frame1: FrameLocator = page.frameLocator('#pact1').first();
  let frame2: FrameLocator = frame1.frameLocator('#pact2');
  let frame3: FrameLocator = frame2.frameLocator('#pact3');

  await frame1.locator('#inp_val').first().fill('Aishwarya Rai');
  await frame2.locator('#jex').fill('Wife');
  await frame3.locator('#glaf').fill('Playwright');

  const headerText = await frame1.locator('h3').innerText();
  console.log(headerText);
  await page.waitForTimeout(5000);
  page.keyboard


  await page.pause();
});