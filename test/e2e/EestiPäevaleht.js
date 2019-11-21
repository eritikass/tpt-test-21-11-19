var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test GitHub': function (browser) {
    browser
      .maximizeWindow()
      .url('https://epl.delfi.ee/')
      .waitForElementVisible('body')
    // .assert.containsText('body', 'dwyl.com')
    // .saveScreenshot(conf.imgpath('dwyl.png'))
      .assert.title('Eesti Päevaleht')
      .saveScreenshot(conf.imgpath('Päevaleht.png'))
      .pause(1000)
      .assert.containsText('#main','ARVAMUSVEEB')
      .pause(1000)
      .assert.containsText('#main','TOIMETAJA VALIK')
      .pause(1000)
      .assert.elementPresent('#main > div:nth-child(2) > div > div > section > div > div.col.col-8 > div > div > div:nth-child(1)')
      .pause(1000)
      .click('#main > div:nth-child(2) > div > div > section > div > div.col.col-16 > ul > li:nth-child(3)')
      .pause(2000)
      .assert.containsText('#main > section > div:nth-child(2) > div.col.before-ad','FAKTIKONTROLL')
      .setValue('#header > div.header.web-header > div.content > div.row.row-align-center.header-middle.mobile-hide > div > div.header-search > form > input.header-search__input',
        'kass')
      .click('#header > div.header.web-header > div.content > div.row.row-align-center.header-middle.mobile-hide > div > div.header-search > form > button')
      .pause(2000)
      .saveScreenshot(conf.imgpath('kass.png'))
      .end();
  }
};
