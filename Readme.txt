Options to run tests:
 1. npx playwright test --headed --project='chromium'
 2. npx playwright test
 3. PWDEBUG=1 npx playwright test --headed



General remarks:

 - click method doesn't check element state(visibility and so on) despite announcement in documentation https://playwright.dev/docs/actionability


 - await page.isEnabled('[data-test-selector="email-input"]'); // didn't work as well as
    await expect(emailInput).toBeEnabled()

-- force option dangerous for tests, might cause a lot of instability. When i changed click action to have force parameter, login test worked once in ~5 attempts,
