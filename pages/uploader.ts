import {clickOnElement, fillInInput, waitForVisible} from "../utils.ts";
import {type Page} from "@playwright/test";


const uploaderUrl = 'https://local.studocu.com/en-gb/document/upload';

const openOrganicUploader = async (page: Page) => {
    await page.goto(uploaderUrl)

    await waitForVisible(page, 'submit-uploads-button');
    await waitForVisible(page, 'the-cookie-banner');
    await waitForVisible(page, 'documents-drop-area');
}

const uploadAndSubmitDocument = async (page: Page) => {
    await page.setInputFiles('input[type="file"]', 'Atomic_number.pdf');
    await waitForVisible(page, 'uploaded-document-name');
    await clickOnElement(page, 'submit-uploads-button');

    await page.waitForURL('**/details**', {waitUntil: "networkidle"});
    await waitForVisible(page, 'upload-step-2');
}


const fillInDocumentDetails = async (page: Page, categoryName: string) => {
    const description = 'Description is the fiction-writing mode for transmitting a mental image of the particulars of a story.';
    const title = 'Text messaging, or texting, is the act of composing';

    await selectUniversity(page);
    await selectCourse(page);
    await selectCategory(page, categoryName);

    //select year
    await page.selectOption('[data-test-selector="academic-year-select"]', {label: '2020/2021'});

    if (categoryName === 'Summaries') {
        await clickOnElement(page, 'summaryContent-entireCourse-checkbox');
    }

    // make long title and description
    await fillInInput(page, 'upload-document-description', description);
    await fillInInput(page, 'upload-document-title', title);
}

const selectUniversity = async (page: Page) => {
    await waitForVisible(page, 'uploader-institution-input');
    await page.waitForTimeout(2500);
    await clickOnElement(page, 'uploader-institution-input', {delay: 1000});
    await fillInInput(page, 'uploader-institution-input', 'Universiteit Leiden');
    await clickOnElement(page, 'uploader-institution-input');
    await clickOnElement(page, 'uploader-institution-result-0');
    await waitForVisible(page, 'institution-picker-selected-institution');
}

const selectCourse = async (page: Page) => {
    await fillInInput(page, 'uploader-course-input', 'Organische Chemie');
    await clickOnElement(page, 'uploader-course-input');
    await waitForVisible(page, 'uploader-course-results');
    await clickOnElement(page, 'uploader-course-result-0');
    await waitForVisible(page, 'course-picker-edit-button');
}

const selectCategory = async (page: Page, categoryName: string) => {
    await page.selectOption('[data-test-selector="category-select-dropdown"]', {label: categoryName});
}

export {
    openOrganicUploader,
    uploadAndSubmitDocument,
    fillInDocumentDetails
}

