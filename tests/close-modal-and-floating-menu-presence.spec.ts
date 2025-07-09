import { test } from '../utils/fixture';

test('Should user see ad modal on page open', async ({ home, adFloat }) => {
    await adFloat.verifyModalPresenceAndClose();
});

test('Should user see floating menu upon page scroll', async ({ home, adFloat }) => {
    await adFloat.verifyFloatingMenuVisibilityOnPageScroll(5);
});