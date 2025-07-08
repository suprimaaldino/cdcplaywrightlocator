import { test } from '../utils/fixture';

test('Should reveal first name and profile link upon image hover', async ({home, hoverSlider }) => {
  await test.step('Hover over first avatar and verify redirection', async () => {
    await hoverSlider.hoverFirstAvatarImage();
  });
});

test('Should reveal second name and profile link upon image hover', async ({home,  hoverSlider }) => {
  await test.step('Hover over second avatar and verify redirection', async () => {
    await hoverSlider.hoverSecondAvatarImage();
  });
});

test('Should reveal third name and profile link upon image hover', async ({home,  hoverSlider }) => {
  await test.step('Hover over third avatar and verify redirection', async () => {
    await hoverSlider.hoverThirdAvatarImage();
  });
});

test('Should be able to move the slider to 2.5', async ({home, hoverSlider }) => {
  await test.step('Go to slider page and move 5 steps to the right (0.5 × 5 = 2.5)', async () => {
    await hoverSlider.moveTheSlider();
  });
});