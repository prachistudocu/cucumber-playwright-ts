import { ICustomWorld } from '../support/custom-world';
import { clickloginButton, closeCookiesDisclaimer, openHome } from '../../pages/home';
import { loginWithEmail } from '../../pages/login';
import { Given, When } from '@cucumber/cucumber';

Given('Go to the studocu website', async function (this: ICustomWorld) {
  openHome;
  closeCookiesDisclaimer;
});

Given('I login as a fresh user', async () => {
  clickloginButton;
});

When('I enter username and password', async () => {
  loginWithEmail;
});
