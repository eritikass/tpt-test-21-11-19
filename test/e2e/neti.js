var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Neti.ee test': function (browser) {
    browser
      .url('http://neti.ee')
      .waitForElementVisible('body')
      .useXpath()
      .assert.containsText('//*[@id="main-content"]/div[1]/div[2]/h2[2]', 'Äri ja Reisimine')
      .useXpath().click("//*[contains(text(), 'Äri ja Reisimine')]")
      .useXpath().click("//*[contains(text(), 'Postiteenused')]")
      .assert.containsText('//*[@id="main-content"]/div[1]/ul[2]/li[1]/h2', 'Kullerteenused')
      .assert.title('NETI: /ÄRI/Postiteenused')
      .saveScreenshot(conf.imgpath('neti_ee.png'))
      .useXpath().click("//*[contains(text(), 'DHL Estonia')]")
      .assert.title('Globaalsed logistikateenused – Rahvusvaheline kaubavedu | DHL Home | Eesti')
      .end();
    }
    
  };