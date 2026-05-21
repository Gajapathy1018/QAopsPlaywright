
import { test,expect} from '../../utils/custom-fixures'

test('my custome test', async ({ page, loginPageNew, userData }) => {
    await page.goto('https://onlinesbi.sbi.bank.in/');
    await loginPageNew.login(userData.username, userData.password)
    await loginPageNew.validateInvalidUserName()

})