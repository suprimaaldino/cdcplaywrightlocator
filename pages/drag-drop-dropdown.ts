import { Page, Locator, expect } from '@playwright/test';
import { credentials } from '../utils/test-data';

export class dragDropDropdownPage {
    readonly page: Page;
    readonly dragAndDropLink: Locator;
    readonly dropdownLink: Locator;
    readonly boxA: Locator;
    readonly boxB: Locator;
    readonly dropdownList: Locator;

    constructor(page: Page) {
        this.page = page;

        this.dragAndDropLink = page.getByRole('link', { name: 'Drag and Drop' });
        this.dropdownLink = page.getByRole('link', { name: 'Dropdown' });
        this.boxA = page.locator('#column-a');
        this.boxB = page.locator('#column-b');
        this.dropdownList = page.locator ('#dropdown')

    }
    async dragAndDrop() {
        await this.dragAndDropLink.click();
        await expect(this.page).toHaveURL(/.*drag_and_drop/);
        await this.boxA.dragTo(this.boxB);
        await expect(this.boxA.locator('header')).toHaveText('B');
        await expect(this.boxB.locator('header')).toHaveText('A');
    }

    async selectOption(){
        await this.dropdownLink.click();
        await expect(this.page).toHaveURL(/.*dropdown/);
        await this.dropdownList.selectOption({ label: 'Option 1'});
        await expect(this.dropdownList).toHaveValue('1')
        await this.dropdownList.selectOption({ label: 'Option 2'});
        await expect(this.dropdownList).toHaveValue('2')
    }
}