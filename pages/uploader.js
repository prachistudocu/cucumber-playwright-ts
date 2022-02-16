import {clickOnElement, fillInInput, waitForVisibleByDataSelector} from "../tests/utils.js";


const uploaderUrl= 'https://local.studocu.com/en-gb/document/upload';

const openOrganicUploader = async function(page) {
    await page.goto(uploaderUrl)

    await waitForVisibleByDataSelector(page, 'submit-uploads-button');
    await waitForVisibleByDataSelector(page, 'the-cookie-banner');
    await waitForVisibleByDataSelector(page,'documents-drop-area');
}

const uploadAndSubmitDocument =  async function(page) {
    await page.setInputFiles('input[type="file"]', '/home/mila/Documents/Skills_Lab.pdf');
    await waitForVisibleByDataSelector(page, 'uploaded-document-name');
    await clickOnElement(page, 'submit-uploads-button');

    try {
        await page.locator('[data-test-selector="upload-more-modal"]').waitFor({state:"visible", timeout: 500});
        await clickOnElement(page, 'dismiss-upload-more-modal');
    }
    catch (error){
        console.log("No double reward modal");
    }
    await page.waitForURL('**/details**', {waitUntil:"networkidle"});
    await waitForVisibleByDataSelector(page, 'upload-step-2');
}


const fillInDocumentDetails = async function (page) {
    await selectUniversity(page)
    await selectCourse(page)

    //select category
    await page.selectOption('[data-test-selector="category-select-dropdown"]', { label:'Summaries'});

    //select year
    await page.selectOption('[data-test-selector="academic-year-select"]', { label:'2020/2021'});

    await clickOnElement(page, 'summaryContent-entireCourse-checkbox');

    // make long title and decription
    const description = 'Description is the fiction-writing mode for transmitting a mental image of the particulars of a story.'
    await fillInInput(page, 'upload-document-description', description);

    const title = 'Text messaging, or texting, is the act of composing';
    await  fillInInput(page, 'upload-document-title', title);
}

const selectUniversity = async function(page) {
    await waitForVisibleByDataSelector(page, 'uploader-institution-input');
    await page.waitForTimeout(2000);
    await clickOnElement(page,'uploader-institution-input', {delay:1000});
    await fillInInput( page, 'uploader-institution-input', 'Universiteit Leiden');
    await clickOnElement(page, 'uploader-institution-input');
    await clickOnElement(page, 'uploader-institution-result-0');
    await waitForVisibleByDataSelector(page,'institution-picker-selected-institution');
}

const selectCourse = async function(page) {
    await fillInInput(page, 'uploader-course-input', 'Chemische Biotechnologie');
    await clickOnElement(page, 'uploader-course-input');
    await waitForVisibleByDataSelector(page, 'uploader-course-result');
    await clickOnElement(page, 'uploader-course-result-0');
    await waitForVisibleByDataSelector(page, 'course-picker-edit-button');
}

export {
    openOrganicUploader,
    uploadAndSubmitDocument,
    fillInDocumentDetails
}

