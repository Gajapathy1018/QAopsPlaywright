import { test as base } from '@playwright/test'
import LoginPage from '../pages/LoginPage'
import LoginTroubleShootPage from '../pages/LoginTroubleShooPage'



export const test =  base.extend({
    loginPageNew: async ({ page}, use ) => {
        await use(new LoginPage(page))
    },
    loginTroubleShootPageNewNew: async ({ page}, use ) => {
        await use(new LoginTroubleShootPage(page))
    },
    userData: {
        "username": "my_customusername",
        "password": "my_custompassword"
    }

})   
export { expect } from '@playwright/test'
