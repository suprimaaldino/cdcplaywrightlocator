import { test } from '../utils/fixture';

// @ui @regression
test.describe('Drag and Drop Interaction - Regression Test', () => {
  test('drags Box A into Box B successfully', async ({ home,dragDropdown }) => {
    await dragDropdown.dragAndDrop();
  });
});

// @ui @regression
test.describe('Dropdown Selection - Regression Test', () => {
  test('selects options 1 and 2 from dropdown menu', async ({ home,dragDropdown }) => {
    await dragDropdown.selectOption();
  });
});