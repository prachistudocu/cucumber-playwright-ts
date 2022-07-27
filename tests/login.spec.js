import { test, expect } from '@playwright/test';
import {waitForVisibleByDataSelector, clickOnElement, fillInInput} from './utils.js';

test('login from landing page', async ({ page }) => {

  const url= 'https://local.studocu.com/en-gb'
  await page.goto(url);

  await waitForVisibleByDataSelector(page,'the-cookie-banner');
  await clickOnElement(page, 'header-login-button');
  await waitForVisibleByDataSelector(page, 'authentication-modal-header')
  // await page.waitForURL('**/login**');

  await clickOnElement(page, 'email-login-button');
  await clickOnElement(page, 'email-input', {delay:1500, force: true});
  await fillInInput(page, 'email-input', 'user@loc.com');
  await fillInInput(page, 'password-input', 'milatests');
  await clickOnElement(page, 'submit-login-button');
  await waitForVisibleByDataSelector(page, 'user-menu-button');

});


async function checkTitle (page, title = '', locator = 'h1') {
    const titleText = page.locator(locator);
    await expect(titleText).toHaveText(title);
}

