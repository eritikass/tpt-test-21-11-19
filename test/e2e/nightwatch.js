var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Nightwatch': function (browser) {
    browser   
      .url('https://nightwatchjs.org/');
    browser.maximizeWindow()      
      .waitForElementVisible('body')
      .pause(500)
      .click('#navbar > ul > li:nth-child(4) > a')
      .pause(1000)
      .click('#api-container > div.background > div > div > div.col-md-3 > div > ul > li.active > ul > li:nth-child(12)>a')
      .pause(500)
      .saveScreenshot(conf.imgpath('nightwatch.png'))
      .end();
  }
};