import { homePage } from '../pages/home-page';
import { credentials } from '../utils/test-data';
import { test } from '../utils/fixture';

test('Should user add and delete single item', async ({ home }) => {
    await home.addSingleElementAndDelete(home);
});

test('Should user add and delete multiple items', async({home}) => {
    await home.addMultipleElementsAndDelete(home);
})
