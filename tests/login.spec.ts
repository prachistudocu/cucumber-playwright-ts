import {test} from '@playwright/test';
import {clickOnElement, fillInInput, waitForVisible} from '../utils.ts';
import * as home_page from '../pages/home.ts';
import * as authentication_modal from '../pages/login.ts';

test('login from landing page', async ({page, isMobile}) => {
    const userName = 'user@loc.com';
    const userPwd = 'milatests';
    
    await home_page.openHome(page);
    await waitForVisible(page, 'the-cookie-banner');
    
    await home_page.closeCookiesDisclaimer(page);
    await home_page.clickloginButton(page);
    await authentication_modal.loginWithEmail(page, userName, userPwd);
});
