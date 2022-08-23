import {test} from '@playwright/test';
import {clickOnElement, fillInInput, waitForVisible} from '../utils.ts';
import * as home_page from '../pages/home.ts';
import * as authentication_modal from '../pages/login.ts';

const userName = process.env.USERNAME;
const userPwd = process.env.PASSWORD;

test('login from landing page', async ({page, isMobile}) => {
    await home_page.openHome(page);
    await waitForVisible(page, 'the-cookie-banner');
    
    await home_page.closeCookiesDisclaimer(page);
    await home_page.clickloginButton(page, isMobile);
    await authentication_modal.loginWithEmail(page, userName, userPwd);
});
