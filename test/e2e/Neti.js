var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Test Neti': function (browser) {
    browser   
      .url('https://www.neti.ee/');
    browser.maximizeWindow()
      .pause(1000)
      .waitForElementVisible('body')     
      .assert.containsText('body', 'Äri ja Reisimine')
      .useXpath()
      .click('//a [@href="/cgi-bin/teema/ARI/Postiteenused/"]')
      .pause(1000)
      .assert.containsText('//h2 [@class="vahepealkiri"]', 'Kullerteenused')
      .assert.title('NETI: /ÄRI/Postiteenused')
      .saveScreenshot(conf.imgpath('neti.png'))
      .click('//a[@href="http://www.dhl.ee/"]')
      .pause(1000)
      .assert.title('Globaalsed logistikateenused – Rahvusvaheline kaubavedu | DHL Home | Eesti')
      .pause(1000)
      .saveScreenshot(conf.imgpath('dhl.png'))
      .end();
  }
};
