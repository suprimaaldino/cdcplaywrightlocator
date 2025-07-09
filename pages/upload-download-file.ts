import { Page, Locator, expect } from '@playwright/test';
import fs from 'fs';

export class uploadDownloadPage {
  readonly page: Page;

  readonly fileDownloadLink: Locator;
  readonly fileUploadLink: Locator;
  readonly fileDownload: Locator;
  readonly chooseFileButton: Locator;
  readonly uploadButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fileDownloadLink = page.getByRole('link', { name: 'File Download', exact: true });
    this.fileUploadLink = page.getByRole('link', { name: 'File Upload', exact: true });
    this.fileDownload = page.getByRole('link', { name: 'LambdaTest.txt' });
    this.chooseFileButton = page.locator('#file-upload');
    this.uploadButton = page.locator('.button');
    this.successMessage = page.locator('#uploaded-files');
  }

  async verifyDownloadingFile() {
    await this.fileDownloadLink.click();
    await expect(this.page).toHaveURL(/.*download/);

    await expect(this.fileDownload).toBeVisible({ timeout: 8000 }); // make sure link appears

    const rawText = await this.fileDownload.textContent();
    const fileName = rawText?.trim();
    if (!fileName) throw new Error('Missing download link name');

    const timestamp = Date.now();
    const sanitizedName = fileName.replace(/\s+/g, '-').toLowerCase().replace(/\.[^/.]+$/, '');
    const finalFileName = `${sanitizedName}-${timestamp}.txt`;

    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.fileDownload.click()
    ]);

    await download.saveAs(`downloads/${finalFileName}`);
    const suggested = download.suggestedFilename();
    expect(suggested).toContain(fileName);
  }

  async verifyUploadingFile() {
    await this.fileUploadLink.click();
    await expect(this.page).toHaveURL(/.*upload/);

    const fileName = 'sampleFile.txt';
    const filePath = `uploads/${fileName}`;

    if (!fs.existsSync(filePath)) {
      throw new Error(`Upload file not found at ${filePath}`);
    }

    await this.chooseFileButton.setInputFiles(filePath);
    await this.uploadButton.click();
    await expect(this.successMessage).toHaveText(fileName);
  }
}