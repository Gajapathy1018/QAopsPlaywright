# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/download.spec.js >> Download file test
- Location: tests/ui/download.spec.js:5:5

# Error details

```
TypeError: page.$(...).scrollIntoViewIfNeeded is not a function
```

```
Error: page.$: Test ended.
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e9]:
    - button "Contact Us" [ref=e10] [cursor=pointer]:
      - generic [ref=e12]: Contact Us
    - generic [ref=e13]:
      - img "Image" [ref=e17]
      - generic "Message" [ref=e19]:
        - generic [ref=e22]:
          - combobox "Message" [ref=e23] [cursor=pointer]: English
          - textbox: "1"
          - img
          - group
  - generic [ref=e26]:
    - img "Image" [ref=e30]
    - generic [ref=e32]:
      - button "FAQs" [ref=e33] [cursor=pointer]:
        - generic [ref=e35]: FAQs
      - generic [ref=e37]: "|"
      - button "Download Forms" [ref=e38] [cursor=pointer]:
        - generic [ref=e40]: Download Forms
      - generic [ref=e42]: "|"
      - button "Report Unauthorised Transaction" [ref=e43] [cursor=pointer]:
        - generic [ref=e45]: Report Unauthorised Transaction
    - generic "On clicking this button, you will be redirected to the NPCI website." [ref=e48]:
      - button "NPCI" [ref=e49] [cursor=pointer]:
        - img "NPCI" [ref=e53]
  - generic [ref=e59]:
    - generic [ref=e61]:
      - generic [ref=e62]:
        - generic [ref=e65]: Welcome to SBI !
        - generic [ref=e68]: Login to raise your Request and Complaint
      - img "Image" [ref=e72]
    - generic [ref=e73]:
      - generic [ref=e76]: Login Using Mobile Number
      - generic [ref=e77]:
        - generic "Message" [ref=e80]:
          - generic [ref=e82]:
            - generic: Mobile Number*
            - generic [ref=e83]:
              - textbox "Mobile Number*" [ref=e84]
              - group:
                - generic: Mobile Number*
        - generic [ref=e86]:
          - generic [ref=e87]:
            - img "CAPTCHA" [ref=e89]
            - generic [ref=e90]:
              - button [ref=e91] [cursor=pointer]:
                - img [ref=e92]
              - button [ref=e94] [cursor=pointer]:
                - img [ref=e95]
          - generic [ref=e99]:
            - generic: Captcha Verification*
            - generic [ref=e100]:
              - textbox "Captcha Verification*" [ref=e101]
              - group:
                - generic: Captcha Verification*
      - button "Login" [ref=e104] [cursor=pointer]:
        - generic [ref=e106]: Login
      - generic [ref=e107]:
        - img "Image" [ref=e110]
        - generic [ref=e112]: State Bank of India never asks for your OTP/user id / password / pin no. through phone call / SMSes / e-mails. If you come across any such instances, please report on 1800 1111 09 (Unauthorized Transaction Helpline) or through e-mail to the following address unauthorisedtransaction@sbi.co.in
  - generic [ref=e115]:
    - generic [ref=e118]: "Copyright State Bank of India (APM Id : APP07161)"
    - generic [ref=e121]: Site best viewed at 1420 x 768 resolution in Edge, Mozilla 40 +, Google Chrome 45 +
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import fs from 'fs'
  3  | import path from 'path'
  4  | 
  5  | test('Download file test', async ({ page }) => {
  6  |     const downloadPath = path.join(__dirname, 'downloads');
  7  |     if (!fs.existsSync(downloadPath)) {
  8  |         fs.mkdirSync(downloadPath);
  9  |     }
  10 | 
  11 |     await page.goto('https://crh.sbi.bank.in/#FORMS');
  12 |     //await page.locator("button[name='DownloadFormsButton']").click();
> 13 |     await page.$("button[name='DownloadFormsButton']").scrollIntoViewIfNeeded();
     |                ^ Error: page.$: Test ended.
  14 |     await page.waitForTimeout(2000); // Wait for download to start
  15 |     const [download] = await Promise.all([
  16 |         page.waitForEvent('download'),
  17 |         page.locator('a:has-text("Download")').first().click(),
  18 |         //   page.waitForEvent('download'),
  19 |         //     page.locator('a:has-text("Download")').nth(5).click()
  20 |     ]);
  21 | 
  22 |     const filePath = await download.path();
  23 |     const fileName = download.suggestedFilename();
  24 |     const savePath = path.join(downloadPath, fileName);
  25 | 
  26 |     await download.saveAs(savePath);
  27 | 
  28 |     expect(fs.existsSync(savePath)).toBeTruthy();
  29 | })
```