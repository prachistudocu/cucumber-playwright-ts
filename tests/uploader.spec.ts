import {test} from '@playwright/test';
import {clickOnElement} from '../utils.ts';
import * as uploader_page from '../pages/uploader.ts';

const categories = ['Lecture notes', 'Other'];

for (const category of categories) {
    test(`organic uploader with ${category}`, async ({page}) => {
        await uploader_page.openOrganicUploader(page);
        await uploader_page.uploadAndSubmitDocument(page);
        await uploader_page.fillInDocumentDetails(page, category);
        await clickOnElement(page, 'submit-documents', {delay: 1500});

        await page.waitForURL('**/upload/complete**');
    });
}
