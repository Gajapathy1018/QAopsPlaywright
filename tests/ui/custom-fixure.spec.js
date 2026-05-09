import { expect } from '@playwright/test'
import LoginPage from '../../pages/LoginPage'
import { customtest } from '../../utils/test-base'

customtest('custom fixute test', async ({ page, testDataForLogin, testDataForRegister }) => {

    const loginPage = new LoginPage(page)
    await page.goto('https://onlinesbi.sbi.bank.in/');
    await loginPage.login(testDataForLogin.username, testDataForRegister.password)
    await loginPage.validateInvalidUserName()

})