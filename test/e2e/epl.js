
var conf = require('../../nightwatch.conf.js');

module.exports = {
  'töö': function (browser) {
    browser
      .maximizeWindow()
      .url('http://www.epl.delfi.ee')
      .assert.title('Eesti Päevaleht')
      .saveScreenshot(conf.imgpath('epl.png'))
      .assert.containsText('body', 'ARVAMUSVEEB')
      .assert.containsText('body', 'TOIMETAJA VALIK')
      .assert.elementPresent('div.col.col-24 div.col.col-24')
      .click('a[href=\'/faktikontroll\']')
      .waitForElementVisible('body')
      .assert.containsText('body', 'FAKTIKONTROLL')
      .setValue('input[name="q"]', 'kass')
      .pause(1000)
      .sendKeys('input[name="q"]',browser.Keys.ENTER)
      .pause(5000)
      .saveScreenshot(conf.imgpath('kass.png'))
      .end();
    }
  };
