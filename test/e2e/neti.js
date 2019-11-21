var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Neti test': function (browser) {
    browser
      .url('http://neti.ee')
      .waitForElementVisible('body')
      .assert.containsText('body', 'Äri ja Reisimine')
      .useXpath()
      .click("//a[text()='Post']")
      .waitForElementVisible("//h2[text()='Kullerteenused']", 5000)
      .useCss()
      .assert.containsText('body', 'Kullerteenused')
      .assert.title('NETI: /ÄRI/Postiteenused')
      .saveScreenshot(conf.imgpath('neti.png'))
      .useXpath()
      .click("//a[text()='DHL Estonia']")
      .useCss()
      .assert.title('Globaalsed logistikateenused – Rahvusvaheline kaubavedu | DHL Home | Eesti')
      .saveScreenshot(conf.imgpath('DHL.png'))
      .end();
    }
  };
