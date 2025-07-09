import { test } from '../utils/fixture';

test('Should display alert after right-click on context menu box', async ({ home, contextMenu }) => {
    await contextMenu.rightClickMenu();
});
