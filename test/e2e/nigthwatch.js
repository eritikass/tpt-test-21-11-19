var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test GitHub': function (browser) {
    browser
      .maximizeWindow()
      .url('https://nightwatchjs.org/')
      .waitForElementVisible('body')
      .click('#navbar > ul > li:nth-child(4) > a')
      .click('#api-container > div.background > div > div > div.col-md-3 > div > ul > li.active > ul > li:nth-child(12) > a')
      .saveScreenshot(conf.imgpath('nightwatch.png'))
      .pause(4000)
      .end();
  }
};
