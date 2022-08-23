import {devices, type PlaywrightTestConfig} from "@playwright/test";
import dotenv from 'dotenv';

dotenv.config();

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
                ...devices['iPhone 8'],
                isMobile: true
            }
        },
    ],
    reporter: [ ['html', { open: 'never' }] ]
};

export default config;
