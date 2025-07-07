import { homePage } from '../pages/home-page';
import { credentials } from '../utils/test-date';
import { test } from '../utils/fixture';

test('Should login using valid credential', async ({ home }) => {
  await home.loginBasicAuth(credentials.validUsername, credentials.validPassword);
});

test('Should user login using invalid username and password', async ({ home }) => {
  await home.loginBasicAuth(credentials.invalidUsername, credentials.invalidPassword);

})

