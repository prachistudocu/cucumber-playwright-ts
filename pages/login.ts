import { clickOnElement, fillInInput, waitForVisible } from '../src/utils/utils';
import { type Page } from '@playwright/test';

const loginWithEmail = async (page: Page, userName: string, userPwd: string) => {
  await clickOnElement(page, 'email-login-button');
  await clickOnElement(page, 'email-input');
  await fillInInput(page, 'email-input', userName);
  await fillInInput(page, 'password-input', userPwd);
  await clickOnElement(page, 'submit-login-button');
  await waitForVisible(page, 'user-menu-button');
};

export { loginWithEmail };