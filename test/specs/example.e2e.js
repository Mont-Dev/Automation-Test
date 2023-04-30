
const SearchPage = require('../pageobjects/login.page')
const assert = require('assert');

describe('My Search test', () => {


    //This testcase make reference to AT-1 from Test Set
    it('should serch the website', async () => {
        await SearchPage.open()
        await SearchPage.search('Focus Services')

    })
    //This testcase make reference to AT-2 from Test Set
    it('should fin the botton in the footer', async () => {

        await expect(SearchPage.nowhiring).toBeExisting()
        await expect(SearchPage.nowhiring).toHaveTextContaining(
            'Now Hiring!')

    })

    //This testcase make reference to AT-3 from Test Set
    it('The location link should be functional', async () => {
            await SearchPage.location.click();
    })


    //This testcase make reference to AT-4 from Test Set
    it('The North America link should be functional', async () => {
            assert.strictEqual(northamericahref, "#north-america");
    })



    //This testcase make reference to AT-5 from Test Set
    it('The Central America link should be functional', async () => {
            await SearchPage.centralamerica.click();
    })


    //This testcase make reference to AT-6 from Test Set
    it('should find the "El Salvador & Nicaragua" text ', async () => {
            await expect(SearchPage.salvadorandnicaragua).toHaveTextContaining(
                'Salvador & Nicaragua') 
    })

    //This testcase make reference to AT-7 from Test Set
    it('The Asia link should be functional', async () => {
        await SearchPage.asia.click();
    })

    //This testcase make reference to AT-8 from Test Set
    it('should find the "Bacolod City, Philippines" text ', async () => {
            await expect(SearchPage.bacolod).toHaveTextContaining(
                'Bacolod City, Philippines')
            browser.pause(80000);
    })

})
