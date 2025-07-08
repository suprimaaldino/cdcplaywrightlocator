import { homePage } from '../pages/home-page';
import { test} from '@playwright/test';
import { credentials } from '../utils/test-data';

test('Should login using valid credential', async ({ page }) => {
  const home = new homePage(page);
  await home.loginBasicAuth(credentials.username, credentials.password);
});

