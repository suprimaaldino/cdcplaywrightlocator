import { Page, Locator, expect, test } from '@playwright/test';
import fs from 'fs';
import path from 'path';

export class uploadDownloadPage {
  readonly page: Page;

  readonly fileDownloadLink: Locator;
  readonly fileUploadLink: Locator;
  readonly chooseFileButton: Locator;
  readonly uploadButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fileDownloadLink = page.getByRole('link', { name: 'File Download', exact: true });
    this.fileUploadLink = page.getByRole('link', { name: 'File Upload', exact: true });
    this.chooseFileButton = page.locator('#file-upload');
    this.uploadButton = page.locator('.button');
    this.successMessage = page.locator('#uploaded-files');
  }

  async verifyDownloadingFile() {
    await this.fileDownloadLink.click();
    await expect(this.page).toHaveURL(/.*download/);

    const fileDownload = this.page.getByRole('link', { name: /LambdaTest\.txt/i });
    await fileDownload.waitFor({ state: 'visible', timeout: 15000 });

    const rawText = await fileDownload.textContent();
    const fileName = rawText?.trim();
    if (!fileName) throw new Error('❌ Missing download link name');

    const timestamp = Date.now();
    const sanitizedName = fileName.replace(/\s+/g, '-').toLowerCase().replace(/\.[^/.]+$/, '');
    const finalFileName = `${sanitizedName}-${timestamp}.txt`;
    const downloadsDir = path.resolve('downloads');
    const finalFilePath = path.join(downloadsDir, finalFileName);

    // Ensure downloads dir exists
    if (!fs.existsSync(downloadsDir)) {
      fs.mkdirSync(downloadsDir, { recursive: true });
    }

    // Clean up existing file (optional)
    if (fs.existsSync(finalFilePath)) {
      try {
        fs.unlinkSync(finalFilePath);
      } catch (err) {
        console.warn(`⚠️ Failed to remove old file: ${finalFilePath}`);
      }
    }

    // Detect browser
    const browserName = this.page.context().browser()?.browserType().name();
    if (browserName === 'webkit') {
      console.warn('⚠️ Download event is unreliable in WebKit. Skipping file saving validation.');
      await fileDownload.click(); // simulate download click
      test.skip(true, 'Skipping download test for WebKit/Safari due to unreliability.');
      return;
    }

    // Normal download flow
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      fileDownload.click(),
    ]);

    await download.saveAs(finalFilePath);
    const suggested = download.suggestedFilename();
    expect(suggested).toContain(fileName);
  }

  async verifyUploadingFile() {
    await this.fileUploadLink.click();
    await expect(this.page).toHaveURL(/.*upload/);

    const fileName = 'sampleFile.txt';
    const uploadsDir = path.resolve('uploads');
    const filePath = path.join(uploadsDir, fileName);

    // Ensure uploads directory exists
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Create sample file if missing
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, 'This is a test file for upload.\nLine 2.\nLine 3.');
      console.info(`📄 Created test file at ${filePath}`);
    }

    // Optional: warn if file is too small
    const stats = fs.statSync(filePath);
    if (stats.size < 100) {
      console.warn('⚠️ File is small. Safari might silently skip upload. Use >100 bytes for reliability.');
    }

    // Upload flow
    await this.chooseFileButton.setInputFiles(filePath);
    await this.uploadButton.click();

    // Wait for confirmation
    await expect(this.successMessage).toBeVisible({ timeout: 7000 });
    const uploadedText = await this.successMessage.textContent();
    expect(uploadedText?.trim()).toContain(fileName);
  }
}
