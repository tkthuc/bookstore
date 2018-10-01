const utils = require('../utils/common');

const authorUtils = require('../utils/authors');

const { expect } = require('chai');

describe(' Test author creator ', () => {

    let page, browser;

    beforeEach(async () => {
        let obj =  await utils.startPage('localhost:8000/#/createAuthor', { headless: false, devtools: true });
        page = obj.page;
        browser = obj.browser;
    }, 3000);

    it('should have age in the list', async () => {
        let names = await authorUtils.getNamesOfVisibleFields(page);
        expect(names.map(name => name.trim())).to.include('Age')
    });

    afterEach( async () => {
        await browser.close();
    })
});