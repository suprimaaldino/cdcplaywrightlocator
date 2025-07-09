import { test } from '../utils/fixture';

test('Should handle js alert type correctly', async ({ home, alert }) => {
  await test.step('Handle JS alert with OK', async () => {
    await alert.handleJsAlert();
  });
});

test('Should handle js confirm type correctly', async ({ home, alert }) => {
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

test('Should handle js prompt type correctly', async ({ home, alert }) => {
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