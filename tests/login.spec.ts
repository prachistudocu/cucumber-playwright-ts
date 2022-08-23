import {test} from '@playwright/test';
import {clickOnElement, fillInInput, waitForVisible} from '../utils.ts';
import * as home_page from '../pages/home.ts';

test('login from landing page', async ({page, isMobile}) => {
    const userName = 'user@loc.com';
    const userPwd = 'milatests';
    
    await home_page.openHome(page);
    await waitForVisible(page, 'the-cookie-banner');
    
    await home_page.closeCookiesDisclaimer(page);
    
    await home_page.clickloginButton(page);
    await clickOnElement(page, 'email-login-button');
    await clickOnElement(page, 'email-input', {delay: 1500, force: true});
    await fillInInput(page, 'email-input', userName);
    await fillInInput(page, 'password-input', userPwd);
    await clickOnElement(page, 'submit-login-button');
    await waitForVisible(page, 'user-menu-button');
});
