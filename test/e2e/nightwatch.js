var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Test 3': function (browser) {
    browser
      .maximizeWindow()
      .url('https://nightwatchjs.org/')
      .pause(1000)
      .waitForElementVisible('body')
      .click('#navbar > ul > li:nth-child(4) > a')
      .pause(1000)
      .waitForElementVisible('body')
      .click('#api-container > div.background > div > div > div.col-md-3 > div > ul > li.active > ul > li:nth-child(12) > a')
      .pause(1000)
      .saveScreenshot(conf.imgpath('nightwatch.png'))
      .pause(1000)
      .end();
  }
};
