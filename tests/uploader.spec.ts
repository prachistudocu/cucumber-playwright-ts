import {test} from '@playwright/test';
import {clickOnElement} from '../utils.ts';
import * as uploader_page from '../pages/uploader.ts';

const filename = process.env.DEFAULT_FILENAME;
const universityName = 'Universiteit Leiden';
const courseName = 'Organische chemie 1';
const categories = ['Lecture notes', 'Other'];
const academicYear = '2022/2023';

for (const category of categories) {
    test(`organic uploader with ${category}`, async ({page}) => {
        await uploader_page.openOrganicUploader(page);
        await uploader_page.uploadAndSubmitDocument(page, filename);
        await uploader_page.fillInDocumentDetails(page, universityName, courseName, category, academicYear);
        await clickOnElement(page, 'submit-documents', {delay: 1500});

        await page.waitForURL('**/upload/complete**');
    });
}
