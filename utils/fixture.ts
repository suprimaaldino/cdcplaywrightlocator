import { test as base } from '@playwright/test';
import { homePage } from '../pages/home-page';

type Fixtures = {
  home: homePage;
};

export const test = base.extend<Fixtures>({
  home: async ({ page }, use) => {
    const home = new homePage(page);
    await home.navigateToHomepage();
    await use(home);
  },
});