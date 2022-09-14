import { type Page } from '@playwright/test';

export const waitForVisible = async function (page: Page, dataTestSelector: string) {
  const element = page.locator('[data-test-selector="' + dataTestSelector + '"]');
  await page.setDefaultTimeout(10000);
  await element.waitFor({ state: 'visible' });
  return element;
};

export const clickOnElement = async function (page: Page, dataTestSelector: string) {
  await page.click('[data-test-selector="' + dataTestSelector + '"]');
};

export const fillInInput = async function (page: Page, dataTestSelector: string, value: string) {
  await page.fill('[data-test-selector="' + dataTestSelector + '"]', value);
};