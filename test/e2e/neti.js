var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Test 1': function (browser) {
    browser
      .maximizeWindow()
      .url('http://neti.ee')
      .pause(1000)
      .waitForElementVisible('body')
      .assert.containsText('body', 'Äri ja Reisimine')
      .useXpath()
      .click('//a[@href="/cgi-bin/teema/ARI/Postiteenused/"]')
      .pause(1000)
      .useCss()
      .assert.containsText('body', 'Kullerteenused')
      .assert.title('NETI: /ÄRI/Postiteenused')
      .saveScreenshot(conf.imgpath('neti.png'))
      .pause(100)
      .useXpath()
      .click('//a[@href="http://www.dhl.ee/"]')
      .pause(1000)
      .useCss()
      .assert.title('Globaalsed logistikateenused – Rahvusvaheline kaubavedu | DHL Home | Eesti')
      .pause(100)
      .saveScreenshot(conf.imgpath('dhl.png'))
      .pause(1000)
      .end();
  }
};
