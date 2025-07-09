import { test } from '../utils/fixture';

// @ui @regression
test.describe('Context Menu Interaction - Regression Test', () => {
  test('displays an alert after right-clicking the context menu box', async ({ home, contextMenu }) => {
    await contextMenu.rightClickMenu();
  });
});