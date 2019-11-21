var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Test NETI': function (browser) {
    browser
      .url('https://www.neti.ee/')
      .waitForElementVisible('body')
      //.maximizeWindow()
      .assert.containsText('body', 'Äri ja Reisimine')
      .click('a[href=\'/cgi-bin/teema/ARI/\']')
      .pause(2000)
      .click('a[href=\'/cgi-bin/teema/ARI/Postiteenused/\']')
      .waitForElementVisible('body')
      .assert.containsText('div#page', 'Kullerteenused')
      .pause(750)
      .assert.title('NETI: /ÄRI/Postiteenused')
      .pause(750)
      .saveScreenshot(conf.imgpath(browser) + 'neti-test.png')
      .pause(500)
      .click('a[href=\'http://www.dhl.ee/\']')
      .waitForElementVisible('body')
      .assert.title('Globaalsed logistikateenused – Rahvusvaheline kaubavedu | DHL Home | Eesti')
      .saveScreenshot(conf.imgpath(browser) + 'neti-test.png')
      .waitForElementVisible('body')
      .assert.urlEquals('https://www.logistics.dhl/ee-et/home.html')
      .pause(2000)
      .end();
  }
};