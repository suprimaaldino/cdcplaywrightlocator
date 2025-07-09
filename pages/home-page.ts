import { Page, Locator, expect } from '@playwright/test';
import { credentials } from '../utils/test-data';

export class homePage {
  readonly page: Page;
  readonly url: string = 'https://the-internet.herokuapp.com/';
  readonly digestAuthLink: Locator;
  readonly dragAndDropLink: Locator;
  readonly dropdownLink: Locator;
  readonly dynamicContentLink: Locator;
  readonly dynamicControlsLink: Locator;
  readonly exitIntentLink: Locator;
  readonly fileDownloadLink: Locator;
  readonly fileUploadLink: Locator;
  readonly floatingMenuLink: Locator;
  readonly forgotPasswordLink: Locator;
  readonly formAuthenticationLink: Locator;
  readonly framesLink: Locator;
  readonly geolocationLink: Locator;
  readonly horizontalSliderLink: Locator;
  readonly hoversLink: Locator;
  readonly infiniteScrollLink: Locator;
  readonly inputsLink: Locator;
  readonly jqueryUIMenusLink: Locator;
  readonly keyPressesLink: Locator;
  readonly largeAndDeepDomLink: Locator;
  readonly multipleWindowsLink: Locator;
  readonly nestedFramesLink: Locator;
  readonly notificationMessagesLink: Locator;
  readonly redirectLink: Locator;
  readonly secureFileDownloadLink: Locator;
  readonly shadowDomLink: Locator;
  readonly shiftingContentLink: Locator;
  readonly statusCodesLink: Locator;
  readonly tablesLink: Locator;
  readonly typosLink: Locator;
  readonly windowsLink: Locator;
  readonly pageTitle: Locator;


  constructor(page: Page) {
    this.page = page;
    
    this.digestAuthLink = page.getByRole('link', { name: 'Digest Authentication' });
    this.dragAndDropLink = page.getByRole('link', { name: 'Drag and Drop' });
    this.dropdownLink = page.getByRole('link', { name: 'Dropdown' });
    this.dynamicContentLink = page.getByRole('link', { name: 'Dynamic Content' });
    this.dynamicControlsLink = page.getByRole('link', { name: 'Dynamic Controls' });
    this.exitIntentLink = page.getByRole('link', { name: 'Exit Intent' });
    this.fileDownloadLink = page.getByRole('link', { name: 'File Download' });
    this.fileUploadLink = page.getByRole('link', { name: 'File Upload' });
    this.floatingMenuLink = page.getByRole('link', { name: 'Floating Menu' });
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Password' });
    this.formAuthenticationLink = page.getByRole('link', { name: 'Form Authentication' });
    this.framesLink = page.getByRole('link', { name: 'Frames' });
    this.geolocationLink = page.getByRole('link', { name: 'Geolocation' });
    this.horizontalSliderLink = page.getByRole('link', { name: 'Horizontal Slider' });
    this.hoversLink = page.getByRole('link', { name: 'Hovers' });
    this.infiniteScrollLink = page.getByRole('link', { name: 'Infinite Scroll' });
    this.inputsLink = page.getByRole('link', { name: 'Inputs' });
    this.jqueryUIMenusLink = page.getByRole('link', { name: 'JQuery UI Menus' });
    this.keyPressesLink = page.getByRole('link', { name: 'Key Presses' });
    this.largeAndDeepDomLink = page.getByRole('link', { name: 'Large & Deep DOM' });
    this.multipleWindowsLink = page.getByRole('link', { name: 'Multiple Windows' });
    this.nestedFramesLink = page.getByRole('link', { name: 'Nested Frames' });
    this.notificationMessagesLink = page.getByRole('link', { name: 'Notification Messages' });
    this.redirectLink = page.getByRole('link', { name: 'Redirect Link' });
    this.secureFileDownloadLink = page.getByRole('link', { name: 'Secure File Download' });
    this.shadowDomLink = page.getByRole('link', { name: 'Shadow DOM' });
    this.shiftingContentLink = page.getByRole('link', { name: 'Shifting Content' });
    this.statusCodesLink = page.getByRole('link', { name: 'Status Codes' });
    this.tablesLink = page.getByRole('link', { name: 'Tables' });
    this.typosLink = page.getByRole('link', { name: 'Typos' });
    this.windowsLink = page.getByRole('link', { name: 'Windows' });
    this.pageTitle = page.getByText('Welcome to the-internet');
  
  }
async navigateToHomepage() {
    await this.page.goto(this.url);
    await expect(this.pageTitle).toHaveText('Welcome to the-internet');
  }
async loginBasicAuth(username: string, password: string) {
  await this.page.goto(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`);
  const successMsg = this.page.getByText('Congratulations! You must have the proper credentials.');
  await expect(successMsg).toHaveText("Congratulations! You must have the proper credentials.");
}
}