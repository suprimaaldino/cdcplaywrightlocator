import { Page, Locator, expect } from '@playwright/test';

export class checkboxPage {
    readonly page: Page;
    readonly url: string = 'https://the-internet.herokuapp.com/';

    readonly checkboxesLink: Locator;
    readonly secondCheckbox: Locator;
    readonly firstCheckbox: Locator;


    constructor(page: Page) {
        this.page = page;

        this.checkboxesLink = page.getByRole('link', { name: 'Checkboxes' });
        this.firstCheckbox = page.locator('input[type="checkbox"]').nth(0);
        this.secondCheckbox = page.locator('input[type="checkbox"]').nth(1);

    }
    async checkSingleCheckbox() {
        await this.checkboxesLink.click();
        await expect(this.page).toHaveURL(/.*checkboxes/);
        await this.firstCheckbox.check();
    }

    async checkMultiCheckbox() {
        await this.checkboxesLink.click();
        await expect(this.page).toHaveURL(/.*checkboxes/);
        await this.firstCheckbox.check();
        const isSecondCheckboxChecked = await this.secondCheckbox.isChecked();
        if (!await this.secondCheckbox.isChecked()) {
            await this.secondCheckbox.check();
            console.log('Second checkbox was unchecked—now checked.');
        }
    }

}    