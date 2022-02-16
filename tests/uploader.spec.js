import { test, expect } from '@playwright/test';
import { clickOnElement } from './utils.js';
import * as uploader_page from '../pages/uploader.js';

test('organic uploader', async ({ page }) => {
    await uploader_page.openOrganicUploader(page);
    await uploader_page.uploadAndSubmitDocument(page);
    await uploader_page.fillInDocumentDetails(page);
    await clickOnElement(page, 'submit-documents');

    // await waitForVisibleByDataSelector(page, 'upload-step-3');
});




