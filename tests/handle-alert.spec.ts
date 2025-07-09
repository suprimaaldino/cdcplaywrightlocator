import { test } from '../utils/fixture';

// @ui @regression
test.describe('JavaScript Alert Handling - Regression Suite', () => {
  test('handles a JS alert popup with OK button', async ({ home, alert }) => {
    await test.step('Handle JS alert with OK', async () => {
      await alert.handleJsAlert();
    });
  });

  test('handles JS confirm popup with OK and Cancel', async ({ home, alert }) => {
    await test.step('Handle JS confirm with OK', async () => {
      await alert.handleJsConfirm(true);
    });

    await test.step('Navigate back to homepage', async () => {
      await home.navigateToHomepage();
    });

    await test.step('Handle JS confirm with Cancel', async () => {
      await alert.handleJsConfirm(false);
    });
  });

  test('handles JS prompt popup with input and cancel', async ({ home, alert }) => {
    await test.step('Handle JS prompt with custom input', async () => {
      await alert.handleJsPrompt('Marvel is better than DC');
    });

    await test.step('Navigate back to homepage', async () => {
      await home.navigateToHomepage();
    });

    await test.step('Handle JS prompt with Cancel', async () => {
      await alert.handleJsPrompt(null);
    });
  });
});