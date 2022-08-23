import {test} from '@playwright/test';
import {clickOnElement, fillInInput, waitForVisible} from '../utils.ts';

test('login from landing page', async ({page, isMobile}) => {
    const url = 'https://local.studocu.com/en-gb';
    const userName = 'user@loc.com';
    const userPwd = 'milatests';
    await page.goto(url);

    await waitForVisible(page, 'the-cookie-banner');
    if(isMobile){
        await clickOnElement(page, 'content-sidebar-toggle');
        await clickOnElement(page, 'sidebar-login-button');
    } else {
        await clickOnElement(page, 'header-login-button');
    }
    await waitForVisible(page, 'authentication-modal-header');

    await clickOnElement(page, 'email-login-button');
    await clickOnElement(page, 'email-input', {delay: 1500, force: true});
    await fillInInput(page, 'email-input', userName);
    await fillInInput(page, 'password-input', userPwd);
    await clickOnElement(page, 'submit-login-button');
    await waitForVisible(page, 'user-menu-button');
});
