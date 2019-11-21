var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Test neti.ee': function (browser) {
    browser
      .url('http://neti.ee')
      .useXpath()
      .assert.containsText('/html/body/div[3]/div[8]/div[1]/div[2]/h2[2]/a', 'Äri ja Reisimine')
      .click('/html/body/div[3]/div[8]/div[1]/div[2]/p[2]/a[12]')
      .assert.containsText('//*[contains(@class, "vahepealkiri")]', 'Kullerteenused')
      .assert.title('NETI: /ÄRI/Postiteenused')
      .saveScreenshot(conf.imgpath('neti.png'))
      .click('/html/body/div[3]/div[8]/div[1]/ul[2]/li[7]/h3/a')
      .assert.title('Globaalsed logistikateenused – Rahvusvaheline kaubavedu | DHL Home | Eesti')
      .saveScreenshot(conf.imgpath('dhl_estonia.png'))
      .end();
    } 
  };
