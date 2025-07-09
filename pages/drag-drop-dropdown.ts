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
    this.dropdownList = page.locator('#dropdown');
  }

  async dragAndDrop() {
    await this.dragAndDropLink.click();
    await expect(this.page).toHaveURL(/.*drag_and_drop/);

    await expect(this.boxA).toBeVisible({ timeout: 6000 });
    await expect(this.boxB).toBeVisible({ timeout: 6000 });

    // Detect browser
    const browserName = this.page.context().browser()?.browserType().name();
    const isWebKit = browserName === 'webkit';

    if (isWebKit) {
      // Fallback method: simulate drag-drop via JavaScript (WebKit doesn't support dragTo well)
      await this.simulateHtml5DragAndDrop('#column-a', '#column-b');
      await this.page.waitForTimeout(500);
    } else {
      // Normal drag for Chromium/Firefox
      await this.boxA.dragTo(this.boxB);
      await this.page.waitForTimeout(300); // Give time for DOM update
    }

    // Validate content after drag-and-drop
    await expect.poll(async () => {
      return await this.boxA.locator('header').textContent();
    }, {
      timeout: 5000,
      message: 'Expect Box A header to be "B"'
    }).toContain('B');

    await expect.poll(async () => {
      return await this.boxB.locator('header').textContent();
    }, {
      timeout: 5000,
      message: 'Expect Box B header to be "A"'
    }).toContain('A');
  }

  async simulateHtml5DragAndDrop(sourceSelector: string, targetSelector: string) {
    await this.page.evaluate(
      ({ sourceSelector, targetSelector }) => {
        const source = document.querySelector(sourceSelector) as HTMLElement;
        const target = document.querySelector(targetSelector) as HTMLElement;

        if (!source || !target) throw new Error('Drag source or target not found');

        const dataTransfer = new DataTransfer();
        const dragStart = new DragEvent('dragstart', { bubbles: true, cancelable: true, dataTransfer });
        source.dispatchEvent(dragStart);

        const drop = new DragEvent('drop', { bubbles: true, cancelable: true, dataTransfer });
        target.dispatchEvent(drop);

        const dragEnd = new DragEvent('dragend', { bubbles: true, cancelable: true, dataTransfer });
        source.dispatchEvent(dragEnd);
      },
      { sourceSelector, targetSelector }
    );
  }

  async selectOption() {
    await this.dropdownLink.click();
    await expect(this.page).toHaveURL(/.*dropdown/);

    await expect(this.dropdownList).toBeVisible({ timeout: 4000 });

    await this.dropdownList.selectOption({ label: 'Option 1' });
    await expect(this.dropdownList).toHaveValue('1');

    await this.dropdownList.selectOption({ label: 'Option 2' });
    await expect(this.dropdownList).toHaveValue('2');
  }
}
