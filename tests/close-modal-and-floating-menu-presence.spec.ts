import { test } from '../utils/fixture';

// @ui @regression
test.describe('Ad Modal Visibility - Regression Tests', () => {
  test('displays ad modal on page open and allows closing', async ({ home, adFloat }) => {
    await adFloat.verifyModalPresenceAndClose();
  });
});

// @ui @regression
test.describe('Floating Menu Behavior - Regression Tests', () => {
  test('reveals floating menu after scrolling down the page', async ({ home, adFloat }) => {
    await adFloat.verifyFloatingMenuVisibilityOnPageScroll(5);
  });
});