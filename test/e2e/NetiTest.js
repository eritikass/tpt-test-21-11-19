var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test GitHub': function (browser) {
    browser
      .url('https://www.neti.ee/')
      .waitForElementVisible('body')
    // .assert.containsText('body', 'dwyl.com')
    // .saveScreenshot(conf.imgpath('dwyl.png'))
     
      .assert.containsText('#main-content > div.avaleht-content.fc-headertab-content > div:nth-child(2) > h2:nth-child(3) > a','Äri ja Reisimine')
      .click('#main-content > div.avaleht-content.fc-headertab-content > div:nth-child(2) > p:nth-child(4) > a:nth-child(12)')
      .pause(1000)
      .assert.containsText('#main-content > div:nth-child(1) > ul:nth-child(5) > li:nth-child(1) > h2','Kullerteenused')
      .pause(1000)
      .assert.title('NETI: /ÄRI/Postiteenused')
      .saveScreenshot(conf.imgpath('neti.png'))
      .click('#main-content > div:nth-child(1) > ul:nth-child(5) > li:nth-child(7) > h3 > a')
      .pause(1000)
      .assert.title('Globaalsed logistikateenused – Rahvusvaheline kaubavedu | DHL Home | Eesti')
      .saveScreenshot(conf.imgpath('neti2.png'))
      .assert.urlEquals('www.logistics.dhl')
      .pause(1000)
      .end();
  }
};
