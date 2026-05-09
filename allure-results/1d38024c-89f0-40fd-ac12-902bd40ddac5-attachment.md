# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Find branch test
- Location: tests/login.spec.js:41:6

# Error details

```
Error: locator.selectOption: Test ended.
Call log:
  - waiting for locator('[name=\'IFSCReceiver\']')
    - locator resolved to <select required="" id="IFSCReceiver" name="IFSCReceiver" class="form-control form-select" onchange="setBranchName(this.options[this.selectedIndex].value,'0')">…</select>
  - attempting select option action
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
    - waiting 20ms
    2 × waiting for element to be visible and enabled
      - did not find some options
    - retrying select option action
      - waiting 100ms
    45 × waiting for element to be visible and enabled
       - did not find some options
     - retrying select option action
       - waiting 500ms

```

# Test source

```ts
  1  | class BranchPage {
  2  |     constructor(page) {
  3  |         this.page = page
  4  |         this.locationDropDown = page.locator('#stateName')
  5  |         this.branchNameDropDown = page.locator("[name='IFSCReceiver']")
  6  |         this.branchCode = page.getByRole('textbox', { name: 'Branch Code *' })
  7  |         this.submitButton = page.getByRole('button', { name: 'Submit' })
  8  |     }
  9  |     async searchBranch(location, branchName) {
  10 |         await this.locationDropDown.selectOption(location)
> 11 |         await this.branchNameDropDown.selectOption(branchName)
     |                                       ^ Error: locator.selectOption: Test ended.
  12 |        // await this.submitButton.click()
  13 |     }
  14 | }
  15 | module.exports = BranchPage
```