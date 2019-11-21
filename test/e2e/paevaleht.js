var config = require('../../nightwatch.conf.js');

module.exports = { 
    'Test nr 2': function (browser) {
        browser
        .maximizeWindow()
        .url('https://epl.delfi.ee')
        .pause(500)
        .waitForElementVisible('body')
        .assert.title('Eesti Päevaleht')
        .saveScreenshot(config.imgpath('leht.png'))
        .assert.containsText('body', 'ARVAMUSVEEB')
        .assert.containsText('body', 'TOIMETAJA VALIK')
        .useXpath()
        .click('//a[@href="/faktikontroll"]')
        .pause(500)
        .useCss()
        .assert.containsText('#main > section > div:nth-child(2)', 'FAKTIKONTROLL')
        .pause(500)
        .setValue('#header > div.header.web-header > div.content > div.row.row.align-center.header-middle.mobile-hide > div > div.header-search > form > input.header-search__input', 'kass')
        .pause(500)
        .click('#header > div.header.web-header > div.content > div.header_actions-list.mobile-hide > div.header-search > form > button')
        .pause(500)
        .waitForElementVisible('body')
        .saveScreenshot(config.imgpath('kiisu.png'))
        .pause(500)
        .end();
    }
}