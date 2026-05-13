import { test as base } from '@playwright/test'
import LoginPage from '../pages/LoginPage'
import BranchPage from '../pages/BranchPage'

export const test = base.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    branchPage: async ({ page }, use) => {
        await use(new BranchPage(page))
    },
     testDataUseForLogin: {
        "username": "usecustomusername",
        "password": "usecustompassword",
        "troubleshoot": {
            "countryCode": "91",
            "countryName": "Albania",
            "facility": "View Rights",
            "index": 3
        }
    },
    testDataUseForRegister: {
        "password": "myregcustomepassword"
    }
})
export { expect } from '@playwright/test'