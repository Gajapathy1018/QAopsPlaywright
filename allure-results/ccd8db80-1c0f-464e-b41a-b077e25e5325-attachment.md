# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login test
- Location: tests/login.spec.js:19:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Continue to Login' })
    - locator resolved to <a class="login_button" href="javascript:void(0);" aria-label="Continue to Login" onclick="fnShowContent('errorCode','english')">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed

```

# Test source

```ts
  1  | class LoginPage {
  2  |     constructor(page) {
  3  |         this.page = page
  4  |         this.loginPersonalLink = page.getByRole('link', { name: 'Login to Personal Banking' })
  5  |         this.continueToLoginButton = page.getByRole('link', { name: 'Continue to Login' })
  6  |         this.userName = page.getByRole('textbox', { name: 'userName' })
  7  |         this.password = page.getByRole('textbox', { name: 'Password' })
  8  |         this.radioAudioCaptionButton = page.getByRole('radio', { name: 'Audio Captcha' })
  9  |         this.loginButton = page.getByRole('button', { name: 'Login' })
  10 |     }
  11 | 
  12 |     async login(username, password) {
  13 |         await this.loginPersonalLink.click()
> 14 |         await this.continueToLoginButton.click()
     |                                          ^ Error: locator.click: Target page, context or browser has been closed
  15 |         await this.userName.fill(username)
  16 |         await this.password.fill(password)
  17 |         await this.radioAudioCaptionButton.check()
  18 |         await this.loginButton.click()
  19 |     }
  20 |     async validateInvalidUserName() {
  21 |         await this.page.on('dialog', async dialog => {
  22 |             await this.page.pause()
  23 |             await dialog.accept()
  24 |         })
  25 |     }
  26 | }
  27 | module.exports = LoginPage
```