import { test } from '../utils/fixture';

// @smoke @ui
test.describe('Element Handling - Smoke Tests', () => {
  test('should allow user to add and delete a single item', async ({ home, addRemove }) => {
    await addRemove.addSingleElementAndDelete();
  });
});

// @regression @ui
test.describe('Element Handling - Regression Tests', () => {
  test('should allow user to add and delete multiple items', async ({ home,addRemove }) => {
    await addRemove.addMultipleElementsAndDelete(5);
  });
});