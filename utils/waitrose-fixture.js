import { test as base } from '@playwright/test'
import WaitrosePage from '../pages/WaitrosePage'

export const test = base.extend({
    waitrosePage: async ({ page }, use) => {
        await use(new WaitrosePage(page))
    }
   
})
export { expect } from '@playwright/test'