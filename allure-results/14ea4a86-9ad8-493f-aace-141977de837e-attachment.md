# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/download.spec.js >> Download file test
- Location: tests/ui/download.spec.js:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForEvent: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for event "download"
============================================================
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
      - button "Login" [ref=e47] [cursor=pointer]:
        - generic [ref=e49]: Login
  - generic [ref=e53]:
    - generic [ref=e56]:
      - generic [ref=e58]: Download Forms
      - generic [ref=e60]: Download and share important forms
    - generic [ref=e66]:
      - generic [ref=e71]:
        - textbox "Search for any Documents" [ref=e72]
        - img [ref=e74]
        - group
      - generic [ref=e77]:
        - generic [ref=e79]:
          - img "Image" [ref=e83]
          - link "Click here to download Nomination Claim Format" [ref=e87] [cursor=pointer]:
            - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Nomination Claim Format.pdf
            - generic [ref=e88]: Click here to download Nomination Claim Format
          - generic [ref=e90]:
            - link [ref=e93] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Nomination Claim Format.pdf
              - img [ref=e95]
            - link "Download" [ref=e99] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Nomination Claim Format.pdf
              - generic [ref=e100]: Download
          - img "Image" [ref=e104]
        - generic [ref=e106]:
          - img "Image" [ref=e110]
          - link "Click here to download Govt.Savings Scheme-Form 15 Letter of Indeminity" [ref=e114] [cursor=pointer]:
            - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Govt. Savings Scheme - Form 15 Letter of Indeminity.pdf
            - generic [ref=e115]: Click here to download Govt.Savings Scheme-Form 15 Letter of Indeminity
          - generic [ref=e117]:
            - link [ref=e120] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Govt. Savings Scheme - Form 15 Letter of Indeminity.pdf
              - img [ref=e122]
            - link "Download" [ref=e126] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Govt. Savings Scheme - Form 15 Letter of Indeminity.pdf
              - generic [ref=e127]: Download
          - img "Image" [ref=e131]
        - generic [ref=e133]:
          - img "Image" [ref=e137]
          - link "Click here to download Govt.Savings Scheme-Form 14 Letter of Disclaimer" [ref=e141] [cursor=pointer]:
            - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Govt. Savings Scheme - Form 14 Letter of Disclaimer.pdf
            - generic [ref=e142]: Click here to download Govt.Savings Scheme-Form 14 Letter of Disclaimer
          - generic [ref=e144]:
            - link [ref=e147] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Govt. Savings Scheme - Form 14 Letter of Disclaimer.pdf
              - img [ref=e149]
            - link "Download" [ref=e153] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Govt. Savings Scheme - Form 14 Letter of Disclaimer.pdf
              - generic [ref=e154]: Download
          - img "Image" [ref=e158]
        - generic [ref=e160]:
          - img "Image" [ref=e164]
          - link "Click here to download Govt. Savings Scheme-Form 13 Affidavit" [ref=e168] [cursor=pointer]:
            - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Govt. Savings Scheme - Form 13 Affidavit.pdf
            - generic [ref=e169]: Click here to download Govt. Savings Scheme-Form 13 Affidavit
          - generic [ref=e171]:
            - link [ref=e174] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Govt. Savings Scheme - Form 13 Affidavit.pdf
              - img [ref=e176]
            - link "Download" [ref=e180] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Govt. Savings Scheme - Form 13 Affidavit.pdf
              - generic [ref=e181]: Download
          - img "Image" [ref=e185]
        - generic [ref=e187]:
          - img "Image" [ref=e191]
          - link "Click here to download Govt.Savings Scheme-Form 11 Application for Settlement" [ref=e195] [cursor=pointer]:
            - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Govt. Savings Scheme - Form 11 Application for Settlement.pdf
            - generic [ref=e196]: Click here to download Govt.Savings Scheme-Form 11 Application for Settlement
          - generic [ref=e198]:
            - link [ref=e201] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Govt. Savings Scheme - Form 11 Application for Settlement.pdf
              - img [ref=e203]
            - link "Download" [ref=e207] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Govt. Savings Scheme - Form 11 Application for Settlement.pdf
              - generic [ref=e208]: Download
          - img "Image" [ref=e212]
        - generic [ref=e214]:
          - img "Image" [ref=e218]
          - link "Click here to download Declaration in case funds are settled in favour of Minor" [ref=e222] [cursor=pointer]:
            - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Declaration in case funds are settled in favour of Minor.pdf
            - generic [ref=e223]: Click here to download Declaration in case funds are settled in favour of Minor
          - generic [ref=e225]:
            - link [ref=e228] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Declaration in case funds are settled in favour of Minor.pdf
              - img [ref=e230]
            - link "Download" [ref=e234] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Declaration in case funds are settled in favour of Minor.pdf
              - generic [ref=e235]: Download
          - img "Image" [ref=e239]
        - generic [ref=e241]:
          - img "Image" [ref=e245]
          - link "Click here to download Receipt" [ref=e249] [cursor=pointer]:
            - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Receipt.pdf
            - generic [ref=e250]: Click here to download Receipt
          - generic [ref=e252]:
            - link [ref=e255] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Receipt.pdf
              - img [ref=e257]
            - link "Download" [ref=e261] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Receipt.pdf
              - generic [ref=e262]: Download
          - img "Image" [ref=e266]
        - generic [ref=e268]:
          - img "Image" [ref=e272]
          - link "Click here to download Opinion Report_Annexure D" [ref=e276] [cursor=pointer]:
            - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Opinion Report_Annexure D.pdf
            - generic [ref=e277]: Click here to download Opinion Report_Annexure D
          - generic [ref=e279]:
            - link [ref=e282] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Opinion Report_Annexure D.pdf
              - img [ref=e284]
            - link "Download" [ref=e288] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Opinion Report_Annexure D.pdf
              - generic [ref=e289]: Download
          - img "Image" [ref=e293]
        - generic [ref=e295]:
          - img "Image" [ref=e299]
          - link "Click here to download Letter of Indemnity_Annexure C" [ref=e303] [cursor=pointer]:
            - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Letter of Indemnity_Annexure C.pdf
            - generic [ref=e304]: Click here to download Letter of Indemnity_Annexure C
          - generic [ref=e306]:
            - link [ref=e309] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Letter of Indemnity_Annexure C.pdf
              - img [ref=e311]
            - link "Download" [ref=e315] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Letter of Indemnity_Annexure C.pdf
              - generic [ref=e316]: Download
          - img "Image" [ref=e320]
        - generic [ref=e322]:
          - img "Image" [ref=e326]
          - link "Click here to download Letter of Disclaimer_Annexure A" [ref=e330] [cursor=pointer]:
            - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Letter of Disclaimer_Annexure A.pdf
            - generic [ref=e331]: Click here to download Letter of Disclaimer_Annexure A
          - generic [ref=e333]:
            - link [ref=e336] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Letter of Disclaimer_Annexure A.pdf
              - img [ref=e338]
            - link "Download" [ref=e342] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Letter of Disclaimer_Annexure A.pdf
              - generic [ref=e343]: Download
          - img "Image" [ref=e347]
        - generic [ref=e349]:
          - img "Image" [ref=e353]
          - link "Click here to download Application Form" [ref=e357] [cursor=pointer]:
            - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Application Form.pdf
            - generic [ref=e358]: Click here to download Application Form
          - generic [ref=e360]:
            - link [ref=e363] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Application Form.pdf
              - img [ref=e365]
            - link "Download" [ref=e369] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Application Form.pdf
              - generic [ref=e370]: Download
          - img "Image" [ref=e374]
        - generic [ref=e376]:
          - img "Image" [ref=e380]
          - link "Click here to download Affidavit_Annexure B" [ref=e384] [cursor=pointer]:
            - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Affidavit_Annexure B.pdf
            - generic [ref=e385]: Click here to download Affidavit_Annexure B
          - generic [ref=e387]:
            - link [ref=e390] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Affidavit_Annexure B.pdf
              - img [ref=e392]
            - link "Download" [ref=e396] [cursor=pointer]:
              - /url: https://crh.sbi.bank.in/vividweb/sbi/crcfasset/files/Affidavit_Annexure B.pdf
              - generic [ref=e397]: Download
          - img "Image" [ref=e401]
  - generic [ref=e404]:
    - generic [ref=e407]: "Copyright State Bank of India (APM Id : APP07161)"
    - generic [ref=e410]: Site best viewed at 1420 x 768 resolution in Edge, Mozilla 40 +, Google Chrome 45 +
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
  11 |     await page.goto('https://crh.sbi.bank.in/#FORMS');
  12 |     await page.locator("button[name='DownloadFormsButton']").click();
  13 |     await page.waitForTimeout(2000); // Wait for download to start
  14 |     const [download] = await Promise.all([
> 15 |         page.waitForEvent('download'),
     |              ^ Error: page.waitForEvent: Test timeout of 30000ms exceeded.
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