var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Test 2': function (browser) {
    browser
      .maximizeWindow()
      .url('https://epl.delfi.ee')
      .pause(1000)
      .waitForElementVisible('body')
      .assert.title('Eesti Päevaleht')
      .saveScreenshot(conf.imgpath('paevaleht.png'))
      .assert.containsText('body', 'ARVAMUSVEEB')
      .assert.containsText('body', 'TOIMETAJA VALIK') // test that "TOIMETAJA VALIK" is present and contains at-least 2 articles
      .useXpath()
      .click('//a[@href="/faktikontroll"]')
      .pause(1000)
      .useCss()
      .assert.containsText('#main > section > div:nth-child(2)', 'FAKTIKONTROLL')
      .pause(1000)
      .setValue('#header > div.header.web-header > div.content > div.row.row-align-center.header-middle.mobile-hide > div > div.header-search > form > input.header-search__input', 'kass')
      .pause(1000)
      .click('#header > div.header.web-header > div.content > div.row.row-align-center.header-middle.mobile-hide > div > div.header-search > form > button')
      .pause(1000)
      .waitForElementVisible('body')
      .saveScreenshot(conf.imgpath('kass.png'))
      .pause(1000)
      .end();
  }
};
