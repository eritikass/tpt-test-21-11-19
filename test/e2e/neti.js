var conf = require('../../nightwatch.conf.js');

module.exports =
{
  'neti test': function(browser)
  {
    browser
      .url('http://neti.ee')
      .waitForElementVisible('body')
      .assert.containsText('body', 'Äri ja Reisimine')
      .pause(500)
      .click('a[href=\'/cgi-bin/teema/ARI/\']')
      .pause(500)
      .click('a[href=\'/cgi-bin/teema/ARI/Postiteenused/\']')
      .pause(500)
      .assert.containsText('body', 'Kullerteenused')
      .assert.title('NETI: /ÄRI/Postiteenused')
      .saveScreenshot(conf.imgpath('pealeht.png'))
      .click('a[href=\'http://www.dhl.ee/\']')
      .getTitle()
      .assert.title('Globaalsed logistikateenused – Rahvusvaheline kaubavedu | DHL Home | Eesti')
      .saveScreenshot(conf.imgpath('DHL.png'))
      .assert.urlContains('www.logistics.dhl')
      .pause(1000)
      .end();
  }
};