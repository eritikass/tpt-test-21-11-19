var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
    function(browser) {
    browser
    .maximizeWindow()
      .url('https://epl.delfi.ee/')
      .waitForElementVisible('body')
      .pause(500)
      .assert.title('Eesti Päevaleht')
      .saveScreenshot(config.imgpath('Päevaleht.png'))
      .pause(500)
      .useXpath()
      .assert.containsText('//a[@data-v-d37064b2]', 'ARVAMUSVEEB')
      .click('//a [@href="/faktikontroll"]')
      .pause(1000)
      .setValue('//input[@class="header-search__input"]', 'kass')
      .click('//* [@class="header-search__button"]')
      .saveScreenshot(config.imgpath('Kass.png'))
      .pause(5000)
      .end()
  }
};