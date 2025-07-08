import { checkboxPage } from '../pages/checkbox-page';
import { test } from '../utils/fixture';

test('Should user check single checkbox', async ({ checkBox }) => {
    await checkBox.checkSingleCheckbox();
});

test('Should user check multiple checkboxes', async({checkBox}) => {
    await checkBox.checkMultiCheckbox();
});