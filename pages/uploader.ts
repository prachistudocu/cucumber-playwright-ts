import { clickOnElement, fillInInput, waitForVisible } from '../src/utils/utils';
import { config } from '../src/support/config';
import { type Page } from '@playwright/test';

const uploaderUrl = config.BASE_URL + '/document/upload';

const openOrganicUploader = async (page: Page) => {
  await page.goto(uploaderUrl);

  await waitForVisible(page, 'submit-uploads-button');
  await waitForVisible(page, 'the-cookie-banner');
  await clickOnElement(page, 'click-the-cookie-banner');
  await waitForVisible(page, 'documents-drop-area');
};

const uploadAndSubmitDocument = async (page: Page, filename = 'Atomic_number.pdf') => {
  await page.setInputFiles('input[type="file"]', filename);

  await waitForVisible(page, 'uploaded-document-name');
  await clickOnElement(page, 'submit-uploads-button');

  await page.waitForURL('**/details**', { waitUntil: 'networkidle' });
  await waitForVisible(page, 'upload-step-2');
};

const fillInDocumentDetails = async (
  page: Page,
  universityName = 'Universiteit Leiden',
  courseName = 'Organische Chemie',
  categoryName = 'Lecture notes',
  academicYear = '2020/2021',
) => {
  const longDescription =
    'Description is the fiction-writing mode for transmitting a mental image of the particulars of a story.';
  const longTitle = ['Title "', '" based in the filename is too short, so it was renamed!'];

  await selectUniversity(page, universityName);
  await selectCourse(page, courseName);
  await selectCategory(page, categoryName);

  // Replace title for a longer string if too short (<15)
  await page.waitForTimeout(1000);
  const titleInputField = await waitForVisible(page, 'upload-document-title');
  const currentTitle = await titleInputField.getAttribute('value');
  if (currentTitle.length < 15) {
    await fillInInput(page, 'upload-document-title', longTitle[0] + currentTitle + longTitle[1]);
  }

  // Select year
  await page.selectOption('[data-test-selector="academic-year-select"]', { label: academicYear });

  // Select Summary content "Module"
  if (categoryName === 'Summaries') {
    await clickOnElement(page, 'summaryContent-entireCourse-checkbox');
  }

  // Fill in long description
  await fillInInput(page, 'upload-document-description', longDescription);
};

const selectUniversity = async (page: Page, universityName: string) => {
  await waitForVisible(page, 'uploader-institution-input');
  await page.waitForTimeout(2500);
  await clickOnElement(page, 'uploader-institution-input', { delay: 1000 });
  await fillInInput(page, 'uploader-institution-input', universityName);
  await clickOnElement(page, 'uploader-institution-input');
  await clickOnElement(page, 'uploader-institution-result-0');
  await waitForVisible(page, 'institution-picker-selected-institution');
};

const selectCourse = async (page: Page, courseName: string) => {
  await fillInInput(page, 'uploader-course-input', courseName);
  await clickOnElement(page, 'uploader-course-input');
  await waitForVisible(page, 'uploader-course-results');
  await clickOnElement(page, 'uploader-course-result-0');
  await waitForVisible(page, 'course-picker-edit-button');
};

const selectCategory = async (page: Page, categoryName: string) => {
  await page.selectOption('[data-test-selector="category-select-dropdown"]', {
    label: categoryName,
  });
};

export { openOrganicUploader, uploadAndSubmitDocument, fillInDocumentDetails };
