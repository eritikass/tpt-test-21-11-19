var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
    function(browser) {
    browser
    .maximizeWindow()
      .url('https://nightwatchjs.org/')
      .waitForElementVisible('body')
      .pause(500)
      .click('#navbar > ul > li:nth-child(4) > a')
      .pause(1000)
      .click('#api-container > div.background > div > div > div.col-md-3 > div > ul > li.active > ul > li:nth-child(12)>a')
      .pause(500)
      .saveScreenshot(config.imgpath('Nightwatch.png'))
      .pause(5000)
      .end()
  }
};