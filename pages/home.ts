import {clickOnElement, waitForVisible} from "../utils.ts";
import {type Page, expect} from "@playwright/test";

const url = process.env.BASE_URL + process.env.BASE_LOCALIZATION;

const openHome = async (page: Page) => {
    await page.goto(url);
    await waitForVisible(page, 'the-cookie-banner');
}

const closeCookiesDisclaimer = async (page: Page) => {
    await clickOnElement(page, 'click-the-cookie-banner');
    await expect(await waitForVisible(page, 'the-cookie-banner')).toHaveCount(0)
}

const clickloginButton = async (page: Page, isMobile) => {
    if(isMobile){
        await clickOnElement(page, 'content-sidebar-toggle');
        await clickOnElement(page, 'sidebar-login-button');
    } else {
        await clickOnElement(page, 'header-login-button');
    }
    await waitForVisible(page, 'authentication-modal-header');
}

export {
    openHome,
    closeCookiesDisclaimer,
    clickloginButton
}
