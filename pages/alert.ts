// alert-page.ts
import { Page, Locator, expect } from '@playwright/test';

export class alertPage {
  readonly page: Page;
  readonly alertLink: Locator;
  readonly jsAlertButton: Locator;
  readonly jsConfirmButton: Locator;
  readonly jsPromptButton: Locator;
  readonly resultMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.alertLink = page.getByRole('link', { name: 'JavaScript Alerts' });
    this.jsAlertButton = page.getByRole('button', { name: 'Click for JS Alert', exact: true });
    this.jsConfirmButton = page.getByRole('button', { name: 'Click for JS Confirm', exact: true });
    this.jsPromptButton = page.getByRole('button', { name: 'Click for JS Prompt', exact: true });
    this.resultMessage = page.locator('#result');
  }

async goToAlertPage() {
  await expect(this.alertLink).toBeVisible();
  await this.alertLink.click();
  await expect(this.page).toHaveURL(/.*javascript_alerts/);
}

  async handleJsAlert() {
    await this.goToAlertPage();

    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS Alert');
      await dialog.accept();
    });

    await this.jsAlertButton.click();
    await expect(this.resultMessage).toHaveText('You successfully clicked an alert');
  }

  async handleJsConfirm( accept: boolean) {
    await this.goToAlertPage();

    await Promise.all([
      this.page.waitForEvent('dialog').then(async dialog => {
        expect(dialog.message()).toBe('I am a JS Confirm');
        accept ? await dialog.accept() : await dialog.dismiss();
      }),
      this.jsConfirmButton.click(),
    ]);

    const expectedText = accept ? 'You clicked: Ok' : 'You clicked: Cancel';
    await expect(this.resultMessage).toHaveText(expectedText);
  }

  async handleJsPrompt(inputText: string | null) {
    await this.goToAlertPage();

    await Promise.all([
      this.page.waitForEvent('dialog').then(async dialog => {
        expect(dialog.message()).toBe('I am a JS prompt');
        inputText !== null ? await dialog.accept(inputText) : await dialog.dismiss();
      }),
      this.jsPromptButton.click(),
    ]);

    const expectedText = inputText === null
      ? 'You entered: null'
      : `You entered: ${inputText}`;

    await expect(this.resultMessage).toHaveText(expectedText);
  }
}