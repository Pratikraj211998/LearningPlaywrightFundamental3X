import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
//   await page.getByRole('textbox', { name: 'Email Address' }).click();
//   await page.getByRole('textbox', { name: 'Email Address' }).fill('pratik');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('Pass@123');
//   await page.getByTestId('login-button').click();
//   //await page.waitForTimeout(50000);
// });


test('test', async ({ page }) => {
  await page.goto('https://app.fairplay-mobile.com/');
  await page.getByRole('button', { name: 'ACCEPT' }).click();
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('textbox', { name: 'Enter email or username' }).click();
  await page.getByRole('textbox', { name: 'Enter email or username' }).fill('Pradeep.Sahoo@tecnotree.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Test@007');
  await page.getByRole('button', { name: 'SIGN IN' }).click();
  //await page.waitForTimeout(50000);
});
