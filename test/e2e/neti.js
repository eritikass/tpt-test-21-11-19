
var conf = require('../../nightwatch.conf.js');

module.exports = {
  'töö': function (browser) {
    browser
      .url('http://www.neti.ee')
      .waitForElementVisible('body')
      .assert.containsText('body', 'Äri ja Reisimine')
      .click('a[href=\'/cgi-bin/teema/ARI/\']')
      .pause(1000)
      .click('a[href=\'/cgi-bin/teema/ARI/Postiteenused/\']')
      .pause(1000)
      .waitForElementVisible('body')
      .assert.containsText('body', 'Kullerteenused')
      .assert.title('NETI: /ÄRI/Postiteenused')
      .saveScreenshot(conf.imgpath('neti.png'))
      .click('a[href=\'http://www.dhl.ee/\']')
      .waitForElementVisible('body')
      .assert.title('Globaalsed logistikateenused – Rahvusvaheline kaubavedu | DHL Home | Eesti')
      .saveScreenshot(conf.imgpath('dhl.png'))
      .end();
    }
  };
