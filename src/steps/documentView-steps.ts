import { When } from '@cucumber/cucumber';

When('I view the document {string}', async function (string) {
  // eslint-disable-next-line no-console
  console.log(string);
});

When('I see in url {string}', async function (string) {
  // eslint-disable-next-line no-console
  console.log(string);
});
