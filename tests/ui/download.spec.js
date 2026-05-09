import { test, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'

test('Download file test', async ({ page }) => {
    const downloadPath = path.join(__dirname, 'downloads');
    if (!fs.existsSync(downloadPath)) {
        fs.mkdirSync(downloadPath);
    }

    await page.goto('https://crh.sbi.bank.in/#FORMS');
    await page.locator("button[name='DownloadFormsButton']").click();
    await page.waitForTimeout(2000); // Wait for download to start
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('a:has-text("Download")').first().click(),
        //   page.waitForEvent('download'),
        //     page.locator('a:has-text("Download")').nth(5).click()
    ]);

    const filePath = await download.path();
    const fileName = download.suggestedFilename();
    const savePath = path.join(downloadPath, fileName);

    await download.saveAs(savePath);

    expect(fs.existsSync(savePath)).toBeTruthy();
})