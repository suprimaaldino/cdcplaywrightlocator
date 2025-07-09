import { Page, Locator, expect } from '@playwright/test';

export class homePage {
  readonly page: Page;
  readonly url: string = 'https://the-internet.herokuapp.com/';
  readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByText('Welcome to the-internet');
  }

  async navigateToHomepage() {
    await this.page.goto(this.url);
    await expect(this.pageTitle).toHaveText('Welcome to the-internet');
  }

  async loginBasicAuth(username: string, password: string) {
    await this.page.goto(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`);
    const successMsg = this.page.getByText('Congratulations! You must have the proper credentials.');
    await expect(successMsg).toHaveText("Congratulations! You must have the proper credentials.");
  }
}
