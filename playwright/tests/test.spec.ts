import { test, expect } from '@playwright/test';
import { Request } from '@playwright/test';
import { defineConfig } from '@playwright/test';

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
    if (testInfo.status !== testInfo.expectedStatus) {
        console.log(`did not run as expected, ended up at ${page.url()}`);
    }
})
test('basic test', async ({ page }) => {
    await page.goto('https://playwright.nodejs.cn/');
});

