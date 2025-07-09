import { uploadDownloadPage } from '../pages/upload-download-file';
import { test } from '../utils/fixture';

// @ui @regression
test.describe('File Download Feature - Regression Test', () => {
  test('downloads a file successfully', async ({ home, uploadDownload }) => {
    await uploadDownload.verifyDownloadingFile();
  });
});

// @ui @regression
test.describe('File Upload Feature - Regression Test', () => {
  test('uploads a file successfully', async ({ home, uploadDownload }) => {
    await uploadDownload.verifyUploadingFile(); // ← Fixed missing parentheses
  });
});