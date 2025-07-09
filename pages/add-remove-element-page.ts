import { Page, Locator, expect } from '@playwright/test';

export class addRemovePage {
  readonly page: Page;
  readonly addElementButton: Locator;
  readonly addRemoveElementLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addRemoveElementLink = page.getByRole('link', { name: 'Add/Remove Elements' });
    this.addElementButton = page.getByRole('button', { name: 'Add Element' });
  }

  async goToAddRemoveElementPage() {
    await this.addRemoveElementLink.click();
    await expect(this.page).toHaveURL(/.*add_remove_elements/);
  }

  async addSingleElementAndDelete() {
    await this.goToAddRemoveElementPage();
    await this.addElementButton.click();
    const deleteButton = this.page.getByRole('button', { name: 'Delete' }).first();
    await expect(deleteButton).toBeVisible({ timeout: 5000 });
    await deleteButton.click();
  }

  async addMultipleElementsAndDelete(items: number) {
    await this.goToAddRemoveElementPage();

    // Tambah elemen
    for (let i = 0; i < items; i++) {
      await this.addElementButton.click();
    }

    // Hapus elemen satu per satu
    for (let i = 0; i < items; i++) {
      const deleteButtons = this.page.getByRole('button', { name: 'Delete' });
      const count = await deleteButtons.count();

      if (count > 0) {
        const deleteButton = deleteButtons.first();
        await expect(deleteButton).toBeVisible({ timeout: 5000 }); // pastikan tombol benar-benar bisa diklik
        await deleteButton.click();
        await this.page.waitForTimeout(200); // beri waktu render ulang
      } else {
        console.warn(`⚠️ No Delete button found on iteration ${i + 1}`);
        break;
      }
    }

    // Verifikasi semua tombol Delete sudah hilang
    await expect(this.page.getByRole('button', { name: 'Delete' })).toHaveCount(0);
  }
}
