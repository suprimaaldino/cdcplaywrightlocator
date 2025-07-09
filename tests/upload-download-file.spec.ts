import { test } from '../utils/fixture'; 
import { uploadDownloadPage } from '../pages/upload-download-file'; 

// @ui @regression
test.describe('File Download Feature - Regression Test', () => {
  test('Should download a file successfully', async ({ home,uploadDownload }) => {
    await uploadDownload.verifyDownloadingFile();
  });
});

// @ui @regression
test.describe('File Upload Feature - Regression Test', () => {
  test('Should upload a file successfully', async ({ home,uploadDownload }) => {
    await uploadDownload.verifyUploadingFile();
  });
});
