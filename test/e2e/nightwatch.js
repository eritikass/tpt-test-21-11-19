var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test GitHub': function (browser) {
    browser
      .url('https://nightwatchjs.org/');
    browser.maximizeWindow()
      .click('#navbar > ul > li:nth-child(4) > a')
      .useXpath();
    browser.moveToElement('//[@href="#assert-urlEquals"]', 10, 10)
      .pause(1000)
      .saveScreenshot(conf.imgpath('nightwatch.png'))
      .end();
    //.waitForElementVisible('body')
    //browser.moveToElement('//a[@href="#assert-urlEquals"]', 10, 10)
    //.click('//a[@href="http://www.dhl.ee/"]')
  }
};
