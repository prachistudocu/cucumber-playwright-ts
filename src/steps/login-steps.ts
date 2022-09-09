import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Given } from '@cucumber/cucumber';

Given('Go to the studocu website', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
});

Given(/^I login as a fresh user$/, () => {
  return true;
});
