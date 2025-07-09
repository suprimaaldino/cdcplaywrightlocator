import { uploadDownloadPage } from '../pages/upload-download-file';
import { test } from '../utils/fixture';

test('Should user able to download file', async ({ home, uploadDownload }) => {
  await uploadDownload.verifyDownloadingFile();
});

test('Should user is able to upload file', async ({home,uploadDownload}) => {
 await uploadDownload.verifyUploadingFile
});