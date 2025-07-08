import { addRemovePage } from '../pages/add-remove-element-page';
import { credentials } from '../utils/test-data';
import { test } from '../utils/fixture';

test('Should user add and delete single item', async ({ addRemove }) => {
  await addRemove.addSingleElementAndDelete();
});

test('Should user add and delete multiple items', async ({ addRemove }) => {
  await addRemove.addMultipleElementsAndDelete(5);
});
