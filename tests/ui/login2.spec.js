import { test, expect } from '@playwright/test'
import LoginPage from '../../pages/LoginPage'
import LoginTroubleShootPage from '../../pages/LoginTroubleShooPage'
import BranchPage from '../../pages/BranchPage'
import fs from 'fs'
import { loadTestData } from '../../utils/test-data-loader'

let testData;

test.beforeAll(async () => {
    testData = loadTestData('./test-data/login.json');
    console.log('Test Data Loaded:', testData);
})
test.afterEach(async ({ page }) => {
    console.log('Test completed - closing browser');
    await page.close();
})
test('Login test', async ({ page }) => {
        const loginPage = new LoginPage(page)
        await page.goto('https://onlinesbi.sbi.bank.in/');
        await loginPage.login(testData.username, testData.password)
        await loginPage.validateInvalidUserName()
    })

test('Login troubleshooting test', async ({ page }) => {

    await page.goto('https://retail.sbi.bank.in/retail/userdrivenregdetails.htm');
    await page.reload();
    const loginTroubleShootPage = new LoginTroubleShootPage(page);
    //by value
    await loginTroubleShootPage.selectCountry(testData.troubleshoot.countryCode);
    //by label
    await loginTroubleShootPage.selectCountry(testData.troubleshoot.countryName);
    //by index
    await loginTroubleShootPage.selectCountryByIndex(testData.troubleshoot.index);
    await loginTroubleShootPage.selectFacility(testData.troubleshoot.facility);

})

test('Find branch test', async ({ page, context }) => {

    await page.goto('https://retail.sbi.bank.in/retail/userdrivenregdetails.htm');
    await page.reload();
    const loginTroubleShootPage = new LoginTroubleShootPage(page);

    // Handle new page/tab opening
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        loginTroubleShootPage.findBranchLink.click()
    ]);

    // Interact with the new page
    const branchPage = new BranchPage(newPage);
    await branchPage.searchBranch('ANGUL', 'ANGUL');
    await newPage.waitForTimeout(2000);

    // Grab the branch code from new page
    const branchCode = await newPage.getByRole('textbox', { name: 'Branch Code *' }).inputValue();
    console.log('Branch Code:', branchCode);

    await branchPage.submitButton.click();

    //switching back to previous page
    await loginTroubleShootPage.selectCountry(testData.troubleshoot.countryCode);
    await loginTroubleShootPage.selectFacility(testData.troubleshoot.facility);

});