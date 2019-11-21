var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Test Eesti Päevaleht': function (browser) {
    browser
      .url('https://epl.delfi.ee/')
      .waitForElementVisible('body')
      .maximizeWindow()
      .assert.title('Eesti Päevaleht')
      .pause(1000)
      .saveScreenshot(conf.imgpath(browser) + 'eesti-paevaleht-test.png')
      //SEE EI TÖÖTANUD MUL -> .assert.elementPresent('//a[contains (@href, \'/arvamus\') and text()=\'ARVAMUSVEEB\']')
      .assert.containsText('body', 'ARVAMUSVEEB')
      .pause(1000)
      .assert.containsText('body', 'TOIMETAJA VALIK')
      .pause(1000)
      .assert.elementPresent('div.col.col-24 div.col.col-24')
      .pause(250)
      //SEE KA -> .click('xpath','//a[contains (@href, \'/faktikontroll\') and text()=\'FAKTIKONTROLL\']')
      .pause(250)
      .click('a[href=\'/faktikontroll\']')
      .pause(2500)
      .setValue('input.header-search__input', 'kass')
      .pause(1000)
      .click('button.header-search__button')
      .waitForElementVisible('body')
      .pause(250)
      .saveScreenshot(conf.imgpath(browser) + 'eesti-paevaleht-test.png')
      .pause(1000)
      .end();
  }
};