import{test,expect} from '@playwright/test'

test('links map test', async ({ page }) => {
    await page.goto('https://www.waitrose.com/');
    await page.locator('[data-testid="accept-all"]').click();
    const links =  page.locator('a');
    console.log('Total links found:', await links.count());

     let linkMap = new Map();

    for(let i=0;i<await links.count();i++){
        const link= await links.nth(i).getAttribute('href');
        const text= await links.nth(i).innerText();
        linkMap.set(text, link);
        //console.log(`Link ${i}: ${link}`);
       // console.log(`${i}: ${text} -> ${link}`);
    }

    // You can now use linkMap for your assertions or further processing
    expect(linkMap.size).toBeGreaterThan(0);
for(let [key,value] of linkMap){
    console.log(`${key} -> ${value}`);
}
});
