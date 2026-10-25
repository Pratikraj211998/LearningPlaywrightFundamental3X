import { test, expect } from '@playwright/test';
import path from 'path';

const URL = 'https://www.patternfly.org/components/file-upload/multiple-file-upload/';

test.describe('FileUpload handling', () => {
   test.beforeEach(async ({ page }) => {
      await page.goto(URL);
   });

   test('upload PDF, JPG, and DOC files from disk', async ({ page }) => {
      const files = [
         path.join(__dirname, 'upload-sample.pdf'),
         path.join(__dirname, 'upload-sample.jpg'),
         path.join(__dirname, 'upload-sample.doc'),
      ];
      files.forEach(file => console.log(file));

      await page.locator('div.pf-v6-c-multiple-file-upload input')
         .setInputFiles(files);

      const uploadArea = page.locator('div.pf-v6-c-multiple-file-upload');
      await expect(uploadArea).toContainText('upload-sample.pdf');
      await expect(uploadArea).toContainText('upload-sample.jpg');
      await expect(uploadArea).toContainText('upload-sample.doc');

      await page.pause();
   });
});