class BranchPage {
    constructor(page) {
        this.page = page
        this.locationDropDown = page.locator('#stateName')
        this.branchNameDropDown = page.locator("[name='IFSCReceiver']")
        this.branchCode = page.getByRole('textbox', { name: 'Branch Code *' })
        this.submitButton = page.getByRole('button', { name: 'Submit' })
    }
    async searchBranch(location, branchName) {
        await this.locationDropDown.selectOption(location)
        await this.branchNameDropDown.selectOption(branchName)
       // await this.submitButton.click()
    }
}
module.exports = BranchPage