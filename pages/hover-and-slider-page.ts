import { Page, Locator, expect } from '@playwright/test';

export class hoverSliderPage {
    readonly page: Page;
    readonly hoversLink: Locator;
    readonly horizontalSliderLink: Locator;

    readonly firstName: Locator;
    readonly firstViewProfileLink: Locator;
    readonly firstAvatar: Locator;

    readonly secondName: Locator;
    readonly secondViewProfileLink: Locator;
    readonly secondAvatar: Locator;

    readonly thirdName: Locator;
    readonly thirdViewProfileLink: Locator;
    readonly thirdAvatar: Locator;

    readonly sliderContainer: Locator;
    readonly sliderCounter: Locator;

    constructor(page: Page) {
        this.page = page;

        this.horizontalSliderLink = page.getByRole('link', { name: 'Horizontal Slider' });
        this.hoversLink = page.getByRole('link', { name: 'Hovers' });

        this.firstName = page.locator('.figure').nth(0).locator('h5');
        this.firstViewProfileLink = page.locator('.figure').nth(0).locator('a');
        this.firstAvatar = page.locator('.figure').nth(0).locator('img');

        this.secondName = page.locator('.figure').nth(1).locator('h5');
        this.secondViewProfileLink = page.locator('.figure').nth(1).locator('a');
        this.secondAvatar = page.locator('.figure').nth(1).locator('img');

        this.thirdName = page.locator('.figure').nth(2).locator('h5');
        this.thirdViewProfileLink = page.locator('.figure').nth(2).locator('a');
        this.thirdAvatar = page.locator('.figure').nth(2).locator('img');

        this.sliderContainer = page.locator('input[type="range"]');
        this.sliderCounter = page.locator('#range');
    }

    async goToHoverPage() {
        await this.hoversLink.click();
        await expect(this.page).toHaveURL(/.*hovers/);
    }
    async goToSliderPage() {
        await this.horizontalSliderLink.click();
        await expect(this.page).toHaveURL(/.*horizontal_slider/);
    }

    async hoverFirstAvatarImage() {
        await this.goToHoverPage();
        await this.firstAvatar.hover();
        await expect(this.firstName).toContainText('user1');
        await expect(this.firstViewProfileLink).toBeVisible();
        await this.firstViewProfileLink.click();
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/users/1');

    }
    async hoverSecondAvatarImage() {
        await this.goToHoverPage();
        await this.secondAvatar.hover();
        await expect(this.secondName).toContainText('user2');
        await expect(this.secondViewProfileLink).toBeVisible();
        await this.secondViewProfileLink.click();
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/users/2');
    }

    async hoverThirdAvatarImage() {
        await this.goToHoverPage();
        await this.thirdAvatar.hover();
        await expect(this.thirdName).toContainText('user3');
        await expect(this.thirdViewProfileLink).toBeVisible();
        await this.thirdViewProfileLink.click();
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/users/3')
    }
    async moveTheSlider() {
        const keyPress1 = 10;
        await this.goToSliderPage();
        for (let i = 0; i < keyPress1; i++) {
            await this.sliderContainer.press('ArrowLeft');
        }
        const keyPress2 = 5;
        for (let i = 0; i < keyPress2; i++) {
            await this.sliderContainer.press('ArrowRight');
        }

        const expectedValue = (keyPress2 * 0.5).toFixed(1);
        await expect(this.sliderCounter).toHaveText(expectedValue);
    };
}