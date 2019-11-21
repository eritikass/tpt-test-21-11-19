var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Päevaleht': function (browser) {
    browser   
      .url('https://epl.delfi.ee/');
    browser.maximizeWindow()      
      .assert.title('Eesti Päevaleht')
      .pause(1000)
      .useXpath()
      .saveScreenshot(conf.imgpath('EPL.png'))
      .assert.containsText('//a[@data-v-d37064b2]', 'ARVAMUSVEEB')
      .pause(1000)
      .click('//a [@href="/faktikontroll"]')
      .pause(2000)
      .setValue('//input[@class="header-search__input"]', 'kass')
      .pause(2000)
      .click('//* [@class="header-search__button"]')
      .pause(2000)
      .saveScreenshot(conf.imgpath('Kass.png'))
      .pause(2000)
      .end();
  }
};
