import { Page, Locator, expect } from '@playwright/test';

export class addRemovePage {
  readonly page: Page;
  readonly addElementButton: Locator;
  readonly deleteElementButton: Locator;
  readonly addRemoveElementLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addRemoveElementLink = page.getByRole('link', { name: 'Add/Remove Elements' });
    this.addElementButton = page.getByRole('button', { name: 'Add Element' });
    this.deleteElementButton = page.getByRole('button', { name: 'Delete' });
  }
  async goToAddRemoveElementPage() {
    await this.addRemoveElementLink.click();
    await expect(this.page).toHaveURL(/.*add_remove_elements/);
  }


  async addSingleElementAndDelete() {
    await this.goToAddRemoveElementPage();
    await this.addElementButton.click();
    await this.deleteElementButton.click();
  }

  async addMultipleElementsAndDelete(items: number) {
    await this.goToAddRemoveElementPage();
    for (let i = 0; i < items; i++) {
      await this.addElementButton.click();
      await this.page.waitForTimeout(3000);
    }

    for (let i = 0; i < items; i++) {
      if (await this.deleteElementButton.count() > 0) {
        await this.deleteElementButton.first().click();
      } else {
        console.warn(`No Delete button found on iteration ${i + 1}`);
        break;
      }
    }
  }
}