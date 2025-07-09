import { test as base } from '@playwright/test';
import { homePage } from '../pages/home-page';
import { addRemovePage } from '../pages/add-remove-element-page';
import { checkboxPage } from '../pages/checkbox-page';
import { contextMenuPage } from '../pages/context-menu-page';
import { dragDropDropdownPage } from '../pages/drag-drop-dropdown';
import { adFloatingPage } from '../pages/entry-ad-floating-menu-page';
import { uploadDownloadPage } from '../pages/upload-download-file';
import { alertPage } from '../pages/alert';
import { hoverSliderPage } from '../pages/hover-and-slider-page';

type Fixtures = {
  home: homePage;
  addRemove: addRemovePage;
  checkBox: checkboxPage;
  contextMenu: contextMenuPage;
  dragDropdown: dragDropDropdownPage;
  adFloat: adFloatingPage;
  uploadDownload: uploadDownloadPage;
  alert: alertPage;
  hoverSlider: hoverSliderPage;
};

export const test = base.extend<Fixtures>({
  // Navigate once at beginning
  home: async ({ page }, use) => {
    const home = new homePage(page);
    await home.navigateToHomepage(); // only once here
    await use(home);
  },

  addRemove: async ({ page }, use) => {
    await use(new addRemovePage(page));
  },

  checkBox: async ({ page }, use) => {
    await use(new checkboxPage(page));
  },

  contextMenu: async ({ page }, use) => {
    await use(new contextMenuPage(page));
  },

  dragDropdown: async ({ page }, use) => {
    await use(new dragDropDropdownPage(page));
  },

  adFloat: async ({ page }, use) => {
    await use(new adFloatingPage(page));
  },

  uploadDownload: async ({ page }, use) => {
    await use(new uploadDownloadPage(page));
  },

  alert: async ({ page }, use) => {
    await use(new alertPage(page));
  },

  hoverSlider: async ({ page }, use) => {
    await use(new hoverSliderPage(page));
  },
});
