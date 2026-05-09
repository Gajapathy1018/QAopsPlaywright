# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/custom-fixure.spec.js >> custom fixute test
- Location: tests/ui/custom-fixure.spec.js:5:11

# Error details

```
TypeError: _LoginPage.LoginPage is not a constructor
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import { LoginPage } from '../../pages/LoginPage'
  3  | import { customtest } from '../../utils/test-base'
  4  | 
  5  | customtest('custom fixute test', async ({ page, testDataForLogin }) => {
  6  | 
> 7  |     const loginPage = new LoginPage(page)
     |                       ^ TypeError: _LoginPage.LoginPage is not a constructor
  8  |     await page.goto('https://onlinesbi.sbi.bank.in/');
  9  |     await loginPage.login(testDataForLogin.username, testDataForLogin.password)
  10 |     await loginPage.validateInvalidUserName()
  11 | 
  12 | })
```