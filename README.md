## Requirements 
 node v16

 npm 8
 - npm install
 - npx playwright install chromium webkit 

## Options to run tests:
 1. npm run webkit (OR) npx run chromium
 2. npm run webkit-headless (OR) npm run chromium-headless
 3. npm run debug-mode
 4. npm run all
 5. npm run chromium tests/<test_file_name>   - to run single file in specific browser, for example in Chrome


### *General remarks:*

 - click method doesn't check element state(visibility and so on) in spite of an announcement in documentation https://playwright.dev/docs/actionability

 - await page.isEnabled('[data-test-selector="email-input"]'); // didn't work as well as
    await expect(emailInput).toBeEnabled()
 - -- force option dangerous for tests, might cause a lot of instability. When i changed click action to have force parameter, login test worked once in ~5 attempts,
