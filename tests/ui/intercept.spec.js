import { test, expect } from '../../utils/waitrose-fixture'

test('intercept the api call and mock the response', async ({ page, waitrosePage }) => {
    await page.goto('https://www.waitrose.com/')
    
    await waitrosePage.acceptAllCookies()
    
    await waitrosePage.searchForItem('milk')
})
