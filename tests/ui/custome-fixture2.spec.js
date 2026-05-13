
import { test, expect } from '../../utils/my-fixtures'


test('use the custom fixture test', async ({ page, loginPage, branchPage, testDataUseForLogin, testDataUseForRegister }) => {
    await page.goto('https://onlinesbi.sbi.bank.in/');
    await loginPage.login(testDataUseForLogin.username, testDataUseForRegister.password)
    await loginPage.validateInvalidUserName()
})