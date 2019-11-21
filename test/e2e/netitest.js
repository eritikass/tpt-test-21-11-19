var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
    function(browser) {
    browser
    .maximizeWindow()
      .url('https://www.neti.ee/')
      .waitForElementVisible('body')
      .pause(500)
      .assert.containsText('body', 'Äri ja Reisimine')
      .useXpath()
      .click('//a[@href="/cgi-bin/teema/ARI/Postiteenused/"]')
      .pause(500)
      .assert.containsText('//h2[@class="vahepealkiri"]', 'Kullerteenused')
      .saveScreenshot(config.imgpath('neti.png'))
      .click('//a[@href="http://www.dhl.ee/"]')
      .assert.title('Globaalsed logistikateenused – Rahvusvaheline kaubavedu | DHL Home | Eesti')
      .saveScreenshot(config.imgpath('dhl.png'))
      .pause(5000)
      .end()
  }
};