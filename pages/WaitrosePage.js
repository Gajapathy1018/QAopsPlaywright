class WaitrosePage {
    constructor(page) {
        this.page = page;
        this.accept = page.locator('[data-testid="accept-all"]');
        this.searchBox = page.locator('input[name="search-term"]');
        this.suggestionList=page.locator('#autocomplete-suggestion')
    }

    async acceptAllCookies() {
        await this.accept.click();
    }

    async searchForItem(searchTerm = 'milk') {
        // Setup route before search
        await this.page.route(
            `https://www.waitrose.com/api/term-suggest-prod/v1/term-suggest/terms?term=${searchTerm}`,
            async (route) => {
                const response = await route.fetch();
                const json = await response.json();

                json.terms = ['cow milk','curd'];
                console.log('Mocked Response:', json);
                
                await route.fulfill({
                    response,
                    body: JSON.stringify(json)
                });
            }
        );

        // Perform search
        await this.searchBox.fill(searchTerm);
        //await this.suggestionList.waitFor(); // Wait for suggestions to appear
        await this.suggestionList.nth(0).click(); // Click on the first suggestion
        await this.page.pause();
    }


}

module.exports = WaitrosePage;
