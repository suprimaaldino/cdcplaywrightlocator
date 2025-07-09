import { Page, Locator, expect } from '@playwright/test';

export class contextMenuPage {
    readonly page: Page;
    readonly contextMenuLink: Locator;
    readonly contextMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.contextMenuLink = page.getByRole('link', { name: 'Context Menu' });
        this.contextMenu = page.locator('#hot-spot');
    }

    async rightClickMenu() {
        await this.contextMenuLink.click();
        await expect(this.page).toHaveURL(/.*context_menu/);

        this.page.once('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            expect(dialog.message()).toBe('You selected a context menu');
            await dialog.accept();
        });

        await this.contextMenu.click({ button: 'right' });
    }
}