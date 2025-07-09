import { test } from '../utils/fixture';

// @regression @ui
test.describe('Checkbox Interaction - Regression Tests', () => {
  test('checks a single checkbox successfully', async ({ home,checkBox }) => {
    await checkBox.checkSingleCheckbox();
  });
});

// @regression @ui
test.describe('Checkbox Interaction - Regression Tests', () => {
  test('checks multiple checkboxes successfully', async ({ home,checkBox }) => {
    await checkBox.checkMultiCheckbox();
  });
});