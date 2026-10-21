import { test, expect, Locator, FrameLocator } from '@playwright/test';

test('Verify Advance Custom DropDowns', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

  let mainFrame: FrameLocator = await page.frameLocator('[name="main"]');
  const headerText = await mainFrame.locator('h2').innerText();
  console.log(headerText);


    const allFrames: Locator[] = await page.locator('//frame').all();
    console.log('total number of frames: ' + allFrames.length);

     for (const frame of allFrames) {
        console.log(await frame.getAttribute('name'), ': ', await frame.getAttribute('src'));

    }


    let sideFrame: FrameLocator = await page.frameLocator('[name="side"]');
    await sideFrame.getByTestId('side-link-registration').click();

    

  await page.pause();
});