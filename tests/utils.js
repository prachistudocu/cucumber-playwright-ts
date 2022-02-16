
export const waitForVisibleByDataSelector = async function (page, dataTestSelector) {
    const element = page.locator('[data-test-selector="' + dataTestSelector + '"]');
    await page.setDefaultTimeout(10000);
    await element.waitFor({ state:"visible"});
    return element;
}

export const clickOnElement = async function (page, dataTestSelector, options) {
   await page.click('[data-test-selector="' + dataTestSelector + '"]', options);
}

export const fillInInput = async function (page, dataTestSelector, value, options) {
    await page.fill('[data-test-selector="' + dataTestSelector + '"]', value, options);
}