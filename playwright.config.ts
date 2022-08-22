import {devices, type PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
    use: {
        navigationTimeout: 20000,
        trace: 'on-first-retry',
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        },
        {
            name: 'webkit',
            use: {...devices['Desktop Safari']},
        },
        {
            name: 'mobile',
            use: {
                browserName: 'webkit',
                ...devices['iPhone 8']
            }
        },
    ],
};

export default config;
