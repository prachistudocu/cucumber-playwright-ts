import { clickOnElement, waitForVisible } from '../src/utils/utils';
import { config } from '../src/support/config';
import { type Page, expect } from '@playwright/test';

const url = config.BASE_URL;

const openHome = async (page: Page) => {
  await page.goto(url);
  await waitForVisible(page, 'the-cookie-banner');
};

const closeCookiesDisclaimer = async (page: Page) => {
  await clickOnElement(page, 'click-the-cookie-banner');
  await expect(await waitForVisible(page, 'the-cookie-banner')).toHaveCount(0);
};

const clickloginButton = async (page: Page, isMobile: unknown) => {
  if (isMobile) {
    await clickOnElement(page, 'content-sidebar-toggle');
    await clickOnElement(page, 'sidebar-login-button');
  } else {
    await clickOnElement(page, 'header-login-button');
  }
  await waitForVisible(page, 'authentication-modal-header');
};

export { openHome, closeCookiesDisclaimer, clickloginButton };
