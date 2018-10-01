const puppeteer = require('puppeteer');

module.exports = {
    startPage : async ( url, configs, pageSettings ) => {
        const browser = await puppeteer.launch(configs);
        let page = await browser.newPage();

        if(pageSettings) {
            page.emulate(pageSettings);
        }

        await page.goto(url);        

        return {browser, page};        
    }
}