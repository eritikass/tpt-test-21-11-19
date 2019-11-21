var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test GitHub': function (browser) {
    browser
      .url('https://epl.delfi.ee');
    browser.maximizeWindow()
      .assert.title('Eesti Päevaleht')
      .pause(500)
      .useXpath()
      .saveScreenshot(conf.imgpath('epl.png'))
      .assert.containsText('//a[@data-v-d37064b2]', 'ARVAMUSVEEB')
      .pause(1000)
      //.assert.containsText('//a[@data-v-d37064b2]', 'Toimetaja valik')
      //.pause(1000)
      .click('//a[@href="/faktikontroll"]')
      .pause(1000)
      //.assert.containsText('#main > section > div:nth-child(2) > div.col.before-ad > div]', 'FAKTIKONTROLL')
      .setValue('//input[@class="header-search__input"]', 'kass')
      .pause(500)
      .click('//button[@class="header-search__button"]')
      .pause(1000)
      .saveScreenshot(conf.imgpath('kass.png'))
      .pause(1000)
      .end();



    //   .click('//a[@href="/cgi-bin/teema/ARI/Postiteenused/"]')
    //   .pause(500)
    //   .assert.containsText('//h2[@class="vahepealkiri"]', 'Kullerteenused')
    //   .pause(500)
    //   .assert.title('NETI: /ÄRI/Postiteenused')
    //   .pause(500)
    //   .saveScreenshot(conf.imgpath('Postiteenused.png'))
    //   .click('//a[@href="http://www.dhl.ee/"]')
    //   .assert.title('Globaalsed logistikateenused – Rahvusvaheline kaubavedu | DHL Home | Eesti')
    //   .saveScreenshot(conf.imgpath('DHL.png'))
    //   .end();
    //.waitForElementVisible('body')
  }
};