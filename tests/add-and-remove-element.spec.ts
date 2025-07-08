import { test } from '../utils/fixture';

test('Should user add and delete single item', async ({ home, addRemove }) => {
  await addRemove.addSingleElementAndDelete();
});

test('Should user add and delete multiple items', async ({ home, addRemove }) => {
  await addRemove.addMultipleElementsAndDelete(5);
});
