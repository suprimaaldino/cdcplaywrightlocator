import { test } from '../utils/fixture';

// @ui @regression
test.describe('Avatar Hover Interaction - Regression Suite', () => {
  test('reveals first name and profile link on hover', async ({ home,hoverSlider }) => {
    await test.step('Hover over first avatar and verify redirection', async () => {
      await hoverSlider.hoverFirstAvatarImage();
    });
  });

  test('reveals second name and profile link on hover', async ({ home,hoverSlider }) => {
    await test.step('Hover over second avatar and verify redirection', async () => {
      await hoverSlider.hoverSecondAvatarImage();
    });
  });

  test('reveals third name and profile link on hover', async ({ home,hoverSlider }) => {
    await test.step('Hover over third avatar and verify redirection', async () => {
      await hoverSlider.hoverThirdAvatarImage();
    });
  });
});

// @ui @regression
test.describe('Slider Movement Interaction - Regression Suite', () => {
  test('moves the slider to position 2.5', async ({ home,hoverSlider }) => {
    await test.step('Go to slider page and move 5 steps to the right (0.5 × 5 = 2.5)', async () => {
      await hoverSlider.moveTheSlider();
    });
  });
});