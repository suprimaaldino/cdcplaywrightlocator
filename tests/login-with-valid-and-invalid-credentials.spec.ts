import { credentials } from '../utils/test-data';
import { test } from '../utils/fixture';

// @auth @regression @ui
test.describe('Basic Authentication - Regression Test', () => {
  test('logs in successfully with valid credentials', async ({ home }) => {
    await home.loginBasicAuth(credentials.username, credentials.password);
  });
});