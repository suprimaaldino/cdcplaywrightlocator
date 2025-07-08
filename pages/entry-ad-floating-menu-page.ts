import { Page, Locator, expect } from '@playwright/test';

export class adFloatingPage {
    readonly page: Page;
    readonly entryAdLink: Locator
    readonly adModal: Locator
    readonly adModalCloseButton: Locator
    readonly floatingMenuLink: Locator;
    readonly floatingMenu: Locator

    constructor(page: Page) {
        this.page = page;

        this.entryAdLink = page.getByRole('link', { name: 'Entry Ad' });
        this.adModal = page.locator('.modal')
        this.adModalCloseButton = page.locator('.modal-footer > p')
        this.floatingMenuLink = page.getByRole('link', { name: 'Floating Menu' });
        this.floatingMenu = page.locator('#menu');

    }
    async verifyModalPresenceAndClose() {
        await this.entryAdLink.click();
        await expect(this.page).toHaveURL(/.*entry_ad/);
        await expect(this.adModal).toBeVisible();
        await this.adModalCloseButton.click();
        await expect(this.adModal).toBeHidden();
    }

    async verifyFloatingMenuVisibilityOnPageScroll(keyPress: number) {
        await this.floatingMenuLink.click();
        await expect(this.page).toHaveURL(/.*floating_menu/);
        await expect(this.floatingMenu).toBeVisible();
        for (let i = 0; i < keyPress; i++) {
            await this.page.keyboard.press('PageDown');
        }
        await expect(this.floatingMenu).toBeVisible();
    }
}