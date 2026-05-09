# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: download.spec.js >> Download file test
- Location: tests/download.spec.js:5:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://crh.sbi.bank.in/#FORMS", waiting until "load"

```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test'
  2  | import fs from 'fs'
  3  | import path from 'path'
  4  | 
  5  | test('Download file test', async ({ page }) => {
  6  |     const downloadPath = path.join(__dirname, 'downloads');
  7  |     if (!fs.existsSync(downloadPath)) {
  8  |         fs.mkdirSync(downloadPath);
  9  |     }
  10 | 
> 11 |     await page.goto('https://crh.sbi.bank.in/#FORMS');
     |                ^ Error: page.goto: Test ended.
  12 |     await page.locator("button[name='DownloadFormsButton']").click();
  13 | 
  14 |     const [download] = await Promise.all([
  15 |         page.waitForEvent('download'),
  16 |         page.locator("button[name='DownloadFormsButton']").click()
  17 |     ]);
  18 | 
  19 |     const filePath = await download.path();
  20 |     const fileName = download.suggestedFilename();
  21 |     const savePath = path.join(downloadPath, fileName);
  22 |     
  23 |     await download.saveAs(savePath);
  24 |     
  25 |     expect(fs.existsSync(savePath)).toBeTruthy();
  26 | })
```