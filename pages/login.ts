import {clickOnElement, fillInInput, waitForVisible} from "../utils.ts";
import {type Page} from "@playwright/test";

const loginWithEmail = async (page: Page, userName: string, userPwd: string) => {
    await clickOnElement(page, 'email-login-button');
    await clickOnElement(page, 'email-input', {delay: 1500, force: true});
    await fillInInput(page, 'email-input', userName);
    await fillInInput(page, 'password-input', userPwd);
    await clickOnElement(page, 'submit-login-button');
    await waitForVisible(page, 'user-menu-button');
}

export {
    loginWithEmail
}
