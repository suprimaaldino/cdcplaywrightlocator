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
  home: async ({ page }, use) => {
    const home = new homePage(page);
    await home.navigateToHomepage();
    await use(home);
  },

  addRemove: async ({ page }, use) => {
    const addRemove = new addRemovePage(page);
    await use(addRemove);
  },

  checkBox: async ({ page }, use) => {
    const checkBox = new checkboxPage(page);
    await use(checkBox);
  },

  contextMenu: async ({ page }, use) => {
    const context = new contextMenuPage(page);
    await use(context);
  },

  dragDropdown: async ({ page }, use) => {
    const dragDropdown = new dragDropDropdownPage(page);
    await use(dragDropdown);
  },

  adFloat: async ({ page }, use) => {
    const adFloat = new adFloatingPage(page);
    await use(adFloat);
  },

  uploadDownload: async ({ page }, use) => {
    const uploadDownload = new uploadDownloadPage(page);
    await use(uploadDownload);
  },

  alert: async ({ page }, use) => {
    const alert = new alertPage(page);
    await use(alert);
  },

  hoverSlider: async ({ page }, use) => {
    const hoverSlider = new hoverSliderPage(page);
    await use(hoverSlider);
  },
});