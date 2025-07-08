import { test } from '../utils/fixture';

test('Should user drag box A to box B',async ({ home, dragDropdown }) => {
    await dragDropdown.dragAndDrop();
});

test('Should user select option 1 and 2 from the dropdown ',async ({ home, dragDropdown }) => {
    await dragDropdown.selectOption();
});
