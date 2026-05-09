class LoginTroubleShootPage {
    constructor(page) {
        this.page = page
        this.countryDropDown = page.getByLabel('Country *')
        this.facilityDropDown = page.getByLabel('Facility Required *')
        this.findBranchLink = page.locator('#branchCD')
    }
    async selectFacility(facility) {
        await this.facilityDropDown.selectOption(facility)
    }

    async selectCountryByIndex(indexId) {
        await this.countryDropDown.selectOption({ index: indexId })
    }
    async selectCountry(country) {
        await this.countryDropDown.selectOption(country)
    }

}
module.exports = LoginTroubleShootPage;