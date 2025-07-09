
import { credentials } from '../utils/test-data';
import { test } from '../utils/fixture';

test('Should login using valid credential', async ({ home }) => {
  await home.loginBasicAuth(credentials.username, credentials.password);
});

