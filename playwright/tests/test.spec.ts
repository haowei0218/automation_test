import { test, expect } from '@playwright/test';
import { Request } from '@playwright/test';
import { defineConfig } from '@playwright/test';
import { Axios } from 'axios';
import { request } from 'http';

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
    if (testInfo.status !== testInfo.expectedStatus) {
        console.log(`did not run as expected, ended up at ${page.url()}`);
    }
})
test('@API001 test myassets page ', async ({ }) => {
    const axios = require('axios'); //要使用axios 先創建一個對象
    let res = await axios.get('https://app.myassets.dev/auth/login/');
    let apiResponse: Response;

    expect(res.status).toBe(200);
    expect(res.statusText).toBe('OK');
});

test('＠API002 test login api', async ({ }) => {
    const axios = require('axios');
    let LoginApi = await axios.get('https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcMZR0UAAAAALgPMcgHwga7gY5p8QMg1Hj-bmUv&co=aHR0cHM6Ly9hcHAubXlhc3NldHMuY29tOjQ0Mw..&hl=zh-TW&v=YurWEBlMIwR4EqFPncmQTkxQ&size=invisible&cb=i4nhwtdgs1ta').then(response => {
        if (response.status !== 200) {
            console.log("error");
        }
    })
});

test('@API003 Myfinances', async ({ }) => {
    const axios = require('axios');
    let MyfinancesButton = await axios.get('https://api.myassets.com/httpsTriggers-processPortfolioPerformanceComputeTrigger')
    expect(MyfinancesButton.status).toBe(200);
    expect(MyfinancesButton.statusText).toBe('OK');


});

test('basic test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const name = await page.innerText('.navbar__title');
    expect(name).toBe('Playwright');
});

test('my test of expect', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    expect(await page.title()).toContain('Fast and reliable end-to-end testing for modern web apps | Playwright');
    expect(await page.getAttribute('text=Get Started', 'href')).toBe('/docs/intro');
    expect(await page.isVisible('text=Learn more')).toBeTruthy();
    await page.click('text=Get Started');
    expect(await page.waitForSelector('text=System requirements')).toBeTruthy();
    expect(await page.screenshot()).toMatchSnapshot('get-started.png');
});

test('test myasset login page',async({page})=>{
    await page.goto('https://app.myassets.com/auth/login');
})